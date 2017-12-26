<template>

    <div id="app">

        <my-header title="Weather PWA"></my-header>

        <main class="main">
          <card v-for="card in cards" :key="card.key" :info="card"></card>
        </main>

        <my-dialog></my-dialog>  

        <div class="loader">
            <svg viewBox="0 0 32 32" width="32" height="32">
              <circle id="ud811Spinner" cx="16" cy="16" r="14" fill="none"></circle>
            </svg>
        </div>

    </div>

</template>


<script>
import MyHeader from './components/Header'
import Card from './components/Card'
import MyDialog from './components/Dialog'

export default {
  name: 'app',
  components: {
    MyHeader,
    Card,
    MyDialog,
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

.loader {
  left: 50%;
  top: 50%;
  position: fixed;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%); }
  .loader #ud811Spinner {
    box-sizing: border-box;
    stroke: #673AB7;
    stroke-width: 3px;
    -webkit-transform-origin: 50%;
            transform-origin: 50%;
    -webkit-animation: line 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite, rotate 1.6s linear infinite;
            animation: line 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite, rotate 1.6s linear infinite; }

@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0);
            transform: rotate(0); }
  to {
    -webkit-transform: rotate(450deg);
            transform: rotate(450deg); } }

@keyframes rotate {
  from {
    -webkit-transform: rotate(0);
            transform: rotate(0); }
  to {
    -webkit-transform: rotate(450deg);
            transform: rotate(450deg); } }

@-webkit-keyframes line {
  0% {
    stroke-dasharray: 2, 85.964;
    -webkit-transform: rotate(0);
            transform: rotate(0); }
  50% {
    stroke-dasharray: 65.973, 21.9911;
    stroke-dashoffset: 0; }
  100% {
    stroke-dasharray: 2, 85.964;
    stroke-dashoffset: -65.973;
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg); } }

@keyframes line {
  0% {
    stroke-dasharray: 2, 85.964;
    -webkit-transform: rotate(0);
            transform: rotate(0); }
  50% {
    stroke-dasharray: 65.973, 21.9911;
    stroke-dashoffset: 0; }
  100% {
    stroke-dasharray: 2, 85.964;
    stroke-dashoffset: -65.973;
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg); } }

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
