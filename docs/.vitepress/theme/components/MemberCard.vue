<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{
  name: string
  role: string
  scholarUrl: string
  bio: string
  emoji?: string
  src?: string
  alt?: string
}>()
</script>

<template>
  <div class="xis-card">
    <div class="member-header">
      <div class="member-avatar">
        <img
            v-if="src"
            :src="withBase(src)"
            :alt="alt ?? name"
            class="avatar-img"
        />
        <span v-else class="avatar-emoji">{{ emoji ?? '👤' }}</span>
      </div>
      <div>
        <span class="tag">{{ role }}</span>
        <a :href="`${scholarUrl}`">
          <span class="tag">{{ '📚' }}</span>
        </a>
        <h3 style="margin:0">{{ name }}</h3>
      </div>
    </div>
    <p>{{ bio }}</p>
  </div>
</template>

<style scoped>
.member-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-bg-soft);
  flex-shrink: 0;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.avatar-emoji {
  font-size: 1.75rem;
  line-height: 1;
}
</style>
