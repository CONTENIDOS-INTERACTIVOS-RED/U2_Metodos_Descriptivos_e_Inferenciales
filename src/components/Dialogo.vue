<template lang="pug">
  .dialogo__chat.dialogo__chat--no-scroll.p-4.me-0
    DialogoBurbuja.mb-3(
      v-for="dialogoItem in dialogoComputed"
      :key="`dialogo-item-${dialogoItem.id}`"
      :dialogoItem="dialogoItem"
    )

</template>

<script>
import dialogoMixins from '../mixins/dilogoMixins'
export default {
  name: 'Dialogo',
  mixins: [dialogoMixins],
  props: {
    dialogo: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    dialogoComputed() {
      return this.dialogoMerge(this.dialogo)
    },
  },
}
</script>

<style></style>
