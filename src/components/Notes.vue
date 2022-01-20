<template>
  <div class="note" @click="$emit('openNote', note.id)">
    <button class="close" @click.stop="$emit('deleteNote', note.id)">
      &#x2715;
    </button>
    <h3 class="note-title">{{ note.title }}</h3>
    <div class="note-body">{{ note.body }}</div>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.note {
  display: block;
  position: relative;
  width: 220px;
  height: 280px;
  padding: 5px;
  margin: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  cursor: pointer;
  border: 2px solid rgb(148, 204, 148);
  border-radius: 5px;
  background-color: rgb(249, 255, 227);
  user-select: none;
  &-title {
    margin: 5px;
    margin-top: 20px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &-body {
    margin: 5px;
    margin-top: 20px;
    white-space: pre-wrap;
  }
  .close {
    display: block;
    text-align: center;
    color: red;
    position: absolute;
    font-weight: bold;
    top: -3px;
    right: -3px;
    border: none;
    border-radius: 25px;
    background-color: transparent;
    width: 30px;
    height: 30px;
    font-size: 15px;
    z-index: 1;
    transition: all 0.4s cubic-bezier(0.9, 0.42, 0.45, 0.74);
    &:hover {
      color: rgb(91, 233, 86);
      transform: rotate(180deg);
    }
  }
}
@media screen and (max-width: 1450px) {
  .note {
    width: 190px;
    height: 250px;
  }
}
@media screen and (max-width: 800px) {
  .note {
    width: 150px;
    height: 210px;
    margin: 5px;
    &-title,
    &-body {
      margin-top: 10px;
    }
  }
}
</style>