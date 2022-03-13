<template>
  <div class="fixed p-2">
    <Person ref="one" pic = "/placeholder/1.png" />
    <Person ref="two" pic = "/placeholder/2.png" />
    <Person ref="three" pic = "/placeholder/3.png" />
    <Person ref="four" pic = "/placeholder/4.png" />
    <Person ref="five" pic = "/placeholder/5.png" />

  </div>
</template>

<script>
export default {
  methods: {
    setSpeaking(e) {
      if (e.keyCode === 49) this.$refs.one.setActive()
      if (e.keyCode === 50) this.$refs.two.setActive()
      if (e.keyCode === 51) this.$refs.three.setActive()
      if (e.keyCode === 52) this.$refs.four.setActive()
      if (e.keyCode === 53) this.$refs.five.setActive()
    },
  },
  mounted() {
    document.addEventListener('keyup', this.setSpeaking)
  },
}
</script>
