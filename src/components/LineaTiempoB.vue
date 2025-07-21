<template lang="pug">
.linea-tiempo-b.py-5
  .linea-tiempo-b__line-row.row
    .col-5.d-none.d-md-block
    .col-3.col-md-2
      .linea-tiempo-b__line
    .col-9.col-md-5

  .linea-tiempo-b__row.row.align-items-center(
    v-for="(item,index) of datos"
    :ref="'linea-tiempo-item-'+index"
  )
    .col-5.d-none.d-md-block
    .col-3.col-md-2
      .linea-tiempo-b__icon
        img(:src="item.icono")
    .col-9.col-md-5
      .linea-tiempo-b__content
        h3.mb-2(v-html="item.titulo")
        span(v-html="item.texto")

</template>

<script>
export default {
  name: 'LineaTiempoB',
  props: {
    datos: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="sass"></style>
