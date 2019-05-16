import Product from './Product/index'

export default {
  name: 'home',
  components: {
    'app-product': Product
  },
  props: [],
  data () {
    return {

    }
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
