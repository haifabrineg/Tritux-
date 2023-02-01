package com.example.projectmanagementapp.entities;

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
public class Liste {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name ;

    @ManyToOne
    TableProject table;


    @OneToMany (cascade = CascadeType.ALL,mappedBy = "liste")
    List<Card> cards;

}
