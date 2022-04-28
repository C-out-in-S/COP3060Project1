package com.example.ginfotoyou.auth.models;

import com.example.ginfotoyou.models.Users;
import lombok.Data;

@Data
public class FirebaseUser {
    private String uid;
    private String name;
    private String issuer;
    private String picture;
    private String email;
    private boolean emailVerified;
    private Users user;

}
