package com.example.lab7.repository;
import com.example.lab7.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface UserRepository extends MongoRepository<User, String> {
// Custom database queries can be defined here
}