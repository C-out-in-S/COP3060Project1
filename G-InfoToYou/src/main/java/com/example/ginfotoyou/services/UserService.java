package com.example.ginfotoyou.services;

import com.example.ginfotoyou.models.Interests;
import com.example.ginfotoyou.models.Users;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class UserService {
    public ArrayList<Users> retrieveItemsByInterest(String id) throws ExecutionException, InterruptedException {
        ArrayList<Users> list = new ArrayList<>();

        Firestore db = FirestoreClient.getFirestore();

        DocumentReference intRef = db.collection("Interests").document(id);

        ApiFuture<QuerySnapshot> future = db.collection("Users").whereEqualTo("interest", intRef).get();

        List<QueryDocumentSnapshot> documents = future.get().getDocuments();

        for (QueryDocumentSnapshot document : documents) {
            Interests interest = new Interests();

            ApiFuture<DocumentSnapshot> intFuture = intRef.get();

            DocumentSnapshot intDoc = intFuture.get();

            if (intDoc.exists())
                interest = intDoc.toObject(Interests.class);

            list.add(new Users(document.getId(), document.getString("appVersion"), document.getString("bio"), document.getTimestamp("birthdate"), document.getString("email"), document.getString("firstName"), document.getString("lastName"), document.getString("gender"), document.getString("username"), document.getString("password"), document.getLong("followerCount"), document.getLong("followingCount"), document.getLong("numOfPosts"), document.getString("phoneNum"), document.getString("pfp_url"), interest));
        }

        // Users(String id, String appVersion, String bio, Timestamp birthDate, String email, String firstName, String lastName, String gender, String username, String password, int followerCount, int followingCount, int numOfPosts, String phoneNum, String pfp_url, Interests interest)
        return list;
    }

    public boolean incrementCounter(final String id) {
        Firestore db = FirestoreClient.getFirestore();

        DocumentReference interestRef = db.collection("Users").document(id);
        interestRef.update("numOfPosts", FieldValue.increment(1));

        return true;

    }

    public int getCount(final String id) throws ExecutionException, InterruptedException {
        Firestore db = FirestoreClient.getFirestore();

        DocumentReference interestRef = db.collection("Users").document(id);

        ApiFuture<DocumentSnapshot> future = interestRef.get();

        DocumentSnapshot document = future.get();

        if(document.exists()) {
            return (int) document.get("numOfPosts");
        }
        return 0;
    }
}
