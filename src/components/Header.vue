<style>
.header {
  width: 100%;
  height: 56px;
  color: #FFF;
  background: #3F51B5;
  position: fixed;
  font-size: 20px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 9px 1px rgba(0, 0, 0, 0.12), 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  padding: 16px 16px 0 16px;
  will-change: transform;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
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
  -webkit-align-content: center;
      -ms-flex-line-pack: center;
          align-content: center;
  -webkit-transition: -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;
  transition: -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;
  transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;
  transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s, -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;
  z-index: 1000; }
  .header .headerButton {
    width: 24px;
    height: 24px;
    margin-right: 16px;
    text-indent: -30000px;
    overflow: hidden;
    opacity: 0.54;
    -webkit-transition: opacity 0.333s cubic-bezier(0, 0, 0.21, 1);
    transition: opacity 0.333s cubic-bezier(0, 0, 0.21, 1);
    border: none;
    outline: none;
    cursor: pointer; }
  .header #butRefresh {
    background: url(/images/ic_refresh_white_24px.svg) center center no-repeat; }
  .header #butAdd {
    background: url(/images/ic_add_white_24px.svg) center center no-repeat; }

.header__title {
  font-weight: 400;
  font-size: 20px;
  margin: 0;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1; }
</style>


<template>
    <header class="header">
        <h1 class="header__title">{{title}}</h1>
        <button id="butRefresh" class="headerButton" aria-label="Refresh"></button>
        <button id="butAdd" class="headerButton" aria-label="Add" @click="openCityDialog()"></button>
    </header>
</template>

<script>
export default {
    props: ['title'],
    methods: {
        openCityDialog() {
            this.$store.dispatch('openCityDialog').then(() => {
                console.log('dialog opened')
            })
        }
    }
}
</script>

