<template>
  <div>
    <div class="w-full">
      <input
        class="bg-white w-full shadow py-4 px-4"
        placeholder="Sök filmtitel.."
        v-model="query"
        @keyup.enter.native="debouncedSearch()"
      >
    </div>
    <div class="flex px-4 pr-4">
      <div
        class="text-gray-600 font-semibold pt-8 mx-auto"
        v-if="searched && results.length < 1"
      >Inga resultat funna.</div>
      <div
        class="text-gray-600 font-semibold pt-8 mx-auto"
        v-if="!searched"
      >Sök och hitta din drömfilm nu!</div>
      <div class="flex flex-wrap px-4 py-4" v-if="searched && results.length > 0">
        <MovieItem v-for="movie in results" class :key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<<script>
import MovieItem from "@/views/MovieItem.vue";

export default {
    components: {
        MovieItem
    },
    data () {
        return {
            query: "",
            searched: false,
            results: []
        }
    },
    created: function () {
        // _.debounce is a function provided by lodash to limit how
        // often a particularly expensive operation can be run.
        this.debouncedSearch = _.debounce(this.search, 500)
    },
    name: "Index",
    methods: {
        search() {
            var vm = this

            axios.get("movies?q=" + this.query).then((result) => {
                vm.searched = true
                vm.results = result.data
            }).catch((err) => {
                vm.results = []
                console.log(err);
            });
        }
    },
    watch: {
        query (newValue, oldValue) {
            if(newValue != oldValue && newValue.length > 2) {
                this.debouncedSearch()
            }
        }
    },
}
</script>