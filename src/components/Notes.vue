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
  width: 180px;
  height: 180px;
  padding: 5px;
  margin: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  cursor: pointer;
  border: 2px solid green;
  border-radius: 5px;
  user-select: none;
  &-title {
    margin: 5px;
    padding-top: 13px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &-body {
    margin: 5px;
    white-space: pre-wrap;
  }
  .close {
    display: block;
    text-align: center;
    color: red;
    position: absolute;
    font-weight: bold;
    top: 3px;
    border: none;
    border-radius: 25px;
    background-color: white;
    right: 3px;
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
@media screen and (max-width: 1200px) {
  .note {
    width: 155px;
    height: 155px;
    margin: 5px;
  }
}
</style>