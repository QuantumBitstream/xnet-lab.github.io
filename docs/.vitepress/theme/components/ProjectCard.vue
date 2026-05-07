<script setup lang="ts">
// fix:
//
// In VitePress, if you reference an image with an absolute path like /Images/Logo/Logo.png,
// that file must be placed inside a public directory at the root of your docs.
//
// If you are deploying your site to a sub-path (like https://username.github.io/my-repo/),
// absolute paths like /Images/... will break in production because they look at the root of the domain, not the repo.
//
// If this is happening to you, you need to use VitePress's withBase helper in your component:
import { withBase } from 'vitepress'
defineProps<{ title: string; funder: string; desc: string; image?: string; imageAlt?: string }>()
</script>

<template>
  <div class="xis-card">
    <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:0.5rem;">
      <h3 style="margin:0">{{ title }}</h3>
      <span class="tag" style="white-space:nowrap; flex-shrink:0">{{ funder }}</span>
    </div>
    <p style="margin-top:0.5rem">{{ desc }}</p>

    <img
        v-if="image"
        :src="withBase(image)"
        :alt="imageAlt ?? title"
        class="project-img"
    />
    <div v-else class="img-placeholder">{{ title }}</div>
  </div>
</template>

<style scoped>
.project-img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 6px;
}

.img-placeholder {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-3);
  font-size: 0.85rem;
}
</style>
