package com.example.projectmanagementapp.repositories;

import com.example.projectmanagementapp.entities.Role;
import com.example.projectmanagementapp.entities.Sprint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SprintRepository extends JpaRepository<Sprint,Long> {
}
