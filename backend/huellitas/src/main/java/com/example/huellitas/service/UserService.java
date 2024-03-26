package com.example.huellitas.service;

import com.example.huellitas.dto.UserDto;
import com.example.huellitas.exception.BadRequestException;
import com.example.huellitas.exception.ResourceNotFoundException;
import com.example.huellitas.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    void addUser(User user) throws BadRequestException;
    public void updateUser(User user) throws BadRequestException;
    Optional<UserDto> findUserById(Long id);
    List<User> findAll();
    void deleteUser(Long id) throws ResourceNotFoundException;
}
