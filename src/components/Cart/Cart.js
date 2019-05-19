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
    }
  },
  mounted () {

  },
  methods: {
    getCart: function(){
      this.$store.dispatch('getCart');
    }
  }
}
