package com.example.huellitas.repository;

import DigitalArco.Backend.domain.User;
import DigitalArco.Backend.dto.UserUpdateCreatingProductDto;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    @Transactional
    @Modifying
    @Query("UPDATE User u " + "SET u.enabled = TRUE WHERE u.email = ?1")
    int enableUser(String username);


    @Transactional
    @Modifying
    @Query(value = "UPDATE User u SET u.email = :email, u.name = :name, u.phone = :phone, u.lastname = :lastname, u.location_id = :location_id WHERE u.id = :id", nativeQuery = true)
    int updateUser(@Param("id") Long id, @Param("email") String email,
                    @Param("name") String name, @Param("phone") String phone,
                    @Param("lastname") String lastname, @Param("location_id") Long location_id);


    @Transactional
    @Modifying
    @Query(value = "UPDATE User SET phone = :newPhone WHERE id = :userId", nativeQuery = true)
    void updatePhone(@Param("newPhone") String newPhone, @Param("userId") Long userId);
/*
    @Query(value = "SELECT new DigitalArco.Backend.dto.UserUpdateCreatingProductDto(u.id, u.name, u.email, u.phone, u.location) FROM User u WHERE u.id = :userId", nativeQuery = false)
    UserUpdateCreatingProductDto findUserToCreateProduct(@Param("userId") Long userId);
*/

    @Query(value = "SELECT new DigitalArco.Backend.dto.UserUpdateCreatingProductDto(u.id, u.name, u.email, u.phone, l) FROM User u LEFT JOIN Location l ON u.location.id = l.id WHERE u.id = :userId", nativeQuery = false)
    UserUpdateCreatingProductDto findUserToCreateProduct(@Param("userId") Long userId);


}
