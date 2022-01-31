<template>
    <div id="container__search__right" class="relative ml-auto">
        <svg class="absolute top-1/2 left-6 transform -translate-y-1/2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4993 17.5001L13.761 13.7551L17.4993 17.5001ZM15.8327 8.75008C15.8327 10.6287 15.0864 12.4304 13.758 13.7588C12.4296 15.0871 10.628 15.8334 8.74935 15.8334C6.87073 15.8334 5.06906 15.0871 3.74068 13.7588C2.41229 12.4304 1.66602 10.6287 1.66602 8.75008C1.66602 6.87146 2.41229 5.06979 3.74068 3.74141C5.06906 2.41303 6.87073 1.66675 8.74935 1.66675C10.628 1.66675 12.4296 2.41303 13.758 3.74141C15.0864 5.06979 15.8327 6.87146 15.8327 8.75008V8.75008Z" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <input type="text" placeholder="Cari daerah">
    </div>
</template>

<script>
    export default {
        name: "SearchRight"
    }
</script>

<style lang="scss" scoped>
    #container__search__right {
        width: 365px;
    }
    input {
        height: 56px;
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 6px;
        padding-left: 67px;
        font-size: 16px;
        color: #000;
    }
    input::placeholder {
        color: rgba(0, 0, 0, 0.5);
    }
</style>