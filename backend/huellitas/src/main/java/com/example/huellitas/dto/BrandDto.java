package com.example.huellitas.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class BrandDto {

    private Long id;

    private String brandName;

    private String productType;
}
