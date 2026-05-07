<template>
  <div class="imagecard-flex">
    <img
        v-for="imagecard in ImageCards"
        :key="imagecard.alt"
        class="imagecard-badge shadow-xl/30 shadow-cyan-500/50"
        :src="imagecard.src"
        :alt="imagecard.alt"
    />
  </div>

<!--  <div class="card-grid">-->
<!--    <img-->
<!--        src="/Images/Logo/Logo.png"-->
<!--        alt="XIS Lab Mission and Vision"-->
<!--    />-->
<!--  </div>-->
</template>

<script setup>
const ImageCards = [
  {src: "Images/Logo/Logo.png", alt: "Logo"}
]
</script>
<style scoped>
.imagecard-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: flex-start;
  align-items: center;
}

.imagecard-badge {
  width: 600px;
  height: 400px;
  object-fit: contain;
}
</style>
