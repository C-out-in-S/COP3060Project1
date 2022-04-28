package com.example.ginfotoyou.services;

import com.example.ginfotoyou.models.Interests;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class InterestService {

    public ArrayList<Interests> getInterests() throws ExecutionException, InterruptedException {
        ArrayList<Interests> interests = new ArrayList<>();

        Firestore db = FirestoreClient.getFirestore();

        ApiFuture<QuerySnapshot> future = db.collection("Interests").get();

        List<QueryDocumentSnapshot> documents = future.get().getDocuments();

        for (QueryDocumentSnapshot document : documents)
        {
            interests.add(document.toObject(Interests.class));
        }

        return interests;
    }

    public Interests getInterest(String name) throws ExecutionException, InterruptedException {
        Interests interest = new Interests();

        Firestore db = FirestoreClient.getFirestore();

        DocumentReference docRef = db.collection("Interests").document(name);

        ApiFuture<DocumentSnapshot> future = docRef.get();

        DocumentSnapshot document = future.get();

        if(document.exists())
            interest = document.toObject(Interests.class);

        return interest;
    }

}
