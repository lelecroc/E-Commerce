<script>
    import userData from '@/Jsons/products.json'

    export default {
        data() {
            return {
                users: userData
            }
        }
    }
</script>

<template>
    <img class="h-[300px] w-[300px]" :src="users.peluches.peluchePikachu.img"   alt="">
    <p>{{ users.peluches.peluchePikachu.title }}</p>
</template>