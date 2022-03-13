<template>
  <div
    class="p-4 h-screen relative overflow-hidden"
    @touchmove="movedarotouch"
    @mousemove="movedaro"
  >
    <div class="p-4 w-full">
      <div class="mx-auto flex flex-col items-center justify-center">
        <div class="p-2 flex flex-col items-center text-center">
          <HomePage />
        </div>
        <div
          class="w-full"
          v-for="light in lights"
          :key="light.name"
        >
          <img
            :class="
          `absolute z-40
          ${buttons[light.name]
          ? 'block'
          : 'hidden'
          }`"
            :style="{'top': `${light.y + 40}px`, 'left': `${light.x + 26}px`, 'width': '40px', 'height': '40px'}"
            :src="`/flame/${images[light.name]}.png`"
          />
          <button
            @click="x => lightUp(light.name)"
            class="absolute bg-white rounded-full z-30"
            :style="{'top': `${light.y + 70}px`, 'left': `${light.x + 40}px`, 'width': '10px', 'height': '10px'}"
          ></button>
        </div>
        <img
          class="flex-shrink-0 absolute z-20"
          :style="{'width': '15.6rem', 'height': '40.5rem', 'top': '300px'}"
          src="/lamp_better_x.webp"
        />
        <img
          class="flex-shrink-0 absolute z-10"
          :style="{'width': '75rem', 'height': '45.5rem', 'top': '600px'}"
          src="/kolam_better-modified.webp"
        />
      </div>
      <img
        class="w-36 h-36 absolute pointer-events-none z-50"
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
      lights: [],
      xco: 100,
      yco: 100,
      currentDaro: 3,
      buttons: {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
      },
      images: {
        one: 3,
        two: 3,
        three: 3,
        four: 3,
        five: 3,
      },
    }
  },
  mounted() {
    this.refreshLights()
    window.addEventListener('resize', this.refreshLights)
    setInterval(this.changeDaro, 50)
  },
  methods: {
    refreshLights() {
      this.lights = [
        { x: document.body.scrollWidth / 2 - 100, y: 320, name: 'one' },
        { x: document.body.scrollWidth / 2 - 150, y: 370, name: 'two' },
        { x: document.body.scrollWidth / 2 + 60, y: 370, name: 'three' },
        { x: document.body.scrollWidth / 2 + 20, y: 320, name: 'four' },
        { x: document.body.scrollWidth / 2 - 50, y: 400, name: 'five' },
      ]
    },
    lightUp(num) {
      if (!this.buttons[num]) setInterval(() => this.changeButton(num), 50)
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