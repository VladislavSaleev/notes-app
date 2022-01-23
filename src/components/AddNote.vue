<template>
  <div class="bg" @click.self="toggleAddNote">
    <form
      class="form"
      @submit.prevent="submit"
      v-on:keyup.ctrl.enter.exact="submit"
    >
      <h3>Add note</h3>
      <input
        class="form-title"
        type="text"
        placeholder="A few words about the note"
        ref="inputTitle"
        v-model="title"
      />
      <textarea
        placeholder="And here is your important ideas"
        cols="60"
        rows="25"
        wrap="soft"
        v-model="body"
        class="form-body"
      ></textarea>
      <div class="form-button">
        <my-button type="submit">Submit</my-button>
        <my-button type="button" @click="toggleAddNote">Cancel</my-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      body: "",
    };
  },
  props: {
    onAdd: {
      type: Function,
    },
    visibleAddNote: {
      type: Boolean,
    },
  },
  methods: {
    submit() {
      const note = {
        title: this.title,
        body: this.body,
        id: Date.now(),
      };
      this.onAdd(note);
      this.title = this.body = "";
    },
    toggleAddNote() {
      this.$emit("toggleAddNote");
    },
  },
  mounted() {
    setTimeout(() => {
      this.$refs.inputTitle.focus();
    }, 100);
  },
};
</script>

<style lang="scss" scoped>
.bg {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);
  .form {
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
      width: 520px;
      padding: 5px;
    }
    &-body {
      display: flex;
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
@media screen and (max-width: 1450px) {
  .form {
    &-body {
      height: 400px;
    }
  }
}
@media screen and (max-width: 800px) {
  .form {
    &-title {
      max-width: 350px;
    }
    &-body {
      max-width: 350px;
      height: 230px;
    }
  }
}
</style>