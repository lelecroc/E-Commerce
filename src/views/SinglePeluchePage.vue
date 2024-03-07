<script>
import ProductData from "@/Jsons/products.json"

export default {
    data() {
        return {
            products: ProductData,
            peluches: ProductData.peluches,
            pokemonName: this.$route.params.name.toLowerCase(),
            dataContainer: []
        }
    },
    mounted() {
        console.log(this.$route.params.name);
    },
    updated(){
        console.log(this.$route.params.name);

    },
    methods: {


    }
}




</script>

<template>
    <!-- ARTICLE SECTION -->
    <main class="flex my-[100px] md:flex items-center justify-center">
    <div v-for="peluche in peluches">
        <div class="flex flex-col md:flex-row items-center justify-center" v-show="this.$route.params.name == peluche.name">
            <!-- IMG -->
            <div class="flex justify-center items-center">
                <img :src="'.' + peluche.img" :alt="peluche.title" class="w-[250px] md:w-[300px] lg:w-[350px]">
            </div>
            <!-- TEXT CONTENT -->
            <div class="text-center md:text-left text-dark-gray w-[350px] md:w-[400px] lg:w-[500px] flex flex-col justify-around">
                <p class="mb-[20px] md:mb-[0px] text-[16px] md:text-[18px] font-bold ">{{ peluche.price }} €</p>
                <div class="mb-[50px]">
                    <h2 class="text-[30px] text-black-gray font-bold md:text-[36px] lg:text-[40px]"> {{ peluche.title }} </h2>
                    <p class="text-[16px] text-gray-p"> {{ peluche.description }} </p>
                    <p class="text-[14px]">Material: {{ peluche.material }}</p>
                </div>
                <!-- BTN -->
                    <div class="w-[350px] md:w-[380px] lg:w-[480px] flex items-center justify-center md:justify-end ">
                        <div class="w-[200px] h-[45px] flex flex-end items-center px-[30px] py-[8px] bg-gradient-135 from-light-blue to-fuschia shadow-xl rounded-xl">
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


    <!-- LIKE ALSO-->
    <section>

        <div>
            <h1 class="text-desktop-2xl font-bold ml-5">Prodotti simili</h1>
            <ul class="overflow-x-auto h-[480px] flex pb-2 pt-5">
                <li v-for="items in peluches" class="ml-5">
                    <div class="w-[300px] h-[420px] flex flex-col justify-center items-center shadow-xl rounded-lg "
                        v-show="this.$route.params.name !== items.name">
                        <!-- Description -->
                        <div class="w-full py-[10px] px-[20px] flex justify-between items-center">
                            <div>
                                <RouterLink :to="'/peluche/' + items.name">
                                    <h6 class="text-[24px] font-bold text-[#3B3232] mb-[-10px]">{{ items.title }}</h6>
                                </RouterLink>
                                <h6 class="text-[18px] font-medium text-[#3B3232]">{{ items.price }} €</h6>
                            </div>
                            <div class="p-[10px] bg-[#d1d1d1] rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="w-6 h-6">
                                    <path
                                        d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                </svg>

                            </div>
                        </div>

                        <!-- img -->
                        <div class="w-[150px] h-[200px] rounded-lg">
                            <img :src="'.' + items.img" :alt="items.name">
                        </div>




                        <!-- Cart container -->
                        <div class=" w-full px-[20px] mb-[30px] flex justify-between items-center text-[#fff]">
                            <!-- Cart -->
                            <div
                                class="w-full flex justify-between items-center px-[30px] py-[8px] bg-gradient-to-r from-[#7AB4D6] to-[#CE88F0] shadow-xl rounded-xl ">
                                <button class="font-bold mr-[10px]"> Add to Cart</button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="#fff" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </div>


                        </div>
                    </div>
                </li>
            </ul>
        </div>

    </section>
</template>