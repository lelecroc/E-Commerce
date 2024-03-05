<script>

    import ProductCard from '@/components/ProductCard.vue'

    export default {
        components: {
            ProductCard
        },
        data() {
            return {
                purchaseCompleted: false
            }
        },
        methods: {
            completePurchase() {
                this.purchaseCompleted = true;
            }
        }
    }

</script>



<template>
    <section>
        <!-- STEP 1 / EMPTY BASKET -->
        <div>Il tuo carrello è vuoto.</div>

        <!-- STEP 2 / FULL BASKET (AT LEAST 1 ITEM) -->
        <div class="flex flex-row justify-evenly">
            <div class="w-[70%]">
                <div class="flex justify-start items-center mx-4 my-6 h-[200px]">
                    <!-- CHANGE PRODUCT CARDS IN IMAGES SOURCING FROM CARDS CONTENT -->
                    <div name="placeholderbox" class="flex w-[200px] h-[200px] bg-red-500 rounded-lg"></div>
                    <div class="flex flex-col m-4">
                        <h1>DESCRIZIONE</h1>
                        <h1>brutto</h1>
                        <h1>gattaccio</h1>
                        <h1>marpione</h1>
                    </div>
                </div>
                <div class="flex justify-start items-center mx-4 my-6 h-[200px]">
                    <!-- INSERISCI IMMAGINI CARTE QUI -->
                    <div name="placeholderbox" class="flex w-[200px] h-[200px] bg-red-500 rounded-lg"></div>
                    <div class="flex flex-col m-4">
                        <h1>DESCRIZIONE</h1>
                        <h1>brutto</h1>
                        <h1>gattaccio</h1>
                        <h1>marpione</h1>
                    </div>
                </div>
                <div class="flex justify-start items-center mx-4 my-6 h-[200px]">
                    <!-- INSERISCI IMMAGINI CARTE QUI -->
                    <div name="placeholderbox" class="flex w-[200px] h-[200px] bg-red-500 rounded-lg"></div>
                    <div class="flex flex-col m-4">
                        <h1>DESCRIZIONE</h1>
                        <h1>brutto</h1>
                        <h1>gattaccio</h1>
                        <h1>marpione</h1>
                    </div>
                </div>
            </div>
            <div class="border-4 border-green-500 w-[30%]">
                RECOMMENDED DACCE I SORDI
                <div>ALTRI OGGETTI CHE POTREBBERO INTERESSARTI:</div>
                <!-- inserire qui elementi aggiuntivi -->
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



<style>

</style>