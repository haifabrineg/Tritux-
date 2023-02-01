package com.example.projectmanagementapp.dto;

import lombok.Data;

import java.util.List;

@Data
public class dtoCharts {
    List<String> labels;
    List<Integer> data;
}
