package com.example.huellitas.repository;

import DigitalArco.Backend.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

/*Anotación que evita que se instancie el repository*/
@NoRepositoryBean
public interface ProductRepository<E extends Product, ID> extends JpaRepository<E, ID> {

    // En tu repositorio
    @Query(value = "SELECT p.id, p.name, p.price, MIN(i.url) as unique_url, br.brand_name, l.province, l.department " +
            "FROM bycicle b " +
            "JOIN product p ON b.id = p.id " +
            "JOIN image i ON i.product_id = p.id " +
            "JOIN brand AS br ON br.id = p.brand_id " +
            "JOIN user u ON u.id = p.user_id JOIN location l on u.location_id = l.id " +
            "WHERE p.is_featured = true " +
            "GROUP BY  p.id, p.name " +
            "ORDER BY RAND() " +
            "LIMIT 12", nativeQuery = true)
    List<Object[]> findFeaturedBycicles();

    @Query(value = "SELECT p.id, p.name, p.price, MIN(i.url) as unique_url, br.brand_name, l.province, l.department " +
            "FROM spare_parts sp " +
            "JOIN product p ON sp.id = p.id " +
            "JOIN image i ON i.product_id = p.id " +
            "JOIN brand AS br ON br.id = p.brand_id " +
            "JOIN user u ON u.id = p.user_id JOIN location l on u.location_id = l.id " +
            "WHERE p.is_featured = true " +
            "GROUP BY  p.id, p.name " +
            "ORDER BY RAND() " +
            "LIMIT 12", nativeQuery = true)
    List<Object[]> findFeaturedSpareParts();

    @Query(value = "SELECT p.id, p.name, p.price, MIN(i.url) as unique_url, br.brand_name, l.province, l.department " +
            "FROM accesory a " +
            "JOIN product p ON a.id = p.id " +
            "JOIN image i ON i.product_id = p.id " +
            "JOIN brand AS br ON br.id = p.brand_id " +
            "JOIN user u ON u.id = p.user_id JOIN location l on u.location_id = l.id " +
            "WHERE p.is_featured = true " +
            "GROUP BY  p.id, p.name " +
            "ORDER BY RAND() " +
            "LIMIT 12", nativeQuery = true)
    List<Object[]> findFeaturedAccessories();

    @Query(value = "SELECT p.id, p.name, p.price, MIN(i.url) as unique_url, br.brand_name, l.province, l.department " +
            "FROM clothing a " +
            "JOIN product p ON a.id = p.id " +
            "JOIN image i ON i.product_id = p.id " +
            "JOIN brand AS br ON br.id = p.brand_id " +
            "JOIN user u ON u.id = p.user_id JOIN location l on u.location_id = l.id " +
            "WHERE p.is_featured = true " +
            "GROUP BY  p.id, p.name " +
            "ORDER BY RAND() " +
            "LIMIT 12", nativeQuery = true)
    List<Object[]> findFeaturedClothing();

    @Query(value = "SELECT * FROM (\n" +
            "    SELECT p.id, p.name, p.price, MIN(i.url) as unique_url, br.brand_name, l.province, l.department, c.size , ac.gender, b.wheel_size, p.creation_date\n" +
            "    FROM product p \n" +
            "    LEFT JOIN clothing c ON p.id = c.id \n" +
            "    LEFT JOIN bycicle b ON p.id = b.id \n" +
            "    LEFT JOIN spare_parts sp ON p.id = sp.id \n" +
            "    LEFT JOIN accesory ac ON p.id = ac.id \n" +
            "    JOIN image i ON i.product_id = p.id \n" +
            "    JOIN brand br ON br.id = p.brand_id \n" +
            "    JOIN user u ON u.id = p.user_id \n" +
            "    JOIN location l on u.location_id = l.id \n" +
            "    WHERE p.is_featured = true \n" +
            "    GROUP BY p.id, p.name, p.price, br.brand_name, l.province, l.department, c.size\n" +
            "\n" +
            "    UNION\n" +
            "\n" +
            "    SELECT p.id, p.name, p.price, MIN(i.url) as unique_url, br.brand_name, l.province, l.department, c.size , ac.gender,  b.wheel_size, p.creation_date\n" +
            "    FROM product p \n" +
            "    RIGHT JOIN clothing c ON p.id = c.id \n" +
            "    RIGHT JOIN bycicle b ON p.id = b.id \n" +
            "    RIGHT JOIN spare_parts sp ON p.id = sp.id \n" +
            "    RIGHT JOIN accesory ac ON p.id = ac.id \n" +
            "    JOIN image i ON i.product_id = p.id \n" +
            "    JOIN brand br ON br.id = p.brand_id \n" +
            "    JOIN user u ON u.id = p.user_id \n" +
            "    JOIN location l on u.location_id = l.id \n" +
            "    WHERE p.is_featured = true \n" +
            "    GROUP BY p.id, p.name, p.price, br.brand_name, l.province, l.department, c.size\n" +
            ") AS result\n" +
            "ORDER BY creation_date DESC\n" +
            "LIMIT 12;\n", nativeQuery = true)
    List<Object[]> findFeaturedMostRecent();

}
