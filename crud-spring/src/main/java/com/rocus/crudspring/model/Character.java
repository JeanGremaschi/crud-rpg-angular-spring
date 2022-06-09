package com.rocus.crudspring.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@Table(name = "character")
public class Character {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(length = 150, nullable = false)
    private String name = "";

    @Column(length = 100, nullable = false)
    private String classe = "";

    @Column(nullable = false)
    private Attributes attributes;

    @ManyToOne
    @JoinColumn(name = "id_player")
    private Player player;


}