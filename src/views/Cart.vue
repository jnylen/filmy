<template>
    <div class="bg-gray-200 h-screen">
        <h1 class="font-avenir text-brand-pink uppercase text-center text-xl pt-4">Kundvagn</h1>
        <div class="text-center px-4 pt-8 font-avenir font-semibold text-sm text-gray-700" v-if="!cart.length">
            Inget i kundvagnen
        </div>

        <div class="flex flex-col px-4 pt-8" v-if="cart.length">
            <div class="border-b border-gray-400 pb-8 mb-8">
                <div class="flex h-24 bg-white shadow rounded items-center mb-2" v-for="(movie, index) in cart" :key="index">
                    <div class="h-24">
                        <img class="h-24 rounded-l" :src="movie.poster" />
                    </div>
                    <div class="pl-4">
                        <h1 class="font-bold font-avenir text-lg">{{movie.name}}</h1>
                        <p class="font-bold font-avenir text-sm pt-2 text-gray-600">{{movie.price}} SEK - Släppt {{movie.release_date}}</p>
                    </div>
                    <div class="flex-1 text-right pr-4">
                        <span class="" v-on:click="remove_cart(index)">X</span>
                    </div>
                </div>
            </div>
            <div class="flex justify-between px-8">
                <span class="text-gray-600">Frakt</span>
                <span class="font-bold">{{shipping_fee}} SEK</span>
            </div>
            <div class="flex flex-col text-center">
                <span class="text-gray-700">Summa</span>
                <span class="text-2xl font-bold">{{total}} SEK</span>
            </div>
            <div class="text-center pt-8">
                <span class="bg-brand-pink shadow rounded px-6 py-3 text-white font-bold" href="#">
                    Betala nu
                </span>
            </div>
        </div>
    
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: "Cart",
    data() {
        return {
            cart: [],
            shipping_fee: 49
        }
    },
    mounted() {
        var vm = this
        vm.cart = this.$store.state.cart;
    },
    methods: {
        ...mapMutations({
            remove_cart: 'REMOVE_CART' // map `this.add()` to `this.$store.commit('increment')`
        })
    },
    computed: {
        total() {
            var hello = this.cart.reduce(function(sum, od) {
                return sum + Number(od.price);
            }, 0);

            console.log(hello);

            return this.shipping_fee + hello || 0;

        }
    }
}
</script>