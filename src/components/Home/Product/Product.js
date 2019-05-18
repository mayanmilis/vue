import axios from "axios";
import { imager } from '../../../shared';
import uuidv4 from 'uuidv4';

export default {
  name: 'product',
  components: {},
  data () {
    return {
      id: this.$route.params.id,
      title: '',
      description: '',
      images: [],
      mainImage: '',
      image: {},
      imager,
      min_price: '',
      max_price: '',
      tempVariant: {},
      variant: [],
      variantId: '',
      attributes: [],
      quantity: 1

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
      this.mainImage = this.images[0];
      this.variantId = uuidv4();
    })
  },
  computed: {

  },
  mounted () {
    
  },
  methods: {
    showVariants() {
      console.log(this.tempVariant)
    },
    addItem() {
      this.quantity +=1;
    },
    removeItem() {
      if(this.quantity > 1){
        this.quantity -=1;
      }else{
        return null;
      }    
    },
    createVariant() {
      let variant = [];
      let tempVariant = this.tempVariant;
      for(let prop in tempVariant){
        variant.push({attribute_id: prop, label_id: tempVariant[prop]})
      }
      this.variant = variant
      console.log(this.variant);
      this.mainImageFunction();
    },
    mainImageFunction() {
      let attributes = this.attributes;
      let variant = this.variant;
      let images = this.images;
      let tempImageUrl;
      let mainImageUrl;
      for(let i = 0; i < attributes.length; i++){
        for(let j = 0; j < variant.length; j++){
          if(attributes[i].id === variant[j].attribute_id && attributes[i].type === 'COLOR'){
            for(let k = 0; k < attributes[i].labels.length; k++){
              if(attributes[i].labels[k].id === variant[j].label_id){
                tempImageUrl = attributes[i].labels[k].title.toLowerCase();
                
              }
            }
          }
        }
      }
      console.log(tempImageUrl)
      for(let i = 0; i < images.length; i++){
        if(images[i].title === tempImageUrl+'.jpg'){
          mainImageUrl = images[i];
          console.log(mainImageUrl)
          this.mainImage = mainImageUrl;
        }
      }
    },
    print(){
      console.log({
        id: this.variantId,
        title: this.title,
        image: this.mainImage,
        labels: this.variant,
        price: this.min_price,
        quantity: this.quantity
      })
    }
  }
}
