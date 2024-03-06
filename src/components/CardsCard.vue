<script>
import ProductData from "@/Jsons/products.json"

export default {
  data() {
    return {
      products: ProductData,
      cards: ProductData.cards
    }
  }
}

</script>

<template>
<ul class="overflow-x-auto h-[400px] flex pb-2 pt-5">
    <li v-for="card in cards" class="ml-5">
      <div class="w-[300px] flex flex-col justify-center items-center shadow-xl rounded-lg">
        <!-- DESCRIPTION -->
        <div class="w-full py-[10px] px-[20px] flex justify-between items-center">
          <div>
            <h6 class="text-[24px] font-bold text-[#3B3232] mb-[-10px]">{{ card.title }}</h6>
            <h6 class="text-[18px] font-medium text-[#3B3232]">{{ card.price }} €</h6>
          </div>
          <div class="p-[10px] bg-[#d1d1d1] rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="w-6 h-6">
              <path
                d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>

          </div>
        </div>

        <!-- IMG -->
        <img :src="card.img" alt="Pika" class="w-[200px] rounded-lg">



        <!-- CARD CONTAINER -->
        <div class=" w-full px-[20px] mb-[30px] flex justify-between items-center text-[#fff]">
          <!-- CARD -->
          <div
            class="w-full flex justify-between items-center px-[30px] py-[8px] bg-gradient-to-r from-[#7AB4D6] to-[#CE88F0] shadow-xl rounded-xl ">
            <button class="font-bold mr-[10px]"> Add to Cart</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff"
              class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </div>


        </div>
      </div>
    </li>
  </ul>
</template>