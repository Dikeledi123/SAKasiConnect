package com.kasiconnect.dto;

import com.kasiconnect.model.Role;
import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String fullName;
    private String email;
    private Role role;
    private String location;
    private String profileImage;
}
