<template lang="pug">
.row.g-0.flex-nowrap.dialogo__chat__item
  .col-auto.dialogo__chat__item__person(
    v-if='dialogoItem.personaje && dialogoItem.personaje.img && dialogoItem.personaje.nombre'
  )
    img(:src='dialogoItem.personaje.img')
    span.text-small(v-html='dialogoItem.personaje.nombre')
  .col.dialogo__chat__item__message__container
    .dialogo__chat__item__message
      .row.g-0.align-items-center.dialogo__chat__item__message__bubble(
        :class='{ "dialogo__chat__item__message__bubble--tail": dialogoItem.personaje && dialogoItem.personaje.img && dialogoItem.personaje.nombre }'
      )
        .col.dialogo__chat__item__message__text
          .dialogo__chat__item__message__text__eng.h5.mb-0
            div(v-html='dialogoItem.textoIng')
          .dialogo__chat__item__message__text__esp.text-small(
            v-if="showTranslation"
          )
            hr.my-2
            div(v-html='dialogoItem.textoEsp')
        .col-auto.dialogo__chat__item__message__audio.ms-2(v-if='dialogoItem.audio')
          Audio(:audio='dialogoItem.audio')
      .d-flex.justify-content-end.me-3
        button.dialogo__chat__item__message__translate-btn.text-small(
          @click='showTranslation = !showTranslation'
        ) {{ showTranslation ? "Ocultar" : "Ver" }} traducción
  .col-1

</template>

<script>
export default {
  name: 'DialogoBurbuja',
  props: {
    dialogoItem: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    showTranslation: false,
  }),
}
</script>

<style lang="sass" scoped></style>
