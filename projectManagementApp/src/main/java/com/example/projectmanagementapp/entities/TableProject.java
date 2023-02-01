package com.example.projectmanagementapp.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.util.List;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)


public class TableProject {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name ;
    @JsonIgnore
    @OneToMany (cascade = CascadeType.ALL,mappedBy = "table")
    List<Liste> lists;

    @JsonIgnore
    @ManyToOne
    Project project ;

    @JsonIgnore
    @OneToMany(fetch = FetchType.EAGER,mappedBy = "table")
    List<Sprint> sprints;

}
