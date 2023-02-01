package com.example.projectmanagementapp.dto;

import lombok.Data;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

@Data
public class dtoSprint {

    Long id;
    String name;
    Date start;
    int duration ;
    String description ;
    Boolean closed;
    Long idTable;

}
