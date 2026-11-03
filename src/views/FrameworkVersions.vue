<template>
    <ul>
        <li v-for="v in version" :key="v">
            {{ v }}
        </li>
    </ul>>
    <RouterView/>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const versionId = parseInt(route.params.id)
const versionsData = {
  1: ['3.4.21', '3.3.8', '2.7.16'],
  2: ['18.2.0', '17.0.2', '16.14.0'],
  3: ['17.3.0', '16.2.0', '15.1.5']
}

const version = versionsData[versionId] || []
</script>