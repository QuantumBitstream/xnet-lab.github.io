<script setup lang="ts">
defineProps<{ title: string; items: string[] }>()
</script>

<template>
  <div class="xis-card">
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
