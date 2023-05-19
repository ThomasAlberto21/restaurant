<template>
  <div class="home container">
    <Hero />
    <div class="row my-5">
      <div class="col">
        <h3>Best <strong>Menu</strong></h3>
      </div>
      <div class="col">
        <router-link
          to="/"
          class="btn btn-success text-white float-end fw-semibold"
          ><i class="bi bi-eye"></i> See All Menus</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';

export default {
  name: 'HomeViews',
  components: {
    Hero,
  },
};
</script>
