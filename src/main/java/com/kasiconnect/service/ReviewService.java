package com.kasiconnect.service;

import com.kasiconnect.dto.ReviewDto;
import com.kasiconnect.model.Business;
import com.kasiconnect.model.Review;
import com.kasiconnect.model.User;
import com.kasiconnect.repository.BusinessRepository;
import com.kasiconnect.repository.ReviewRepository;
import com.kasiconnect.repository.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final BusinessRepository businessRepository;
    private final UserRepository userRepository;

    public ReviewService(ReviewRepository reviewRepository, BusinessRepository businessRepository, UserRepository userRepository) {
        this.reviewRepository = reviewRepository;
        this.businessRepository = businessRepository;
        this.userRepository = userRepository;
    }

    public List<ReviewDto> getReviewsByBusinessId(Long businessId) {
        return reviewRepository.findByBusinessId(businessId).stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public ReviewDto createReview(ReviewDto reviewDto) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        Business business = businessRepository.findById(reviewDto.getBusinessId()).orElseThrow(() -> new RuntimeException("Business not found"));

        Review review = Review.builder()
                .comment(reviewDto.getComment())
                .rating(reviewDto.getRating())
                .createdAt(LocalDateTime.now())
                .business(business)
                .user(user)
                .build();
        review = reviewRepository.save(review);
        return convertToDto(review);
    }

    private ReviewDto convertToDto(Review review) {
        ReviewDto dto = new ReviewDto();
        dto.setId(review.getId());
        dto.setComment(review.getComment());
        dto.setRating(review.getRating());
        dto.setCreatedAt(review.getCreatedAt());
        dto.setBusinessId(review.getBusiness().getId());
        dto.setUserId(review.getUser().getId());
        return dto;
    }
}
