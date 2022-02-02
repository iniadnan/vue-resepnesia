<template>
  <div>
    <Nav />
    <header class="h-40"></header>
    <main id="hoem__mulai__masak">
      <div class="container-resepnesia">
        <div class="w-full flex flex-wrap items-center justify-center mb-8">
          <div class="text-center mx-auto">
            <TitleSection>Mulai memasak</TitleSection>
          </div>
        </div>
        <div class="grid grid-flow-cols grid-cols-4 gap-y-8 gap-x-11 mb-10">
          <MasakanItem />
          <MasakanItem />
          <MasakanItem />
          <MasakanItem />
          <MasakanItem />
          <MasakanItem />
          <MasakanItem />
          <MasakanItem />
          <MasakanItem />
          <MasakanItem />
          <MasakanItem />
          <MasakanItem />
        </div>
        <div>
          <Button56px class="mx-auto" style="width: 258px">
            <span class="pr-3">Kunjungi halaman resep</span>
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.30078 9.9002V8.1002H13.1008L9.50078 4.5002L10.4008 2.7002L16.7008 9.0002L10.4008 15.3002L9.50078 13.5002L13.1008 9.9002H2.30078Z"
                fill="white"
              />
            </svg>
          </Button56px>
        </div>
      </div>
    </main>
    <section
      id="home__daerah__mana"
      class="relative flex items-center justify-center"
    >
      <div class="h-full w-10/12 absolute top-0 left-0"></div>
      <div class="container-resepnesia relative z-1">
        <div class="w-full flex flex-wrap items-center justify-center mb-7">
          <div class="text-center mx-auto">
            <TitleSection>Dari daerah mana kamu ?</TitleSection>
          </div>
        </div>
        <div class="grid grid-flow-cols grid-cols-4 gap-x-6 mb-6">
          <DaerahItem style="box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25)" />
          <DaerahItem style="box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25)" />
          <DaerahItem style="box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25)" />
          <DaerahItem style="box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25)" />
        </div>
        <div>
          <Button56px class="mx-auto" style="width: 189px">
            <span class="pr-3">Cari daerahmu</span>
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.30078 9.9002V8.1002H13.1008L9.50078 4.5002L10.4008 2.7002L16.7008 9.0002L10.4008 15.3002L9.50078 13.5002L13.1008 9.9002H2.30078Z"
                fill="white"
              />
            </svg>
          </Button56px>
        </div>
      </div>
    </section>
    <div class="home__background__bottom">
      <div
        class="home__cover__bottom h-full w-full absolute top-0 left-0 flex items-center justify-center"
      >
        <div>
          <h3 class="font-bold text-white text-center mx-auto">
            Mengapa kita harus melestarikan kuliner nusantara ?
          </h3>
          <p class="text-18px text-white text-center mx-auto">
            kuliner tradisional merupakan warisan budaya. Tidak hanya pakaian
            adat, kebiasaan istiadat, hingga benda-benda peninggalan bersejarah
            saja yang bisa menjadi warisan budaya, tapi kuliner tradisional juga
            merupakan warisan budaya yang turun temurun
          </p>
        </div>
      </div>
      <img
        class="h-full w-full object-cover"
        src="@/assets/images/home-background-bottom.png"
        alt="Home Background"
      />
    </div>
    <section class="relative pt-24 overflow-hidden">
      <img
        class="absolute -top-96 right-0"
        src="@/assets/images/home-bottom-right.png"
        alt="Home Bottom Right"
      />
      <div class="container-resepnesia pb-40">
        <div class="w-full flex flex-wrap items-center justify-center mb-16">
          <div class="text-center mx-auto">
            <TitleSection>Apa kata meraka ?</TitleSection>
          </div>
        </div>
        <div class="grid grid-flow-cols grid-cols-3 gap-y-7 gap-x-5">
          <Komentar />
          <Komentar />
          <Komentar />
          <Komentar />
          <Komentar />
          <Komentar />
        </div>
      </div>
    </section>
    <section>
      <div class="container-resepnesia pb-14">
        <div class="w-full flex flex-wrap items-center justify-center mb-16">
          <div class="text-center mx-auto">
            <TitleSection>Tahu kah kamu ?</TitleSection>
          </div>
        </div>
        <div class="grid grid-flow-cols grid-cols-3 gap-12">
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import TitleSection from "@/components/TitleSection.vue";
import MasakanItem from "@/components/MasakanItem.vue";
import Button56px from "@/components/Button56px.vue";
import BlogItem from "@/components/BlogItem.vue";
import DaerahItem from "@/components/DaerahItem.vue";
import Komentar from "@/components/Komentar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Nav,
    TitleSection,
    MasakanItem,
    Button56px,
    BlogItem,
    DaerahItem,
    Komentar,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
#hoem__mulai__masak {
  padding-bottom: 145px;
}
#home__daerah__mana {
  height: 472px;
  .absolute {
    background: linear-gradient(76.2deg, #f95e5e 19.72%, #af2e2e 104.5%);
    opacity: 0.03;
  }
}
.home__background__bottom {
  height: 541px;
  width: 100%;
  position: relative;
  .home__cover__bottom {
    background-color: rgba(69, 69, 69, 0.6);
    h3 {
      width: 618px;
      font-size: 42px;
      line-height: 52.5px;
      margin-bottom: 15px;
    }
    p {
      width: 887px;
      line-height: 22.5px;
    }
  }
}
</style>
