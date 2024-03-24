package com.example.huellitas.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

    @Getter
    @Setter
    @NoArgsConstructor
    @Inheritance(strategy = InheritanceType.JOINED)
    @Entity
    public class Product {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id;

        private String name;

        private Double price;

        private String description;

        private String weight;

        private Integer rating;

        @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
        @JoinColumn(name = "product_id")
        private List<Image> imageList;

        private Boolean isEnabled = true;

        private Boolean isFeatured=true;

        @ManyToOne(fetch = FetchType.EAGER)
        @JoinColumn(name = "user_id", referencedColumnName = "id")
        private User ownerUser;

        @ManyToOne(fetch = FetchType.EAGER)
        @JoinColumn(name = "brand_id", referencedColumnName = "id")
        private Brand brand;

        private Boolean isPublished = false;


}
