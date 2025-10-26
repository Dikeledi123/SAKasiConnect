package com.kasiconnect.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class BusinessDto {
    private Long id;
    private String name;
    private String description;
    private String category;
    private String address;
    private String phoneNumber;
    private String imageUrl;
    private double rating;
    private LocalDateTime createdAt;
    private Long ownerId;
}
