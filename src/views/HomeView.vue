<script>
import TemplateCard from '@/components/TemplateCard.vue'
import ProductData from "@/Jsons/products.json"

export default {
  data() {
    return {
      products: ProductData,
      container: [],
    }
  },
  components: {
    TemplateCard
  },
  methods: {
    addPelucheToCart() {
      this.container.push("ciao")
      console.log(this.container)
    }
  }
}
</script>

<template>
  <!-- DJUMBO -->
  <div class="flex flex-col">
    <!-- div img/3js -->
    <div class=" w-[50%] md:flex  md:justify-center md:items-center md:text-[30px]">
      <img src="/src/assets/Immaginona.png" alt="charmander">
    </div>
    <!-- div text -->
    <div class="w-[50%] flex flex-col justify-start ml-5">
      <h2 class="font-extrabold text-desktop-xl leading-[40px] mb-4">Welcome to our Vuekémon Store</h2>
      <p class="font-semibold text-desktop-xs mb-7 pr-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aspernatur
        consequuntur at expedita doloribus inventore accusantium veritatis earum blanditiis.</p>
      <div>
        <span class="rounded-md font-semibold bg-[#ce88f0] text-white py-[10px] px-[8px] shadow-xl">Sconto:
          "Opinno"</span>
        <span class="rounded-md border-2 border-[#ce88f0] py-[8px] px-[8px] ml-4 shadow-xl">Sconto: "Ciao123"</span>
      </div>

    </div>
  </div>
  <!-- PALLE-CATEGORIE -->
  <div class="flex justify-center items-center gap-12 my-[130px]">
    <a href="#peluches">
        <div class="rounded-full  flex justify-center items-center bg-[#79C5EF] bg-opacity-60 h-[150px] w-[150px] hover:transition delay-150 duration-300 ease-in-out hover:scale-[1.3] hover:text-white hover:bg-[url('/src/assets/img/Gif/Peluche.gif')] hover:bg-cover md:w-[200px] md:h-[200px]">
          <span class="font-bold text-[20px]">Peluches</span>
        </div>  
    </a>
    <a href="#cards">
      <div
        class="rounded-full flex justify-center items-center bg-[#a1a0df] bg-opacity-60 h-[150px] w-[150px]  hover:transition delay-150 duration-300 ease-in-out hover:scale-[1.3] hover:text-white hover:bg-[url('/src/assets/img/Gif/CardGame.gif')] md:w-[200px] md:h-[200px]">
        <span class="font-bold text-[20px]">Cards</span>
      </div>
    </a>

    <a href="#games">
      <div
        class="rounded-full flex justify-center items-center bg-[#CE88F0] bg-opacity-60 h-[150px] w-[150px]  hover:transition delay-150 duration-300 ease-in-out hover:scale-[1.3] hover:text-white hover:bg-[url('/src/assets/img/Gif/GamesRetro.gif')] md:w-[200px] md:h-[200px]">
        <span class="font-bold text-[20px]">Games</span>
      </div>
    </a>
  </div>
  <div>
    <ul>
      <a name="peluches">
        <h2 class="font-extrabold text-[35px] ml-5">Peluches</h2>
      </a>
      <div class="flex overflow-x-auto py-[50px]">
        <li class="ml-5" v-for="items in products.peluches">
          <TemplateCard :title="items.title" :price="items.price" :imgSrc="items.img" path="peluche/" :spec="items.name"
            imgClass="w-[150px] h-[200px] rounded-lg" />
        </li>
      </div>
      <a name="cards">
        <h2 class="font-extrabold text-[35px] ml-5 mt-[90px]">Cards</h2>
      </a>

      <div class="flex overflow-x-auto py-[50px]">
        <li class="ml-5" v-for="items in products.cards">
          <TemplateCard :title="items.title" :price="items.price" :imgSrc="items.img" path="card/" :spec="items.name"
            imgClass="w-[150px] h-[200px] rounded-lg" />
        </li>
      </div>
      <a name="games">
        <h2 class="font-extrabold text-[35px] ml-5 mt-[90px]">Games</h2>
      </a>

      <div class="flex overflow-x-auto py-[50px]">
        <li class="ml-5" v-for="items in products.games">
          <TemplateCard :title="items.title" :price="items.price" :imgSrc="items.img" path="game/" :spec="items.id"
            imgClass="w-[150px] h-[200px] rounded-lg" />
        </li>
      </div>
    </ul>
  </div>
</template>
