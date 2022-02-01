<template>
  <div>
    <Nav />
    <header class="relative">
      <div class="header__cover h-full w-full absolute top-0 left-0 flex items-center justify-center z-1">
        <h2 class="font-bold text-white text-center">Sumatera Barat</h2>
      </div>
      <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="Header">
    </header>
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
  height: 606px;
  .header__cover {
    background-color: rgba(48, 48, 48, 0.5);
    h2 {
      font-size: 48px;
    }
  }
}
</style>
