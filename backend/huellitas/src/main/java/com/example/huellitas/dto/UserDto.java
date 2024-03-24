package com.example.huellitas.dto;

import DigitalArco.Backend.domain.SubscriptionType;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@RequiredArgsConstructor
public class UserDto {

    private Long id;
    private String name;
    private String lastname;
    private String email;
    private String phone;
    private String phone2;

    private SubscriptionType subscriptionType;
    private String profilePictureUrl;
    private Date subscriptionExpirationDate;
    private Boolean loginFirstTime = true;
    private LocationDto location;

}
