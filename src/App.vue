<template lang="pug">
#app.app
  Header(v-if="!isHome")
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  //- Accesibilidad

</template>

<script>
export default {
  name: 'App',
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
    isHome() {
      return this.$route.name === 'home'
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>

<style lang="sass">
body
  background-color: $app-fondo !important
</style>
