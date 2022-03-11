<template>
  <div
    class="p-4 h-screen relative bg-white/40"
    @touchmove="movedarotouch"
    @mousemove="movedaro"
  >
    <div class="p-4">
      <img
        class="w-36 h-36 absolute"
        :src="`/match/${currentDaro}.png`"
        :style="{'top': yco - 40 + 'px', 'left': xco + 'px'}"
      />
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      xco: 100,
      yco: 100,
      currentDaro: 3,
    }
  },
  mounted() {
    setInterval(this.changeDaro, 50)
  },
  methods: {
    movedaro(e) {
      this.xco = e.pageX - 100
      this.yco = e.pageY
    },
    changeDaro() {
      if (Math.random() < 0.5)
        this.currentDaro = this.currentDaro === 5 ? 2 : this.currentDaro + 1
    },
    movedarotouch(e) {
      this.xco = e.touches[0].pageX
      this.yco = e.touches[0].pageY
    },
  },
}
</script>