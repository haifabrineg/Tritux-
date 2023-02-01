package com.example.projectmanagementapp.repositories;

import com.example.projectmanagementapp.entities.TableProject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TableRepository extends JpaRepository<TableProject,Long> {
}
