<template>
  <div id="main__right">
    <h3 class="font-light text-white text-right ml-auto">
      Simpan
      <strong class="font-normal">resep kuliner yang kamu suka</strong> dan
      lestarikan kuliner indonesia <strong>dari berbagai daerah!</strong>
    </h3>
    <img class="ml-auto -mt-5" src="@/assets/images/md-hut.png" alt="HUT" />
  </div>
</template>

<script>
export default {
  name: "RightMD",
};
</script>

<style lang="scss" scoped>
#main__right {
  width: 683px;
  position: relative;
  z-index: 5;
  h3 {
    width: 384px;
    font-size: 42px;
    line-height: 52.5px;
    margin-bottom: 136px;
  }
}
</style>
