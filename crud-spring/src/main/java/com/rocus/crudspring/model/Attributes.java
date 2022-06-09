package com.rocus.crudspring.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name = "attributes")
public class Attributes {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;
    private Long hp = 0L;
    private Long mp = 0L;
    private Long strength = 0L;
    private Long resistence = 0L;
    private Long dexterity = 0L;
    private Long intelligence = 0L;
    private Long wisdom = 0L;
    private Long charisma = 0L;

}