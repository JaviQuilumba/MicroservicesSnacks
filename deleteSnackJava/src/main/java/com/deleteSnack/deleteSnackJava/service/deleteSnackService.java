package com.deleteSnack.deleteSnackJava.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class deleteSnackService {

    @Autowired
    private deleteSnackRepository deleteSnackRepository;

    public void deleteSnack(Long id) {
        deleteSnackRepository.deleteById(id);
    }
    
}
