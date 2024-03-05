<script>
import ProductCard from '@/components/ProductCard.vue'
import CardsCard from '@/components/CardsCard.vue'
import GamesCard from '@/components/GamesCard.vue'
import TemplateCard from '@/components/TemplateCard.vue'
import ProductData from "@/Jsons/products.json"

export default {
  data() {
    return {
      products: ProductData,
    }
  },
  components: {
    ProductCard,
    CardsCard,
    GamesCard,
    TemplateCard
  }
}
</script>

<template>
  <!-- DJUMBO -->
  <div class="flex">
    <!-- div img/3js -->
    <div class="w-[50%] flex justify-center items-center text-[30px]">
      IMMAGINONA
    </div>
    <!-- div text -->
    <div class="w-[50%] flex flex-col justify-start ml-5">
      <h2 class="font-extrabold text-desktop-xl leading-[40px] mb-4">Welcome to our Vuekémon Store</h2>
      <p class="font-semibold text-desktop-xs mb-7 pr-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        consequuntur at expedita doloribus inventore accusantium veritatis earum blanditiis.</p>
      <div>
        <span class="rounded-md font-semibold bg-[#ce88f0] text-white py-[10px] px-[8px] shadow-xl">Sconto: "Opinno"</span>
        <span class="rounded-md border-2 border-[#ce88f0] py-[8px] px-[8px] ml-4 shadow-xl">Sconto: "Ciao123"</span>
      </div>

    </div>
  </div>
  <!-- PALLE-CATEGORIE -->
  <div class="flex justify-center items-center gap-12 my-[130px]">
    <div class="rounded-full bg-slate-300 h-[150px] w-[150px]">
      <img src="" alt="">
    </div>
    <div class="rounded-full bg-slate-300 h-[150px] w-[150px]">
      <img src="" alt="">
    </div>
    <div class="rounded-full bg-slate-300 h-[150px] w-[150px]">
      <img src="" alt="">
    </div>
  </div>
  <div>
    <h2 class="font-extrabold text-[35px] ml-5">Peluches</h2>
    <ProductCard />
    <h2 class="font-extrabold text-[35px] ml-5 mt-[90px]">Cards</h2>
    <CardsCard />
    <h2 class="font-extrabold text-[35px] ml-5">Games</h2>
    <GamesCard />
  </div>

  <div>
    <ul class="grid grid-cols-3">
      <div>
        <li v-for="items in products.games">
        <TemplateCard :title= "items.title" :price="items.price" :imgSrc="items.img"/>
      </li>
      </div>
      <div>
        <li v-for="items in products.peluches">
        <TemplateCard :title= "items.title" :price="items.price" :imgSrc="items.img"/>
      </li>
      </div>
      <div>
        <li v-for="items in products.cards">
        <TemplateCard :title= "items.title" :price="items.price" :imgSrc="items.img"/>
      </li>
      </div>
      
      
      
    </ul>
  </div>

</template>
