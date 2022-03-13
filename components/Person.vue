<template>
  <div class = "p-2">
      <div :class = "`w-36 rounded-xl p-2 ${speaking ? 'bg-green-600' : 'bg-gray-800'} transition duration-500 ease-in-out`">
          <div class = "flex flex-col items-center">
              <img :src = "pic" class = "w-32 h-32 p-2" />
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        pic: {
            type: String,
            default: () => "/lala.webp"
        }
    },
    data() {
        return {
            speaking: false,
        }
    },
    methods: {
        setActive() {
            this.speaking = !this.speaking
        }
    }

}
</script>
