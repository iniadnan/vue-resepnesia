<template>
  <div class="relative">
    <div class="absolute right-0" style="top: 109px">
      <img src="@/assets/images/blog-right.png" alt="Blog Right">
    </div>
    <div class="absolute top-5 left-0">
      <img src="@/assets/images/blog-left.png" alt="Blog Right">
    </div>
    <Nav />
    <section>
      <div class="container-resepnesia">
        <div class="w-full flex flex-wrap items-center justify-center">
          <div class="text-center mx-auto">
            <TitleSection>Tahu kah kamu ?</TitleSection>
          </div>
        </div>
      </div>
    </section>
    <main class="relative z-1">
      <div class="container-resepnesia">
        <div class="grid grid-flow-cols grid-cols-3 gap-y-12 gap-x-14">
            <BlogItem></BlogItem>
            <BlogItem></BlogItem>
            <BlogItem></BlogItem>
            <BlogItem></BlogItem>
            <BlogItem></BlogItem>
            <BlogItem></BlogItem>
            <BlogItem></BlogItem>
            <BlogItem></BlogItem>
            <BlogItem></BlogItem>
        </div>
        <div class="flex justify-center mt-11">
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
import BlogItem from "@/components/BlogItem.vue";
import Pagination from "@/components/Pagination.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Blog",
  components: {
    Nav,
    TitleSection,
    BlogItem,
    Pagination,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
section {
  padding-top: 172px;
  padding-bottom: 71px;
}
main {
  padding-bottom: 61px;
}
</style>
