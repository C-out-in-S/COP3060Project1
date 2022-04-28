package com.example.ginfotoyou.controllers;

import com.example.ginfotoyou.models.Users;
import com.example.ginfotoyou.services.UserService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

@RequestMapping("/api/users")
@RestController
public class UsersController {

    UserService userService;

    public UsersController(UserService userService) {
        this.userService = userService;
    }

    public ArrayList<Users> getUserItemsByCategory(@PathVariable(name="id") String id) throws ExecutionException, InterruptedException {
        return userService.retrieveItemsByInterest(id);
    }
}
