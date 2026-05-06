<template>
  <div class="yt-wrapper">
    <iframe
        :src="`https://www.youtube-nocookie.com/embed/${id}`"
        :title="title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"
    />
  </div>
</template>

<script setup>
defineProps({
  id: { type: String, required: true },
  title: { type: String, default: 'YouTube video' }
})
</script>

<style scoped>
.yt-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  border-radius: 8px;
  overflow: hidden;
}
.yt-wrapper iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
