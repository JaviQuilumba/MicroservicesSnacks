package com.deleteSnack.deleteSnackJava.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.deleteSnack.deleteSnackJava.service.deleteSnackService;


@RestController
@RequestMapping("/deleteSnack")
public class deleteSnackController {

    @Autowired
    private deleteSnackService deleteSnackService;

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSnack(@PathVariable Long id) {
        deleteSnackService.deleteSnack(id);
        return ResponseEntity.ok().build();
    }
    
}
