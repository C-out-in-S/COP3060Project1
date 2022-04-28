package com.example.ginfotoyou.models;

import com.google.cloud.firestore.annotation.DocumentId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Interests {
    @DocumentId
    private String id; 
    private String name;
    private int followers;
}
