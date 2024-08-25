package com.deleteSnack.deleteSnackJava.models;

import lombok.Data;
import jakarta.persistence.*;

import java.math.BigDecimal;

@Data
@Entity
@Table(name = "snacks")
public class deleteSnackModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private BigDecimal price;

    private String mark;

    @Column(columnDefinition = "TEXT")
    private String advert;

    @Column(columnDefinition = "TEXT")
    private String advert2;
    
}
