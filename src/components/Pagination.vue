<template>
    <div class="flex items-center justify-center">
        <router-link to="/" class="mr-5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 5L9 10L14 15L13 17L6 10L13 3L14 5Z" fill="url(#paint0_linear_815_523)"/>
                <defs>
                <linearGradient id="paint0_linear_815_523" x1="6" y1="3" x2="14.2849" y2="1.83736" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F95E5E"/>
                <stop offset="1" stop-color="#AF2E2E"/>
                </linearGradient>
                </defs>
            </svg>
        </router-link>
        <router-link to="/" class="active mx-1">1</router-link>
        <router-link to="/" class="mx-1">2</router-link>
        <router-link to="/" class="mx-1">3</router-link>
        <router-link to="/" class="ml-5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="url(#paint0_linear_815_529)"/>
                <defs>
                <linearGradient id="paint0_linear_815_529" x1="14" y1="17" x2="5.71509" y2="18.1626" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F95E5E"/>
                <stop offset="1" stop-color="#AF2E2E"/>
                </linearGradient>
                </defs>
            </svg>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Pagination"
    }
</script>

<style lang="scss" scoped>
    a {
        height: 32px;
        width: 24px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #454545;
    }
    .active {
        background: linear-gradient(76.2deg, #F95E5E 19.72%, #AF2E2E 104.5%);
        border-radius: 4px;
        color: #fff;
    }
</style>