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
      <div class="col-lg-6">
        <img
          :src="'../assets/menus/' + menus.gambar"
          class="card-img-top rounded-4 img-fluid h-100 shadow"
          alt="menus_image"
        />
      </div>

      <div class="col-lg-6 mt-lg-0 mt-5">
        <h1 class="fw-bold">{{ menus.nama }}</h1>
        <hr />
        <p>Description : {{ menus.desc }}</p>
        <p>Price <strong> Rp.{{ menus.harga }}</strong></p>
        <form>
          <div class="form-group">
            <label for="quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              class="form-control mt-2"
              placeholder="Enter the quantity.."
            />
          </div>
          <div class="form-group">
            <label for="quantity">Description</label>
            <textarea
              type="text"
              name="description"
              rows="6"
              class="form-control mt-2"
              placeholder="For example: Spicy, Very Spicy etc..."
            />
          </div>
          <button class="btn btn-success rounded-2 text-white mt-3 w-100 py-3">
            <i class="bi bi-cart text-white me-2"></i>
            <span class="fw-semibold">Order</span>
          </button>
        </form>
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
