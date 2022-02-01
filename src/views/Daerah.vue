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
         <DaerahItem />
         <DaerahItem />
         <DaerahItem />
         <DaerahItem />
         <DaerahItem />
         <DaerahItem />
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
import DaerahItem from "@/components/DaerahItem.vue";
import Pagination from "@/components/Pagination.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Daerah",
  components: {
    Nav,
    TitleSection,
    SearchRight,
    DaerahItem,
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
}
</style>
