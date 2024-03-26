package com.example.huellitas.repository;

import com.example.huellitas.model.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Long> {

    public List<Brand>findByProductType(String productType);
}
