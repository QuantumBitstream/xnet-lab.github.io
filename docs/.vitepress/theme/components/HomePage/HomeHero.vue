<template>
  <div class="home-hero">
    <span class="tag">University of Glasgow</span>
    <h1>Welcome to <span class="brand">XIS Lab</span></h1>
    <p class="tagline">
      Engineering the future of intelligent, connected and secure systems
    </p>
    <p class="desc">
      XIS Lab is a deep tech research and innovation centre housed within the
      James Watt School of Engineering and School of Computing Science at the
      University of Glasgow. Our mission is to engineer intelligent, secure, and
      adaptive technologies that bridge the physical and digital domains. We
      operate at the confluence of telecommunications, electromagnetic systems,
      human-machine interaction, applied AI and cyber-physical integration,
      delivering solutions with real-world industrial impact.
    </p>
    <p class="desc">
      The lab collaborates with industry to fast-track technology readiness levels
      (TRLs) and shape the future of autonomous connectivity, cyber-physical systems
      integration, and human-centric innovation.
    </p>
    <div class="hero-actions">
      <a href="./research" class="btn-primary">Explore Research</a>
      <a href="./contact"  class="btn-outline">Get in Touch</a>
    </div>
  </div>
</template>

<style scoped>
.home-hero {
  padding: 3rem 0 2rem;
}
.brand {
  color: var(--vp-c-brand-1);
}
h1 {
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 800;
  line-height: 1.15;
  margin: 0.4rem 0 0.75rem;
}
.tagline {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}
.desc {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.7;
  max-width: 720px;
  margin-bottom: 0.6rem;
}
.hero-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}
.btn-primary {
  background: var(--vp-c-brand-1);
  color: #fff !important;
  padding: 0.55rem 1.3rem;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
}
.btn-primary:hover { background: var(--vp-c-brand-2); }
.btn-outline {
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-1) !important;
  padding: 0.55rem 1.3rem;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 0.2s;
}
.btn-outline:hover { border-color: var(--vp-c-brand-1); }
</style>
