package com.example.huellitas.exception;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import static org.apache.logging.log4j.LogManager.getLogger;

@ControllerAdvice
public class GlobalException {
    Logger logger= getLogger(GlobalException.class);
    @ExceptionHandler (ResourceNotFoundException.class)
    public ResponseEntity<String> processRNFE(ResourceNotFoundException ex){
       logger.error(ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<String> processDIE(BadRequestException ex){
        logger.error(ex.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }

    @ExceptionHandler(NotAllowedException.class)
    public ResponseEntity<String> processNA(NotAllowedException ex){
        logger.error(ex.getMessage());
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(ex.getMessage());
    }
}
