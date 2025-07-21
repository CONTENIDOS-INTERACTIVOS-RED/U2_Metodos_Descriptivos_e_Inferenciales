<template lang="pug">
aside
  transition(name="main-menu" duration="295")
    .aside-menu(v-if="menuOpen")
      .aside-menu__black-background(@click="toggleMenu(false)")
      nav.aside-menu__content
        .aside-menu__header
          img(src="@/assets/template/book.svg")
          h5 Índice temático
        ul.aside-menu__menu
          template(v-for="(item,index) of menuData")
            div.aside-menu__menu__item_container
              li.aside-menu__menu__item(
                :key="`menu-item-${index}`"
                :class="{'aside-menu__menu__item--active' : $route.name == item.nombreRuta}"
              )
                router-link.aside-menu__menu__item__lnk(
                  :to="{name: item.nombreRuta}"
                  @click.native="toggleMenu(false)"
                )
                  span.title(v-if="item.hasOwnProperty('numero')" v-html="item.numero")
                  span.title(v-html="item.titulo")

              template(
                v-if="item.hasOwnProperty('subMenu') && item.subMenu.length"
              )
                li.aside-menu__menu__item--sub-menu(
                  v-for="(subItem, subItemIndex) of item.subMenu"
                  :key="`submenu-item-${index}-${subItemIndex}`"
                  :class="{'aside-menu__menu__item--sub-menu--active': $route.hash == `#${subItem.hash}`}"
                )
                  router-link.aside-menu__menu__item__lnk(
                    :to="{ name: item.nombreRuta , hash: `#${subItem.hash}` }"
                    @click.native="toggleMenu(false)"
                  )
                    span.title(v-if="item.hasOwnProperty('numero')" v-html="subItem.numero")
                    span(v-html="subItem.titulo")

        ul.aside-menu__sec-menu
          template(
            v-for="(secMenuItem, secMenuIndex) of subMenuData",
          )
            li.aside-menu__sec-menu__item(
              :key="`secMenu-item-${secMenuIndex}`"
              :class="{'d-none':secMenuItem.titulo.includes('material') && isLocal()}"
            )
              a.aside-menu__sec-menu__item__lnk(
                v-if="secMenuItem.hasOwnProperty('download')"
                :href="obtenerLink(secMenuItem.download)"
                target="_blank"
              )
                i(v-if="secMenuItem.icono" :class="secMenuItem.icono")
                span(v-html="secMenuItem.titulo")

              router-link.aside-menu__sec-menu__item__lnk(
                v-else
                :to="{name: secMenuItem.nombreRuta}"
                @click.native="toggleMenu(false)"
              )
                i(v-if="secMenuItem.icono" :class="secMenuItem.icono")
                span(v-html="secMenuItem.titulo")

</template>

<script>
export default {
  name: 'AsideMenu',
  computed: {
    menuData() {
      return this.$config.menuPrincipal.menu
    },
    subMenuData() {
      return this.$config.menuPrincipal.subMenu
    },
    menuOpen() {
      return this.$store.getters.isMenuOpen
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        if (
          to.name === 'inicio' ||
          to.name === 'home' ||
          window.innerWidth <= 991
        ) {
          this.toggleMenu(false)
        }
      },
    },
  },
  methods: {
    toggleMenu(newVal) {
      this.$store.dispatch('toggleMenu', newVal)
    },
    isLocal() {
      return window.location.protocol === 'file:'
    },
  },
}
</script>

<style lang="sass">
.aside-menu
  position: fixed
  top: 54px
  min-height: calc(100vh - 70px)
  max-height: calc(100vh - 70px)
  background-color: $color-sistema-g
  transition: flex 0.5s ease-in-out, width 0.5s ease-in-out
  overflow-x: hidden
  z-index: 100001
  width: 300px

  &__black-background
    position: fixed
    inset: 0
    top: 54px
    background: transparentize($black, 0.2)
    cursor: pointer

  a
    color: $color-sistema-a

  &__content
    width: 300px
    display: flex
    flex-direction: column
    justify-content: space-between
    min-height: calc(100vh - 70px)
    max-height: calc(100vh - 70px)
    border-right: 1px solid $color-sistema-e
    position: absolute
    background: $white

    @media (max-height: 800px)
      min-height: 800px
      max-height: 800px
      overflow-y: auto

  &__header
    display: flex
    padding: 23px 16px
    text-align: center
    background-color: $white
    h5
      margin: 0
      font-weight: normal
    img
      margin-right: 12px
      width: 20px

  &__menu
    overflow-y: auto
    flex-grow: 1
    list-style: none
    padding-left: 0
    margin-bottom: 0
    background-color: $color-sistema-h

    &__item_container
      padding: 6px 0px
      a
        padding-right: 16px
        padding-left: 16px
        padding-bottom: 8px

    &__item
      &--active
        .aside-menu__menu__item__lnk
          background-color: $color-sistema-h
          font-weight: $base-bold-font-weight

      &:hover
        background-color: $white

      &--sub-menu
        @extend .aside-menu__menu__item
        a
          font-size: 16px
        &--active
          .aside-menu__menu__item__lnk
            background-color: $color-sistema-e
            font-weight: $base-bold-font-weight
            position: relative
            &::before
              content: ''
              display: block
              position: absolute
              left: 0
              bottom: 0
              top: 0
              width: 4px
              border-radius: 2px
              background-color: $color-acento-contenido

      &__lnk
        display: flex
        align-items: center
        padding: 18px 15px
        line-height: 1.1em


        span, i
          margin-right: 10px
          &:last-child
            margin-right: 0

  &__sec-menu
    padding: 10px 0
    flex-shrink: 0
    margin-bottom: 0

    &__item
      @extend .aside-menu__menu__item
      padding: 10px 15px
      &:hover
        background-color: $color-sistema-h

      &__lnk
        @extend .aside-menu__menu__item__lnk
        padding: 0
        border-radius: 1em
        i
          display: block
          width: 2em
          height: 2em
          padding: 0.5em 0
          text-align: center
          border-radius: 50%
  @media (max-width: $bp-max-xs)
    &__sec-menu
      padding-bottom: 110px

.main-menu-enter-active
  animation: main-menu-open-animation .3s;
  .aside-menu__black-background
    animation:  main-menu-background-animation .3s


.main-menu-leave-active
  animation: main-menu-open-animation .3s reverse
  .aside-menu__black-background
    animation:  main-menu-background-animation .3s reverse

@keyframes main-menu-open-animation
  0%
    width: 0

  100%
    width: 300px

@keyframes main-menu-background-animation
  0%
    opacity: 0

  100%
    opacity: 1
</style>
