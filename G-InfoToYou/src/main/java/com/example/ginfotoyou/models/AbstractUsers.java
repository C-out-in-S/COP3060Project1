package com.example.ginfotoyou.models;

import com.google.cloud.Timestamp;
import com.google.cloud.firestore.annotation.DocumentId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public abstract class AbstractUsers {

    @DocumentId
    protected String UID;
    protected String appVersion;
    protected String bio;
    protected Timestamp birthDate;
    protected String email;
    protected String firstName;
    protected String lastName;
    protected String gender;
    protected String username;
    protected String password;
    protected long followerCount;
    protected long followingCount;
    protected long numOfPosts;
    // protected ArrayList<DocumentReference> interests;
    protected String phoneNum;
    protected String pfp_url;
}
