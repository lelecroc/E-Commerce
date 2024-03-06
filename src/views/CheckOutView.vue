<script>
    import CardCheckOut from '@/components/CardCheckOut.vue';
    import ProductCard from '@/components/ProductCard.vue';
    import GamesCard from '@/components/GamesCard.vue';
    import ProductData from "@/Jsons/products.json"

    export default {
        components: {
            CardCheckOut,
            ProductCard,
            GamesCard
        },
        data() {
            return {
                products: ProductData,
                games: ProductData.games,
                bool: false
            }
        }
    }
</script>



<template>
    <section>
        <!-- STEP 1 / EMPTY BASKET -->
        <!-- TO DO: REMOVE FAKE CONDITION -->
        <div v-show="bool">Il tuo carrello è vuoto.</div>

        <!-- STEP 2 / FULL BASKET (AT LEAST 1 ITEM) -->
        <div class="max-w-[1000px] m-auto flex flex-row justify-evenly p-4">
            <div class="flex flex-col">
                <!-- (COMPONENT) PRODUCT CARD  -->
                <CardCheckOut class="mb-6"/>
                <CardCheckOut class="mb-6"/>
                <CardCheckOut class="mb-6"/>
            </div>


            <!-- YOUR FAVOURITE STUFF -->
            <div class="w-[300px] flex flex-col justify-center">
                <h1 class=" font-bold text-[#3b3b3b] text-[30px]">Your favorite stuff</h1>
                <p class="mb-[50px]"> Immerse yourself in a shopping experience tailored to your unique tastes and preferences. </p>

                <!-- CARD FOR YOUR FAVOURITE STUFF-->
                <ul class="pb-2 pt-5">
                    <li v-for="(game, i) in games" class="ml-5">
                    <div v-if="i < 2 " class="w-[300px] flex flex-col justify-center items-center shadow-xl rounded-lg">
                        <!-- Description -->
                        <div class="w-full py-[10px] px-[20px] flex justify-between items-center">
                        <div>
                            <h6 class="text-[24px] font-bold text-[#3B3232] mb-[-10px]">{{ game.title }}</h6>
                            <h6 class="text-[18px] font-medium text-[#3B3232]">{{ game.price }} €</h6>
                        </div>
                        <div class="p-[10px] bg-[#d1d1d1] rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="w-6 h-6">
                            <path
                                d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>

                        </div>
                        </div>

                        <!-- img -->
                        <img :src="game.img" alt="Pika" class="w-[200px] rounded-lg">



                        <!-- Cart container -->
                        <div class=" w-full px-[20px] mb-[30px] flex justify-between items-center text-[#fff]">
                        <!-- Cart -->
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
            </div>

        </div>

        <!-- STEP 3 / CHECKOUT -->
        <div class="flex flex-col rounded-lg shadow-lg p-6 bg-white">
            <h2 class="text-xl font-bold mb-4 text-black">Checkout</h2>
            <div class="mb-4">
                <label for="indirizzoConsegna" class="block text-gray-700 text-sm font-bold mb-2">Indirizzo di consegna:</label>
                <input type="text" id="indirizzoConsegna" name="indirizzoConsegna" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Inserisci il tuo indirizzo">
            </div>
            <div class="mb-4">
                <label for="modalitaPagamento" class="block text-gray-700 text-sm font-bold mb-2">Modalità di pagamento:</label>
                <select id="modalitaPagamento" name="modalitaPagamento" class="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                    <option>Carta di credito/debito</option>
                    <option>PayPal</option>
                    <option>Bonifico bancario</option>
                </select>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Articoli:</label>
                <div class="space-y-2">
                    <!-- LISTA OGGETTI DINAMICA -->
                    <!-- ESEMPIO ELEMENTO LISTA -->
                    <div class="flex justify-between items-center">
                        <span>Nome prodotto</span>
                        <div>
                            <select class="border py-1 px-2 text-gray-700">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <button class="bg-red-500 text-white py-1 px-2 rounded">x</button>
                        </div>
                    </div>
                    <!-- FINE ESEMPIO ELEMENTO LISTA -->
                </div>
            </div>
            <div class="text-gray-600">
                <div class="flex justify-between my-2">
                    <span>Subtotale:</span>
                    <span>€XXX,XX</span>
                </div>
                <div class="flex justify-between my-2">
                    <span>Spedizione:</span>
                    <span>€X,XX</span>
                </div>
                <div class="flex justify-between my-2">
                    <span>Totale:</span>
                    <span>€YYY,YY</span>
                </div>
            </div>
            <div class="flex justify-between mt-4">
                <button @click="completePurchase" class="bg-blue-500 text-white p-2 rounded-lg">Acquista ora</button>
                <button class="bg-red-500 text-white p-2 rounded-lg">Annulla</button>
            </div>
        </div>
        <!-- STEP 4 / CHECKOUT COMPLETED -->
        <div v-if="purchaseCompleted" class="flex flex-col items-center justify-center p-4">
            <h2 class="text-lg font-bold my-2">Grazie per il tuo acquisto!</h2>
            <p>Il tuo ordine è stato completato con successo.</p>
            <router-link to="/" class="bg-green-500 text-white p-2 rounded-lg my-4">Torna alla Home</router-link>
        </div>
    </section>
</template>

