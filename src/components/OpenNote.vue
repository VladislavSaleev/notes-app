<template>
  <div
    class="bg-fade"
    @click.self="$emit('on-toggle-open-note-visible')"
  >
    <div
      class="notes"
      v-on:keyup.ctrl.enter.exact="edit"
    >
      <header class="notes-header">
        <h3>
          Edit note
        </h3>
      </header>

      <input
        type="text"
        class="notes-title"
        placeholder="A few words about the note"
        v-model="editedNote.title"
      />
      <textarea
        class="notes-body"
        ref="textareaBody"
        cols="60"
        rows="27"
        placeholder="And here is your important ideas"
        v-model="editedNote.body"
      />

      <div class="notes-button">
        <my-button @click="edit">
          Save
        </my-button>

        <my-button @click="$emit('on-toggle-open-note-visible')">
          Discard
        </my-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedNote: {
      type: Object,
      required: true,
    },
    onEdit: {
      type: Function,
    },
  },
  data() {
    return {
      editedNote: {
        title: this.selectedNote.title,
        body: this.selectedNote.body,
      },
    };
  },
  methods: {
    edit(editedNote) {
      editedNote = {
        title: this.editedNote.title,
        body: this.editedNote.body,
        id: this.selectedNote.id,
      };
      this.onEdit(editedNote);
    },
  },
  mounted() {
    setTimeout(() => {
      this.$refs.textareaBody.focus();
    }, 100);
  },
};
</script>

<style lang="scss" scoped>
.bg-fade {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  z-index: 99;
  .notes {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    max-width: 800px;
    border-radius: 10px;
    background: rgb(255, 255, 239);
    z-index: 99;
    padding-bottom: 15px;
    &-header {
      display: flex;
      background: rgb(87, 87, 87);
      width: 100%;
      height: 50px;
      justify-content: center;
      align-items: center;
      border-top-left-radius: 9px;
      border-top-right-radius: 9px;
      h3 {
        color: white;
        font-size: 23px;
      }
    }
    &-title,
    &-body {
      border: 2px solid rgba($color: #000000, $alpha: 0.2);
      margin-top: 10px;
      background: inherit;
      padding: 5px;
      width: 500px;
      outline: none;
    }
    &-title:focus,
    &-body:focus {
      border: 2px solid rgb(148, 204, 148);
      box-shadow: 0 0 3px rgb(148, 204, 148);
    }
    &-title {
      font-size: 20px;
    }
    &-body {
      font-size: 17px;
      resize: none;
    }
    &-button {
      margin-top: 10px;
    }
  }
}
@media (min-width: 768px) and (max-width: 1199.98px) {
  .notes {
    &-body {
      height: 400px;
    }
  }
}
@media (min-width: 481px) and (max-width: 767.98px) {
  .notes {
    width: 80%;
    &-title {
      max-width: 70%;
    }
    &-body {
      max-width: 70%;
      height: 230px;
    }
  }
}
@media (min-width: 320px) and (max-width: 480.98px) {
  .notes {
    width: 95%;
    &-title {
      max-width: 90%;
    }
    &-body {
      max-width: 90%;
      height: 230px;
    }
  }
}
</style>