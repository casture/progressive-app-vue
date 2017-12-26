<style scoped>
.oneday {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    text-align: center; }
    .oneday .icon {
      width: 64px;
      height: 64px;
      margin-left: auto;
      margin-right: auto; }
    .oneday .temp-high, .oneday .temp-low {
      display: inline-block; }
    .oneday .temp-low {
      color: #888; }

@media (max-width: 450px) {
    .oneday .icon {
        width: 32px;
        height: 32px; } }
</style>

<template>
    <div class="oneday">
        <div class="date">{{day.date}}</div>
        <div class="icon" :class="[day.icon]"></div>
        <div class="temp-high">
            <span class="value">{{day.temperatureMax}}</span>°
        </div>
        <div class="temp-low">
            <span class="value">{{day.temperatureMin}}</span>°
        </div>
    </div>
</template>

<script>
    export default {
        props: ['day'],
    }
</script>
