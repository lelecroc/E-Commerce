<script>
import TestData from "@/Jsons/test.json"

export default {
  data() {
    return {
      showLogin: false,
      checkOk: false,
      testlist: TestData,
      accountName: "",
      loginError: false
    };
  },
  methods: {
    showLoginFunc() {
      this.showLogin = !this.showLogin
    },
    checkOver() {
      this.checkOk = !this.checkOk
    },
    callError() {
      this.loginError = !this.loginError
    },
    checkLogin() {
      for (let i = 0; i < TestData.users.length; i++) {
        if (TestData.users[i].user == userInput.value && TestData.users[i].password == passInput.value) {
          console.log("ciao")
          this.checkOver()
          this.showLoginFunc()
          break
        } else {
          this.callError()
          break
        }

      }

    },
    refreshPage() {
      location.reload()
    }
  }
}
</script>

<template>

  <!-- HEADER -->
  <header>
    <!-- BANNER -->
    <div class="h-[35px] bg-[#79c5ef] text-white font-bold items-center justify-center flex ">
      <p>Nuovi articoli in arrivo solo oggi 22/06/33</p>
    </div>
    <nav class=" px-[10px] bg-[#fff] rounded-b-xl shadow-md">
      <!-- DIV CONTAINER HEADER -->
      <div class="flex py-[14px] p-[10px] justify-between items-center">
        <!-- LOGO -->
        <RouterLink to="/" class="text-[30px] text-[#181818] font-extrabold"><img src="/src/assets/logo.svg" alt="logo"
            class="h-[40px] md:h-[44px] lg:h-[48px]">
        </RouterLink>

        <!-- lOGIN/SEARCH/CARRELLO -->
        <ul class="flex justify-center mt-[5px] p-[10px]">
          <li class="flex">
            <div v-show="checkOk" class="mr-4">
              <p class="font-sans">Bentornato, <span class="font-bold">{{ accountName }}</span></p>
            </div>
            <button name="login" @click="showLoginFunc">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </button>
          </li>

          <li>
            <RouterLink name="checkout" to="/checkout">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 ml-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div v-show="showLogin"
        class="bg-slate-300/50 backdrop-blur-sm absolute z-10 top-0 right-0 left-0 bottom-0 flex justify-center items-center">
        <button @click="showLoginFunc"
          class="flex justify-center items-center bg-white rounded-full w-[40px] h-[40px] text-center mx-4">X</button>
        <div class="flex flex-col justify-center items-center p-4 bg-white shadow-lg rounded-lg h-[60%] w-[50%]">
          <div class="mb-10">
            <img src="/src/assets/logo.svg" alt="logo" class="h-[40px] md:h-[44px] lg:h-[48px]">
          </div>
          <div class="flex gap-4">
            <div class="flex flex-col justify-center items-center">
              <div class="mb-7">
                <p class="font-bold">Username</p><input type="text" placeholder="Username.."
                  class="border-2 rounded-lg py-1 px-2" id="userInput" v-model="accountName">
              </div>
              <div>
                <p class="font-bold">Password</p><input type="password" placeholder="Password.."
                  class="border-2 rounded-lg py-1 px-2" id="passInput">
              </div>
            </div>
            <div class="flex justify-center items-center md:flex md:justify-center md:items-center">
              <img src="/src/assets/img/jumbo.png" alt="charmander" class="h-[100px] md:h-[150px] lg:h-[200px]">
            </div>
          </div>
          <div class="mt-10">
            <button @click="checkLogin"
              class="mr-[10px] focus:outline-none rounded-xl border-2 border-fuschia font-semibold text-gray-p py-[10px] px-[20px] shadow-xl">Login</button>
            <button @click="refreshPage" v-show="checkOk"
              class="ml-[10px] focus:outline-none rounded-xl border-2 border-fuschia bg-fuschia font-semibold text-white py-[10px] px-[20px] shadow-xl">Logout</button>
          </div>
          <div v-show="loginError">
            <p class="text-red-600 mt-10">Wrong username and/or password</p>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
