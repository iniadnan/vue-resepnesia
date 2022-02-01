<template>
  <router-link to="/" class="h-200px block relative rounded">
    <div
      class="h-full w-full flex items-center justify-center absolute z-1 rounded"
    >
      <h2 class="font-bold text-24px text-white">Jawa Tengah</h2>
    </div>
    <img
      class="h-full w-full object-cover rounded"
      src="@/assets/images/daerah/jawa-tengah.png"
      alt="Image Kota"
    />
  </router-link>
</template>

<script>
export default {
  name: "DaerahItem",
};
</script>

<style lang="scss" scoped>
a.h-200px div {
  background-color: rgba(69, 69, 69, 0.5);
  transition: 0.2s ease-out;
}
a.h-200px:hover div {
  background-color: rgba(69, 69, 69, 0);
}
</style>
