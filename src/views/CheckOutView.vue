<script>
import CardCheckOut from '@/components/CardCheckOut.vue';
import ProductCard from '@/components/ProductCard.vue';
import GamesCard from '@/components/GamesCard.vue';
import ProductData from "@/Jsons/products.json"
import TemplateCard from "@/components/TemplateCard.vue"

export default {
    components: {
        CardCheckOut,
        ProductCard,
        GamesCard,
        TemplateCard
    },
    data() {
        return {
            products: ProductData,
            games: ProductData.games,
            bool: false,
            purchaseCompleted: false,
            address: "",
            num1: 0,
            num2: 0,
            num3: 0,
            sum: 0,
            show1: true,
            show2: true,
            show3: true
        }
    },
    mounted() {

        this.randomNum();


    },
    methods: {
        randomNum() {
            this.num1 = Math.floor(Math.random() * 9);
            console.log(this.num1)
            this.num2 = Math.floor(Math.random() * 9);
            console.log(this.num2)
            this.num3 = Math.floor(Math.random() * 9);
            console.log(this.num3)
        },
        cardRemover1() {
            this.show1 = !this.show1

        },
        cardRemover2() {
            this.show2 = !this.show2

        },
        cardRemover3() {
            this.show3 = !this.show3

        },
        buyNow() {
            this.purchaseCompleted = !this.purchaseCompleted
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
            <div class="flex flex-row justify-center gap-60 my-10 h-[1300px]">
                <div class="flex flex-col">
                    <ul>
                        <div v-show="show1">
                            <li v-for="(items, i) in products.peluches">
                                <CardCheckOut v-if="i === num1" class="mb-6" :title="items.title" :price="items.price"
                                    :imgSrc="items.img" path="peluche/" :spec="items.name"
                                    imgClass="w-[150px] h-[150px]" @remove="cardRemover1" />
                            </li>
                        </div>
                        <div v-show="show2">
                            <li v-for="(items, i) in products.games">
                                <CardCheckOut v-if="i === num2" class="mb-6" :title="items.title" :price="items.price"
                                    :imgSrc="items.img" path="peluche/" :spec="items.name"
                                    imgClass="w-[150px] h-[150px]" @remove="cardRemover2" />
                            </li>
                        </div>
                        <div v-show="show3">
                            <li v-for="(items, i) in products.cards">
                                <CardCheckOut v-if="i === num3" class="mb-6" :title="items.title" :price="items.price"
                                    :imgSrc="items.img" path="peluche/" :spec="items.name"
                                    imgClass="w-[150px] h-[200px]" @remove="cardRemover3" />
                            </li>
                        </div>

                    </ul>
                </div>


                <!-- YOUR FAVOURITE STUFF -->
                <div class="w-[300px] h-[450px] flex flex-col justify-between">
                    <h1 class=" font-bold text-[#3b3b3b] text-[30px]">Your favorite stuff</h1>
                    <p class="mb-[50px]"> Immerse yourself in a shopping experience tailored to your unique tastes and
                        preferences. </p>

                    <!-- CARD FOR YOUR FAVOURITE STUFF-->
                    <ul class="pb-2 pt-5">
                        <li v-for="(items, i) in products.games" class="ml-5 mb-3">
                            <TemplateCard v-if="i < 2" :title="items.title" :price="items.price" :imgSrc="items.img"
                                path="game/" :spec="items.id" imgClass="w-[150px] h-[200px] rounded-lg" />
                        </li>
                    </ul>
                </div>

            </div>
        <!-- STEP 3 / CHECKOUT -->
        <div v-show="!purchaseCompleted" class="flex flex-col rounded-lg shadow-lg p-6 bg-white mt-9">
            <h2 class="text-xl font-bold mb-4 text-black">Checkout</h2>
            <div class="mb-4">
                <!-- <label for="indirizzoConsegna" class="block text-gray-700 text-sm font-bold mb-2">Indirizzo di
                    consegna:</label> -->
                <input type="text" v-model="address"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Inserisci il tuo indirizzo">
            </div>
            <div class="mb-4">
                <label for="modalitaPagamento" class="block text-gray-700 text-sm font-bold mb-2">Modalità di
                    pagamento:</label>
                <select id="modalitaPagamento" name="modalitaPagamento"
                    class="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                    <option>Carta di credito/debito</option>
                    <option>PayPal</option>
                    <option>Bonifico bancario</option>
                </select>
            </div>
            <div>
                <div class="text-gray-600">
                    <div class="flex justify-between my-2">
                        <p>Subtotale: </p>
                        <span>€XXX,XX</span>
                    </div>
                    <div class="flex justify-between my-2">
                        <span>Spedizione: {{ address }}</span>
                        <span>€5,00</span>
                    </div>
                    <div class="flex justify-between my-2">
                        <span>Totale:</span>
                        <span>€YYY,YY</span>
                    </div>
                </div>
            </div>

            <div class="flex justify-between mt-4">
                <button @click="buyNow" class="bg-blue-500 text-white p-2 rounded-lg">Acquista ora</button>
                <button class="bg-red-500 text-white p-2 rounded-lg">Annulla</button>
            </div>
        </div>
        <!-- STEP 4 / CHECKOUT COMPLETED -->
        <div v-if="purchaseCompleted" class="flex flex-col items-center justify-center p-4 mt-56">
            <h2 class="text-lg font-bold my-2">Grazie per il tuo acquisto!</h2>
            <p>Il tuo ordine è stato completato con successo.</p>
            <router-link to="/" class="bg-green-500 text-white p-2 rounded-lg my-4">Torna alla Home</router-link>
        </div>
    </section>
</template>