<script>

</script>


<template>
    <!-- FOOTER -->
    <footer class="bg-fake-white mt-20 rounded-t-xl  ">
        <div class="mx-auto w-full max-w-screen-xl p-10 lg:p-12  ">
            <div class="md:flex md:justify-between">

                <div class=" mt-4 mb-2 md:mb-0 flex justify-center">
                    <RouterLink to="/">
                        <!-- LOGO PLACEHOLDER -->
                        <div class="flex items-center h-[100px] justify-center md:hidden lg:hidden" >
                        <img src="/src/assets/ball.svg" alt="logo" class="h-40">
                        </div>
                        <img src="/src/assets/logo.svg" alt="logo" class="h-[48px] hidden md:flex lg:flex">
                    </RouterLink>
                </div>

                <!-- RESOURCES ECC -->
                <div class=" flex justify-evenly text-center md:text-left">
                    <div class="">
                        <h2 class="mb-2 text-dark-gray text-[20px] font-bold ">Resources</h2>
                        <ul class="text-dark-gray font-medium text-[12px] md:text-[14px]">
                            <li class="mb-2">
                                <a href="https://vuejs.org/">Node.js / Vue.Js</a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/">Tailwind CSS</a>
                            </li>
                        </ul>
                    </div>



                </div>
            </div>

            <!-- <hr class="hidden md:flex my-2 sm:mx-auto lg:my-2" /> -->

            <!-- Icons and copyrights -->
            <div class="mt-10 items-center justify-center ">
                <div class="flex mt-4 justify-center items-center mb-2 ">
                <!--DISCORD-->
                <a href="https://github.com/ManuEmme" class="text-icon-gray hover:transition duration-300 ease-in-out hover:scale-[1.3]  ms-5">
                        <svg class="w-[26px] h-[26px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#3b3b3b"
                            viewBox="0 0 21 16">
                            <path
                                d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                        </svg>
                        <span class="sr-only">Discord community</span>
                </a>

                <!-- GITHUB -->
                <a href="https://github.com/lelecroc" class="text-zinc-300 hover:transition duration-300 ease-in-out hover:scale-[1.3] ms-5">
                        <svg class="w-[22px] h-[22px] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#3b3b3b"
                            viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">GitHub account</span>
                </a>
                </div>
                <div class=" flex items-center justify-center">

                <!-- copyrights Vuekemon-->
                <span class="text-sm text-dark-gray text-center">&copy; 2024 <a
                        href="https://flowbite.com/" class="hover:underline">Vuekemon™</a>. All Rights Reserved.
                </span>

                </div>
            </div>
        </div>
    </footer>


</template>