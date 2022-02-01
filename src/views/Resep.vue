<template>
  <div class="relative">
    <div class="absolute right-0" style="top: 117px">
      <img src="@/assets/images/resep-right.png" alt="Resep Left">
    </div>
    <div class="absolute left-0" style="top: 125px">
      <img src="@/assets/images/resep-left.png" alt="Resep Right">
    </div>
    <Nav />
    <header>
      <div class="container-resepnesia">
        <div class="text-center mb-6">
          <h1 class="font-bold text-color-454545 mb-4">Mau masak apa hari ini ?</h1>
          <p class="text-24px text-color-454545">Temukan lebih dari 100 resep masakan nusantara</p>
        </div>
        <form class="flex justify-center mt-1 mb-4">
          <div class="relative inline-flex flex-wrap items-center justify-center">
            <svg class="absolute top-1/2 left-6 transform -translate-y-1/2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4993 17.5001L13.761 13.7551L17.4993 17.5001ZM15.8327 8.75008C15.8327 10.6287 15.0864 12.4304 13.758 13.7588C12.4296 15.0871 10.628 15.8334 8.74935 15.8334C6.87073 15.8334 5.06906 15.0871 3.74068 13.7588C2.41229 12.4304 1.66602 10.6287 1.66602 8.75008C1.66602 6.87146 2.41229 5.06979 3.74068 3.74141C5.06906 2.41303 6.87073 1.66675 8.74935 1.66675C10.628 1.66675 12.4296 2.41303 13.758 3.74141C15.0864 5.06979 15.8327 6.87146 15.8327 8.75008V8.75008Z" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <input type="text" placeholder="Cari sesuatu">
            <button type="button" class="h-56px w-56px flex items-center justify-center bg-white border border-color-f95e5e rounded-md ml-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6673 21.9998V12.9998L22.314 5.33317C22.4276 5.21952 22.5174 5.08432 22.5781 4.93549C22.6388 4.78666 22.6691 4.62721 22.6673 4.4665V3.33317C22.6673 3.15636 22.5971 2.98679 22.4721 2.86177C22.347 2.73674 22.1775 2.6665 22.0007 2.6665H2.00065C1.82384 2.6665 1.65427 2.73674 1.52925 2.86177C1.40422 2.98679 1.33398 3.15636 1.33398 3.33317V4.4465C1.33411 4.60396 1.36539 4.75984 1.42604 4.90515C1.48668 5.05046 1.57548 5.18233 1.68732 5.29317L9.33398 13.0532V19.8532L14.6673 21.9998Z" fill="url(#paint0_linear_65_10014)"/>
                <path d="M22.3207 2.6665H1.654C1.56676 2.67323 1.48529 2.71271 1.42594 2.77701C1.36659 2.8413 1.33375 2.92567 1.334 3.01317V4.15984C1.3332 4.27737 1.35578 4.39388 1.40041 4.50261C1.44505 4.61134 1.51085 4.71011 1.59401 4.79317L9.59401 12.7932V19.4598L14.4273 21.8665V12.7798L22.4273 4.77984C22.5804 4.61475 22.666 4.39829 22.6673 4.17317V3.01317C22.6673 2.92123 22.6308 2.83305 22.5658 2.76804C22.5008 2.70303 22.4126 2.6665 22.3207 2.6665Z" fill="url(#paint1_linear_65_10014)"/>
                <defs>
                <linearGradient id="paint0_linear_65_10014" x1="1.33398" y1="2.6665" x2="22.3211" y2="-3.02073" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F95E5E"/>
                <stop offset="1" stop-color="#AF2E2E"/>
                </linearGradient>
                <linearGradient id="paint1_linear_65_10014" x1="1.33398" y1="2.6665" x2="22.301" y2="-3.05474" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F95E5E"/>
                <stop offset="1" stop-color="#AF2E2E"/>
                </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </form>
        <div class="flex items-center justify-center">
          <strong class="font-normal text-14px text-color-454545 pr-3.5">Pilih selera kamu :</strong>
          <button type="button" class="header__button__category text-14px text-white px-2 mr-2">Pedas</button>
          <button type="button" class="header__button__category text-14px text-white px-2 mr-2">Manis</button>
          <button type="button" class="header__button__category text-14px text-white px-2 mr-2">Asem</button>
        </div>
      </div>
    </header>
    <div class="container-resepnesia pb-28">
      <div class="w-full flex flex-wrap">
        <main>
          <div class="mb-16">
            <section class="mb-10">
              <div class="w-full flex flex-wrap items-center">
                <div class="w-1/2">
                  <TitleSection>Paling populer</TitleSection>
                </div>
              </div>
            </section>
            <div class="grid grid-flow-cold grid-cols-3 gap-12">
              <MasakanItem />
              <MasakanItem />
              <MasakanItem />
            </div>
          </div>
          <div>
            <section class="mb-10">
              <div class="w-full flex flex-wrap items-center">
                <div class="w-1/2">
                  <TitleSection>Resep terbaru</TitleSection>
                </div>
              </div>
            </section>
            <div class="grid grid-flow-cold grid-cols-3 gap-12">
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
            <div class="flex justify-center mt-14">
              <Pagination />
            </div>
          </div>
        </main>
        <aside>
          <div class="mb-16">
            <section class="mb-5">
              <h3 class="font-bold text-21px text-color-454545 text-center mx-auto" style="width: 212px">Pilih berdasarkan daerah kamu</h3>
            </section>
            <div class="mb-1">
              <DaerahItem class="mb-7" />
              <DaerahItem class="mb-7" />
              <DaerahItem class="mb-7" />
              <DaerahItem class="mb-7" />
            </div>
            <div>
              <Button56px>
                <span class="pr-3">Ke halaman daerah</span>
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.30078 9.9002V8.1002H13.1008L9.50078 4.5002L10.4008 2.7002L16.7008 9.0002L10.4008 15.3002L9.50078 13.5002L13.1008 9.9002H2.30078Z" fill="white"/>
                </svg>
              </Button56px>
            </div>
          </div>
          <div>
            <section class="mb-4">
              <h3 class="font-bold text-21px text-color-454545 text-center mx-auto" style="width: 212px">Blog terbaru</h3>
            </section>
            <div>
              <BlogItem class="mb-5" />
              <BlogItem class="mb-5" />
              <BlogItem class="mb-5" />
            </div>
            <div>
              <Button56px>
                <span class="pr-3">Ke halaman blog</span>
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.30078 9.9002V8.1002H13.1008L9.50078 4.5002L10.4008 2.7002L16.7008 9.0002L10.4008 15.3002L9.50078 13.5002L13.1008 9.9002H2.30078Z" fill="white"/>
                </svg>
              </Button56px>
            </div>
          </div>
        </aside>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import TitleSection from "@/components/TitleSection.vue";
import MasakanItem from "@/components/MasakanItem.vue";
import DaerahItem from "@/components/DaerahItem.vue";
import BlogItem from "@/components/BlogItem.vue";
import Button56px from "@/components/Button56px.vue";
import Pagination from "@/components/Pagination.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Resep",
  components: {
    Nav,
    TitleSection,
    MasakanItem,
    DaerahItem,
    BlogItem,
    Button56px,
    Pagination,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
header {
  padding-top: 162px;
  padding-bottom: 104px;
  h1 {
    font-size: 42px;
    line-height: 52.5px;
  }
  input {
    height: 56px;
    width: 562px;
    border: 1px solid #C4C4C4;
    border-radius: 8px;
    font-size: 16px;
    color: #454545;
    padding-left: 67px;
  }
  input::placeholder {
    color: #C4C4C4;
  }
  .header__button__category {
    height: 22px;
    background: linear-gradient(76.2deg, #F95E5E 19.72%, #AF2E2E 104.5%);
    border-radius: 2px;
  }
}
main {
  width: calc(100% - 316px);
}
aside {
  width: 316px;
  padding-top: 90px;
  padding-left: 40px;
}
</style>
