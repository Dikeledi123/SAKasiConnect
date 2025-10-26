package com.kasiconnect.controller;

import com.kasiconnect.dto.AuthResponse;
import com.kasiconnect.dto.LoginRequest;
import com.kasiconnect.dto.RegisterRequest;
import com.kasiconnect.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        authService.register(registerRequest);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        String token = authService.login(loginRequest);
        return ResponseEntity.ok(new AuthResponse(token));
    }
}
