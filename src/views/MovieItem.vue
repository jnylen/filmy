<template>
    <div class="pr-2 w-64">
        <router-link :to="{ name: 'Movie', params: { id: movie.id }}" tag="div" class="relative flex justify-center">
            <img :src="movie.poster" class="rounded-lg shadow-lg w-64" />
            <span class="absolute bottom-0 -mb-2 shadow rounded bg-red-200 text-red-900 px-2 py-1 text-sm font-medium">10 dagar</span>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ["movie"]
}
</script>