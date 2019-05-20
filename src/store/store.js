import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex, axios);

export const store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
        items: '',
        total: '',
        orders: []
    },
    mutations: {
        getProducts: (state, products) => {
            state.products = products.data;
            state.products.map(item => item.max_price = Math.floor(item.max_price));
            state.products.map(item => item.min_price = Math.floor(item.min_price));
            console.log(state)
        },
        getCart: (state, cart) => {
            state.cart = cart.data;
            let tempTotal = [];
            state.cart.map(item => tempTotal.push(Number(item.price)*Number(item.quantity)));
            let total = tempTotal.reduce((sum,current) => sum+current);
            state.total = total;
            let tempItems = [];
            state.cart.map(item => tempItems.push(Number(item.quantity)));
            let items = tempItems.reduce((sum,current) => sum+current);
            state.items = items;
            console.log(state)
        },
        deleteItem: (state, id) => {
            let cart = state.cart;
            console.log(id)
            let filteredCart = cart.filter(item => item._id !== id );
            state.cart = filteredCart;
            console.log(state.cart)
        },
        updateItem: () => {
            
        },
        searchProducts: (state, input) => {
            console.log(input)
            let products = state.products;
            products = products.filter(item => item.title.toLowerCase().includes(input.toLowerCase()) === true);
            state.products = products;
        },
        priceRange: (state, {min,max}) => {
            let products = state.products;
            products = products.filter(item => item.min_price >= min && item.max_price <= max );
            state.products = products;
        },
        clear: () => {

        }
    },
    actions: {
        getProducts: context => {
                axios.get('https://fedtest.monolith.co.il/api/catalog/getAll')
                .then(products => {
                    context.commit('getProducts', products.data);
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
            axios.delete('http://localhost:5000/api/items/' + id);
            context.commit('deleteItem', id)
        },
        updateItem: (context, {id, quantity}) => {
            console.log(quantity)
            axios.put('http://localhost:5000/api/items/' + id, {"quantity": quantity});
            context.commit('updateItem')
        },
        searchProducts: (context, input) => {
            context.commit('searchProducts', input)
        },
        priceRange: (context, {min, max}) => {
            context.commit('priceRange', {min, max})
        },
        clear: (context, cart) => {
            cart.map(item => axios.delete('http://localhost:5000/api/items/' + item._id))
            console.log(cart)
            context.commit('clear', cart)
        }

    }
})