<script setup>
import { recipes } from '@/data/recipes'
</script>

<template>
  <section>
    <h2>Receptes</h2>

    <div class="grid">
      <article v-for="recipe in recipes" :key="recipe.id" class="card">
        <img :src="recipe.image" :alt="recipe.name">
        <div class="info">
          <h3>{{ recipe.name }}</h3>
          <p>{{ recipe.description }}</p>
          <!-- Ruta dinàmica: passem l'id de la recepta com a paràmetre -->
          <RouterLink :to="{ name: 'recipe-detail', params: { id: recipe.id } }" class="btn">
            Veure detall →
          </RouterLink>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.25rem;
  }

  .card {
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .card img {
    display: block;
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  .info {
    padding: 1rem;
  }

  .info h3 {
    margin: 0 0 0.5rem;
  }
</style>
