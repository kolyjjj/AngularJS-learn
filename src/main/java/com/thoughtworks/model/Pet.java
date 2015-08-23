package com.thoughtworks.model;

public class Pet {
    public String name;
    public Gender gender;
    public String type;

    public Pet(String name, Gender gender, String type) {
        this.name = name;
        this.gender = gender;
        this.type = type;
    }
}
