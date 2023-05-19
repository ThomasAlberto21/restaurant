<template>
  <div class="home container">
    <Hero />

    <div class="row mt-5">
      <div class="col">
        <h3>Best <strong>Menu</strong></h3>
      </div>
      <div class="col">
        <router-link
          to="/menu"
          class="btn btn-success text-white float-end fw-semibold"
          ><i class="bi bi-eye me-1"></i> See All Menus</router-link
        >
      </div>
    </div>

    <div class="row my-5 gap-lg-0 gap-3">
      <div class="col-md-4" v-for="menu in menus" :key="menu.id">
        <CardMenu :menu="menu" />
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import Hero from '@/components/Hero.vue';
import CardMenu from '@/components/CardMenu.vue';

export default {
  name: 'HomeViews',
  components: {
    Hero,
    CardMenu,
  },

  data() {
    return {
      menus: [],
    };
  },

  methods: {
    setMenus(data) {
      this.menus = data;
    },
  },

  mounted() {
    Axios.get('http://localhost:3000/best-menus')
      .then((response) => this.setMenus(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
