<template lang="pug">
  .slyder-f
    .slyder-f__btn.pe-4(@click="clickAnterior" :class="{'disabled': isFirstSlide}")
      i.fas.fa-chevron-left
    .slyder-f__main(:id="'slyder-f-' + mainId")
      ScrollHorizontal(
        v-if="elements.length && rendered" 
        :selectedId="'sl-' + selected"
        row
      )
        .slyder-f__slyde(
          v-for="(item, index) in elements"
          :key="'sl-key-'+item.id"
          :id="'sl-'+item.id"
          :class="columnas"
          v-child="item.elm"
        )
    .slyder-f__btn.ps-4(@click="clickSiguiente" :class="{'disabled': isLastSlide }")
      i.fas.fa-chevron-right
  
    .hidden-slot
      slot
</template>

<script>
import ScrollHorizontal from './plantilla/ScrollHorizontal'
import componentSlotMixins from '../mixins/componentSlotMixins'
import slyderMixins from '../mixins/slyderMixins'

export default {
  name: 'SlyderF',
  components: { ScrollHorizontal },
  mixins: [componentSlotMixins, slyderMixins],
  props: {
    columnas: {
      type: String,
      default: '',
    },
  },
  computed: {
    isLastSlide() {
      if (!this.elements.length) return true
      const ids = this.elements.map(element => element.id)
      const idxOfSelected = ids.indexOf(this.selected)
      return idxOfSelected === ids.length - 1
    },

    isFirstSlide() {
      if (!this.elements.length) return true
      const ids = this.elements.map(element => element.id)
      const idxOfSelected = ids.indexOf(this.selected)
      return idxOfSelected === 0
    },
  },
  methods: {
    clickAnterior() {
      if (this.isFirstSlide) return
      const ids = this.elements.map(element => element.id)
      const idxOfSelected = ids.indexOf(this.selected)
      this.selected = ids[idxOfSelected - 1]
    },
    clickSiguiente() {
      if (this.isLastSlide) return
      const ids = this.elements.map(element => element.id)
      const idxOfSelected = ids.indexOf(this.selected)
      this.selected = ids[idxOfSelected + 1]
    },
  },
}
</script>

<style lang="sass">
.slyder-f
  &__btn
    i
      transition: all 0.3s ease-in-out
    i.fa-chevron-left:hover
      transform: translateX(-5px)
    i.fa-chevron-right:hover
      transform: translateX(5px)
    &.disabled
      i
        opacity: 0.5
        cursor: auto
      i.fa-chevron-left:hover,
      i.fa-chevron-right:hover
        transform: none !important
</style>
