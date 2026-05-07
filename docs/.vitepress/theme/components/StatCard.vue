<script setup lang="ts">
defineProps<{ value: string; label: string; icon?: string }>()
</script>

<template>
  <div class="stat-card">
    <div v-if="icon" class="stat-icon">{{ icon }}</div>
    <div class="stat-value">{{ value }}</div>
    <div class="stat-label">{{ label }}</div>
  </div>
</template>

<style scoped>
.stat-icon { font-size: 1.4rem; margin-bottom: 0.4rem; }
</style>
