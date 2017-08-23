<template lang="pug">
  .logo(@click='updateHSI')
    span.logo--item(v-for='(item, index) in textArr', key='index', :style=`{color: colorArr[index]}`) {{ item }}
</template>

<script>
const PI = Math.PI
const PI_2 = 2 * PI
const PI_1_6 = PI / 6
const PI_1_3 = PI / 3
const PI_2_3 = PI_2 / 3
const PI_4_3 = 4 * PI / 3
const PI_5_3 = 5 * PI / 3

export default {
  name: 'logo',
  props: {
    text: String,
  },
  data () {
    return {
      h: Math.random() * PI_2,
      s: 0.6,
      i: 0.7,
    }
  },
  computed: {
    textArr () {
      return (this.text || '').split('')
    },
    colorArr () {
      const length = this.textArr.length
      const step = PI_2_3 / length
      return new Array(length).fill(null).map((value, index) =>
        this.HSI2RGB(this.h + index * step, this.s, this.i)
      )
    },
  },
  methods: {
    HSI2RGB (h, s, i) {
      h = h < PI_2 ? h : (h - PI_2)
      const x = i * (1 - s)
      if (h < PI_2_3) {
        const y = i * (1 + (s * Math.cos(h)) / (Math.cos(PI_1_3 - h)))
        return this.RGB2Hex(y, 3 * i - (x + y), x)
      } else if (h < PI_4_3) {
        const y = i * (1 + (s * Math.cos(h - PI_2_3)) / (Math.cos(PI - h)))
        return this.RGB2Hex(x, y, 3 * i - (x + y))
      } else {
        const y = i * (1 + (s * Math.cos(h - PI_4_3)) / (Math.cos(PI_5_3 - h)))
        return this.RGB2Hex(3 * i - (x + y), x, y)
      }
    },
    RGB2Hex (r, g, b) {
      return 'rgb(' + Math.floor(r * 255) + ',' + Math.floor(g * 255) + ',' + Math.floor(b * 255) + ')'
    },
    updateHSI () {
      const h = this.h + Math.random() * PI_1_6 + PI_1_6
      this.h = h < PI_2 ? h : (h - PI_2)
    },
  },
}
</script>

<style scoped>
.logo {
  line-height: 3rem;
  display: inline-block;
  user-select: none;
  cursor: default;
}

.logo--item {
  font-size: xx-large;
  font-weight: bolder;
}
</style>

