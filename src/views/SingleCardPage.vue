<script>
import ProductData from "@/Jsons/products.json"
// import axios from "axios"

export default {
    data() {
        return {
            products: ProductData,
            cards: ProductData.cards,
            counter: 0
        }
    }, methods: {
        emitCounter() {
            this.$emit("event")
        },
        updateCounter() {
            this.counter++
            console.log(this.counter)
        },
        mounted() {
            console.log(this.$route.params.name)
        }
    }
}
</script>

<template>

    <!-- CART NOTIFICATION -->
    <div v-show="counter > 0"
        class="h-[25px] w-[25px] rounded-full bg-violet opacity-75 absolute top-[45px] right-[10px]"></div>
    <div v-show="counter > 0" class="font-semibold text-white text-custom-xs absolute top-[46px] right-[18px]">{{
        counter
    }}</div>


    <!-- ARTICLE SECTION -->
    <main class=" flex mt-[40px] mb-[80px] md:mt-[60px] md:flex items-center justify-center">
        <div v-for="card in cards">
            <div class="flex flex-col md:flex-row items-center justify-center"
                v-show="this.$route.params.name == card.name">
                <!-- IMG -->
                <div
                    class="flex justify-center items-center w-[400px] h-[400px] md:w-[400px] lg:w-[400px] lg:h-[450px] ">
                    <img :src="'.' + card.img" :alt="card.title" class="w-[200px] md:w-[250px] lg:w-[300px]">
                </div>
                <!-- TEXT CONTENT -->
                <div
                    class="text-center md:text-left text-dark-gray w-[350px] md:w-[400px] lg:w-[500px] flex flex-col justify-around">
                    <p class="mb-[20px] md:mb-[0px] text-[16px] md:text-[18px] font-bold ">{{ card.price }} €</p>
                    <div class="mb-[50px]">
                        <h2 class="text-[30px] text-black-gray font-bold md:text-[36px] lg:text-[40px]"> {{ card.title
                            }} </h2>
                        <p class="text-[16px] text-gray-p"> {{ card.description }} </p>
                    </div>
                    <!-- BTN -->
                    <div class="w-[350px] md:w-[380px] lg:w-[480px] flex items-center justify-center md:justify-end ">
                        <div @click="updateCounter"
                            class="cursor-pointer w-[200px] h-[45px] flex flex-end items-center px-[30px] py-[8px] bg-gradient-135 from-light-blue to-fuschia shadow-xl rounded-xl">
                            <button class="font-bold mr-[10px] text-white"> Add to Cart</button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#fff" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- ALSO LIKE -->
    <section>
        <h1 class="text-center text-[36px] font-serif text-dark-gray font-bold">You might also like it</h1>
        <!-- LIST -->
        <ul class="overflow-x-auto h-[480px] flex pb-2 pt-5">

            <li v-for="items in cards" class="ml-5">
                <!-- CARD -->
                <div class="w-[300px] h-[420px] flex flex-col justify-center items-center shadow-xl rounded-lg "
                    v-show="this.$route.params.name !== items.name">

                    <!-- CONTAINER ICONS-->
                    <div class="w-[250px] flex justify-between items-center  px-[10px]">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d1d8e0" class="w-6 h-6">
                            <path
                                d="M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d1d8e0" class="w-6 h-6">
                            <path
                                d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                    </div>



                    <!-- IMG -->
                    <RouterLink :to="'/card/' + items.name">
                        <div class="w-[200px] h-[200px] flex items-center justify-center">
                            <div class="w-[100px]  rounded-lg">
                                <img :src="'.' + items.img" :alt="items.name">
                            </div>
                        </div>
                    </RouterLink>
                    <!-- TEXT CONTENT -->

                    <div class="w-[230px] text-center">
                        <RouterLink :to="'/card/' + items.name">
                            <h6 class="text-[18px] font-medium text-[#3B3232]">{{ items.price }} €</h6>
                            <h6 class="text-[24px] font-bold text-[#3B3232] pb-4">{{ items.title }}</h6>
                        </RouterLink>
                    </div>

                    <!-- CARD END -->
                    <div class="w-full pb-4 px-[20px] flex justify-between items-center text-[#fff]">
                        <!-- CARD BTN -->
                        <div @click="emitCounter"
                            class="cursor-pointer w-full h-[50px] flex justify-between items-center px-[30px] py-[8px] bg-gradient-135 from-light-blue to-fuschia shadow-xl rounded-xl ">
                            <button class="font-bold mr-[10px]"> Add to Cart</button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#fff" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </div>

                    </div>
                </div>
            </li>
        </ul>

    </section>
</template>