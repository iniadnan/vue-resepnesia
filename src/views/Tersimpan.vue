<template>
  <div>
    <Nav />
    <section>
      <div class="container-resepnesia">
        <div class="w-full flex flex-wrap items-center justify-center">
          <div class="w-full">
            <TitleSection>Tersimpan</TitleSection>
          </div>
        </div>
      </div>
    </section>
    <main>
        <div class="container-resepnesia">
            <div class="w-full grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-11">
                <MasakanItem />
                <MasakanItem />
                <MasakanItem />
                <MasakanItem />
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
import Footer from "@/components/Footer.vue";
export default {
  name: "Tersimpan",
  components: {
    Nav,
    TitleSection,
    MasakanItem,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
section {
    padding-top: 162px;
    padding-bottom: 30px;
}
main {
    padding-bottom: 254px;
}
</style>
