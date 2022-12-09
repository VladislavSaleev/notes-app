<template>
  <header class="navbar">
    <div
      class="navbar-logo"
      @click="$router.push('/')"
    >
      Notes app
    </div>

    <div>
      <my-button
        class="navbar-btn"
        @click="$router.push('/')"
      >
        Notes
      </my-button>

      <my-button
        class="navbar-btn"
        @click="$router.push('/about')"
      >
        About
      </my-button>
      <!-- <my-button class="navbar-btn" @click="$router.push('/store')"
        >Store
      </my-button> -->
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  font-family: "Mukta", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    to right bottom,
    rgb(219, 247, 95),
    30%,
    rgb(255, 255, 59),
    70%,
    rgb(221, 248, 99)
  );
  box-shadow: 0px 5px 20px -15px;
  height: 55px;

  &-logo {
    height: 40px;
    width: 100px;
    text-align: center;
    font-size: 20px;
    line-height: 40px;
    font-weight: bold;
    margin-left: 35px;
    cursor: pointer;
  }
}
@media (min-width: 768px) and (max-width: 1199.98px) {
}
@media (min-width: 481px) and (max-width: 767.98px) {
  .navbar-btn {
    margin: 0 10px 0 10px !important;
  }
}
@media (min-width: 320px) and (max-width: 480.98px) {
  .navbar {
    &-btn {
      margin: 0 5px 0 5px !important;
      width: 60px !important;
    }

    &-logo {
      margin-left: 2px;
      width: 80px;
      font-size: 17px;
    }
  }
}
</style>