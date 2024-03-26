package com.example.huellitas.service;

import com.example.huellitas.dto.BrandDto;
import com.example.huellitas.model.Brand;
import com.example.huellitas.repository.BrandRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class BrandImpl {

    @Autowired
    private final BrandRepository brandRepository;


    public List<Brand> findBrandByProductType(String productType)
    {
        return brandRepository.findByProductType(productType);
    }

    public List<Brand> findAllBrands()
    {
        return brandRepository.findAll();
    }


    public BrandDto brandToBrandDto(Brand brand){
        BrandDto brandDto = new BrandDto();
        brandDto.setBrandName(brand.getBrandName());
        brandDto.setId(brand.getId());
        return brandDto;
    }
}
