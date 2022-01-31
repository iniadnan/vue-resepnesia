<template>
  <div>
    <Nav />
    <header></header>
    <main>
      <div class="container-resepnesia py-20">
        <div class="w-full mb-12">
          <TitleSection>Populer di Sumatera Barat</TitleSection>
        </div>
        <div class="w-full grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-11">
          <MasakanItem />
          <MasakanItem />
          <MasakanItem />
          <MasakanItem />
        </div>
      </div>
    </main>
    <main>
      <div class="container-resepnesia pt-11 pb-32">
        <div class="w-full">
          <TitleSection>Makanan khas Sumatera Barat</TitleSection>
        </div>
        <div class="w-full grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-11">
          <MasakanItem />
          <MasakanItem />
          <MasakanItem />
          <MasakanItem />
          <MasakanItem />
          <MasakanItem />
          <MasakanItem />
          <MasakanItem />
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
import MasakanItem from "@/components/MasakanItem.vue";
import Pagination from "@/components/Pagination.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "DearahDetail",
  components: {
    Nav,
    TitleSection,
    MasakanItem,
    Pagination,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 120px;
}
</style>
