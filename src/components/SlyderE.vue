<template lang="pug">
.slyder-e
  ScrollHorizontal(v-if="elements.length && rendered" :selectedId="'sl-' + selected" item-full-width)
    .slyder-e__slyde(
      v-for="(item, index) in elements"
      :key="'sl-key-'+item.id"
      :id="'sl-'+item.id"
    )
      .slyder-e__content(
        v-child="item.elm"
      )
      .slyder-e__actions.d-flex.p-2(
        :class="[{'justify-content-center' : indicadores === 'centro'},{'justify-content-end' : indicadores === 'derecha'}]"
      )
        .slyder__action
          .slyder__pagination {{index+1}}/{{elements.length}}
          a.slyder__btn(
            v-if="navObj.back"
            @click="selected = navObj.back"
            @mouseover="mostrarIndicador = false"
          )
            i.fas.fa-angle-left
          a.slyder__btn(
            v-if="navObj.next"
            @click="selected = navObj.next" 
            @mouseover="mostrarIndicador = false"
          )
            i.fas.fa-angle-right
            .indicador__container.indicador--left(v-if="mostrarIndicador && index === 0")
              .indicador--click.indicador--sm

  .hidden-slot
    slot
</template>

<script>
import ScrollHorizontal from './plantilla/ScrollHorizontal'
import componentSlotMixins from '../mixins/componentSlotMixins'
export default {
  name: 'SlyderE',
  components: { ScrollHorizontal },
  mixins: [componentSlotMixins],
  props: {
    indicadores: {
      type: String,
      default: 'izquierda',
      validator: value =>
        ['izquierda', 'centro', 'derecha'].indexOf(value) !== -1,
    },
  },
  data: () => ({
    mostrarIndicador: true,
    secuencial: true,
  }),
}
</script>

<style lang="sass"></style>
