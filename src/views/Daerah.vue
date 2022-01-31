<template>
  <div>
    <Nav />
    <section>
      <div class="container-resepnesia">
        <div class="w-full flex flex-wrap items-center justify-center">
          <div class="w-1/2">
            <TitleSection>Daerah</TitleSection>
          </div>
          <div class="w-1/2">
            <SearchRight></SearchRight>
          </div>
        </div>
      </div>
    </section>
    <main>
      <div class="container-resepnesia pt-8 pb-36">
        <div class="w-full grid grid-flow-row grid-cols-2 md:grid-cols-3 gap-7">
          <router-link to="/" class="h-200px block relative rounded">
            <div class="h-full w-full flex items-center justify-center absolute z-1 rounded">
              <h2 class="font-bold text-24px text-white">Jawa Tengah</h2>
            </div>
            <img class="h-full w-full object-cover rounded" src="@/assets/images/daerah/jawa-tengah.png" alt="Image Kota">
          </router-link>
          <router-link to="/" class="h-200px block relative rounded">
            <div class="h-full w-full flex items-center justify-center absolute z-1 rounded">
              <h2 class="font-bold text-24px text-white">Jawa Tengah</h2>
            </div>
            <img class="h-full w-full object-cover rounded" src="@/assets/images/daerah/jawa-tengah.png" alt="Image Kota">
          </router-link>
          <router-link to="/" class="h-200px block relative rounded">
            <div class="h-full w-full flex items-center justify-center absolute z-1 rounded">
              <h2 class="font-bold text-24px text-white">Jawa Tengah</h2>
            </div>
            <img class="h-full w-full object-cover rounded" src="@/assets/images/daerah/jawa-tengah.png" alt="Image Kota">
          </router-link>
          <router-link to="/" class="h-200px block relative rounded">
            <div class="h-full w-full flex items-center justify-center absolute z-1 rounded">
              <h2 class="font-bold text-24px text-white">Jawa Tengah</h2>
            </div>
            <img class="h-full w-full object-cover rounded" src="@/assets/images/daerah/jawa-tengah.png" alt="Image Kota">
          </router-link>
        </div>
        <div class="flex justify-center mt-14">
          <Pagination />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import TitleSection from "@/components/TitleSection.vue";
import SearchRight from "@/components/SearchRight.vue";
import Pagination from "@/components/Pagination.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Daerah",
  components: {
    Nav,
    TitleSection,
    SearchRight,
    Pagination,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
section {
  padding-top: 162px;
}
main {
  padding-bottom: 160px;
  a.h-200px div {
    background-color: rgba(69, 69, 69, 0.5);
    transition: 0.2s ease-out;
  }
  a.h-200px:hover div {
    background-color: rgba(69, 69, 69, 0.0);
  }
}
</style>
