<template>
  <div
    class="note"
    @click="$emit('on-open-note', note.id)"
  >
    <button
      class="close"
      @click.stop="$emit('on-delete-note', note.id)"
    >
      &#x2715;
    </button>

    <h3 class="note-title">
      {{ note.title }}
    </h3>
    
    <div class="note-body">
      {{ note.body }}
    </div>
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
  box-shadow: 5px 5px 19px -15px;
  user-select: none;

  &-title {
    margin: 5px;
    margin-top: 15px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &-body {
    margin: 5px;
    margin-top: 10px;
    white-space: pre-wrap;
    font-size: 16px;
    line-height: 1.3;
  }
  .close {
    display: block;
    text-align: center;
    color: rgb(148, 204, 148);
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
      color: red;
      transform: rotate(180deg);
    }
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
@media screen and (max-width: 370px) {
  .note {
    width: 130px;
    height: 190px;
    margin: 3px;

    &-title,
    &-body {
      margin-top: 8px;
    }
  }
}
</style>