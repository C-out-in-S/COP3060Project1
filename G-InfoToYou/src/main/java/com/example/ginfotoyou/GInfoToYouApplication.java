package com.example.ginfotoyou;


import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

@SpringBootApplication
public class GInfoToYouApplication {

    public static void main(String[] args) throws IOException {

        ClassLoader loader = GInfoToYouApplication.class.getClassLoader();

        File file = new File(loader.getResource("serviceAccountKey.json").getFile());

        FileInputStream serviceAccount = new FileInputStream(file.getAbsolutePath());

        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .build();

        FirebaseApp.initializeApp(options);

        SpringApplication.run(GInfoToYouApplication.class, args);
    }

}
