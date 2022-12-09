<template>
  <div>
    <Navbar />

    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
}
</style>
