package com.example.huellitas.exception;

public class BadRequestException extends Exception{
    public BadRequestException(String message) {
        super(message);
    }
}
