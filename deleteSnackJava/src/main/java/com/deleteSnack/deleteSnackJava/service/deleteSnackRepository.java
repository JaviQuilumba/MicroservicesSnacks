package com.deleteSnack.deleteSnackJava.service;

import com.deleteSnack.deleteSnackJava.models.deleteSnackModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface deleteSnackRepository extends JpaRepository<deleteSnackModel, Long>{
    
}
