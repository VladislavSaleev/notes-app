<template>
  <div class="bg-fade" @click.self="$emit('toggle')">
    <div class="notes" v-on:keyup.ctrl.enter="edit">
      <input type="text" class="notes-title" v-model="editedNote.title" />
      <textarea
        class="notes-body"
        name=""
        id=""
        cols="60"
        rows="27"
        v-model="editedNote.body"
      ></textarea>
      <div class="notes-button">
        <MyButton @click="edit">Save</MyButton>
        <MyButton @click="$emit('toggle')">Close</MyButton>
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
    edit(edno) {
      edno = {
        title: this.editedNote.title,
        body: this.editedNote.body,
        id: this.selectedNote.id,
      };
      this.onEdit(edno);
    },
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
    border: 1px solid orange;
    border-radius: 10px;
    background: white;
    z-index: 99;
    padding-bottom: 15px;
    padding-top: 15px;
    &-title {
      font-size: 20px;
      width: 500px;
      padding: 5px;
    }
    &-body {
      font-size: 15px;
      resize: none;
      padding: 10px;
      margin-top: 10px;
    }
    &-button {
      margin-top: 10px;
    }
  }
}
@media screen and (max-width: 1200px) {
  .notes {
    &-title,
    &-body {
      max-width: 350px;
    }
  }
}
</style>