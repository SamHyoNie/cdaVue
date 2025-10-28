/*Faire un composant qui affichera un compteur,
avec un bouton - pour réduire de 11 en 11
avec un bouton + pour augmenter de 99 en 99


Bonus : (event modifiers ---> faire en sorte que pour augmenter on doit faire un clic droit, et pour réduire ca réagira
au bouton middle de la souris)*/
<template>
    <div class="card bg-base-100 shadow-xl rounded-box">
        <div class="card-body">
            <h1>Exercice Event Binding</h1>
            <div class="overflow-x-auto">
                <p>Compteur : {{ compteur }}</p> // 2 manières de lier un événement à une fonction
                <button v-on:click.middle="reduire(11)" class="btn btn-secondary m-2">-</button>
                <button @click.right="augmenter(99)" class="btn btn-primary m-2">+</button>
            </div>

        </div>
    </div>
</template>
<script setup lang="js">
import { ref } from 'vue';
const compteur = ref(0);
const augmenter = (x) => { // deux manières de définir une fonction
    console.log("clic droit détecté");
    compteur.value += x;
};
function reduire(x){
    console.log("clic midle détecté");
    compteur.value -= x;
};
</script>