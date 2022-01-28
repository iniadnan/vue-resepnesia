<template>
    <nav id="nav">
        <div class="container-resepnesia h-full">
            <div class="h-full w-full flex flex-wrap items-center justify-between">
                <div id="nav__left" class="flex items-center">
                    <router-link to="/" class="text-3xl text-color-454545 mr-10"><strong class="font-bold text-color-f05454">Resep</strong>nesia</router-link>
                    <router-link to="/" class="text-16px text-color-454545 mr-12">Resep</router-link>
                    <router-link to="/" class="text-16px text-color-454545 mr-12">Daerah</router-link>
                    <router-link to="/" class="text-16px text-color-454545 mr-12">Blog</router-link>
                    <router-link to="/" class="text-16px text-color-454545 ">Tentang</router-link>
                </div>
                <div id="nav__right" class="flex items-center">
                    <router-link to="/" class="text-16px text-color-454545">Daftar</router-link>
                    <router-link to="/" class="text-16px text-color-454545 ml-12">Masuk</router-link>
                    <router-link to="/" class="text-color-454545 ml-12">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4994 17.4998L13.761 13.7548L17.4994 17.4998ZM15.8327 8.74984C15.8327 10.6285 15.0864 12.4301 13.758 13.7585C12.4296 15.0869 10.628 15.8332 8.74935 15.8332C6.87073 15.8332 5.06906 15.0869 3.74068 13.7585C2.41229 12.4301 1.66602 10.6285 1.66602 8.74984C1.66602 6.87122 2.41229 5.06955 3.74068 3.74116C5.06906 2.41278 6.87073 1.6665 8.74935 1.6665C10.628 1.6665 12.4296 2.41278 13.758 3.74116C15.0864 5.06955 15.8327 6.87122 15.8327 8.74984V8.74984Z" stroke="currentcolor" stroke-linecap="round"/>
                        </svg>
                    </router-link>
                    <router-link to="/" class="text-color-454545 ml-6">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_724_5442)">
                            <path d="M2.5 2.5C2.5 1.83696 2.76339 1.20107 3.23223 0.732233C3.70107 0.263392 4.33696 -6.61222e-08 5 -8.99887e-08L15 -4.49943e-07C15.663 -4.7381e-07 16.2989 0.263392 16.7678 0.732233C17.2366 1.20107 17.5 1.83696 17.5 2.5L17.5 19.375C17.4999 19.4881 17.4692 19.599 17.4111 19.6959C17.353 19.7929 17.2697 19.8723 17.17 19.9257C17.0703 19.979 16.9581 20.0044 16.8451 19.999C16.7322 19.9936 16.6229 19.9576 16.5288 19.895L10 16.3762L3.47125 19.895C3.37713 19.9576 3.26779 19.9936 3.15487 19.999C3.04194 20.0044 2.92967 19.979 2.83 19.9257C2.73033 19.8723 2.64701 19.7929 2.58889 19.6959C2.53078 19.599 2.50006 19.4881 2.5 19.375L2.5 2.5ZM5 1.25C4.66848 1.25 4.35054 1.3817 4.11612 1.61612C3.8817 1.85054 3.75 2.16848 3.75 2.5L3.75 18.2075L9.65375 15.105C9.75633 15.0367 9.87679 15.0003 10 15.0003C10.1232 15.0003 10.2437 15.0367 10.3463 15.105L16.25 18.2075L16.25 2.5C16.25 2.16848 16.1183 1.85054 15.8839 1.61612C15.6495 1.3817 15.3315 1.25 15 1.25L5 1.25Z" fill="currentcolor"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_724_5442">
                            <rect width="20" height="20" fill="currentcolor"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style lang="scss" scoped>
    #nav {
        height: 116px;
        width: 100%;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
</style>