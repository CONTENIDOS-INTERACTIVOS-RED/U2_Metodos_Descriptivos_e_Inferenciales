<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'FUNDAMENTACIÓN JURÍDICA - unidad 1'" :subTitulo="'INTRODUCCIÓN'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
