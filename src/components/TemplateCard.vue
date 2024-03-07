<script>

export default {
    data() {
        return {
            isClickedHeart: false,
            isClickedUnlike: false,
        }
    },
    methods: {

        emitCounter() {
        this.$emit("event")
        },
        heartClick() {
        this.isClickedHeart = !this.isClickedHeart;
        },

        unlikeClick() {
        this.isClickedUnlike = !this.isClickedUnlike;
        }

    },
    props: ["imgSrc", "imgAlt", "title", "price", "path", "spec", "divClass", "imgClass"
    ]
}
</script>


<template>
    <div class="w-[300px] h-[430px] flex flex-col justify-between items-center shadow-xl rounded-lg">

        <div class="w-full pt-[20px] px-[20px] flex justify-between items-center">

            <!-- CONTAINER ICONS-->
            <div class="flex justify-between items-center w-screen px-[10px]">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"fill="#d1d8e0" :class="{ 'fill-light-blue': isClickedHeart }"   @click="heartClick" class="w-6 h-6 cursor-pointer hover:transition duration-300 ease-in-out hover:scale-[1.2]"> >
                    <path d="M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" />
                    </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d1d8e0" :class="{ 'fill-fuschia': isClickedUnlike }"   @click="unlikeClick" class="w-6 h-6 cursor-pointer hover:transition duration-300 ease-in-out hover:scale-[1.2]">
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
            <div @click="emitCounter"
                class="cursor-pointer w-full h-[50px] flex justify-between items-center px-[30px] py-[8px] bg-gradient-135 from-light-blue to-fuschia shadow-xl rounded-xl ">
                <button class="font-bold mr-[10px]"> Add to Cart</button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff"
                    class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </div>


        </div>
    </div>
</template>