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
      <div class="col-lg-7">
        <img
          :src="'../assets/menus/' + menus.gambar"
          class="card-img-top rounded-4 h-100 shadow"
          alt="menus_image"
        />
      </div>

      <div class="col-lg-5 mt-lg-0 mt-5">
        <h1 class="fw-bold">{{ menus.nama }}</h1>
        <hr />
        <p><strong>Description Foods</strong> : {{ menus.desc }}</p>
        <p><strong>Price</strong> : Rp.{{ menus.harga }}</p>
        <form v-on:submit.prevent>
          <div class="form-group">
            <label for="quantity"><strong>Quantity</strong></label>
            <input
              type="number"
              name="quantity"
              class="form-control mt-2"
              placeholder="Enter the quantity.."
              v-model="carts.quantity"
            />
          </div>
          <div class="form-group mt-2">
            <label for="description"><strong>Description</strong></label>
            <textarea
              rows="6"
              type="text"
              name="description"
              class="form-control mt-2"
              placeholder="For example: Spicy, Very Spicy etc..."
              v-model="carts.description"
            />
          </div>
          <button
            class="btn btn-success rounded-2 text-white mt-3 w-100 py-3"
            @click="submitOrder"
          >
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
      menus: {},
      carts: {},
    };
  },

  methods: {
    setMenus(data) {
      this.menus = data;
    },

    submitOrder() {
      this.carts.menus = this.menus;
      Axios.post('http://localhost:3000/carts', this.carts)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    Axios.get('http://localhost:3000/menus/' + this.$route.params.id)
      .then((response) => this.setMenus(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
