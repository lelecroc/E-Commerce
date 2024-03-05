<script>
import userData from "@/Jsons/products.json";

export default {
  data() {
    return {
      users: userData,
      showLogin: false,
    };
  },
  methods: {
    showLoginFunc() {
        this.showLogin = !this.showLogin
    }
  }
};
</script>

<template>
  <!-- HEADER -->
  <header>
    <nav>
      <!-- DIV CONTAINER HEADER -->
      <div class="flex p-[10px] justify-between items-center">
        <!-- LOGO -->
        <RouterLink to="/" class="text-[30px] font-extrabold"
          >Vuekémon</RouterLink
        >

        <!-- lOGIN/SEARCH/CARRELLO -->
        <ul class="hidden p-[10px] md:flex">
          <li>
            <button name="login" @click="showLoginFunc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </button>
          </li>
          <li>
            <button name="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 ml-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </li>
          <li>
            <RouterLink name="checkout" to="/checkout">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 ml-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div v-show="showLogin" class="bg-slate-300/50 backdrop-blur-sm absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center">
        <button @click="showLoginFunc" class="flex justify-center items-center bg-white rounded-full w-[40px] h-[40px] text-center mx-4">X</button>
        <div class="flex justify-center items-center p-4 bg-white w-[50%] h-[50%] shadow-lg rounded-lg">
            
            <h1 class="text-black">DAJE CON STO FORM</h1>
        </div>
      </div>
    </nav>
  </header>
</template>
