<template>
  <div class="home">
    <Navbar :updateCarts="carts" />
    <div class="container mt-5">
      <Hero />

      <head class="row my-4">
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
      </head>

      <div class="row mb-5 mt-5">
        <div class="col-md-4 mb-4" v-for="menu in menus" :key="menu.id">
          <CardMenu :menu="menu" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import Hero from '@/components/Hero.vue';
import Navbar from '@/components/Navbar.vue';
import CardMenu from '@/components/CardMenu.vue';

export default {
  name: 'HomeViews',
  components: {
    Hero,
    CardMenu,
    Navbar,
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
