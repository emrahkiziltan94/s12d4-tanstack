package com.workintech.s12d4_tanstack_api;

import jakarta.annotation.PostConstruct;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/products")
public class ProductsController {
    private List<Product> products = new ArrayList<>();

    @PostConstruct
    public void init(){
        products.add(new Product(1l,"p1"));
        products.add(new Product(2l,"p2"));
        products.add(new Product(3l,"p3"));
        products.add(new Product(4L,"p4"));
        products.add(new Product(5L,"p5"));
    }

    @GetMapping
    public List<Product> getProducts(){
        try {

            Thread.sleep(5000);
        } catch (InterruptedException e) {

            Thread.currentThread().interrupt();
            e.printStackTrace();
        }
        return products;
    }
    @PostMapping
    public void create(@RequestBody Product product){
        products.add(product);
    }

}
