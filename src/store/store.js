import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex, axios);

export const store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        getProducts: (state, products) => {
            state.products = products.data;
            console.log(state.products)
        }
    },
    actions: {
        getProducts: context => {
                axios.get('https://fedtest.monolith.co.il/api/catalog/getAll')
                .then(products => {
                    context.commit('getProducts', products.data)
                }) 
                .catch(error => {
                    console.log(error)
                })           
        },
        
    }
})