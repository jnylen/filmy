<template>
  <div class="home">
    <Logo class="text-center py-5 opacity-75" />

    <div class="pt-2 pl-4">
      <div class="text-brand-pink font-bold flex items-center pl-1">
        <h5>Kommande filmer</h5>
        <div class="text-brand-pink ml-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <circle data-name="Ellipse 2" cx="10" cy="10" r="10" transform="translate(2 2)" fill="rgba(253,179,204,0.4)"></circle><path data-name="Path 10" d="M10.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z" fill="rgba(235,82,134,0.6)"></path>
          </svg>        
        </div>
      </div>
      <div class="flex items-center pt-4">
        <MovieItem v-for="movie in upcoming" :movie="movie" :key="movie.id" />
      </div>
    </div>

    <div class="pt-8 pl-4 ">
      <div class="text-brand-pink font-bold flex items-center pl-1">
        <h5>Nyligen utkomna</h5>
        <div class="text-brand-pink ml-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <circle data-name="Ellipse 2" cx="10" cy="10" r="10" transform="translate(2 2)" fill="rgba(253,179,204,0.4)"></circle><path data-name="Path 10" d="M10.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z" fill="rgba(235,82,134,0.6)"></path>
          </svg>        
        </div>
      </div>
      <div class="flex items-center pt-4 overflow-x-auto">
        <MovieItem v-for="movie in recent" :movie="movie" :key="movie.id" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from "@/components/Logo.vue";
import MovieItem from "./MovieItem.vue"

export default {
  name: "home",
  components: {
    Logo,
    MovieItem
  },
  methods: {
    getCurrentDate () {
      const toTwoDigits = num => num < 10 ? '0' + num : num;
      let today = new Date();
      let year = today.getFullYear();
      let month = toTwoDigits(today.getMonth() + 1);
      let day = toTwoDigits(today.getDate());
      return `${year}-${month}-${day}`;
    }
  },
  data () {
    return {
      upcoming: [],
      recent: []
    }
  },
  mounted () {
    axios.get('movies?release_date_gte=' + this.getCurrentDate()).then((result) => {
      this.upcoming = result.data
    }).catch((err) => {
      console.log(err);
    });
    axios.get('movies?release_date_lte=' + this.getCurrentDate()).then((result) => {
      this.recent = result.data
    }).catch((err) => {
      console.log(err);
    });
  }
};
</script>
