<template>
  <div class="container">
    <NotesList
      :notes="notes"
      @on-delete-note="deleteNote"
      @on-open-note="openNote"
    />

    <transition-group name="fade">
      <AddNote
        v-if="isVisibleAddNoteModal"
        :on-add="addNote"
        @on-toggle-add-note-visible="toggleAddNoteVisible"
      />

      <OpenNote
        v-if="isVisibleOpenNoteModal"
        :selected-note="selectedNote"
        :on-edit="editNote"
        @on-toggle-open-note-visible="toggleOpenNoteVisible"
      />
    </transition-group>
    
    <RightPanel />

    <button
      class="btn-add"
      @click.exact="toggleAddNoteVisible"
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
      isVisibleOpenNoteModal: false,
      isVisibleAddNoteModal: false,
    };
  },
  methods: {
    addNote(note) {
      this.notes.push(note);
      this.toggleAddNoteVisible();
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
      this.isVisibleOpenNoteModal = !this.isVisibleOpenNoteModal;
    },
    toggleOpenNoteVisible() {
      this.isVisibleOpenNoteModal = !this.isVisibleOpenNoteModal;
    },
    editNote(edno) {
      const currIdx = this.notes.findIndex((el) => el.id == edno.id);
      this.notes.splice(currIdx, 1, edno);
      this.isVisibleOpenNoteModal = !this.isVisibleOpenNoteModal;
    },
    toggleAddNoteVisible() {
      this.isVisibleAddNoteModal = !this.isVisibleAddNoteModal;
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
        !this.isVisibleAddNoteModal &&
        !this.isVisibleOpenNoteModal
      ) {
        this.toggleAddNoteVisible();
      }
      if (event.key == "Escape") {
        this.isVisibleOpenNoteModal = this.isVisibleAddNoteModal = false;
      }
    });
    document.addEventListener("keyup", (event) => {
      keysPressed[event.key] = false;
    });
  },
};
</script>

<style lang="scss" scoped>
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
    font-weight: 700;
    line-height: 1;
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