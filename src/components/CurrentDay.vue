<style scoped>
.current {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex; }
  /* .current .icon { */
    /* width: 128px; */
    /* height: 128px; } */
  .current .visual {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    /* font-size: 4em; */ }
    .current .visual .scale {
      font-size: 0.5em;
      vertical-align: super; }
  .current .visual, .current .description {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
            flex-grow: 1; }
  .current .feels-like:before {
    content: "Feels like: ";
    color: #888; }
  .current .wind:before {
    content: "Wind: ";
    color: #888; }
  .current .precip:before {
    content: "Precipitation: ";
    color: #888; }
  .current .humidity:before {
    content: "Humidity: ";
    color: #888; }
  .current .pollen:before {
    content: "Pollen Count: ";
    color: #888; }
  .current .pcount:before {
    content: "Pollen ";
    color: #888; }
</style>

<template>
    <div class="current">
        <div class="visual">
            <div class="icon" :class="[day.icon]"></div>
            <div class="temperature">
                <span class="value">{{day.temperature}}</span><span class="scale">°F</span>
            </div>
        </div>
        <div class="description">
            <div class="feels-like">
                <span class="value">{{day.apparentTemperature}}</span><span class="scale">°F</span>
            </div>
            <div class="precip">{{day.precipProbability}}</div>
            <div class="humidity">{{day.humidity}}</div>
            <div class="wind">
                <span class="value">{{day.windSpeed}}</span>
                <span class="scale">mph</span>
                <span class="direction">{{day.windBearing}}</span>°
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['day']
    }
</script>
