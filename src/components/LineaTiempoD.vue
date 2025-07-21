<template lang="pug">
  .linea-tiempo-d
    .linea-tiempo-d__item.row(
      v-for="(item, index) in elements"
      :key="'linea-tiempo-d-key-'+item.id"
      :class="{'linea-tiempo-d__item--selected' : selected === item.id}"
    )
      .col-auto.linea-tiempo-d__item__col-number
        .linea-tiempo-d__item__number.tarjeta.tarjeta--gris(
          :class="[,{'px-3' : item.numero.length > 1}]"
           @click="selected = item.id"
           @mouseover="mostrarIndicador = mostrarIndicador && index >= 1 ? false : mostrarIndicador"
        )
          .indicador__container(v-if="mostrarIndicador && index === 1")
            .indicador--click
          span(v-html="item.numero")
        .linea-tiempo-d__item__dots(
          v-if="index < elements.length -1"
        )
  
      .col(:class="{'mb-4' : index < elements.length -1}")
        .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
          .linea-tiempo-d__item__content__title.px-3.justify-content-between(
            :class="{'active' : selected === item.id}"
            @click="selected = item.id"
            @mouseover="mostrarIndicador = mostrarIndicador && index >= 1 ? false : mostrarIndicador"
          )
            span(v-html="item.titulo")
            i.fas.fa-angle-up(v-if="selected === item.id")
            i.fas.fa-angle-down(v-else)
          .linea-tiempo-d__item__content__slot(
            :style="{ height: rendered && selected === item.id ? getActiveHeight(item.id) : 0 } "
          )
            .p-3(:ref="item.id" v-child="item.elm" )
  
    .hidden-slot
      slot
  </template>

<script>
import componentSlotMixins from '../mixins/componentSlotMixins'
export default {
  name: 'LineaTiempoD',
  mixins: [componentSlotMixins],
  data: () => ({
    mostrarIndicador: true,
  }),
  computed: {},
  watch: {},
  methods: {},
}
</script>

<style lang="sass">
.large
  .linea-tiempo-d__item__content__title
    padding: 28px
    border-radius: 5px 5px 0px 0px
    background-color: lighten($color-primario, 30%)
  .linea-tiempo-d__item__content__title.active
    background-color: $color-primario !important
  .linea-tiempo-d__item__content__slot
    border-radius: 0px 0px 5px 5px
    background-color: lighten($color-primario, 37%) !important
  .linea-tiempo-d__item__number
    background-color: lighten($color-primario, 30%)
  .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
    background-color: $color-primario !important
  .linea-tiempo-d__item__dots:after
    border-left: 0px
  .fa-angle-up, .fa-angle-down
    display: block

// DEFAULT
.linea-tiempo-d__item__content__title
  padding: 12px 26px
  border-radius: 5px 5px 0px 0px
  background-color: #FAD3FC
.linea-tiempo-d__item__content__title.active
  background-color: #FDEFFE
.linea-tiempo-d__item__content__slot
  border-radius: 0px 0px 5px 5px
  background-color: #FDEFFE
.linea-tiempo-d__item__number
  background-color: #FAD3FC
.linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #FDEFFE !important
.linea-tiempo-d__item__dots:after
  border-left: 0px
.linea-tiempo-d__item__dots:after
  border-left: 5px dotted #D2E1F1
.fa-angle-up, .fa-angle-down
  display: none
</style>
