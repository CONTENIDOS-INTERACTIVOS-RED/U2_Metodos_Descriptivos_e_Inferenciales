<template lang="pug">
header.header.container-fluid(v-if="$route.name !== 'inicio' && $route.name !== 'home'")
  .row.align-items-center.justify-content-between
    .col.col-sm-auto.d-flex.align-items-center.justify-content-between.justify-content-sm-start
      
      .header__menu.me-4.me-sm-5(
        @click="toggleMenu"
      )
        .header__menu__btn(:class="{'header__menu__btn--open': menuOpen}")
          .line-2
          .line-1
          .line-3

      .d-none.d-md-flex.align-items-center(v-if="isInicio")
        a(href="#contenidos").me-5 Contenidos

    .col-auto(v-if="isInicio")
      router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
        span.me-1 Ver contenido
        i(class="fas fa-angle-right")
  router-link(to="/")
    img.header__logo(src="@/assets/template/logo.svg")

</template>

<script>
import plantillaMixins from '../../mixins/plantillaMixins'
export default {
  name: 'Header',
  mixins: [plantillaMixins],
  computed: {
    globalData() {
      return this.$config && this.$config.global
    },
    isInicio() {
      return this.$route.name === 'inicio'
    },
    menuOpen() {
      return this.$store.getters.isMenuOpen
    },
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch('toggleMenu', !this.menuOpen)
    },
  },
}
</script>

<style lang="sass" scoped>
.header
  display: flex
  position: sticky
  top: 0
  padding-top: 10px
  padding-bottom: 10px
  background-color: $white
  z-index: 10010
  line-height: 1.1em
  &__logo
    position: absolute
    right: 50%
    transform: translateX(50%)
    width: 212px
  &__componente-formativo
    @media (max-width: $bp-max-xs)
      font-size: 0.8em


.header__menu
  cursor: pointer
  span
    font-size: 0.7em
    display: block
    line-height: 1em
    text-align: center
    color: $color-sistema-a
  &__btn
    width: 30px
    height: 30px
    position: relative
    margin-bottom: 4px
    .line-1
      width: 25px
    .line-2
      width: 30px
    .line-3
      width: 15px
    .line-1,.line-2,.line-3
      height: 4px
      background-color: $color-sistema-a
      transform-origin: center center
      position: absolute
      left: 0
      border-radius: 2px
    .line-1
      top: 4px
      animation: line-1-inactive 0.5s ease-in-out forwards
    .line-2
      top: 13px
      animation: line-2-inactive 0.5s ease-in-out forwards
    .line-3
      top: 23px
      animation: line-3-inactive 0.5s ease-in-out forwards
    &:hover
      cursor: pointer

    &--open
      .line-1
        width: 35px
        animation: line-1-active 0.5s ease-in-out forwards
      .line-2
        animation: line-2-active 0.5s ease-in-out forwards
      .line-3
        width: 35px
        animation: line-3-active 0.5s ease-in-out forwards

@keyframes line-1-active
  0%
    transform: translate(0, 0) rotate(0)
  50%
    transform: translate(0, 9px) rotate(0)
  100%
    transform: translate(0, 9px) rotate(45deg)

@keyframes line-2-active
  0%
    transform: scale(1)
  100%
    transform: scale(0)

@keyframes line-3-active
  0%
    transform: translate(0, 0) rotate(0)
  50%
    transform: translate(0, -9px) rotate(0)
  100%
    transform: translate(0, -9px) rotate(-45deg)

@keyframes line-1-inactive
  0%
    transform: translate(0, 9px) rotate(45deg)
  50%
    transform: translate(0, 9px) rotate(0)
  100%
    transform: translate(0, 0) rotate(0)

@keyframes line-2-inactive
  0%
    transform: scale(0)
  100%
    transform: scale(1)

@keyframes line-3-inactive
  0%
    transform: translate(0, -9px) rotate(-45deg)
  50%
    transform: translate(0, -9px) rotate(0)
  100%
    transform: translate(0, 0) rotate(0)
</style>
