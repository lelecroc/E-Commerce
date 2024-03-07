<script>
import ProductData from "@/Jsons/products.json"

export default {
  data() {
    return {
      products: ProductData,
      peluches: ProductData.peluches,
      isClickedHeart: false,
      isClickedUnlike: false,

    }
  },
  props: ["imgSrc", "imgAlt", "title", "price", "path", "spec", "divClass", "imgClass"
  ],
  methods: {
    btnClick() {
      this.$emit("remove")
      console.log("emitted")
    },
    emitCounter() {
      this.$emit("event")
    },
    heartClick() {
      this.isClickedHeart = !this.isClickedHeart;
    },

    unlikeClick() {
      this.isClickedUnlike = !this.isClickedUnlike;
    }
  }
}
</script>

<template>
  <div class="w-[300px] h-[430px] flex flex-col justify-between items-center shadow-xl rounded-lg">

    <div class="w-full pt-[20px] px-[20px] flex justify-between items-center">

      <!-- CONTAINER ICONS-->
      <div class="flex justify-between items-center w-screen px-[10px]">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d1d8e0"
          :class="{ 'fill-light-blue': isClickedHeart }" @click="heartClick"
          class="w-6 h-6 cursor-pointer hover:transition duration-300 ease-in-out hover:scale-[1.2]"> >
          <path
            d="M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d1d8e0"
          :class="{ 'fill-fuschia': isClickedUnlike }" @click="unlikeClick"
          class="w-6 h-6 cursor-pointer hover:transition duration-300 ease-in-out hover:scale-[1.2]">
          <path
            d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
      </div>
    </div>

    <!-- IMG-->
    <RouterLink :to="path + spec">
      <div :class="divClass">
        <img class="object-contain" :class="imgClass" :src="imgSrc" :alt="imgAlt">
      </div>
    </RouterLink>


    <!-- TEXT CONTENT-->
    <div class=" w-[230px] text-center">
      <h6 class="text-[16px] font-medium text-[#3B3232]">{{ price }} €</h6>
      <RouterLink :to="path + spec">
        <h6 class="text-[22px] leading-[26px] text-center font-bold text-[#3B3232] ">{{ title }}</h6>
      </RouterLink>
    </div>


    <!-- CARD END -->
    <div class="w-full pb-4 px-[20px] flex justify-between items-center text-[#fff]">
      <!-- CARD BTN -->
      <div @click="btnClick"
        class="cursor-pointer w-full h-[50px] flex justify-between items-center px-[30px] py-[8px] bg-gradient-135 from-light-blue to-fuschia shadow-xl rounded-xl ">
        <button class="font-bold mr-[10px]"> Remove from Cart</button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-6 h-6" fill="#fff">
          <path
            d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
        </svg>
      </div>


    </div>
  </div>
</template>
