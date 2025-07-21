<template lang="pug">
.linea-tiempo-a
  .linea-tiempo-a__row(
    v-for="(item,index) of datos"
    :ref="'linea-tiempo-item-'+index"
  )
    .linea-tiempo-a__content
      .linea-tiempo-a__text
        h3.mb-2(v-html="item.titulo")
        span(v-html="item.texto")

    .linea-tiempo-a__content
      .linea-tiempo-a__icon
        .linea-tiempo-a__icon__container
          span.h4(v-html="item.ano")
</template>

<script>
export default {
  name: 'LineaTiempoA',
  props: {
    datos: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="sass"></style>
