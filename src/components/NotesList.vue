<template>
  <div class="list-wrapper">
    <transition-group name="note-animation">
      <Notes
        v-for="note in notes"
        :key="note.id"
        :note="note"
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
.note-animation-enter-active,
.note-animation-leave-active {
  transition: all 0.6s ease;
}

.note-animation-enter-from,
.note-animation-leave-to {
  opacity: 0;
  width: 0px;
  height: 0px;
}
.list-wrapper {
  display: flex;
  flex-wrap: wrap;
  // border: 1px solid black;
  width: 860px;
  min-height: 400px;
  margin: 10px;
  margin-top: 0;
}
</style>