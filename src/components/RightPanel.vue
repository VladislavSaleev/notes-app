<template>
  <div class="wrapper" :style="{ right: visiblePanel ? '3px' : '-402px' }">
    <MyButton class="btn-panel" @click="toggleVisiblePanel">{{
      visiblePanel ? "&#187;" : "&#171;"
    }}</MyButton>
    <div class="panel">
      <div class="panel-hotkeys">
        <table>
          <colgroup>
            <col />
            <col />
          </colgroup>
          <tr>
            <th>Function</th>
            <th>Hotkeys</th>
          </tr>
          <tr>
            <td>Add new note</td>
            <td>
              --Ctrl + Enter <br />
              --LeftClick on "+"
            </td>
          </tr>
          <tr>
            <td>Add empty note</td>
            <td>--Ctrl + LeftClick on "+"</td>
          </tr>
          <tr>
            <td>Open note for reading/editing</td>
            <td>--LeftClick on note</td>
          </tr>
          <tr>
            <td>Save current note</td>
            <td>--Ctrl + Enter (focus on text field)</td>
          </tr>
          <tr>
            <td>Close window w/o saving</td>
            <td>--Esc</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  components: {
    MyButton,
  },
  data() {
    return {
      visiblePanel: false,
    };
  },
  methods: {
    toggleVisiblePanel() {
      this.visiblePanel = !this.visiblePanel;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 70px;
  transition: all 0.5s ease;
  z-index: 1;
}
.btn-panel {
  padding-bottom: 50px;
  margin: 0;
  height: 50px;
  width: 50px;
  font-size: 40px;
}
.panel {
  height: 450px;
  width: 400px;
  border: 1px solid black;
  &-hotkeys {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    table {
      background-color: rgb(243, 253, 206);
      height: 100%;
      table-layout: fixed;
      border-collapse: collapse;
      border: 1px solid black;
      th {
        background-color: rgb(198, 206, 161);
        font-size: 20px;
      }
      td {
        text-align: center;
        border: 1px solid black;
        font-weight: 600;
        font-size: 15px;
      }
    }
  }
}
@media screen and (max-width: 800px) {
  .wrapper {
    display: none;
  }
}
</style>