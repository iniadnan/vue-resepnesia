<template>
  <div>
    <Nav />
    <main id="main">
      <div class="container-resepnesia">
        <div class="flex flex-wrap">
          <div id="main__left">
            <h1 class="font-bold text-4xl text-color-f95e5e text-center mb-6">
              Masuk
            </h1>
            <form method="POST" action="/">
              <div class="relative mb-4">
                <svg class="absolute top-1/2 left-4 transform -translate-y-1/2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.6211 7.45312C19.7734 7.33203 20 7.44531 20 7.63672V15.625C20 16.6602 19.1602 17.5 18.125 17.5H1.875C0.839844 17.5 0 16.6602 0 15.625V7.64062C0 7.44531 0.222656 7.33594 0.378906 7.45703C1.25391 8.13672 2.41406 9 6.39844 11.8945C7.22266 12.4961 8.61328 13.7617 10 13.7539C11.3945 13.7656 12.8125 12.4727 13.6055 11.8945C17.5898 9 18.7461 8.13281 19.6211 7.45312ZM10 12.5C10.9062 12.5156 12.2109 11.3594 12.8672 10.8828C18.0508 7.12109 18.4453 6.79297 19.6406 5.85547C19.8672 5.67969 20 5.40625 20 5.11719V4.375C20 3.33984 19.1602 2.5 18.125 2.5H1.875C0.839844 2.5 0 3.33984 0 4.375V5.11719C0 5.40625 0.132812 5.67578 0.359375 5.85547C1.55469 6.78906 1.94922 7.12109 7.13281 10.8828C7.78906 11.3594 9.09375 12.5156 10 12.5Z" fill="#A3A3A3"/>
                </svg>
                <input class="h-56px w-full border border-color-a3a3a3 rounded-md text-16px text-color-a3a3a3 pl-14" type="email" name="email" placeholder="Email">
              </div>
              <div class="relative mb-4">
                <svg class="absolute top-1/2 left-4 transform -translate-y-1/2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1673 7.49984V5.83317C14.1673 3.49984 12.334 1.6665 10.0006 1.6665C7.66732 1.6665 5.83398 3.49984 5.83398 5.83317V7.49984C4.41732 7.49984 3.33398 8.58317 3.33398 9.99984V15.8332C3.33398 17.2498 4.41732 18.3332 5.83398 18.3332H14.1673C15.584 18.3332 16.6673 17.2498 16.6673 15.8332V9.99984C16.6673 8.58317 15.584 7.49984 14.1673 7.49984ZM7.50065 5.83317C7.50065 4.4165 8.58398 3.33317 10.0006 3.33317C11.4173 3.33317 12.5006 4.4165 12.5006 5.83317V7.49984H7.50065V5.83317ZM10.9173 12.9165L10.834 12.9998V14.1665C10.834 14.6665 10.5006 14.9998 10.0006 14.9998C9.50065 14.9998 9.16732 14.6665 9.16732 14.1665V12.9998C8.66732 12.4998 8.58398 11.7498 9.08398 11.2498C9.58398 10.7498 10.334 10.6665 10.834 11.1665C11.334 11.5832 11.4173 12.4165 10.9173 12.9165Z" fill="#A3A3A3"/>
                </svg>
                <input class="h-56px w-full border border-color-a3a3a3 rounded-md text-16px text-color-a3a3a3 pl-14" type="password" name="password" placeholder="Password">
              </div>
              <div class="text-right mb-7">
                <router-link to="/" class="text-16px text-color-f95e5e">Lupa Password</router-link>
              </div>
              <BottomMD>
              </BottomMD>
            </form>
          </div>
          <div id="main__right"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import BottomMD from "@/components/BottomMD.vue";
export default {
  name: "Masuk",
  components: {
    Nav,
    BottomMD
  },
};
</script>

<style lang="scss" scoped>
#main {
  padding-top: 163px;
  padding-bottom: 140px;
  #main__left {
    width: 450px;
    h1 {
      background: linear-gradient(76.2deg, #F95E5E, #AF2E2E);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
