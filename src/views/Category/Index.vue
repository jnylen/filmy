<template>
    <div>
        <div class="w-full">
            <input class="bg-white w-full shadow py-4 px-4" placeholder="Sök filmtitel.." vue-model="query" @keyup.enter.native="search()" />
        </div>
        <div class="flex px-4 pr-4">
            <div class="text-gray-600 font-semibold pt-8 mx-auto" v-if="searched && results.length < 1">
                Inga resultat funna.
            </div>
            <div class="text-gray-600 font-semibold pt-8 mx-auto" v-if="!searched">
                Sök och hitta din drömfilm nu!
            </div>
        </div>

        
    </div>
</template>

<<script>
export default {
    data () {
        return {
            query: "",
            searched: false,
            results: []
        }
    },
    name: "Index",
    methods: {
        search() {
            axios.get("movies?q=" + this.query).then((result) => {
                this.searched = true
                this.results = result.data
            }).catch((err) => {
                console.log(err);
            });
        }
    }
}
</script>