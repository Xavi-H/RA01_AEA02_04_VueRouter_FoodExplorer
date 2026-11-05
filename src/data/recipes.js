// Llistat de receptes compartit per Recipes.vue i RecipeDetail.vue
export const recipes = [
  {
    id: 1,
    name: 'Pasta Carbonara',
    description: 'Un dels clàssics italians més cremosos.',
    image: '/img/carbonara.jpg',
    ingredients: ['Pasta', 'Ou', 'Formatge Pecorino', 'Pancetta'],
    steps: ['Sofregir la pancetta', 'Bullir la pasta', 'Barrejar-ho amb l’ou i el formatge', 'Emplatar']
  },
  {
    id: 2,
    name: 'Chicken Curry',
    description: 'Pollastre especiat amb salsa cremosa.',
    image: '/img/curry.avif',
    ingredients: ['Pollastre', 'Llet de coco', 'Curri', 'Ceba', 'Arròs'],
    steps: ['Daurar el pollastre amb la ceba', 'Afegir el curri i la llet de coco', 'Coure a foc lent 20 minuts', 'Servir amb arròs']
  },
  {
    id: 3,
    name: 'Tortilla de patates',
    description: 'La recepta de tota la vida, melosa per dins.',
    image: '/img/tortilla-espanola.jpg',
    ingredients: ['Patates', 'Ous', 'Ceba', 'Oli d’oliva', 'Sal'],
    steps: ['Fregir les patates i la ceba', 'Batre els ous i barrejar', 'Quallar la tortilla a la paella', 'Girar-la i acabar de coure']
  }
]
