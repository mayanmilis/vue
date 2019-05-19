import { imager } from '../../../shared';

export default {
  name: 'item',
  components: {},
  props: ['item'],
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
  }
}
