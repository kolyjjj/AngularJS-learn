package com.thoughtworks.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pet {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long id;

    public String name;
    public Gender gender;
    public String type;

    public Pet(String name, Gender gender, String type) {
        this.name = name;
        this.gender = gender;
        this.type = type;
    }
}
