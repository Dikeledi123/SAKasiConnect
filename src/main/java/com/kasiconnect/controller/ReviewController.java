package com.kasiconnect.controller;

import com.kasiconnect.dto.ReviewDto;
import com.kasiconnect.service.ReviewService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping("/{businessId}")
    public ResponseEntity<List<ReviewDto>> getReviewsByBusinessId(@PathVariable Long businessId) {
        return ResponseEntity.ok(reviewService.getReviewsByBusinessId(businessId));
    }

    @PostMapping
    @PreAuthorize("hasRole('CLIENT')")
    public ResponseEntity<ReviewDto> createReview(@RequestBody ReviewDto reviewDto) {
        return ResponseEntity.ok(reviewService.createReview(reviewDto));
    }
}
