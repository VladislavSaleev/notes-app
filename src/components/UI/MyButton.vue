<template>
  <button class="my-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style lang="scss" scoped>
.my-btn {
  height: 30px;
  width: 70px;
  font-size: 15px;
  font-weight: bold;
  background-color: rgb(237, 247, 109);
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
  user-select: none;
  transition: border 0.3s linear;
  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.9);
  }
}
</style>