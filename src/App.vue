<script setup></script>

<template>
  <header class="topbar">
    <nav>
      <RouterLink to="/" class="brand">FoodExplorer</RouterLink>
      <div class="links">
        <RouterLink to="/">Inici</RouterLink>
        <RouterLink to="/recipes">Receptes</RouterLink>
      </div>
    </nav>
  </header>

  <main class="page">
    <RouterView />
  </main>
</template>

<style>
  body {
    margin: 0;
    background-color: #fffaf3;
    color: #2b2118;
    font-family: 'Segoe UI', Arial, sans-serif;
  }

  .topbar {
    background-color: white;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }

  .topbar nav {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2b2118;
    text-decoration: none;
  }

  .links a {
    margin-left: 1rem;
    font-weight: bold;
    color: #2b2118;
    text-decoration: none;
  }

  /* Enllaç de la pàgina actual */
  .links a.router-link-active {
    color: #c2410c;
  }

  .page {
    max-width: 900px;
    margin: 0 auto;
    padding: 1.5rem 1rem;
  }

  /* Botó-enllaç reutilitzat a les vistes */
  .btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #c2410c;
    color: white;
    font-weight: bold;
    text-decoration: none;
    border-radius: 6px;
  }

  .btn:hover {
    background-color: #9a3412;
  }
</style>
