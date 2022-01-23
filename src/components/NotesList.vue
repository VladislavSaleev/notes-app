<template>
  <div class="list-wrapper">
    <transition-group name="note-animation">
      <Notes
        v-for="note in notes"
        :key="note.id"
        :note="note"
        class="note-animation-item"
        @openNote="$emit('openNote', note.id)"
        @deleteNote="$emit('deleteNote', note.id)"
      />
    </transition-group>
  </div>
</template>

<script>
import Notes from "@/components/Notes";
export default {
  components: {
    Notes,
  },
  props: {
    notes: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.note-animation-item {
  transition: all 0.4s ease;
}
.note-animation-leave-active {
  position: fixed;
  top: 0%;
  right: 50%;
}
.note-animation-enter-from,
.note-animation-leave-to {
  opacity: 0;
  width: 80px;
  height: 80px;
}
.list-wrapper {
  display: flex;
  flex-wrap: wrap;
  // border: 1px solid black;
  width: 1300px;
  min-height: 400px;
  margin: 10px;
  margin-top: 0;
}
@media screen and (max-width: 1450px) {
  .list-wrapper {
    width: 900px;
  }
}
</style>