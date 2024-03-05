<script>
import ProductData from "@/Jsons/products.json"

export default {
  data() {
    return {
      products: ProductData,
      peluches: ProductData.peluches
    }
  },
  mounted() {
    console.log(this.$route.params.name)
  },
  methods: {
    
  }
}




</script>

<template>
    <ul>
        <li v-for="peluche in peluches">
            <p v-show="this.$route.params.name == peluche.name"> {{ peluche.name }} {{ peluche.price }}</p>
            <img v-show="this.$route.params.name == peluche.name" :src="'.' + peluche.img" :alt="peluche.title" class="">
        </li>
    </ul>
</template>