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
      imager
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
    }
  }
}
