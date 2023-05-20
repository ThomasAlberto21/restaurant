<template>
  <div class="menu">
    <Navbar />

    <div class="container">
      <div class="row my-5">
        <div class="col">
          <router-link to="/" type="button" class="btn btn-success">
            <i class="bi bi-arrow-left"></i> Back
          </router-link>
        </div>
      </div>
      <div class="row mt-5 mb-3">
        <div class="col">
          <h1>List <strong>Menu</strong></h1>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="input-group">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Search Foods..."
              aria-label="Search Foods..."
              aria-describedby="basic-addon2"
              @keyup="searchFood"
            />
            <div class="input-group-text bg-success text-white" id="search">
              <i class="bi bi-search"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-5 mt-5">
        <div
          class="col-lg-4 col-md-6 mb-4"
          v-for="menu in menus"
          :key="menu.id"
        >
          <CardMenu :menu="menu" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import Navbar from '@/components/Navbar.vue';
import CardMenu from '@/components/CardMenu.vue';

export default {
  name: 'MenuViews',
  components: {
    CardMenu,
    Navbar,
  },

  data() {
    return {
      menus: {},
      search: '',
    };
  },

  methods: {
    setMenus(data) {
      this.menus = data;
    },

    searchFood() {
      Axios.get('http://localhost:3000/menus?q=' + this.search)
        .then((response) => this.setMenus(response.data))
        .catch((error) => console.log(error));
    },
  },

  mounted() {
    Axios.get('http://localhost:3000/menus')
      .then((response) => this.setMenus(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
