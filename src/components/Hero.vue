<template>
  <!-- Desktop -->
  <section class="d-lg-block d-none my-5">
    <div class="d-flex justify-content-center align-items-center">
      <div class="left col-6">
        <figcaption class="blockquote-footer text-success fw-semibold">
          <cite title="Source Title">Fresh And Tasty</cite>
        </figcaption>
        <h1 class="fw-bold display-2">
          Order Tasty &
          <br />
          <span class="text-success">Fresh Food</span>
        </h1>
        <h5 class="fw-light">
          Just confirm your order and enjoy our delicious <br />
          fastest delivery
        </h5>
        <button class="btn btn-success rounded-2 px-4 py-3 mt-2 fw-bold">
          Order Now <i class="bi bi-arrow-down"></i>
        </button>
      </div>
      <div class="right col-6">
        <img
          src="../assets/HeroVectors.png"
          alt="hero_img"
          class="w-100 h-100 float-end"
        />
      </div>
    </div>
  </section>

  <!-- Tablet And Mobile -->
  <section class="d-lg-none d-block">
    <div class="justify-content-center align-items-center my-5">
      <div class="right">
        <img src="../assets/HeroVectors.png" alt="hero_img" class="w-100" />
      </div>
      <div class="left mt-5 text-center">
        <figcaption class="blockquote-footer text-success fw-semibold">
          <cite title="Source Title">Fresh And Tasty</cite>
        </figcaption>
        <h1 class="fw-bold display-2">
          Order Tasty &
          <br />
          <span class="text-success">Fresh Food</span>
        </h1>
        <h5 class="fw-light">
          Just confirm your order and enjoy our delicious fastest delivery
        </h5>
        <button class="btn btn-success rounded-2 px-4 py-3 mt-2 fw-bold">
          Order Now <i class="bi bi-arrow-down"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroBanner',
};
</script>
