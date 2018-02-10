<style scoped>

.dialog-container {
  background: rgba(0, 0, 0, 0.57);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
  will-change: opacity;
  -webkit-transition: opacity 0.333s cubic-bezier(0, 0, 0.21, 1);
  transition: opacity 0.333s cubic-bezier(0, 0, 0.21, 1); }

.dialog-container--visible {
  opacity: 1;
  pointer-events: auto; }

.dialog {
  background: #FFF;
  border-radius: 2px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.24), 0 14px 28px rgba(0, 0, 0, 0.48);
  min-width: 280px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%) translateY(30px);
          transform: translate(-50%, -50%) translateY(30px);
  -webkit-transition: -webkit-transform 0.333s cubic-bezier(0, 0, 0.21, 1) 0.05s;
  transition: -webkit-transform 0.333s cubic-bezier(0, 0, 0.21, 1) 0.05s;
  transition: transform 0.333s cubic-bezier(0, 0, 0.21, 1) 0.05s;
  transition: transform 0.333s cubic-bezier(0, 0, 0.21, 1) 0.05s, -webkit-transform 0.333s cubic-bezier(0, 0, 0.21, 1) 0.05s;
  padding: 24px; }

button {
  border-style: none;
  cursor: pointer;
  padding: 5px;
  margin: 5px 0;
  border: 1px solid #aaa;
  border-radius: 2px;
  min-width: 75px; }

</style>

<template>
  
    <div class="dialog-container" :class="{ 'dialog-container--visible': visible }" @click="closeCityDialog()">
          <div class="dialog" @click.stop>
            <div class="dialog-title">Add new city</div>
            <div class="dialog-body">
                <select ref="selectedCity">
                  <option value="austin">Austin, TX</option>
                  <option value="boston">Boston, MA</option>
                  <option value="chicago">Chicago, IL</option>
                  <option value="portland">Portland, OR</option>
                  <option value="sanfrancisco">San Francisco, CA</option>
                  <option value="seattle">Seattle, WA</option>
                </select>
            </div>
            <div class="dialog-buttons">
                <button ref="add" class="button" @click="addCity()">Add</button>
                <button ref="cancel" class="button" @click="closeCityDialog()">Cancel</button>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    computed: {
        visible() {
            return this.$store.state.dialogVisible
        }
    },
    methods: {
        closeCityDialog() {
            this.$store.dispatch('closeCityDialog').then(() => {
                console.log('dialog closed')
            })
        },

        addCity() {
            this.$store.dispatch('addCard', this.$refs.selectedCity.value).then(() => {
                this.closeCityDialog();
            })
        }
    }
}

</script>