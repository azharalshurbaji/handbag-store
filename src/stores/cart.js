import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart' , {
    persist: true,

    state: () => ({
        cartItems: [],
    }),
    getters: {
        itemsCount(state) {
            return state.cartItems.length
        }
    },
    actions: {
        addToCart(product) {
            const existingProduct = this.cartItems.find( item => item.id === product.id)
            if(existingProduct) {
                existingProduct.quantity ++
            } else {
                this.cartItems.push({...product ,quantity: 1 })
            }
        },
        removeFromCart(index) {
            this.cartItems.splice(index , 1)
        },
        resetCart() {
            this.cartItems = []
        }
    },
})
