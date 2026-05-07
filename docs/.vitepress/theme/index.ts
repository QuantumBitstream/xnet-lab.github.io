import DefaultTheme from 'vitepress/theme'
import "./custom.css";
import './style.css'

// Global custom components — usable in ANY .md file
import HomeHero           from './components/HomePage/HomeHero.vue'
import StatCard           from './components/StatCard.vue'
import ResearchThemeCard  from './components/ResearchThemeCard.vue'
import ProjectCard        from './components/ProjectCard.vue'
import MemberCard         from './components/MemberCard.vue'
import PublicationCard    from './components/PublicationCard.vue'
import ContactCard        from './components/ContactCard.vue'
import PartnerGrid from "./components/HomePage/PartnerGrid.vue";
import ImageCard from "./components/ImageCard.vue";
import YouTube from "./components/OutputPage/YouTube.vue";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('HomeHero',          HomeHero)
        app.component('StatCard',          StatCard)
        app.component('ResearchThemeCard', ResearchThemeCard)
        app.component('ProjectCard',       ProjectCard)
        app.component('MemberCard',        MemberCard)
        app.component('PublicationCard',   PublicationCard)
        app.component('ContactCard',       ContactCard)
        app.component('PartnerGrid',       PartnerGrid)
        app.component('ImageCard',       ImageCard)
        app.component('YouTube',       YouTube)
    },
}
