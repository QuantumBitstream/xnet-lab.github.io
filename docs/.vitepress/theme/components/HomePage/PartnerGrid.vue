<template>
  <div class="partner-flex">
    <img
        v-for="partner in partners"
        :key="partner.alt"
        class="partner-badge"
        :src="partner.src"
        :alt="partner.alt"
    />
  </div>
</template>

<script setup>
import {partners} from '../../../../data/partners.ts'

</script>
<style scoped>
.partner-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: flex-start;
  align-items: center;
}

.partner-badge {
  width: 150px;
  height: 80px;
  object-fit: contain;
}
</style>
