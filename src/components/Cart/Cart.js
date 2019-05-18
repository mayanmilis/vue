import axios from 'axios';

export default {
  name: 'cart',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    add(){
      let value = {
        "name": "Miki6777",
        "key": "6"
      }
      axios.post('http://localhost:5000/api/items', value)
    }
  }
}
