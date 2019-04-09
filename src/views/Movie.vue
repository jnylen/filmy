<template>
    <div class="bg-gray-300">
        <div class="flex flex-col" v-if="movie">
            <div class="w-full h-48" v-bind:style="{ backgroundImage: 'url(' + movie.landscape + ')' }">
            
            </div>
            <div class="bg-white shadow text-center">
                <h1 class="font-avenir py-4 text-lg font-bold text-brand-pink">{{movie.name}}</h1>
                <p class="px-4 pb-8 text-gray-800 leading-tight tracking-normal">
                    {{movie.synopsis}}
                </p>
                <span v-if="!locked" v-on:click="addToCart(movie)" class="-mb-8 mx-auto rounded bg-brand-pink px-6 py-3 text-white font-semibold shadow hover:bg-gray-800">
                    Köp för {{movie.price}}
                </span>
                <span v-if="locked" class="-mb-8 mx-auto rounded bg-gray-800 px-6 py-3 text-white font-semibold shadow">
                    Inlagd i kundvagnen!
                </span>
            </div>
        </div>

    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: "Movie",
    data () {
        return {
            movie: null
        }
    },
    computed: {
        locked() {
            return this.$store.getters.inCart(parseInt(this.$route.params.id))
        }
    },
    methods: {
        ...mapMutations({
            add_cart: 'ADD_CART' // map `this.add()` to `this.$store.commit('increment')`
        }),

        addToCart(movie) {
            this.add_cart(movie);

            this.locked = false;
        }
    },
    mounted () {
        var vm = this

        axios.get('movies/' + vm.$route.params.id).then((result) => {
            vm.movie = result.data
        }).catch((err) => {
            console.log(err);
        });
    }
}
</script>