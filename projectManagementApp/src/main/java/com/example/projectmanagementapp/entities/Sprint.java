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
public class Sprint {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
    @Temporal(TemporalType.DATE)
    Date start;
    int duration ;
    String description ;
    Boolean closed;

    @ManyToOne
    TableProject table;

    @OneToMany (cascade = CascadeType.ALL,mappedBy = "sprint")
    List<Card> cards;


}
