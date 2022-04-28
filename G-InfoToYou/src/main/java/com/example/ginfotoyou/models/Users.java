package com.example.ginfotoyou.models;

import com.google.cloud.Timestamp;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Users extends AbstractUsers {

    private Interests interest;

    public Users(String UID, String appVersion, String bio, Timestamp birthDate, String email, String firstName, String lastName, String gender, String username, String password, long followerCount, long followingCount, long numOfPosts, String phoneNum, String pfp_url, Interests interest) {
        super(UID, appVersion, bio, birthDate, email, firstName, lastName, gender, username, password, followerCount, followingCount, numOfPosts, phoneNum, pfp_url);
        this.interest = interest;
    }
}
