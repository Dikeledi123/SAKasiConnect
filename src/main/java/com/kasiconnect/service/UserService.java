package com.kasiconnect.service;

import com.kasiconnect.dto.UserDto;
import com.kasiconnect.model.User;
import com.kasiconnect.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDto getUserById(Long id) {
        return userRepository.findById(id).map(this::convertToDto).orElseThrow(() -> new RuntimeException("User not found"));
    }

import org.springframework.security.core.context.SecurityContextHolder;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDto getUserById(Long id) {
        return userRepository.findById(id).map(this::convertToDto).orElseThrow(() -> new RuntimeException("User not found"));
    }

    public UserDto updateUser(Long id, UserDto userDto) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User currentUser = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));

        if (!currentUser.getId().equals(id)) {
            throw new RuntimeException("You are not authorized to update this user's profile");
        }

        User userToUpdate = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        userToUpdate.setFullName(userDto.getFullName());
        userToUpdate.setLocation(userDto.getLocation());
        userToUpdate.setProfileImage(userDto.getProfileImage());
        userToUpdate = userRepository.save(userToUpdate);
        return convertToDto(userToUpdate);
    }

    private UserDto convertToDto(User user) {
        UserDto dto = new UserDto();
        dto.setId(user.getId());
        dto.setFullName(user.getFullName());
        dto.setEmail(user.getEmail());
        dto.setRole(user.getRole());
        dto.setLocation(user.getLocation());
        dto.setProfileImage(user.getProfileImage());
        return dto;
    }
}
