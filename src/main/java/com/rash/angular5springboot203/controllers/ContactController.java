package com.rash.angular5springboot203.controllers;

import java.util.Optional;

import com.rash.angular5springboot203.models.Contact;
import com.rash.angular5springboot203.repositories.ContactRepository;
import com.rash.angular5springboot203.services.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactController {

    @Autowired
    private ContactService contactService;
    ContactRepository contactRepository;

    @RequestMapping(method=RequestMethod.GET, value="/contacts")
    public Iterable<Contact> contact() {
        return contactService.getAllContacts();
        //return contactRepository.findAll();
    }

    @RequestMapping(method=RequestMethod.POST, value="/contacts")
    public Contact save(@RequestBody Contact contact) {
       // contactRepository.save(contact);
       contactService.addContact(contact);
        return contact;
    }

    @RequestMapping(method=RequestMethod.GET, value="/contacts/{id}")
    public Contact show(@PathVariable String id) {
        //return contactRepository.findOne(id);
        //Optional<Contact> foundContact = contactRepository.findById(id);
        Optional<Contact> foundContact = contactService.getContact(id);
        return foundContact.get();
    }

    @RequestMapping(method=RequestMethod.PUT, value="/contacts/{id}")
    public Contact update(@PathVariable String id, @RequestBody Contact contact) {
        //Contact c = contactRepository.findOne(id);
        //Optional<Contact> foundContact = contactRepository.findById(id);
        //Contact c = foundContact.get();
        //if(contact.getName() != null)
        //    c.setName(contact.getName()); 
        //if(contact.getAddress() != null)
        //    c.setAddress(contact.getAddress());
        //if(contact.getCity() != null)
        //    c.setCity(contact.getCity());
        //if(contact.getPhone() != null)
        //    c.setPhone(contact.getPhone());
        //if(contact.getEmail() != null)
        //    c.setEmail(contact.getEmail());
        //contactRepository.save(c);
        contactService.updateContact(id, contact);

        return contact;
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/contacts/{id}")
    public void delete(@PathVariable String id) {
        //Contact contact = contactRepository.findOne(id);
        //Optional<Contact> foundContact = contactRepository.findById(id);
        //Contact contact = foundContact.get();
        //contactRepository.delete(contact);
        contactService.deleteContact(id);
    }
}