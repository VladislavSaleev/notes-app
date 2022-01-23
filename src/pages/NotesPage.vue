<template>
  <div class="container">
    <NotesList :notes="notes" @deleteNote="deleteNote" @openNote="openNote" />
    <transition-group name="fade">
      <AddNote
        :onAdd="addNote"
        :visibleAddNote="visibleAddNote"
        v-if="visibleAddNote"
        @toggleAddNote="toggleAddNote"
      />
      <OpenNote
        :selectedNote="selectedNote"
        v-if="visibleOpenNote"
        @toggle="toggleOpenNote"
        :onEdit="editNote"
      />
    </transition-group>
    <RightPanel />
    <button
      class="btn-add"
      @click.exact="toggleAddNote"
      @click.ctrl.exact.stop="addEmptyNote"
    >
      +
    </button>
  </div>
</template>

<script>
import NotesList from "@/components/NotesList";
import AddNote from "@/components/AddNote";
import OpenNote from "@/components/OpenNote";
import RightPanel from "@/components/RightPanel";
export default {
  name: "App",
  components: {
    NotesList,
    AddNote,
    OpenNote,
    RightPanel,
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
    addEmptyNote() {
      const emptyNote = {
        title: "",
        body: "",
        id: Date.now(),
      };
      this.notes.push(emptyNote);
    },
    deleteNote(id) {
      this.notes = this.notes.filter((n) => n.id !== id);
    },
    openNote(id) {
      this.selectedNote = this.notes.find((el) => el.id == id);
      this.visibleOpenNote = !this.visibleOpenNote;
    },
    toggleOpenNote() {
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
    //listener for global keyboard shortcut commands
    let keysPressed = {};
    document.addEventListener("keydown", (event) => {
      keysPressed[event.key] = true;
      if (
        keysPressed["Control"] &&
        event.key == "Enter" &&
        !this.visibleAddNote &&
        !this.visibleOpenNote
      ) {
        this.toggleAddNote();
      }
      if (event.key == "Escape") {
        this.visibleOpenNote = this.visibleAddNote = false;
      }
    });
    document.addEventListener("keyup", (event) => {
      keysPressed[event.key] = false;
    });
  },
};
</script>

<style lang="scss">
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
  justify-content: flex-start;
  align-items: baseline;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
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
    z-index: 1;
    transition: all 0.3s linear;
    &:hover {
      border: 2px solid #2c3e50;
      color: #2c3e50;
    }
  }
}
</style>