<template>

    <div id="app">

        <my-header title="Weather PWA"></my-header>

        <main class="main">
          <card v-for="card in cards" :key="card.key" :info="card"></card>
        </main>

        <my-dialog></my-dialog>  

        <my-spinner></my-spinner>

    </div>

</template>


<script>
import MyHeader from './components/Header'
import Card from './components/Card'
import MyDialog from './components/Dialog'
import MySpinner from './components/Spinner'

export default {
  name: 'app',
  components: {
    MyHeader,
    Card,
    MyDialog,
    MySpinner,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed: {
    cards() {
      return this.$store.state.cards
    }
  },
}
</script>


<style>
* {
  box-sizing: border-box; }

html, body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  font-family: 'Helvetica', 'Verdana', sans-serif;
  font-weight: 400;
  font-display: optional;
  color: #444;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; }

html {
  overflow: hidden; }

body {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
  -webkit-align-content: stretch;
      -ms-flex-line-pack: stretch;
          align-content: stretch;
  background: #ececec; }

.main {
  padding-top: 60px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; }

.weather-forecast .location {
  font-size: 1.75em; }

.weather-forecast .date, .weather-forecast .description {
  font-size: 1.25em; }

.weather-forecast .icon {
  background-repeat: no-repeat;
  background-size: contain; }
  .weather-forecast .icon.clear-day {
    background-image: url("/images/clear.png"); }
  .weather-forecast .icon.clear-night {
    background-image: url("/images/clear.png"); }
  .weather-forecast .icon.rain {
    background-image: url("/images/rain.png"); }
  .weather-forecast .icon.snow {
    background-image: url("/images/snow.png"); }
  .weather-forecast .icon.sleet {
    background-image: url("/images/sleet.png"); }
  .weather-forecast .icon.wind {
    background-image: url("/images/wind.png"); }
  .weather-forecast .icon.fog {
    background-image: url("/images/fog.png"); }
  .weather-forecast .icon.cloudy {
    background-image: url("/images/cloudy.png"); }
  .weather-forecast .icon.partly-cloudy-day {
    background-image: url("/images/partly-cloudy.png"); }
  .weather-forecast .icon.partly-cloudy-night {
    background-image: url("/images/partly-cloudy.png"); }
  .weather-forecast .icon.thunderstorms {
    background-image: url("/images/thunderstorms.png"); }

@media (max-width: 450px) {
  .weather-forecast .date, .weather-forecast .description {
    font-size: 0.9em; }
  .weather-forecast .current .icon {
    width: 96px;
    height: 96px; }
  .weather-forecast .current .visual {
    font-size: 3em; } }

</style>
