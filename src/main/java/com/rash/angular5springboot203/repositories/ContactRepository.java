package com.rash.angular5springboot203.repositories;

import java.util.Optional;

import com.rash.angular5springboot203.models.Contact;

import org.springframework.data.repository.CrudRepository;

public interface ContactRepository extends CrudRepository<Contact, String> { 
  
    @Override
    //Contact findOne(String id);
    Optional<Contact> findById(String id);

    @Override
    void delete(Contact deleted);
}