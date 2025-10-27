<template>
  <div>
    <h1>Exercice Text Interpolation</h1>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>Tableau</th>
            <th>Valeau</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr>
            <td>unLivre</td>
            <td>{{ livre }}</td>
          </tr>
          <!-- row 2 -->
          <tr>
            <td>isOnline</td>
            <td>{{ etat }}</td>
          </tr>
          <!-- row 3 -->
          <tr>
            <td>unNombre</td>
            <td>{{ nombre }}</td>
          </tr>
          <!-- row 4 -->
          <tr>
            <td>unTableau</td>
            <td>{{ tableauAdmin }}</td>
          </tr>
          <!-- row 5 -->
          <tr>
            <td>unObjet</td>
            <td>{{ objetUser }}</td>
          </tr>
          <!-- row 6 -->
          <tr>
            <td>unObjet.name</td>
            <td>{{ objetUser.name }}</td>
          </tr>
          <!-- row 7 -->
          <tr>
            <td>unObjet['name']</td>
            <td>{{ objetUser['name'] }}</td>
          </tr>
          <!-- row 8 -->
          <tr>
            <td>unObjet.tel</td>
            <td>{{ objetUser.tel }}</td>
          </tr>
          <!-- row 9 -->
          <tr>
            <td>fonctionTest()</td>
            <td>{{ fonctionTest() }}</td>
          </tr>
          <!-- row 10 -->
          <tr>
            <td>Ternaire</td>
            <td>{{ 
              1 === 1 ? 'Cool' : 'Pas cool'
            }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang='js'>
// Pas besoin d'importer 'ref' grâce à l'auto-import de Nuxt 3 et 4
import { ref } from 'vue';
const variableClassic = 'STEVEN VANDAMME';
// Propriétés réactives
const message = ref('Bonjour, Vue.js !');
const livre = ref('Le Guide du développeur moderne');
const etat = ref(false);
const nombre = ref(42);
const firstName = ref('JigZo');
const lastName = ref('Dupont');
const tableauAdmin = ref([111, 'stringg']);
const objetUser = ref({ id: 1, name: 'Alice', tel: '0123456789' });

// Fonctions
const toUpperCase = (str) => {
  return str.toUpperCase();
};

const fonctionTest = () => {
  return "Hello World";
};
</script>

<style scoped lang="css"></style>