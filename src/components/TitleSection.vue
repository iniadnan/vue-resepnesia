<template>
    <h1 class="relative font-bold text-color-454545"><slot></slot></h1>
</template>

<script>
    export default {
        name: "TitleSection"
    }
</script>

<style lang="scss" scoped>
h1 {
    font-size: 42px;
    line-height: 52.5px;
}
h1::after {
    content: "";
    height: 17px;
    width: 176px;
    position: absolute;
    left: 0;
    bottom: -5px;
    background-color: rgba(240, 84, 84, 0.3);
}
</style>