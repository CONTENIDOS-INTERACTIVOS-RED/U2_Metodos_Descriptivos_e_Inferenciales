<template lang="pug">
.container-fluid.banner-interno
  .banner-interno__fondo
  .container
    .banner-interno__titulo.py-5
      h2(v-html="titulo")
      h3.mb-0(v-html="subTitulo")
</template>

<script>
export default {
  name: 'BannerInterno',
  props: {
    titulo: {
      type: String,
      default: '',
    },
    subTitulo: {
      type: String,
      default: '',
    },
  },
  data: () => ({}),
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.banner-interno
  position: relative

  &__fondo
    position: absolute
    top: 0
    bottom: -50px
    left: 0
    right: 0
    background-color: $color-sistema-c
    background-size: cover
    background-position: center

  &__titulo
    display: flex
    flex-direction: column
    margin-left: 20px
    h2
      color: #4E4948 !important
      font-size: 18px
      font-weight: bold
      margin-bottom: 20px
    h3
      color: #212429 !important
      font-size: 38px
      font-weight: normal
    &__icono
      display: block
      width: 32px
      height: 32px
      border-radius: 50%
      background-color: $color-banner-text
      position: relative
      i
        color: $color-banner-fondo
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%,-50%)
    h1, h2, h3, h4, h5, h6
      color: $color-banner-text
      line-height: 1.1em
</style>
