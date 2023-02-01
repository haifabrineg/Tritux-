package com.example.projectmanagementapp.dto;

import lombok.Data;

import java.util.Date;

@Data
public class dtoProject {
    Long id;
    String title ;
    String description;
    Date date ;
    Boolean closed;
    String username ;
}
