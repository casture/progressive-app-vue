<style scoped>
.card { 
  padding: 16px;
  position: relative;
  box-sizing: border-box;
  background: #fff;
  border-radius: 2px;
  margin: 16px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }
</style>

<template>
    <div class="card cardTemplate weather-forecast">
        <div class="location">{{info.label}}</div>
        <div class="date">December 18, 2017 17:48:00 (MST)</div>
        <div class="description">{{info.currently.summary}}</div>
        <current-day :day="info.currently"></current-day>
        <future-days :days="info.daily.data"></future-days>
    </div>
</template>

<script>
import FutureDays from './FutureDays'
import CurrentDay from './CurrentDay'

export default {
    components: {
        CurrentDay,
        FutureDays,
    },
    props: ['info']
}
</script>
