package com.thoughtworks.controller;

import com.google.common.collect.Lists;
import com.thoughtworks.model.Gender;
import com.thoughtworks.model.Pet;
import com.thoughtworks.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/pets")
public class PetController {

    private PetRepository petRepository;

    @Autowired
    public PetController(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Pet> list() {
        petRepository.findAll();
        return Lists.newArrayList(new Pet("Puppy", Gender.MALE, "dog"), new Pet("Brain", Gender.FEMALE, "cat"));
    }
}
