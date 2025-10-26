package com.kasiconnect.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ReviewDto {
    private Long id;
    private String comment;
    private int rating;
    private LocalDateTime createdAt;
    private Long businessId;
    private Long userId;
}
