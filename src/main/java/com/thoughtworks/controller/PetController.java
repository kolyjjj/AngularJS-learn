package com.thoughtworks.controller;

import com.google.common.collect.Lists;
import com.thoughtworks.model.Gender;
import com.thoughtworks.model.Pet;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/pets")
public class PetController {

    @RequestMapping(method = RequestMethod.GET)
    public List<Pet> list() {
        return Lists.newArrayList(new Pet("Puppy", Gender.MALE, "dog"), new Pet("Brain", Gender.FEMALE, "cat"));
    }
}
