<template>
    <router-link to="/" class="h-56px flex items-center justify-center text-16px text-white"><slot></slot></router-link>
</template>

<script>
    export default {
        name: "Button56px"
    }
</script>

<style lang="scss" scoped>
a, button {
    background: linear-gradient(76.2deg, #F95E5E 19.72%, #AF2E2E 104.5%);
    border-radius: 4px;
}
</style>