<template lang="pug">
.curso-main-container.glosario
  BannerInterno(icono="fas fa-atlas" subTitulo="GLOSARIO" titulo="FUNDAMENTACIÓN JURÍDICA - unidad 1")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .glosario__letra-item.mb-2(v-for="letra in orderedData" :key="'letra-'+letra.letra")
      .glosario__letra-item__letra.me-4
        .glosario__letra-item__letra__icono
          span {{letra.letra}}
      .glosario__letra-item__texto
        p.mt-3.mb-4(v-for="termino in letra.terminos")
          strong
            i.lista-ul__vineta
          strong(v-html="termino.terminoHtml || termino.termino") 
          strong : 
          span(v-html="termino.significado")
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import plantillaMixins from '../mixins/plantillaMixins'
export default {
  name: 'Glosario',
  components: {
    BannerInterno,
  },
  mixins: [plantillaMixins],
  computed: {
    glosarioData() {
      return this.$config.glosario
    },
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    flex-direction: column
    &__texto
      padding-top: 5px
    &__letra
      position: relative
      &::before
        content: ''
        position: absolute
        top: 50%
        left: 5%
        width: 95%
        height: 3px
        background-color: $color-sistema-f
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        background-color: $color-sistema-f

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
