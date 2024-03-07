<script>
import TemplateCard from '@/components/TemplateCard.vue'
import ProductData from "@/Jsons/products.json"

export default {
  data() {
    return {
      products: ProductData,
      container: [],
      counter: 0
    }
  },
  components: {
    TemplateCard
  },
  methods: {
    addPelucheToCart() {
      console.log(this.container)
    },
    updateCounter() {
      this.counter++
      console.log(this.counter)
    },
  }
}
</script>
<template>



  <!-- CART NOTIFICATION -->
  <div v-show="counter > 0"
    class="h-[25px] w-[25px] rounded-full bg-violet opacity-75 absolute top-[45px] right-[10px]"></div>
  <div v-show="counter > 0" class="font-semibold text-white text-custom-xs absolute top-[46px] right-[18px]">{{ counter
    }}</div>



  <!-- DJUMBO -->
  <section
    class="bg-gradient-[45deg] mt-[50px] md:mt-[100px] from-fuschia to-light-blue flex flex-col justify-center items-center md:flex md:flex-row md:px-[50px]">
    <!-- IMG -->
    <div class="flex justify-center items-center md:flex md:justify-center md:items-center">
      <img src="/src/assets/img/jumbo.png" alt="charmander" class="h-[300px] md:h-[350px] lg:h-[500px]">
    </div>
    <!-- div text -->
    <div
      class="text-center w-[350px] md:w-[300px] md:text-left lg:w-[400px] flex flex-col justify-center  md:justify-start md:ml-5 ">
      <h1
        class="font-serif text-dark-gary font-black text-[36px] md:text-[38px] md:leading-[44px] lg:text-[50px] lg:leading-[55px] leading-[40px] mb-2">
        Welcome to our Vuekémon Store</h1>
      <p class="font-medium text-desktop-xs mb-8 lg:text-[16px] text-gray-p">Welcome to our Vuekèmon Emporium, where
        adventure awaits at every corner! Immerse yourself in a world of wonder as you explore shelves adorned with a
        vibrant array of Vuekèmon merchandise. </p>

      <div class=" flex items-center justify-center lg:justify-start">
        <button
          class="mr-[10px] focus:outline-none rounded-xl border-2 border-fuschia font-semibold text-gray-p py-[10px] px-[20px] shadow-xl hover:scale-[1.1]">
          <a href="https://github.com/lelecroc/E-Commerce/blob/main/README.md" target="_blank"> About project
          </a></button>

        <button
          class="ml-[10px] focus:outline-none rounded-xl border-2 border-fuschia bg-fuschia font-semibold text-white py-[10px] px-[20px] shadow-xl hover:scale-[1.1]">
          <a href="https://vuejs.org/" target="_blank"> Get started </a></button>
      </div>
    </div>
  </section>

  <!-- PALLE-CATEGORIE -->
  <div
    class="font-serif font-semibold text-white text-[20px] flex md:text-[26px] lg:text-[32px] justify-center items-center gap-7 mt-[80px] mb-[130px] max-[430px]:flex-col md:gap-12">

    <!-- PELUCHE -->
    <a href="#peluches">
      <div
        class="rounded-full flex justify-center items-center bg-no-repeat bg-cover bg-light-blue bg-opacity-60 h-[125px] w-[125px] hover:transition delay-150 duration-300 ease-in-out hover:scale-[1.3] hover:text-icon-gray hover:bg-[url('/src/assets/img/Gif/Peluche.gif')] hover:bg-cover md:w-[170px] md:h-[170px] lg:w-[220px] lg:h-[220px]">

        <span
          class=" flex items-center justify-center rounded-full h-[125px] w-[125px] md:h-[170px] md:w-[170px] lg:w-[220px] lg:h-[220px] hover:bg-[rgba(0,0,0,0.4)]  ">Peluches</span>
      </div>
    </a>
    <!-- CARDS -->
    <a href="#cards">
      <div
        class="rounded-full flex justify-center items-center bg-no-repeat bg-cover bg-violet bg-opacity-60 h-[125px] w-[125px]  hover:transition delay-150 duration-300 ease-in-out hover:scale-[1.3] hover:text-icon-gray hover:bg-[url('/src/assets/img/Gif/CardGame.gif')] md:w-[170px] md:h-[170px] lg:w-[220px] lg:h-[220px]">
        <span
          class="flex items-center justify-center rounded-full h-[125px] w-[125px] md:h-[170px] md:w-[170px] lg:w-[220px] lg:h-[220px] hover:bg-[rgba(0,0,0,0.4)] ">Cards</span>
      </div>
    </a>
    <!-- GAMES -->
    <a href="#games">
      <div
        class="rounded-full flex justify-center items-center bg-fuschia bg-no-repeat bg-cover bg-opacity-60 h-[125px] w-[125px] hover:transition delay-150 duration-300 ease-in-out hover:scale-[1.3] hover:text-icon-gray hover:bg-[url('/src/assets/img/Gif/GamesRetro.gif')] md:w-[170px] md:h-[170px] lg:w-[220px] lg:h-[220px]">
        <span
          class="flex items-center justify-center rounded-full h-[125px] w-[125px] hover:bg-[rgba(0,0,0,0.4)] md:w-[170px] md:h-[170px] lg:w-[220px] lg:h-[220px]">Games</span>
      </div>
    </a>
  </div>


  <!-- E-COMMERCE SECTION -->
  <main>
    <ul>
      <!-- PELUCHES -->

      <a name="peluches">
        <h2 class="font-extrabold font-serif text-dark-gray text-center text-[35px] mb-[50px] ml-5">Peluches</h2>
      </a>
      <div data-aos="fade-up" data-aos-duration="500">
        <div class="flex overflow-x-auto pb-[50px]">
          <li class="ml-5" v-for="items in products.peluches">
            <!-- PELUCHES -->
            <TemplateCard @event="updateCounter" :title="items.title" :price="items.price" :imgSrc="items.img"
              path="peluche/" :spec="items.name" :imgAlt="items.title" imgClass="w-[150px] h-[150px] rounded-lg" />
          </li>
        </div>
      </div>


      <!-- CARD -->

      <a name="cards">
        <h2 class="text-dark-gray font-serif text-center font-extrabold text-[35px] ml-5 mt-[90px] mb-[50px] ">Cards
        </h2>
      </a>
      <div data-aos="fade-up" data-aos-duration="500">
        <div class="flex overflow-x-auto pb-[50px]">
          <li class="ml-5" v-for="items in products.cards">
            <!-- CARDS -->
            <TemplateCard @event="updateCounter" :title="items.title" :price="items.price" :imgSrc="items.img"
              path="card/" :spec="items.name" :imgAlt="items.title" imgClass="w-[150px] h-[150px] rounded-lg" />
          </li>
        </div>
      </div>

      <!-- GAMES -->

      <a name="games">
        <h2 class="text-dark-gray font-serif text-center font-extrabold text-[35px] ml-5 mt-[90px] mb-[50px]">Games</h2>
      </a>
      <!-- CARD -->
      <div data-aos="fade-up" data-aos-duration="500">
        <div class="flex overflow-x-auto pb-[50px]">
          <li class="ml-5" v-for="items in products.games">
            <!-- GAME -->
            <TemplateCard @event="updateCounter" :title="items.title" :price="items.price" :imgSrc="items.img"
              path="game/" :spec="items.id" :imgAlt="items.title" imgClass=" w-[150px] h-[150px] rounded-lg" />
          </li>
        </div>
      </div>


    </ul>
  </main>



  <!--TEAM-->
  <section class="flex flex-col justify-center items-center mb-[60px] mt-[100px]">
    <h2 class="mb-6 font-serif text-center text-[24px] text-dark-gray font-semibold  ">Our beautiful Team</h2>
    <ul class=" flex flex-wrap  justify-center text-dark-gray text-[14px]  ">
      <!-- EMA -->
      <div data-aos="fade-out" data-aos-duration="1000">
        <li class=" mx-[15px] flex flex-col justify-center items-center text-center -2">
          <a href="https://github.com/lelecroc" target=“_blank”>
            <div class="flex flex-col justify-center items-center ">
              <div class="shadow-xl h-[100px] w-[100px] bg-white flex items-center justify-center rounded-full mb-2">
                <font-awesome-icon icon="fish" class="text-[27px] text-icon-gray" />
              </div>
              <div class="text-dark-gray text-[13px] md:text-[16px] font-serif font-semibold">Emanuele</div>
            </div>
          </a>
        </li>
      </div>

      <!-- MARTI -->
      <div data-aos="fade-out" data-aos-duration="1000">
        <li class="mx-[15px] flex flex-col items-center justify-center text-center">
          <a href="https://github.com/MartinaZanzani" target=“_blank”>
            <div class="flex flex-col justify-center items-center ">
              <div class="shadow-xl h-[100px] w-[100px] bg-white flex items-center justify-center rounded-full mb-2">
                <font-awesome-icon icon="hippo" class="text-[27px] text-icon-gray" />
              </div>
              <div class="text-dark-gray text-[13px] md:text-[16px] font-serif font-semibold">Martina</div>
            </div>
          </a>
        </li>
      </div>

      <!-- CAPITANO -->
      <div data-aos="fade-out" data-aos-duration="1000">
        <li class="mx-[15px] flex flex-col text-center">
          <a href="https://github.com/diseasedavide" target=“_blank”>
            <div class="shadow-xl h-[100px] w-[100px] bg-white flex items-center justify-center rounded-full mb-2">
              <font-awesome-icon icon="otter" class="text-[27px] text-icon-gray" />
            </div>
            <div class="text-dark-gray text-[13px] md:text-[16px] font-serif font-semibold">Davide</div>
          </a>
        </li>
      </div>

      <!-- SARA -->
      <div data-aos="fade-out" data-aos-duration="1000">
        <li class="mx-[15px] flex flex-col text-center">
          <a href="https://github.com/saraobia" target=“_blank”>
            <div class="shadow-xl h-[100px] w-[100px] bg-white flex items-center justify-center rounded-full mb-2">
              <font-awesome-icon icon="dragon" class="text-[27px] text-icon-gray" />
            </div>
            <div class="text-dark-gray text-[13px] md:text-[16px] font-serif font-semibold">Sara</div>


          </a>
        </li>
      </div>

      <!-- EMANUEL -->
      <div data-aos="fade-out" data-aos-duration="1000">
        <li class="mx-[15px] flex flex-col text-center">
          <a href="https://github.com/ManuEmme" target=“_blank”>
            <div class="shadow-xl h-[100px] w-[100px] bg-white flex items-center justify-center rounded-full mb-2">
              <font-awesome-icon icon="spider" class="text-[27px] text-icon-gray" />
            </div>
            <div class="text-dark-gray text-[13px] md:text-[16px] font-serif font-semibold">Emanuel</div>
          </a>
        </li>
      </div>

      <!-- MARCE -->
      <div data-aos="fade-out" data-aos-duration="1000">
        <li class="mx-[15px] flex flex-col text-center">
          <a href="https://github.com/KyraelDev" target=“_blank”>
            <div class="shadow-xl h-[100px] w-[100px] bg-white flex items-center justify-center rounded-full mb-2">
              <font-awesome-icon icon="crow" class="text-[27px] text-icon-gray" />
            </div>
            <div class="text-dark-gray text-[13px] md:text-[16px] font-serif font-semibold">Marcello</div>
          </a>
        </li>
      </div>
    </ul>

  </section>
</template>
