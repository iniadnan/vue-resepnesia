<template>
  <div>
    <Nav />
    <main id="main">
      <div class="container-resepnesia">
        <div class="flex flex-wrap justify-between">
          <div id="main__left">
            <h1 class="font-bold text-4xl text-color-f95e5e text-center mb-6">
              Daftar
            </h1>
            <form method="POST" action="/">
              <div class="relative mb-4">
                <svg
                  class="absolute top-1/2 left-4 transform -translate-y-1/2"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3327 16.5495C18.3327 17.4957 18.0614 18.3073 17.5189 18.9844C16.9763 19.6615 16.3231 20 15.5592 20H4.43945C3.67556 20 3.02235 19.6615 2.47982 18.9844C1.93728 18.3073 1.66602 17.4957 1.66602 16.5495C1.66602 15.8116 1.70291 15.115 1.77669 14.4596C1.85048 13.8043 1.9872 13.1445 2.18685 12.4805C2.3865 11.8164 2.64041 11.2478 2.94857 10.7747C3.25673 10.3016 3.66471 9.91536 4.17253 9.61588C4.68034 9.31641 5.26411 9.16667 5.92383 9.16667C7.06098 10.2778 8.41949 10.8333 9.99935 10.8333C11.5792 10.8333 12.9377 10.2778 14.0749 9.16667C14.7346 9.16667 15.3184 9.31641 15.8262 9.61588C16.334 9.91536 16.742 10.3016 17.0501 10.7747C17.3583 11.2478 17.6122 11.8164 17.8118 12.4805C18.0115 13.1445 18.1482 13.8043 18.222 14.4596C18.2958 15.115 18.3327 15.8116 18.3327 16.5495ZM14.9993 5C14.9993 6.38021 14.5111 7.55859 13.5345 8.53516C12.5579 9.51172 11.3796 10 9.99935 10C8.61914 10 7.44076 9.51172 6.46419 8.53516C5.48763 7.55859 4.99935 6.38021 4.99935 5C4.99935 3.61979 5.48763 2.44141 6.46419 1.46484C7.44076 0.488281 8.61914 0 9.99935 0C11.3796 0 12.5579 0.488281 13.5345 1.46484C14.5111 2.44141 14.9993 3.61979 14.9993 5Z"
                    fill="#A3A3A3"
                  />
                </svg>
                <input
                  class="h-56px w-full border border-color-a3a3a3 rounded-md text-16px text-color-a3a3a3 pl-14"
                  type="nama"
                  name="nama"
                  placeholder="Nama Lengkap"
                />
              </div>
              <div class="relative mb-4">
                <svg
                  class="absolute top-1/2 left-4 transform -translate-y-1/2"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.6211 7.45312C19.7734 7.33203 20 7.44531 20 7.63672V15.625C20 16.6602 19.1602 17.5 18.125 17.5H1.875C0.839844 17.5 0 16.6602 0 15.625V7.64062C0 7.44531 0.222656 7.33594 0.378906 7.45703C1.25391 8.13672 2.41406 9 6.39844 11.8945C7.22266 12.4961 8.61328 13.7617 10 13.7539C11.3945 13.7656 12.8125 12.4727 13.6055 11.8945C17.5898 9 18.7461 8.13281 19.6211 7.45312ZM10 12.5C10.9062 12.5156 12.2109 11.3594 12.8672 10.8828C18.0508 7.12109 18.4453 6.79297 19.6406 5.85547C19.8672 5.67969 20 5.40625 20 5.11719V4.375C20 3.33984 19.1602 2.5 18.125 2.5H1.875C0.839844 2.5 0 3.33984 0 4.375V5.11719C0 5.40625 0.132812 5.67578 0.359375 5.85547C1.55469 6.78906 1.94922 7.12109 7.13281 10.8828C7.78906 11.3594 9.09375 12.5156 10 12.5Z"
                    fill="#A3A3A3"
                  />
                </svg>
                <input
                  class="h-56px w-full border border-color-a3a3a3 rounded-md text-16px text-color-a3a3a3 pl-14"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div class="relative flex gap-x-4 mb-7">
                <div class="w-6/12 relative">
                  <svg
                    class="absolute top-1/2 left-4 transform -translate-y-1/2"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1673 7.49984V5.83317C14.1673 3.49984 12.334 1.6665 10.0006 1.6665C7.66732 1.6665 5.83398 3.49984 5.83398 5.83317V7.49984C4.41732 7.49984 3.33398 8.58317 3.33398 9.99984V15.8332C3.33398 17.2498 4.41732 18.3332 5.83398 18.3332H14.1673C15.584 18.3332 16.6673 17.2498 16.6673 15.8332V9.99984C16.6673 8.58317 15.584 7.49984 14.1673 7.49984ZM7.50065 5.83317C7.50065 4.4165 8.58398 3.33317 10.0006 3.33317C11.4173 3.33317 12.5006 4.4165 12.5006 5.83317V7.49984H7.50065V5.83317ZM10.9173 12.9165L10.834 12.9998V14.1665C10.834 14.6665 10.5006 14.9998 10.0006 14.9998C9.50065 14.9998 9.16732 14.6665 9.16732 14.1665V12.9998C8.66732 12.4998 8.58398 11.7498 9.08398 11.2498C9.58398 10.7498 10.334 10.6665 10.834 11.1665C11.334 11.5832 11.4173 12.4165 10.9173 12.9165Z"
                      fill="#A3A3A3"
                    />
                  </svg>
                  <input
                    class="h-56px w-full border border-color-a3a3a3 rounded-md text-16px text-color-a3a3a3 pl-14"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div class="w-6/12 relative">
                  <svg
                    class="absolute top-1/2 left-4 transform -translate-y-1/2"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1673 7.49984V5.83317C14.1673 3.49984 12.334 1.6665 10.0006 1.6665C7.66732 1.6665 5.83398 3.49984 5.83398 5.83317V7.49984C4.41732 7.49984 3.33398 8.58317 3.33398 9.99984V15.8332C3.33398 17.2498 4.41732 18.3332 5.83398 18.3332H14.1673C15.584 18.3332 16.6673 17.2498 16.6673 15.8332V9.99984C16.6673 8.58317 15.584 7.49984 14.1673 7.49984ZM7.50065 5.83317C7.50065 4.4165 8.58398 3.33317 10.0006 3.33317C11.4173 3.33317 12.5006 4.4165 12.5006 5.83317V7.49984H7.50065V5.83317ZM10.9173 12.9165L10.834 12.9998V14.1665C10.834 14.6665 10.5006 14.9998 10.0006 14.9998C9.50065 14.9998 9.16732 14.6665 9.16732 14.1665V12.9998C8.66732 12.4998 8.58398 11.7498 9.08398 11.2498C9.58398 10.7498 10.334 10.6665 10.834 11.1665C11.334 11.5832 11.4173 12.4165 10.9173 12.9165Z"
                      fill="#A3A3A3"
                    />
                  </svg>
                  <input
                    class="h-56px w-full border border-color-a3a3a3 rounded-md text-16px text-color-a3a3a3 pl-14"
                    type="password"
                    name="ulangi_password"
                    placeholder="Ulangi Password"
                  />
                </div>
              </div>
              <BottomMD>
                <template #button>
                  <span class="pr-3">Daftar</span>
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_737_5459)">
                      <path
                        d="M20 8.5H18V6.5C18 6.225 17.775 6 17.5 6H16.5C16.225 6 16 6.225 16 6.5V8.5H14C13.725 8.5 13.5 8.725 13.5 9V10C13.5 10.275 13.725 10.5 14 10.5H16V12.5C16 12.775 16.225 13 16.5 13H17.5C17.775 13 18 12.775 18 12.5V10.5H20C20.275 10.5 20.5 10.275 20.5 10V9C20.5 8.725 20.275 8.5 20 8.5ZM7.5 10C9.70938 10 11.5 8.20937 11.5 6C11.5 3.79063 9.70938 2 7.5 2C5.29063 2 3.5 3.79063 3.5 6C3.5 8.20937 5.29063 10 7.5 10ZM10.3 11H9.77812C9.08437 11.3188 8.3125 11.5 7.5 11.5C6.6875 11.5 5.91875 11.3188 5.22188 11H4.7C2.38125 11 0.5 12.8813 0.5 15.2V16.5C0.5 17.3281 1.17188 18 2 18H13C13.8281 18 14.5 17.3281 14.5 16.5V15.2C14.5 12.8813 12.6187 11 10.3 11Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_737_5459">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </template>
                <template #text-top> Atau daftar menggunakan </template>
                <template #text-bottom>
                  Sudah punya akun ?
                  <router-link :to="{ name: 'Masuk' }" class="text-color-f95e5e"
                    >Masuk</router-link
                  >
                </template>
              </BottomMD>
            </form>
          </div>
          <RightMD style="padding-top: 158px" />
        </div>
      </div>
      <img
        class="h-full absolute top-0 right-0 -z-1"
        src="@/assets/images/md.png"
        style="width: 683px"
      />
    </main>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import RightMD from "@/components/RightMD.vue";
import BottomMD from "@/components/BottomMD.vue";
export default {
  name: "Daftar",
  components: {
    Nav,
    RightMD,
    BottomMD,
  },
};
</script>

<style lang="scss" scoped>
#main {
  height: 829px;
  position: relative;
  padding-top: 138px;
  #main__left {
    width: 450px;
    h1 {
      background: linear-gradient(76.2deg, #f95e5e, #af2e2e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
