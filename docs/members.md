---
title: Members
---

<script setup>
import {directors,governance,members} from "./data/members";

</script>

### Members

A cross-disciplinary team of researchers advancing intelligent, secure,
and adaptive technologies at the University of Glasgow.

#### Leadership

<div class="card-grid card-grid-2">
  <MemberCard
      v-for="director in directors"
      :src="director.src"
      :key="director.name"
      :name="director.name"
      :role="director.role || 'Director'"
      :scholarUrl="director.scholarUrl"
      :emoji="director.emoji || '🎓'"
      :bio="director.bio"
  />
</div>

#### Governance

<div class="card-grid card-grid-2">
  <MemberCard
      v-for="director in governance"
      :src="director.src"
      :key="director.name"
      :name="director.name"
      :role="director.role || 'Governance'"
      :scholarUrl="director.scholarUrl"
      :emoji="director.emoji || '🎓'"
      :bio="director.bio"
  />
</div>

#### Researchers

<div class="card-grid">
  <MemberCard
      v-for="director in members"
      :src="director.src"
      :key="director.name"
      :name="director.name"
      :role="director.role || 'Members'"
      :scholarUrl="director.scholarUrl"
      :emoji="director.emoji || '🎓'"
      :bio="director.bio"
  />
</div>
