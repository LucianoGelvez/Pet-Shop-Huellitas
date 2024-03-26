package com.example.huellitas.service;

import com.example.huellitas.dto.BrandDto;
import com.example.huellitas.dto.ImageDto;
import com.example.huellitas.exception.BadRequestException;
import com.example.huellitas.exception.ResourceNotFoundException;
import com.example.huellitas.model.Brand;
import com.example.huellitas.model.Product;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface BrandService {

    void addBrand(Brand brand) throws BadRequestException;
    public void updateBrand(Brand brand) throws BadRequestException;
    Optional<BrandDto> findBrandById(Long id);
    List<Brand> findAll();
    void deleteBrand(Long id) throws ResourceNotFoundException;
}
