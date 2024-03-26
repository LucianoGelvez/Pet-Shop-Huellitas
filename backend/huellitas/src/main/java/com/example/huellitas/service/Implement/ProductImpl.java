package com.example.huellitas.service.Implement;

import com.example.huellitas.dto.BrandDto;
import com.example.huellitas.dto.ImageDto;
import com.example.huellitas.dto.ImageFilePairDto;
import com.example.huellitas.dto.ProductDto;
import com.example.huellitas.exception.BadRequestException;
import com.example.huellitas.exception.ResourceNotFoundException;
import com.example.huellitas.model.Brand;
import com.example.huellitas.model.Image;
import com.example.huellitas.model.Product;
import com.example.huellitas.model.User;
import com.example.huellitas.repository.ImageRepository;
import com.example.huellitas.repository.ProductRepository;
import com.example.huellitas.service.ProductService;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Getter
@Setter
@RequiredArgsConstructor
public class ProductImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ImageImpl imageConverterService;

    @Autowired
    private ImageRepository imageRepository;

    public Image imageDtoToImage(ImageDto imageDto)
    {
        Image image = new Image();
        image.setUrl(imageDto.getUrl());
        image.setImageSize(imageDto.getImageSize());

        return image;
    }


    @Override
    public void addProduct(Product product, List<MultipartFile> files, Long userId, Long brandId) throws BadRequestException {
        if (files == null || files.isEmpty()) {
            throw new BadRequestException("Debe proporcionar al menos una imagen.");
        }
        try {
            User user = new User();
            user.setId(userId);
            Brand brand = new Brand();
            brand.setId(brandId);
            product.setOwnerUser(user);
            product.setBrand(brand);

            // Guardar el producto primero para obtener su ID
            Object savedProduct = productRepository.save(product);

            // Crear una lista para almacenar las imágenes y los archivos de imagen
            List<ImageFilePairDto> imageFilePairs = new ArrayList<>();

            for (MultipartFile file : files) {
                Image image = new Image();
                String uniqueFilename = "property-" + UUID.randomUUID() + ".webp";
                image.setUrl("http://localhost:8000/" + uniqueFilename);
                image.setProduct((Product)savedProduct);  // Asignar el producto a la imagen

                // Copiar el contenido del archivo a un nuevo arreglo de bytes
                byte[] fileBytes = file.getBytes();

                // Agregar el par de imagen y arreglo de bytes a la lista
                imageFilePairs.add(new ImageFilePairDto(image, fileBytes));
            }

            // Enviar las imágenes y los arreglos de bytes a un sistema de tareas en segundo plano para su procesamiento
            imageConverterService.processImages(imageFilePairs);

            product.setImageList(imageFilePairs.stream().map(ImageFilePairDto::getImage).collect(Collectors.toList()));
            productRepository.save(product);

        } catch (DataIntegrityViolationException | IOException ex) {
            throw new BadRequestException("Ha habido un error al intentar guardar el product");
        }
    }

    @Override
    public void updateProduct(Product product, List<MultipartFile> files, Long brandId, List<ImageDto> imageDtoList) throws BadRequestException {
        if ((files == null ) && (imageDtoList == null )) {
            throw new BadRequestException("Debe proporcionar al menos una imagen.");
        }

        Optional<Product> oldProduct = productRepository.findById(product.getId());
        if(oldProduct.isEmpty())
        {
            throw new BadRequestException("El producto no existe.");
        }

        try {

            List<Image> imageList = new ArrayList<>();
            List<Image> imagesToDelete = new ArrayList<>();
            if(imageDtoList != null) {
                for (Image image2 : oldProduct.get().getImageList()) {

                    Boolean imagePresent = false;
                    for (ImageDto imageDto : imageDtoList) {
                        if (image2.getId() == imageDto.getId()) {
                            imagePresent = true;
                            imageList.add(image2);
                        }
                    }
                    if (!imagePresent) {
                        imagesToDelete.add(image2);
                    }

                }
            }

            product.setImageList(imageList);


            if(brandId == null)
            {
                throw new BadRequestException("El producto no se puede quedar sin marca.");
            }

            Brand brand = new Brand();
            brand.setId(brandId);
            product.setBrand(brand);

            product.setOwnerUser(oldProduct.get().getOwnerUser());
            product.setIsEnabled(oldProduct.get().getIsEnabled());
            product.setIsFeatured(oldProduct.get().getIsFeatured());
            product.setIsPublished(oldProduct.get().getIsPublished());

            Object savedProduct = productRepository.save(product);


            if(files != null)
            {
                List<ImageFilePairDto> imageFilePairs = new ArrayList<>();

                for (MultipartFile file : files) {
                    Image image = new Image();
                    String uniqueFilename = "property-" + UUID.randomUUID() + ".webp";
                    image.setUrl("http://localhost:8000/" + uniqueFilename);
                    image.setProduct((Product)savedProduct);  // Asignar el producto a la imagen

                    // Copiar el contenido del archivo a un nuevo arreglo de bytes
                    byte[] fileBytes = file.getBytes();

                    // Agregar el par de imagen y arreglo de bytes a la lista
                    imageFilePairs.add(new ImageFilePairDto(image, fileBytes));
                }

                // Enviar las imágenes y los arreglos de bytes a un sistema de tareas en segundo plano para su procesamiento
                imageConverterService.processImages(imageFilePairs);

            }

            /*
            Se añade este array para eliminar en vez de eliminar directamente en el if de (!imagePresent)
             ya que en ese if, las imagenes siguen teniendo la clave foranea a producto,
              lo que puede dificultrar el proceso de eliminado
             */
            for (Image imageToDelete : imagesToDelete) {
                imageRepository.deleteById(imageToDelete.getId());
            }
        } catch (DataIntegrityViolationException ex) {
            throw new BadRequestException("Ha habido un error al intentar actualizar el product");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void deleteProductById(Long id) throws ResourceNotFoundException {

    }

    public ProductDto convertToDto(Product product) {
        ProductDto productDto = new ProductDto();
        BrandDto brandDto = new BrandDto();
        ImageDto imageDto = new ImageDto();
        product.setName(product.getName());
        productDto.setId(product.getId());
//        productDto.setBrandDto(product.getBrand(brandDto.getBrandName()));
        productDto.setIsPublished(product.getIsPublished());
//        productDto.setImageList(product.getImageList();
        productDto.setPrice(product.getPrice());

        return productDto;
    }
    @Override
    public Optional<ProductDto> findProductById(Long id) {
        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()) {
            ProductDto productDto = convertToDto(product.get());
            return Optional.of(productDto);
        } else {
            return Optional.empty();
        }
    }

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public void deleteProduct(Long id) throws ResourceNotFoundException {
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("No se encontró el producto con id: " + id);
        }
    }

}
