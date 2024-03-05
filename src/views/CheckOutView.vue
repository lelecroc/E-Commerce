<script>
    
    import ProductCard from '@/components/ProductCard.vue'

    export default {
        components: {
            ProductCard
        }
    }

</script>



<template>
    <section>
        <!-- STEP 1 / EMPTY BASKET -->
        <div>Il tuo carrello è vuoto.</div>

        <!-- STEP 2 / FULL BASKET (AT LEAST 1 ITEM) -->
        <div class="flex flex-row justify-evenly">
            <div class="flex flex-col border-4 border-red-500 w-[70%]">
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
                    <!-- CHANGE PRODUCT CARDS IN IMAGES SOURCING FROM CARDS CONTENT -->
                    <div name="placeholderbox" class="flex w-[200px] h-[200px] bg-red-500 rounded-lg"></div>
                    <div class="flex flex-col m-4">
                        <h1>DESCRIZIONE</h1>
                        <h1>brutto</h1>
                        <h1>gattaccio</h1>
                        <h1>marpione</h1>
                    </div>
                </div>
            </div>
            <div class="border-4 border-green-500 w-[30%]">RECOMMENDED DACCE I SORDI</div>
        </div>

        <div>
        <!-- STEP 3 / CHECKOUT -->
        </div>

        <div>
        <!-- STEP 4 / CHECKOUT COMPLETED -->
        </div>

    </section>
</template>



<style>
   
</style>
