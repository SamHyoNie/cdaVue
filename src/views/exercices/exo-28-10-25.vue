<template>
    <h1>Exercice Watchers</h1>
    <div>
        <p>Compteur : {{ compteur }}</p>
        <button class="btn btn-primary" @click="increment">+</button>
    </div>
</template>

<script setup lang='js'>
import { ref, watch } from 'vue';
const compteur = ref(0);
const limit = ref(7);
const limitReached = ref(false);
function increment() {
    compteur.value++;
    /*if (compteur.value > limit.value) { //sans utiliser de watcher
        compteur.value = 0;
    }*/
}

watch(compteur, () => {
    if(limitReached.value = compteur.value > limit.value){
        compteur.value = 0;
    }
})

</script>