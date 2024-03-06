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
  <div class="flex flex-col justify-center items-center md:flex md:flex-row md:px-[50px]">
    <!-- div img/3js -->
    <div class="flex justify-center items-center md:flex md:justify-center md:items-center">
      <img src="/src/assets/Immaginona.png" alt="charmander" class="h-[300px] md:h-[400px] lg:h-[500px]">
    </div>
    <!-- div text -->
    <div class="w-[400px] md:w-[300px] lg:w-[400px] border flex flex-col justify-center  md:justify-start md:ml-5">
      <h1 class=" font-extrabold text-desktop-xl lg:text-[50px] lg:leading-[55px] leading-[40px] mb-2">Welcome to our Vuekémon Store</h1>
      <p class="font-semibold text-desktop-xs mb-8 lg:text-[16px] text-[#686b6b]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aspernatur
        consequuntur at expedita doloribus inventore accusantium veritatis earum blanditiis.</p>

     <div class="flex">
        <input type text placeholder=" Search " class="focus:outline-none rounded-xl border-2 border-[#ce88f0] font-semibold text-[#3b3b3b] py-[10px] px-[8px] shadow-xl">

        <!-- <div class="absolute right-20">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div> -->
      </div>



    </div>
  </div>
  <!-- PALLE-CATEGORIE -->
  <div class="text-[#3b3b3b] flex justify-center items-center gap-7 mt-[80px] mb-[130px] max-[430px]:flex-col md:gap-12">
    <a href="#peluches">
        <div class="rounded-full flex justify-center items-center bg-[#79C5EF] bg-opacity-60 h-[125px] w-[125px] hover:transition delay-150 duration-300 ease-in-out hover:scale-[1.3] hover:text-white hover:bg-[url('/src/assets/img/Gif/Peluche.gif')] hover:bg-cover md:w-[200px] md:h-[200px]">
          <span class="font-bold text-[20px]">Peluches</span>
        </div>
    </a>
    <a href="#cards">
      <div
        class="rounded-full flex justify-center items-center bg-[#a1a0df] bg-opacity-60 h-[125px] w-[125px]  hover:transition delay-150 duration-300 ease-in-out hover:scale-[1.3] hover:text-white hover:bg-[url('/src/assets/img/Gif/CardGame.gif')] md:w-[200px] md:h-[200px]">
        <span class="font-bold text-[20px]">Cards</span>
      </div>
    </a>

    <a href="#games">
      <div
        class="rounded-full flex justify-center items-center bg-[#CE88F0] bg-opacity-60 h-[125px] w-[125px]  hover:transition delay-150 duration-300 ease-in-out hover:scale-[1.3] hover:text-white hover:bg-[url('/src/assets/img/Gif/GamesRetro.gif')] md:w-[200px] md:h-[200px]">
        <span class="font-bold text-[20px]">Games</span>
      </div>
    </a>
  </div>
  <div>
    <ul>
      <a name="peluches">
        <h2 class="font-extrabold text-[#3b3b3b] text-center text-[35px] mb-[50px] ml-5">Peluches</h2>
      </a>
      <div class="flex overflow-x-auto pb-[50px]">
        <li class="ml-5" v-for="items in products.peluches">
          <TemplateCard :title="items.title" :price="items.price" :imgSrc="items.img" path="peluche/" :spec="items.name"
            imgClass="w-[150px] h-[200px] rounded-lg" />
        </li>
      </div>
      <a name="cards">
        <h2 class="text-[#3b3b3b] text-center font-extrabold text-[35px] ml-5 mt-[90px] mb-[50px] ">Cards</h2>
      </a>

      <div class="flex overflow-x-auto pb-[50px]">
        <li class="ml-5" v-for="items in products.cards">
          <TemplateCard :title="items.title" :price="items.price" :imgSrc="items.img" path="card/" :spec="items.name"
            imgClass="w-[150px] h-[200px] rounded-lg" />
        </li>
      </div>
      <a name="games">
        <h2 class="text-[#3b3b3b] text-center font-extrabold text-[35px] ml-5 mt-[90px] mb-[50px]">Games</h2>
      </a>

      <div class="flex overflow-x-auto pb-[50px]">
        <li class="ml-5" v-for="items in products.games">
          <TemplateCard :title="items.title" :price="items.price" :imgSrc="items.img" path="game/" :spec="items.id"
            imgClass="w-[150px] h-[200px] rounded-lg" />
        </li>
      </div>
    </ul>
  </div>
</template>
