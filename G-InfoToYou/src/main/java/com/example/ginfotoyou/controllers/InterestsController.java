package com.example.ginfotoyou.controllers;

import com.example.ginfotoyou.models.Interests;
import com.example.ginfotoyou.services.InterestService;
import com.example.ginfotoyou.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

@RequestMapping("/api/interest")
@RestController
public class InterestsController {

    private InterestService interestService;
    private UserService userService;

    public InterestsController(InterestService interestService, UserService userService) {
        this.interestService = interestService;
        this.userService = userService;
    }

    @GetMapping("/")
    public ArrayList<Interests> getInterests() throws ExecutionException, InterruptedException {
        return interestService.getInterests();
    }

    @GetMapping("/{id}")
    public Interests getInterest(@PathVariable(name = "id") String id) throws ExecutionException, InterruptedException {
        return interestService.getInterest(id);
    }

    @PutMapping("update/{id}")
    public boolean updateInterest(@PathVariable String id) throws ExecutionException, InterruptedException {
        return userService.incrementCounter(id);
    }

    @GetMapping("/count/{id}")
    public int getInterestCount(@PathVariable String id) throws ExecutionException, InterruptedException {
        return userService.getCount(id);
    }
}
