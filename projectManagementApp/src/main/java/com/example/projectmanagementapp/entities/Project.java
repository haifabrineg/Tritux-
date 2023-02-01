package com.example.projectmanagementapp.entities;

import lombok.*;
import lombok.experimental.FieldDefaults;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Project {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String title ;
    String description;
    Date date ;
    Boolean closed;
    @OneToMany (cascade = CascadeType.ALL,mappedBy = "project")
    List<Role> roles;


    @OneToMany(cascade = CascadeType.ALL,mappedBy = "project")
    List<TableProject> tables;

}
