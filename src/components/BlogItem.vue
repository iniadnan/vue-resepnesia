<template>
  <article>
      <div class="relative">
          <div class="h-54px w-58px flex items-center justify-center absolute top-0 right-0 bg-white rounded-bl-md">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.75 2.75C2.75 2.02065 3.03973 1.32118 3.55546 0.805456C4.07118 0.289731 4.77065 0 5.5 0L16.5 0C17.2293 0 17.9288 0.289731 18.4445 0.805456C18.9603 1.32118 19.25 2.02065 19.25 2.75V21.3125C19.2499 21.4369 19.2161 21.5589 19.1522 21.6655C19.0883 21.7722 18.9966 21.8595 18.887 21.9182C18.7774 21.9769 18.6539 22.0048 18.5296 21.9989C18.4054 21.9929 18.2852 21.9534 18.1816 21.8845L11 18.0139L3.81837 21.8845C3.71484 21.9534 3.59457 21.9929 3.47035 21.9989C3.34613 22.0048 3.22263 21.9769 3.113 21.9182C3.00337 21.8595 2.91171 21.7722 2.84778 21.6655C2.78386 21.5589 2.75006 21.4369 2.75 21.3125V2.75ZM5.5 1.375C5.13533 1.375 4.78559 1.51987 4.52773 1.77773C4.26987 2.03559 4.125 2.38533 4.125 2.75V20.0282L10.6191 16.6155C10.732 16.5404 10.8645 16.5004 11 16.5004C11.1355 16.5004 11.268 16.5404 11.3809 16.6155L17.875 20.0282V2.75C17.875 2.38533 17.7301 2.03559 17.4723 1.77773C17.2144 1.51987 16.8647 1.375 16.5 1.375H5.5Z" fill="url(#paint0_linear_849_1558)"/>
                    <defs>
                    <linearGradient id="paint0_linear_849_1558" x1="2.75" y1="0" x2="19.6024" y2="-3.10403" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F95E5E"/>
                    <stop offset="1" stop-color="#AF2E2E"/>
                    </linearGradient>
                    </defs>
                </svg>
          </div>
          <img class="w-full object-cover" src="https://images.unsplash.com/photo-1643619005928-44d5542ac20a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="Article">
      </div>
      <div>
          <router-link to="/"><h2 class="font-bold text-24px text-color-454545 mt-5 mb-2.5">5 Makanan khas Banten</h2></router-link>
          <p class="text-16px text-color-454545 leading-snug">5 Makanan Khas Banten yang Paling Bikin Ngiler, Wajib Coba! · 1. Sate Bebek · ...</p>
      </div>
  </article>
</template>

<script>
export default {
  name: "BlogItem",
};
</script>

<style lang="scss" scoped>
article img {
    height: 220px;
    box-shadow: 0px 2px 12px -5px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
}
</style>
