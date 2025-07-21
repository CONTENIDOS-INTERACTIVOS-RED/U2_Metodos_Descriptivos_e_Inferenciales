<template lang="pug">
.slyder-d
  ScrollHorizontal(v-if="datos.length" :selectedId="selected" item-full-width)
    .slyder-d__slyde(
      v-for="(item,index) in datos" 
      :key="'key-'+getId(index)"
      :id="getId(index)"
    )
      .slyder-d__imagen.mb-4
        figure.slyder-d__img
          img(:src='item.imagen', :alt='item.leyendaImagen')

        .slyder-d__content
          .row
            .col-md-8.col-lg-6
              .slyder-d__content__card.p-4
                h3(v-if="item.hasOwnProperty('titulo')" v-html="item.titulo")
                p.mb-3(v-html="item.texto")
                .slyder__action
                  .slyder__pagination {{index+1}}/{{datos.length}}
                  a.slyder__btn(v-if="index -1 >= 0" @click="selected = getId(index -1)")
                    i.fas.fa-angle-left
                  a.slyder__btn(
                    v-if="index != datos.length -1"
                    @click="selected = getId(index +1)"
                    @mouseover="mostrarIndicador = false"
                  )
                    i.fas.fa-angle-right
                    .indicador__container(v-if="mostrarIndicador && index === 0")
                      .indicador--click.indicador--sm

</template>

<script>
import slyderMixins from '../mixins/slyderMixins'
import ScrollHorizontal from './plantilla/ScrollHorizontal'
export default {
  name: 'SlyderD',
  components: { ScrollHorizontal },
  mixins: [slyderMixins],
  data: () => ({
    mostrarIndicador: true,
  }),
  mounted() {
    this.selected = this.getId(0)
  },
}
</script>

<style lang="sass"></style>
