import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex, axios);

export const store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
        items: [],
        total: []
    },
    mutations: {
        getProducts: (state, products) => {
            state.products = products.data;
            console.log(state.products)
        },
        getCart: (state, cart) => {
            state.cart = cart.data;
            let tempTotal = [];
            state.cart.map(item => tempTotal.push(Number(item.price)));
            let total = tempTotal.reduce((sum,current) => sum+current);
            state.total = total;
            state.items = state.cart.length;
            console.log(state.cart[0].title, state.total, state.items)
        },
        deleteItem: (state, id) => {
            let cart = state.cart;
            console.log(id)
            let filteredCart = cart.filter(item => item._id !== id );
            state.cart = filteredCart;
            console.log(state.cart)
        }
    },
    actions: {
        getProducts: context => {
                axios.get('https://fedtest.monolith.co.il/api/catalog/getAll')
                .then(products => {
                    context.commit('getProducts', products.data)
                    console.log(products.data)
                }) 
                .catch(error => {
                    console.log(error)
                })           
        },
        getCart: context => {
            axios.get('http://localhost:5000/api/items')
            .then(cart => {
                context.commit('getCart', cart)
                console.log(cart.data)
            }) 
            .catch(error => {
                console.log(error)
            })           
    },
    deleteItem: (context, id) => {
        axios.delete('http://localhost:5000/api/items/' + id)
        context.commit('deleteItem', id)

         
},
    }
})