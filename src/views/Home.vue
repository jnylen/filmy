<template>
  <div class="home">
    <Logo class="text-center py-5 opacity-75" />

    <div class="pt-2">
      <h5>Kommande filmer</h5>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from "@/components/Logo.vue";

export default {
  name: "home",
  components: {
    Logo
  }
};
</script>
