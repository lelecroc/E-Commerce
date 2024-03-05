<script>
import ProductData from "@/Jsons/products.json"

export default {
  data() {
    return {
      products: ProductData,
      peluches: ProductData.peluches,


    }
  }
}
</script>

<template>
  <ul>
    <template v-for="(peluche, i) in peluches">
      <li v-if="i === 0" class="shadow-xl rounded-lg">
        <div class="flex items-center w-[500px] h-[300px] relative">
          <img :src="peluche.img">
          <!-- DESCRIPTION -->
          <div>
            <h6 class="text-[18px] font-medium text-[#3B3232]">${{ peluche.price }}</h6>
            <h2 class="mb-[5px] text-[20px] font-bold">{{ peluche.title }}</h2>
            <p  class="mb-[15px]">{{ peluche.description }}</p>


<!-- HERO ICONS ( ADD ) -->
          <div class="flex items-center">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=" #3b3b3b" class="w-8 h-8">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
</svg>

<!-- HERO ICONS (MINUS) -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=" #3b3b3b" class=" w-8 h-8 mr-4 opacity-70">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z" clip-rule="evenodd" />
</svg>

<p class=" text-[#3b3b3b] font-semibold">Q.ta: <span>3</span></p>



</div>

          <!-- REMOVE ICON -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute bottom-6 right-6 w-6 h-6">
  <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
</svg>

          </div>


        </div>
      </li>
    </template>
  </ul>
</template>

