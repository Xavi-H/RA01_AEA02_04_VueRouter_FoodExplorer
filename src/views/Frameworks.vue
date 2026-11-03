<script setup>
import router from '@/router';
import { ref } from 'vue'

const frameworks = ref([
  { id: 1, name: 'Vue.js', desc: 'Progressive Framework per construir interfícies web.' },
  { id: 2, name: 'React', desc: 'Biblioteca per crear interfícies d’usuari interactives.' },
  { id: 3, name: 'Angular', desc: 'Framework complet per aplicacions empresarials.' }
])
</script>

<template>
    <h2>Llista de frameworks</h2>
    <ul>
        <li v-for="framework in frameworks" :key="framework.id">
            <router-link :to="`/frameworks/${framework.id}`">{{framework.name}}</router-link>
        </li>
    </ul>
    <RouterView :key="$route.fullPath"/>
</template>