<template>
  <header class="navbar">
    <div class="logo">NOTES APP</div>
    <div>
      <MyButton @click="$router.push('/')">Notes</MyButton>
      <MyButton @click="$router.push('/about')">About</MyButton>
    </div>
  </header>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  components: {
    MyButton,
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(211, 247, 211);
  height: 45px;
  .logo {
    background-color: lightgreen;
    height: 40px;
    width: 100px;
    text-align: center;
    line-height: 40px;
    margin-left: 5px;
    border-radius: 5px;
  }
}
</style>