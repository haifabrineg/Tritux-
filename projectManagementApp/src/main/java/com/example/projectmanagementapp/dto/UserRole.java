package com.example.projectmanagementapp.dto;

import com.example.projectmanagementapp.entities.Role;
import lombok.Data;

import java.util.List;

@Data
public class UserRole {
        Long id;
        String Username ;
        String pwd;
        List<Role> roles ;
}
