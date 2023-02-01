package com.example.projectmanagementapp.repositories;

import com.example.projectmanagementapp.entities.Liste;
import com.example.projectmanagementapp.entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListeRepository extends JpaRepository<Liste,Long> {
}
