<template lang="pug">
.curso-main-container.referencias
  BannerInterno(icono="fas fa-book" subTitulo="Referencias bibliográficas" titulo="FUNDAMENTACIÓN JURÍDICA - unidad 1")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .referencias__item.d-flex(v-for="(ref, index) in orderedData" :key="ref.link")
      span.py-4.d-block.me-3(v-html="index + 1")
      div.py-4.w-100
        span(v-html="ref.referencia")
        a.ms-1(v-if="ref.link" :href="ref.link" target="_blank")
          span(v-html="ref.link")
          i.ms-1.fas.fa-external-link-alt
</template>
<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import plantillaMixins from '../mixins/plantillaMixins'
export default {
  name: 'Referencias',
  components: {
    BannerInterno,
  },
  mixins: [plantillaMixins],
  computed: {
    referenciasData() {
      return this.$config.referencias
    },
    orderedData() {
      const ArrayOrdered = [...this.referenciasData].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
      return ArrayOrdered
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    div
      border-bottom: 3px solid $color-sistema-f
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
