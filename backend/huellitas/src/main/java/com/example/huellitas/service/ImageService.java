package com.example.huellitas.service;

import com.example.huellitas.dto.ImageDto;
import com.example.huellitas.exception.ResourceNotFoundException;
import com.example.huellitas.model.Image;

import java.util.List;
import java.util.Optional;

public interface ImageService {
    Optional<ImageDto> findProductById(Long id);

    List<Image> findAll();

    void deleteImage(Long id) throws ResourceNotFoundException;
}
