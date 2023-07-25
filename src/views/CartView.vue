<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column">
          <div v-if="itemsCount === 0" class="title is-4 has-text-centered">
            Your cart is empty 
            
          </div>
          <div class="title is-4 has-text-centered">
            ¯\_(ツ)_/¯
          </div>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column">
          <table v-if="itemsCount !== 0" class="table is-hoverable is-fullwidth is-bordered">
            <thead>
              <tr>
                <th>id</th>
                <th>image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in cartItems" :key="item.id">
                <td>
                  <p class="subtitle">
                    {{ i + 1 }}
                  </p>
                </td>
                <td>
                  <figure class="image product-img-cart m-auto">
                    <img :src="item.image" alt="img-item" class="" />
                  </figure>
                </td>
                <td>
                  <p class="subtitle is-4 has-text-centered">
                    {{ item.productName }}
                  </p>
                </td>
                <td>
                  <p class="subtitle has-text-centered">
                    &dollar;
                    {{ item.price }}
                  </p>
                </td>
                <!--^ Product Quantity -->
                <td>
                  <div class="buttons is-centered">
                    <button
                      class="button is-responsive is-danger"
                      @click="item.quantity++"
                    >
                      +
                    </button>
                    <span class="text-h6 px-2">
                      {{ item.quantity }}
                    </span>
                    <button
                      class="button is-responsive is-danger"
                      @click="item.quantity++"
                    >
                      -
                    </button>
                  </div>
                  <hr />
                  <p class="subtitle mb-2 has-text-centered has-text-weight-bold">
                    Total Price:
                    
                  </p>
                  <p class="subtitle mb-2 has-text-centered has-text-weight-bold">
                    $•{{ item.quantity * item.price }}
                  </p>
                </td>
                <td>
                  <div class="buttons is-centered">
                    <button
                      class="button is-responsive is-danger"
                      @click="removeFromCart(index)"
                    >
                      delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCartStore } from "../stores/cart";

export default {
  data: () => ({}),
  computed: {
    ...mapState(useCartStore, ["cartItems" , "itemsCount"]),
  },
  methods: {
    ...mapActions(useCartStore, ["removeFromCart"]),
  },
};
</script>

<style>
.product-img-cart {
  width: 100px;
}
</style>
  