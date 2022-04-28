package com.example.ginfotoyou.models;

import com.google.cloud.Timestamp;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.ArrayList;

@AllArgsConstructor
@NoArgsConstructor
public class RestUsers extends AbstractUsers {

    private ArrayList<DocumentReference> interest;

    public RestUsers(String UID, String appVersion, String bio, Timestamp birthDate, String email, String firstName, String lastName, String gender, String username, String password, long followerCount, long followingCount, long numOfPosts, String phoneNum, String pfp_url, ArrayList<DocumentReference> interest) {
        super(UID, appVersion, bio, birthDate, email, firstName, lastName, gender, username, password, followerCount, followingCount, numOfPosts, phoneNum, pfp_url);
        this.interest = interest;
    }

    public ArrayList<DocumentReference> getInterest() {
        return interest;
    }

    public void setInterest(ArrayList<String> interest) {
        Firestore db = FirestoreClient.getFirestore();
        ArrayList<DocumentReference> temp = new ArrayList<>();

        for (String i:interest) {
            temp.add(db.collection("Interests").document(i));
        }
        this.interest = temp;

    }
}
