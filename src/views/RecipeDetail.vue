<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { recipes } from '@/data/recipes'

// useRoute() dona accés als paràmetres de la ruta actual (/recipes/:id)
const route = useRoute()

// route.params.id és un text, per això el passem a número abans de comparar
const recipe = computed(() => recipes.find(r => r.id === Number(route.params.id)))
</script>

<template>
  <section v-if="recipe" class="detail">
    <img :src="recipe.image" :alt="recipe.name">

    <div class="text">
      <h2>{{ recipe.name }}</h2>
      <p>{{ recipe.description }}</p>

      <h4>Ingredients:</h4>
      <ul>
        <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
      </ul>

      <h4>Pas a pas:</h4>
      <ul>
        <li v-for="step in recipe.steps" :key="step">{{ step }}</li>
      </ul>

      <RouterLink to="/recipes" class="btn">← Tornar a receptes</RouterLink>
    </div>
  </section>

  <section v-else>
    <h2>Recepta no trobada</h2>
    <p>No existeix cap recepta amb aquest identificador.</p>
    <RouterLink to="/recipes" class="btn">← Tornar a receptes</RouterLink>
  </section>
</template>

<style scoped>
  .detail {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .detail img {
    width: 280px;
    max-width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
  }

  .text {
    flex: 1;
    min-width: 250px;
  }

  .text h2 {
    margin-top: 0;
  }
</style>
