package com.thoughtworks.controller;

import com.google.common.collect.Lists;
import com.thoughtworks.dto.PetDTO;
import com.thoughtworks.model.Pet;
import com.thoughtworks.repository.PetRepository;
import com.thoughtworks.transformer.PetTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        return Lists.newArrayList(petRepository.findAll());
    }

    @RequestMapping(method = RequestMethod.POST)
    public long save(@RequestBody PetDTO pet) {
        Pet savedPet = petRepository.save(PetTransformer.transform(pet));
        return savedPet.id;
    }

    @RequestMapping(value="/{id}", method = RequestMethod.PUT)
    public Pet update(@PathVariable String id, @RequestBody PetDTO pet){
        Pet one = petRepository.findOne(Long.valueOf(id));
        Pet transformedPet = PetTransformer.transform(pet);

        one.name = transformedPet.name;
        one.gender = transformedPet.gender;
        one.type = transformedPet.type;
        return petRepository.save(one);
    }
}
