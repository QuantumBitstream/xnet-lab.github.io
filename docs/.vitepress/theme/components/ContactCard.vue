<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{
  role: string
  name: string
  email: string
  affiliation: string
  src?: string
  alt?: string
}>()
</script>

<template>
  <div class="xis-card">
    <div class="contact-avatar">
      <img
          v-if="src"
          :src="withBase(src)"
          :alt="alt ?? name"
          class="avatar-img"
      />
      <span v-else class="avatar-fallback">{{ name.charAt(0) }}</span>
    </div>
    <span class="tag">{{ role }}</span>
    <h3>{{ name }}</h3>
    <p>
      📧 <a :href="`mailto:${email}`">{{ email }}</a>
    </p>
    <p>🏛️ {{ affiliation }}</p>
  </div>
</template>

<style scoped>
.contact-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-bg-soft);
  margin: 0 auto 1rem;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.avatar-fallback {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--vp-c-brand);
  line-height: 1;
}
</style>
