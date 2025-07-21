<template>
  <div>
    <div class="row align-items-center">
      <div class="col-6">
        <div class="pe-4">
          <div class="row">
            <div class="col-auto">
              <span class="question__number">{{ numeroPregunta }}</span>
            </div>
            <div class="col">
              <span class="question__text" v-html="pregunta.texto"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div
          v-for="(respuesta, idx) in opcionesComputed"
          :key="respuesta.id"
          class="tarjeta tarjeta-respuesta--azul tarjeta-respuesta p-3 px-4"
          :class="{
            'mb-3': idx !== opcionesComputed.length - 1,
            'tarjeta-respuesta--correcta': respuesta.correcta,
            'tarjeta-respuesta--incorrecta': respuesta.incorrecta,
            'tarjeta-respuesta--disabled': respuesta.disabled,
          }"
          @click="onRespuestaSelected(respuesta)"
        >
          <div class="row align-items-center">
            <div class="col-auto">
              <div
                class="tarjeta-respuesta__icon"
                :class="[
                  respuestaSelected.id === respuesta.id
                    ? respuesta.esCorrecta
                      ? 'tarjeta-respuesta__icon--correcto'
                      : 'tarjeta-respuesta__icon--incorrecto'
                    : '',
                ]"
              />
            </div>
            <div class="col" v-html="respuesta.texto"></div>
          </div>
        </div>
      </div>
    </div>
    <template v-if="respuestaSelected.id">
      <div class="tarjeta tarjeta--blanca py-3 px-4 mt-4 d-none">
        <div v-if="respuestaSelected.esCorrecta" class="pt-1">
          <span class="text-success h3 ma-0">¡Correcto!</span>
          {{ pregunta.mensaje_correcto }}
        </div>
        <div v-else class="pt-1">
          <span class="text-danger h3 ma-0">¡Incorrecto!</span>
          {{ pregunta.mensaje_incorrecto }}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ActividadPregunta',
  props: {
    pregunta: {
      type: Object,
      required: true,
    },
    numeroPregunta: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    respuestaSelected: {},
  }),
  computed: {
    opcionesComputed() {
      if (!this.pregunta.opciones.length) return []
      const selectedId = this.respuestaSelected.id
      return this.pregunta.opciones.map(opcion => ({
        ...opcion,
        correcta: selectedId === opcion.id && opcion.esCorrecta,
        incorrecta: selectedId === opcion.id && !opcion.esCorrecta,
        disabled: !!selectedId,
      }))
    },
  },
  watch: {
    pregunta() {
      this.respuestaSelected = {}
    },
  },
  methods: {
    onRespuestaSelected(respuesta) {
      this.respuestaSelected = respuesta
      this.$emit('respuestaSelected', respuesta.esCorrecta)
    },
  },
}
</script>

<style lang="sass" scoped>
.question__text
  font-family: Arial, Helvetica, sans-serif
  color: $color-acento-contenido
  font-weight: 700
  font-size: 1.1em
  color: $color-sistema-a

.question__number
  background-color: #F1A607
  font-weight: 900
  color: #fff
  width: 32px
  height: 32px
  display: inline-block
  text-align: center
  font-size: 0.9em
  line-height: 32px

img
  width: auto
  height: auto
  display: block
  margin: auto
.tarjeta--pregunta
  background: #dce4eb
.tarjeta-respuesta
  border: 2px solid transparent
  cursor: pointer
  transition: border-color 0.2s
  &:hover
    border-color: #556a82

    .tarjeta-respuesta__icon:not(.tarjeta-respuesta__icon--correcto):not(.tarjeta-respuesta__icon--incorrecto)
      background-image: url('~@/assets/actividad/vacio-hover.svg')

  &--correcta
    border-color: #61ca92ff !important
    background-color: #ebfff0ff !important
    &:hover
      border-color: #61ca92ff

  &--incorrecta
    border-color: #ff6b6bff !important
    background-color: #ffedecff !important
    &:hover
      border-color: #ff6b6bff

  &--disabled
    cursor: not-allowed
    pointer-events: none

  &__icon
    width: 32px
    height: 32px
    position: relative
    background-image: url('~@/assets/actividad/vacio.svg')
    &:hover
      background-image: url('~@/assets/actividad/vacio-hover.svg')

    &--correcto
      background-image: url('~@/assets/actividad/correcto.svg')

    &--incorrecto
      background-image: url('~@/assets/actividad/incorrecto.svg')

.tarjeta-respuesta--azul
  background-color: lighten(#dce4eb, 5%)
  border-color: #dce4eb
</style>
