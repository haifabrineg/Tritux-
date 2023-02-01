package com.example.projectmanagementapp.dto;

import com.example.projectmanagementapp.entities.Type;
import lombok.Data;

@Data
public class dtoCard {

    Long id;
    Type type ;
    int estimation ;
    String description;
    String realisation;
    Boolean status ;
    Long idL;
    Long ids;

}
