<template>
  <section class="section">
    <div class="container">
        <div class="columns is-centered mb-5">
            <div class="column">
                <p class="title has-text-centered">
                    Our Products
                </p>
                <p class="subtitle has-text-danger has-text-centered">
                    Maiores libero odio eligendi
                </p>
            </div>
        </div>
        <div class="container">
            <div class="columns is-centered is-multiline">
                <div 
                    v-for="product in products" 
                    :key="product" 
                    class="column is-4-desktop"
                >
                    <div class="card is-shadowless card-border">
                        <div class="card-image">
                            <figure class="image m-auto product-img">
                                <img :src="product.image" alt="img-item">
                            </figure>
                        </div>
                        <hr>
                        <div class="card-content  has-text-centered">
                            <p class="title is-4">
                                {{ product.productName }}
                            </p>
                            <p class="subtitle">
                                &dollar; 
                                {{ product.price }}
                            </p>
                        </div>
                        <div class="buttons mb-2 is-centered">
                            <button class="button is-responsive is-fullwidth mx-5 is-outlined is-danger"
                            @click="addToCart(product)"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'pinia'
import c1 from '../assets/img/products/c1.png'
import c2 from '../assets/img/products/c2.png'
import c3 from '../assets/img/products/c3.png'

import q1 from '../assets/img/products/q1.png'
import q2 from '../assets/img/products/q2.png'
import q3 from '../assets/img/products/q3.png'

import s1 from '../assets/img/products/s1.png'
import s2 from '../assets/img/products/s2.png'
import s3 from '../assets/img/products/s3.png'
import { useCartStore } from '../stores/cart'

export default {
    data: () => ({ 
        products: [
            {
                id: 1,
                image: c1,
                productName: 'Crossbady',
                price: 22,
            },
            {
                id: 2,
                image: c2,
                productName: 'Crossbady',
                price: 20,
            },
            {
                id: 3,
                image: c3,
                productName: 'Crossbady',
                price: 15,
            },
            {
                id: 4,
                image: q1,
                productName: 'Quilted',
                price: 12,
            },
            {
                id: 5,
                image: q2,
                productName: 'Quilted',
                price: 25,
            },
            {
                id: 6,
                image: q3,
                productName: 'Quilted',
                price: 80,
            },
            {
                id: 7,
                image: s1,
                productName: 'Structured',
                price: 10,
            },
            {
                id: 8,
                image: s2,
                productName: 'Structured',
                price: 35,
            },
            {
                id: 9,
                image: s3,
                productName: 'Structured',
                price: 55,
            },
        ],

    }),
    methods: {
        ...mapActions(useCartStore , ["addToCart"])
    },
}
</script>

<style>
.product-img{
    width: 200px !important;
}
.card-border {
    border: 1px solid #f1efef;
    /* width: 350px; */
}

</style>