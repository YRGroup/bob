<template>
  <div class="modal" v-show="show">

  </div>
</template>
<script>
export default {
  props: {
    show: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {}
  },
  created () {
    window.addEventListener('scroll', e => {
      e.preventDefault && e.preventDefault()
    })
  }
}
</script>

<style lang="less">
.modal {
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  left: 0;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 20;
}
</style>
