<style>
.future {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex; }
</style>

<template>
    <div class="future">
        <one-day v-for="day in days" :key="day.icon" :day="day"></one-day>
    </div>
</template>

<script>
    import OneDay from './OneDay'

    export default {
        components: {
            OneDay,
        },
        props: ['days']
    }
</script>
