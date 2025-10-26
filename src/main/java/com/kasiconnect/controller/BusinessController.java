package com.kasiconnect.controller;

import com.kasiconnect.dto.BusinessDto;
import com.kasiconnect.service.BusinessService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/businesses")
public class BusinessController {

    private final BusinessService businessService;

    public BusinessController(BusinessService businessService) {
        this.businessService = businessService;
    }

    @GetMapping
    public ResponseEntity<List<BusinessDto>> getAllBusinesses() {
        return ResponseEntity.ok(businessService.getAllBusinesses());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BusinessDto> getBusinessById(@PathVariable Long id) {
        return ResponseEntity.ok(businessService.getBusinessById(id));
    }

    @PostMapping
    @PreAuthorize("hasRole('WORKER')")
    public ResponseEntity<BusinessDto> createBusiness(@RequestBody BusinessDto businessDto) {
        return ResponseEntity.ok(businessService.createBusiness(businessDto));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('WORKER')")
    public ResponseEntity<BusinessDto> updateBusiness(@PathVariable Long id, @RequestBody BusinessDto businessDto) {
        return ResponseEntity.ok(businessService.updateBusiness(id, businessDto));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('WORKER')")
    public ResponseEntity<Void> deleteBusiness(@PathVariable Long id) {
        businessService.deleteBusiness(id);
        return ResponseEntity.noContent().build();
    }
}
