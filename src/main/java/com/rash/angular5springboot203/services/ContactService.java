package com.rash.angular5springboot203.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rash.angular5springboot203.repositories.ContactRepository;
import com.rash.angular5springboot203.models.Contact;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public Iterable<Contact> getAllContacts() {
        Iterable<Contact> contacts;
        contacts = contactRepository.findAll();
        return contacts;
    }

    public Optional<Contact> getContact(String id) {
        return contactRepository.findById(id);
    }

    public Contact addContact(Contact contact) {
        return contactRepository.save(contact);
    }

    public Contact updateContact(String id, Contact contact) {
        return contactRepository.save(contact);
    }

    public void deleteContact(String id) {
        Optional<Contact> foundContact = contactRepository.findById(id);
        Contact contact = foundContact.get();
        contactRepository.delete(contact);
    }

}