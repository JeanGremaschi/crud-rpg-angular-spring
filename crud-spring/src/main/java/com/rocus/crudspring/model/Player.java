package com.rocus.crudspring.model;

import com.rocus.crudspring.enums.Avatar;
import com.rocus.crudspring.enums.Roles;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "player")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id = -1L;

    @Column(length = 150, nullable = false)
    private String name = "";

    @Column(nullable = false)
    private Avatar avatar = Avatar.ADVENTURER;

    @Column(nullable = false)
    private Roles role = Roles.DPS;

    @Column(length = 150, nullable = false)
    private String guild = "";

    @Column(nullable = false)
    private Long age = 0L;

    @Column(length = 300, nullable = false)
    private String description = "";

    @Column(nullable = false)
    private Long level = 0L;

    @Column(nullable = false)
    private Long points = 0L;

    @Column(nullable = false)
    private Long enerdy = 0L;

    @Column(nullable = false)
    private Long victories = 0L;

    @Column(nullable = false)
    private Long matches = 0L;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "player")
    private List<Character> characters = new java.util.ArrayList<>();

}
