<template>
  <div class="menu-detail container">
    <div class="row my-5">
      <div class="col">
        <router-link to="/menu" type="button" class="btn btn-success">
          <i class="bi bi-arrow-left"></i> Back
        </router-link>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-md-6">
        <img
          :src="'../assets/menus/' + menus.gambar"
          class="card-img-top rounded-4 img-fluid shadow"
          alt="menus_image"
        />
      </div>
      <div class="col-md-6">
        <h1 class="text-black">{{ menus.nama }}</h1>
        <p class="card-price fw-normal">
          Harga <strong> Rp.{{ menus.harga }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'MenuDetailViews',

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
    Axios.get('http://localhost:3000/menus/' + this.$route.params.id)
      .then((response) => this.setMenus(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
