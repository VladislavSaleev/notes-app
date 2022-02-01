<template>
  <div class="bg" @click.self="toggleAddNote">
    <form
      class="form"
      @submit.prevent="submit"
      v-on:keyup.ctrl.enter.exact="submit"
    >
      <header class="form-header">
        <h3>Create new note</h3>
      </header>
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
        rows="27"
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
  .form {
    &-body {
      height: 400px;
    }
  }
}
@media (min-width: 481px) and (max-width: 767.98px) {
  .form {
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
  .form {
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