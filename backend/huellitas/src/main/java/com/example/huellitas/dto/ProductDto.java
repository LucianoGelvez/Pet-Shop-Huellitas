package com.example.huellitas.dto;

import com.example.huellitas.model.Image;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;
@Getter
@Setter
@RequiredArgsConstructor
public class ProductDto {


    private Long id;

    private String name;

    private Double price;

    private String description;

    private List<Image> imageList;

    private LocalDate creationDate;

    private Boolean isEnabled;

    private Boolean isFeatured;

    private Boolean isPublished;

    private BrandDto brandDto;

    private Boolean hasInvoice;


}
