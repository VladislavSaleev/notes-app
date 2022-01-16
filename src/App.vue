<template>
  <div class="container">
    <NotesList :notes="notes" @deleteNote="deleteNote" @openNote="openNote" />
    <transition name="fade">
      <AddNote
        :onAdd="addNote"
        v-if="visibleAddNote"
        @toggleAddNote="toggleAddNote"
      />
    </transition>
    <transition name="fade">
      <OpenNote
        :selectedNote="selectedNote"
        v-if="visibleOpenNote"
        @toggle="toggle"
        :onEdit="editNote"
      />
    </transition>
    <button class="btn-add" @click="toggleAddNote">+</button>
  </div>
</template>

<script>
import NotesList from "@/components/NotesList";
import AddNote from "@/components/AddNote";
import OpenNote from "@/components/OpenNote";
export default {
  name: "App",
  components: {
    NotesList,
    AddNote,
    OpenNote,
  },
  data() {
    return {
      notes: [],
      selectedNote: {},
      visibleOpenNote: false,
      visibleAddNote: false,
    };
  },
  methods: {
    addNote(note) {
      this.notes.push(note);
      this.toggleAddNote();
    },
    deleteNote(id) {
      this.notes = this.notes.filter((n) => n.id !== id);
    },
    openNote(id) {
      this.selectedNote = this.notes.find((el) => el.id == id);
      this.visibleOpenNote = !this.visibleOpenNote;
    },
    toggle() {
      this.visibleOpenNote = !this.visibleOpenNote;
    },
    editNote(edno) {
      const currIdx = this.notes.findIndex((el) => el.id == edno.id);
      this.notes.splice(currIdx, 1, edno);
      this.visibleOpenNote = !this.visibleOpenNote;
    },
    toggleAddNote() {
      this.visibleAddNote = !this.visibleAddNote;
    },
  },
  watch: {
    // add notes to localStorage
    notes: {
      handler(newValue) {
        localStorage.setItem("storedNotes", JSON.stringify(newValue));
      },
      deep: true,
    },
  },
  mounted() {
    //upload notes from localStorage on page load/refresh
    if (localStorage.storedNotes) {
      this.notes = JSON.parse(localStorage.getItem("storedNotes"));
    }
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.container {
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  .btn-add {
    position: fixed;
    right: 5%;
    bottom: 5%;
    width: 70px;
    height: 70px;
    border-radius: 38px;
    border: 2px solid rgb(255, 255, 61);
    background-color: rgb(255, 255, 61);
    font-size: 50px;
    color: white;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s linear;
    &:hover {
      border: 2px solid #2c3e50;
      color: #2c3e50;
    }
  }
}
</style>
