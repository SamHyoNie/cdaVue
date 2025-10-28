<template>
    <div>
        <h1>Exercice Binding et Interpolation</h1>
        <div class="overflow-x-auto">
            <img :src=imageUser alt="cosplay bizare?!">
            <p>{{ personne.nom }}</p>
            <input type="text" name="" id="" :value='personne.nom' class="input-bordered input">
            <p>Age : {{ personne.age }}ans</p>
            <p>Age + 10 : {{ personne.age + 10 }}ans</p>
            <p>Nombre fétiche : {{ random(personne.age) }}</p>
        </div>
    </div>
</template>

<script setup lang='js'>
// Pas besoin d'importer 'ref' grâce à l'auto-import de Nuxt 3 et 4
import { ref } from 'vue';
const imageUser = 'https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg';
const personne = ref({ nom: 'Dr Mario', age: 30, pp: imageUser });

// Fonctions
const random = (x) => {
    return Math.floor(Math.random() * 100)* x;
};

</script>

<style scoped lang="css"></style>