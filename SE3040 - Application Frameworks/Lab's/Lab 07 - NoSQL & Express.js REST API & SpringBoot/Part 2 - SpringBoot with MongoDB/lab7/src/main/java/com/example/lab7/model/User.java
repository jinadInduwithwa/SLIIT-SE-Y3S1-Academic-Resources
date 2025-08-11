package com.example.lab7.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String name;
    private int age;
    private String email; // Additional field example
    // Constructors, Getters, and Setters
    public User() {}
    public User(String name, int age, String email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    // Getter and setter methods for id, name, age, and email
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
}