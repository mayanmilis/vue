import Item from './Item/index';

export default {
  name: 'cart',
  components: {
    'app-item': Item
  },
  props: [],
  data () {
    return {
    }
  },
  created() {
    this.getCart();
    this.getProducts();
  },
  computed: {
    cart(){
      return this.$store.state.cart;
    },
    items() {
      return this.$store.state.items;
    },
    total(){
      return '$' + ' ' + this.$store.state.total;
    },
    products(){
      return this.$store.state.products;
    },
  },
  mounted () {

  },
  methods: {
    getCart: function(){
      this.$store.dispatch('getCart');
    },
    getProducts: function(){
      this.$store.dispatch('getProducts');
    }
  }
}
