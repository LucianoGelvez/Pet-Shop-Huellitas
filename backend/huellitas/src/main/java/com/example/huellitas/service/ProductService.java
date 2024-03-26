package com.example.huellitas.service;

import com.example.huellitas.dto.ImageDto;
import com.example.huellitas.dto.ProductDto;
import com.example.huellitas.exception.BadRequestException;
import com.example.huellitas.exception.ResourceNotFoundException;
import com.example.huellitas.model.Product;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    void addProduct(Product product, List<MultipartFile> files, Long userId, Long brandId) throws BadRequestException;

    public void updateProduct(Product product, List<MultipartFile> files, Long brandId, List<ImageDto> imageDtoList) throws BadRequestException;

    void deleteProductById(Long id) throws ResourceNotFoundException;

    Optional<ProductDto> findProductById(Long id);

    List<Product> findAll();

    void deleteProduct(Long id) throws ResourceNotFoundException;
}
