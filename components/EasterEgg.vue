<template>
  <div
    class="p-4 h-screen relative bg-red-100 overflow-hidden"
    @touchmove="movedarotouch"
    @mousemove="movedaro"
  >
    <div class="p-4 w-full">
      <div class="mx-auto flex flex-col items-center">
        <img v-for = "light in lights"
        :key = "light.name"
          @click="x => lightUp(light.name)"
          :class="
          `absolute
          ${buttons[light.name]
          ? 'opacity-100'
          : 'opacity-5'
          }`"
          :style="{'top': `${light.y}px`, 'left': `${light.x}px`, 'width': '80px', 'height': '80px'}"
          :src="`/flame/${images[light.name]}.png`"
        />
        <img
          :style="{'width': '50rem', 'height': '50rem'}"
          src="/lamp.png"
        />
      </div>
      <img
        class="w-36 h-36 absolute pointer-events-none"
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
      lights: [{x: 760, y: 210, name: "one"}, {x: 820, y: 278, name: "two"}, {x: 1025, y: 278, name: "three"}, {x: 1070, y: 210, name: "four"}],
      xco: 100,
      yco: 100,
      currentDaro: 3,
      buttons: {
        one: false,
        two: false,
        three: false,
        four: false,
      },
      images: {
        one: 3,
        two: 3,
        three: 3,
        four: 3,
      },
    }
  },
  mounted() {
    setInterval(this.changeDaro, 50)
  },
  methods: {
    lightUp(num) {
      if(!this.buttons[num]) setInterval(() => this.changeButton(num), 50)
      this.buttons[num] = true
    },
    changeButton(num) {
      this.images[num] = this.images[num] === 5 ? 2 : this.images[num] + 1
    },
    changeButtons() {
      for (const i of [1, 2, 3, 4, 5]) {
        this.changeButton(i)
      }
    },

    movedaro(e) {
      this.xco = e.pageX - 100
      this.yco = e.pageY
//      console.log({ x: this.xco, y: this.yco })
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