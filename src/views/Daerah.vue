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
            <div class="relative"></div>
          </div>
        </div>
      </div>
    </section>
    <main></main>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import TitleSection from "@/components/TitleSection.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Daerah",
  components: {
    Nav,
    TitleSection,
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
