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


<!--<template>
    <div class="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img src="../assets/gastly.gif"
                alt="fantominus gif" srcset="">
        </figure>
        <div class="card-body">
            <h2 class="card-title">Rival <img src="../assets/coeur.png" alt="" srcset=""></h2>
            <progress class="progress w-85" value={{ rivalHealth }} max="100"></progress>
        </div>
    </div>
    <div class="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img src="../assets/pika.gif"
                alt="" srcset="">
        </figure>
        <div class="card-body">
            <h2 class="card-title">Player <img src="../assets/coeur.png" alt="" srcset=""></h2>
            <progress class="progress w-85" value={{ playerHealth }} max="100"></progress>
        </div>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';
const playerHealth = ref(100);
const rivalHealth = ref(100);
</script>
<style scoped lang="css"></style>-->