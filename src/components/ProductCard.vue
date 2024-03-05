<!-- TO DO: rimuovere dimensioni fisse, sostituire dati dinamicamente -->
<script>

</script>

<template>
  <!-- Div container-->
  <div class="w-[300px] flex flex-col justify-center items-center shadow-2xl rounded-lg">
    <!-- Tag container + like -->
    <div class=" w-full p-[20px] flex flex-wrap items-center">
    <p class="mr-[10px] font-medium rounded-lg text-[10px] text-[#777] px-[10px] py-[7px] border ">Shipped in 3-4 days</p>
    <p class="font-medium rounded-lg text-[10px] text-[#777] px-[10px] py-[7px] border">Peluche</p>

  </div>
    <!-- img -->
    <img src="../assets/img/61pPlWKBhuL.jpg" alt="Pika" class="w-[200px] rounded-lg ">
    <!-- Description -->
    <div class="w-full py-[10px] px-[20px] flex justify-between items-center">
    <h6 class="text-[30px] font-bold text-[#3B3232]">Vueglipuff</h6>
    <h6 class="text-[20px] font-bold text-[#3B3232]">$45</h6>
  </div>


  <!-- Cart container -->
  <div class=" w-full px-[20px] mb-[30px] flex justify-between items-center text-[#fff]">
<!-- Cart -->
    <div class="flex items-center px-[30px] py-[8px] bg-gradient-to-r from-[#7AB4D6] to-[#CE88F0] shadow-lg rounded-lg ">
    <button class="font-bold mr-[10px]"> Add to Cart</button>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
    </div>

    <div class="p-[10px] bg-[#d1d1d1] rounded-full" >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="w-6 h-6">
  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
</svg>

</div>

  </div>
  </div>
</template>