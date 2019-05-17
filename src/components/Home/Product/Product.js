import axios from "axios";
import { imager } from '../../../shared';

export default {
  name: 'product',
  components: {},
  data () {
    return {
      id: this.$route.params.id,
      title: '',
      description: '',
      images: [],
      imager,
      min_price: '',
      max_price: '',
      variants: {},
      attributes: [],
      amount: 1

    }
  },
  created() {
    axios.get('https://fedtest.monolith.co.il/api/catalog/get?id=' + this.id)
    .then((data) => {
      let product = data.data.data;
      this.title = product.title;
      this.description = product.description;
      this.images = product.images;
      this.min_price = product.min_price;
      this.max_price = product.max_price;
      this.attributes = product.attributes;
    })
  },
  computed: {

  },
  mounted () {
    
  },
  methods: {
    showVariants() {
      console.log(this.variants)
    },
    addItem() {
      this.amount +=1;
    },
    removeItem() {
      if(this.amount > 1){
        this.amount -=1;
      }else{
        return null;
      }    
    }
  }
}
