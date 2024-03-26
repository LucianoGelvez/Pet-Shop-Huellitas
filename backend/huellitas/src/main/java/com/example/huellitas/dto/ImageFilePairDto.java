package com.example.huellitas.dto;

import com.example.huellitas.model.Image;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ImageFilePairDto {
    private Image image;
    private byte[] file;

    public ImageFilePairDto(Image image, byte[] file) {
        this.image = image;
        this.file = file;
    }
}
