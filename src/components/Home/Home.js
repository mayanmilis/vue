import Product from './Product/index';
import { imager } from '../../shared';

export default {
  name: 'home',
  components: {
    'app-product': Product
  },
  props: [],
  data () {
    return {
      imager,
      input: '',
      min: '',
      max: ''
    }
  },
  created() {
    this.getProducts();
  },
  computed: {
    products(){
      return this.$store.state.products;
    },

  },
  mounted () {

  },
  methods: {
    getProducts: function(){
      this.$store.dispatch('getProducts');
    },
    searchProducts: function(){
      this.$store.dispatch('searchProducts', this.input);
    },
    priceRange: function(){
      this.$store.dispatch('priceRange', {'min': this.min, 'max': this.max});
    },
  }
}
