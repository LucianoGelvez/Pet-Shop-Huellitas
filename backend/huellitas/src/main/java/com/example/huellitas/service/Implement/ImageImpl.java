package com.example.huellitas.service.Implement;

import com.example.huellitas.dto.ImageFilePairDto;
import com.example.huellitas.model.Image;
import com.example.huellitas.repository.ImageRepository;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ImageImpl {
    @Autowired
    private ImageRepository imageRepository;


    public byte[] convertToWebP(byte[] originalImage) throws IOException {
        // Crea un ByteArrayInputStream con la imagen original
        ByteArrayInputStream bais = new ByteArrayInputStream(originalImage);

        // Usa ImageIO para leer la imagen original
        BufferedImage bufferedImage = ImageIO.read(bais);

        // Crea un ByteArrayOutputStream para guardar la imagen convertida
        ByteArrayOutputStream baos = new ByteArrayOutputStream();

        // Usa ImageIO para escribir la imagen convertida en formato WebP
        ImageIO.write(bufferedImage, "webp", baos);

        return baos.toByteArray();
    }
    @Async
    public void processImages(List<ImageFilePairDto> imageFilePairs) throws IOException {
        // Crear una lista para almacenar los futuros
        List<CompletableFuture<Void>> futures = new ArrayList<>();

        for (ImageFilePairDto pair : imageFilePairs) {
            Image image = pair.getImage();
            byte[] fileBytes = pair.getFile();

            // Iniciar la conversión de la imagen en un hilo separado
            CompletableFuture<Void> future = CompletableFuture.runAsync(() -> {
                String uniqueFilename = image.getUrl().substring(image.getUrl().lastIndexOf("/") + 1);
                File imageFile = new File("D:\\Trabajo\\Proyectos\\Huellitas\\images/" + uniqueFilename);
                try (OutputStream outputStream = new FileOutputStream(imageFile)) {
                    byte[] webpImage = this.convertToWebP(fileBytes);
                    outputStream.write(webpImage);
                    image.setImageSize((double) webpImage.length / (1024.0 * 1024.0));
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            });
            futures.add(future);
        }

        // Esperar a que todas las imágenes se conviertan
        CompletableFuture.allOf(futures.toArray(new CompletableFuture[0])).join();

        // Guardar todas las imágenes a la vez después de que se hayan convertido
        imageRepository.saveAll(imageFilePairs.stream().map(ImageFilePairDto::getImage).collect(Collectors.toList()));
    }
}
