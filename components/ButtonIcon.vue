<template>
  <b-button
    block
    :style="style"
    :to="link"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
  >
    <slot />
  </b-button>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      default () {
        return {
          name: 'realisations'
        }
      }
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  data: () => ({
    style: {}
  }),
  mounted () {
    this.style = {
      backgroundColor: 'transparent',
      borderColor: this.color,
      color: this.color
    }
  },
  methods: {
    mouseOver () {
      this.style = {
        backgroundColor: this.color,
        borderColor: this.color,
        color: '#fff'
      }
    },
    mouseLeave () {
      this.style = {
        backgroundColor: 'transparent',
        borderColor: this.color,
        color: this.color
      }
    }
  }
}
</script>
