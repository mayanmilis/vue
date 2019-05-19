import { imager } from '../../../shared';

export default {
  name: 'item',
  components: {},
  props: ['item', 'products'],
  data () {
    return {
      id: this.item._id,
      image: this.item.image,
      imager,
      labels: this.item.labels,
      price: this.item.price,
      quantity: this.item.quantity,
      title: this.item.title,
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
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
    deleteItem: function(){
      console.log(this.id)
      let id = this.id;
      this.$store.dispatch('deleteItem', id);
    },
    convertId(label){
      console.log(label)
      let products = this.products;
      let filteredLabel;
      for(let i = 0; i < products.length; i++){
        if(products[i].title === this.title){
          for(let j = 0; j < products[i].attributes.length; j++){
            if(products[i].attributes[j].id === label.attribute_id){
              let filtered = products[i].attributes[j].labels;
              filtered = filtered.filter(item => item.id === label.label_id);
              return filtered[0].title;
            }
          }
          // filteredAttribute = products[i].attributes.filter(item => item.id === label.attribute_id);
          // filteredLabel = filteredAttribute.labels.filter(item => item.id ===label.label_id)
        }
      }
      console.log(products)
    }
  }
}
