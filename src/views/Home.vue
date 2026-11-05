<template>
  <section class="home">
    <h1>Benvinguts a FoodExplorer</h1>
    <p>Descobreix, explora i consulta delicioses receptes.</p>
    <img src="/img/Paella.jpg" alt="Plat de menjar">
    <RouterLink to="/recipes" class="btn">Veure receptes</RouterLink>
  </section>
</template>

<style scoped>
  .home {
    text-align: center;
  }

  .home img {
    display: block;
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    margin: 1.5rem 0;
    border-radius: 12px;
  }
</style>
