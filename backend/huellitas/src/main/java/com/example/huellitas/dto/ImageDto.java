package com.example.huellitas.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ImageDto {

    private Long id;
    private String url;
    private Double imageSize;

    public ImageDto(Long id) {
        this.id = id;
    }

    public ImageDto(Long id, String url, Double imageSize) {
        this.id = id;
        this.url = url;
        this.imageSize = imageSize;
    }

    public ImageDto() {
    }
/*
    public Long getIdAsLong() {
        return Long.parseLong(id);
    }

 */
}
