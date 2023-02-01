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
public class Card {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    Type type ;
    int estimation ;
    String description;
    String realisation;
    Boolean status ;

    @JsonIgnore
    @ManyToOne
    Liste liste ;


    @JsonIgnore
    @ManyToOne
    Sprint sprint ;


    @OneToMany(mappedBy = "card")
    List<Card> Carrds;

    @ManyToOne
    Card card;

    @ManyToOne
    User assignee;
}
