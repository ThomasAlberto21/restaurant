<template>
  <div class="menu container">
    <div class="row mt-5 mb-3">
      <div class="col">
        <h1>List <strong>Foods</strong></h1>
      </div>
    </div>

    <div class="row my-4">
      <div class="col">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Search Foods..."
            aria-label="Search Foods..."
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text bg-success text-white" id="search"
            ><i class="bi bi-search"></i
          ></span>
        </div>
      </div>
    </div>

    <div class="row mb-5 gap-lg-0 gap-md-0 gap-3">
      <div class="col-md-4 mb-5" v-for="menu in menus" :key="menu.id">
        <CardMenu :menu="menu" />
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import CardMenu from '@/components/CardMenu.vue';

export default {
  name: 'MenuViews',
  components: {
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
    Axios.get('http://localhost:3000/menus')
      .then((response) => this.setMenus(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
