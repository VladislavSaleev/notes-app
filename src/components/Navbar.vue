<template>
  <header class="navbar">
    <div class="logo" @click="$router.push('/')">NOTES APP</div>
    <div>
      <my-button @click="$router.push('/')">Notes</my-button>
      <my-button @click="$router.push('/about')">About</my-button>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(207, 255, 207);
  height: 45px;
  .logo {
    height: 40px;
    width: 100px;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    margin-left: 5px;
    cursor: pointer;
  }
}
</style>