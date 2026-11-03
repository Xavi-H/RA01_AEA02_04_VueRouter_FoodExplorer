<template>
    <div v-if="framework">
        <h1>{{ framework.name }}</h1>
        <p>{{ framework.desc }}</p>
        <RouterLink :to="`/versions/${framework.id}`">Veure versions</RouterLink>
        <RouterView/>
    </div>
    <p v-else>Framework no trobat.</p>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { reactive } from 'vue'
const route = useRoute()
const frameworks = reactive([
  { id: 1, name: 'Vue.js', desc: 'Progressive Framework per construir interfícies web.' },
  { id: 2, name: 'React', desc: 'Biblioteca per crear interfícies d’usuari interactives.' },
  { id: 3, name: 'Angular', desc: 'Framework complet per aplicacions empresarials.' }
])
const frameworkId = parseInt(route.params.id)
const framework = frameworks.value.find(f => f.id === frameworkId)
</script>