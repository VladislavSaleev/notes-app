<template>
  <div>
    <div class="about">Something about this APP.</div>
    <div class="about">tudum ba dums..</div>
    <div class="about animate">d o t h e s h a k e</div>
    <div class="about">
      <img
        class="img animate-reverse"
        src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Black_and_White_Cat_Sketch.svg"
        alt="cat img"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  margin-top: 70px;
  font-size: 20px;
  text-align: center;
}
.img {
  position: relative;
  width: 200px;
  height: 200px;
}
.animate {
  animation: shake 1s;
  animation-iteration-count: infinite;
}
.animate-reverse {
  animation: shake 1s reverse;
  animation-iteration-count: infinite;
}
@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>