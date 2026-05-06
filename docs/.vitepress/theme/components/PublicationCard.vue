<script setup lang="ts">
import {journalPapers,conferencePapers} from "../../../data/publications";
import type { Publication } from './type'

defineProps<{
  publications: Publication[]
}>()
</script>

<template>

  <h2>Journal Papers</h2>
  <div
      v-for="pub in journalPapers"
      :key="pub.doi ?? pub.title"
      class="pub-card"
  >
    <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.35rem;">
      <span class="tag">{{ pub.year }}</span>
    </div>
    <h4>{{ pub.title }}</h4>
    <p>{{ pub.authors }}</p>
    <p style="font-style:italic; margin-top:0.25rem">{{ pub.venue }}</p>
    <a
        v-if="pub.doi"
        :href="`https://doi.org/${pub.doi}`"
        target="_blank"
        rel="noreferrer"
    >
      DOI: {{ pub.doi }}
    </a>
  </div>

  <h2>Conference Papers</h2>
  <div
      v-for="pub in conferencePapers"
      :key="pub.doi ?? pub.title"
      class="pub-card"
  >
    <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.35rem;">
      <span class="tag">{{ pub.year }}</span>
    </div>
    <h4>{{ pub.title }}</h4>
    <p>{{ pub.authors }}</p>
    <p style="font-style:italic; margin-top:0.25rem">{{ pub.venue }}</p>
    <a
        v-if="pub.doi"
        :href="`https://doi.org/${pub.doi}`"
        target="_blank"
        rel="noreferrer"
    >
      DOI: {{ pub.doi }}
    </a>
  </div>

</template>


