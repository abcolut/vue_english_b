<script setup>
const counter = useCounterStore()
</script>

<template>
    <h3 class="text-center"> Примеры работы с Storage</h3>
    <div class="pa-4">
        <p>Счетчик: {{ counter.count }}</p>
        <button @click="counter.increment()">+1</button>
    </div>
</template>