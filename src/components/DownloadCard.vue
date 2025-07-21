<!-- DownloadCard.vue -->
<template>
  <div class="download-card box-shadow p-4 mb-5">
    <!-- Contenido principal -->
    <div class="download-card__content">
      <!-- Icono circular -->
      <div class="pdf-icon me-3">
        <img
          :src="icon || require('@/assets/template/bg-icono-pdf.svg')"
          :alt="iconAlt"
          :style="{ width: iconWidth }"
        />
      </div>

      <!-- Textos -->
      <div class="download-card__text">
        <h5 class="my-2">{{ title }}</h5>
        <p v-html="description"></p>
      </div>
    </div>

    <!-- Botón de descarga -->
    <div class="download-card__action">
      <a class="download-btn" :href="downloadUrl" target="_blank">
        <span>{{ buttonText }}</span>
        <i class="fas fa-arrow-right ms-2"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DownloadCard',
  props: {
    icon: {
      type: String,
      default: '',
    },
    iconAlt: {
      type: String,
      default: 'Icono PDF',
    },
    iconWidth: {
      type: [Number, String],
      default: '90px',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    downloadUrl: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: 'Descargar',
    },
  },
}
</script>

<style lang="sass" scoped>
.download-card
  display: flex
  justify-content: space-between
  align-items: center
  border-radius: 0px
  background-color: #fff
  &__content
    display: flex
    align-items: center
    gap: 1rem
    flex: 1
  &__text
    flex: 1
  &__action
    margin-left: 1rem

.download-btn
  display: inline-flex
  align-items: center
  padding: 0.5rem 1rem
  background-color: #1172B3
  color: white
  border-radius: 0px
  box-shadow: 0 4px 8px rgba(0,0,0,0.1)
  &:hover
    opacity: 0.9

.pdf-icon
  width: 90px
  min-width: 90px
  display: flex
  align-items: center
  justify-content: center
  img
    width: 100%
    height: auto
    display: block
</style>
