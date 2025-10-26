package com.kasiconnect.service;

import com.kasiconnect.dto.BusinessDto;
import com.kasiconnect.model.Business;
import com.kasiconnect.model.User;
import com.kasiconnect.repository.BusinessRepository;
import com.kasiconnect.repository.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BusinessService {

    private final BusinessRepository businessRepository;
    private final UserRepository userRepository;

    public BusinessService(BusinessRepository businessRepository, UserRepository userRepository) {
        this.businessRepository = businessRepository;
        this.userRepository = userRepository;
    }

    public List<BusinessDto> getAllBusinesses() {
        return businessRepository.findAll().stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public BusinessDto getBusinessById(Long id) {
        return businessRepository.findById(id).map(this::convertToDto).orElseThrow(() -> new RuntimeException("Business not found"));
    }

    public BusinessDto createBusiness(BusinessDto businessDto) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));

        Business business = Business.builder()
                .name(businessDto.getName())
                .description(businessDto.getDescription())
                .category(businessDto.getCategory())
                .address(businessDto.getAddress())
                .phoneNumber(businessDto.getPhoneNumber())
                .imageUrl(businessDto.getImageUrl())
                .createdAt(LocalDateTime.now())
                .owner(user)
                .build();
        business = businessRepository.save(business);
        return convertToDto(business);
    }

    public BusinessDto updateBusiness(Long id, BusinessDto businessDto) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        Business business = businessRepository.findById(id).orElseThrow(() -> new RuntimeException("Business not found"));

        if (!business.getOwner().getId().equals(user.getId())) {
            throw new RuntimeException("You are not authorized to update this business");
        }

        business.setName(businessDto.getName());
        business.setDescription(businessDto.getDescription());
        business.setCategory(businessDto.getCategory());
        business.setAddress(businessDto.getAddress());
        business.setPhoneNumber(businessDto.getPhoneNumber());
        business.setImageUrl(businessDto.getImageUrl());
        business = businessRepository.save(business);
        return convertToDto(business);
    }

    public void deleteBusiness(Long id) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        Business business = businessRepository.findById(id).orElseThrow(() -> new RuntimeException("Business not found"));

        if (!business.getOwner().getId().equals(user.getId())) {
            throw new RuntimeException("You are not authorized to delete this business");
        }

        businessRepository.deleteById(id);
    }

    private BusinessDto convertToDto(Business business) {
        BusinessDto dto = new BusinessDto();
        dto.setId(business.getId());
        dto.setName(business.getName());
        dto.setDescription(business.getDescription());
        dto.setCategory(business.getCategory());
        dto.setAddress(business.getAddress());
        dto.setPhoneNumber(business.getPhoneNumber());
        dto.setImageUrl(business.getImageUrl());
        dto.setRating(business.getRating());
        dto.setCreatedAt(business.getCreatedAt());
        dto.setOwnerId(business.getOwner().getId());
        return dto;
    }
}
