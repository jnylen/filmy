<template>
    <div class="bg-white reverse-shadow fixed bottom-0 left-0 w-full pb-2 pt-3 flex justify-around navigation items-center px-4">
        <router-link tag="div" class="flex flex-col items-center fill-current" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="20.001" height="20.001"><path data-name="Path 1" d="M7.001 20.001h-4a1 1 0 0 1-1-1v-10l8-8 8 8v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1zm3-9a2 2 0 1 0-2-2 2 2 0 0 0 2 2z"/><path data-name="Path 2" d="M10.011 2.421l-8.3 8.3a1 1 0 0 1-1.42-1.41l9.02-9.02a1 1 0 0 1 1.41 0l8.99 9.02a1 1 0 1 1-1.42 1.41l-8.28-8.3z"/></svg>
            <span class="pt-1">
                Start
            </span>
        </router-link>
        <router-link tag="div" class="flex flex-col items-center fill-current" to="/movies">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18"><path data-name="Path 3" d="M2 0h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2.006 2.006 0 0 1 2-2zm0 2v2h2V2zm0 4v2h2V6zm0 4v2h2v-2zm0 4v2h2v-2zM16 2v2h2V2zm0 4v2h2V6zm0 4v2h2v-2zm0 4v2h2v-2z"/><path data-name="Path 4" d="M7 2h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 8h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" /></svg>
            <span class="pt-1">
                Filmer
            </span>
        </router-link>
        <router-link tag="div" class="flex flex-col items-center fill-current" to="/cart">
            <div class="relative px-2">
                <div class="absolute top-0 right-0 leading-none bg-brand-pink text-white badge" v-if="amountCart">
                    {{amountCart}}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18.006" height="20"><path data-name="Path 5" d="M2.003 6h14a1 1 0 0 1 1 .92l1 12a1 1 0 0 1-1 1.08h-16a1 1 0 0 1-1-1.08l1-12a1 1 0 0 1 1-.92z"/><path data-name="Path 6" d="M6.003 8a1 1 0 0 1-2 0V5a5 5 0 1 1 10 0v3a1 1 0 0 1-2 0V5a3 3 0 1 0-6 0z"/></svg>

            </div>

            <span class="pt-1">
                Kundvagn
            </span>
        </router-link>
        <router-link tag="div" class="flex flex-col items-center fill-current" to="/account">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20"><path data-name="Path 7" d="M8 14.73V16a1 1 0 0 0 2 0v-1.27a2 2 0 1 0-2 0zM2 8h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-8a2.006 2.006 0 0 1 2-2z"/><path data-name="Path 8" d="M9 17a1 1 0 0 0 1-1v-1.27A2 2 0 0 0 9 11V8h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9zm5-12a1 1 0 0 1-2 0 3 3 0 1 0-6 0v3H4V5a5 5 0 1 1 10 0z"/></svg>
            <span class="pt-1">
                Konto
            </span>
        </router-link>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'amountCart'
        ]),
        ...mapState(['loading'])
    },
    name: "Navigation"
}
</script>

<style>

</style>