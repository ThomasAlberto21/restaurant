<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-success">
    <div class="container">
      <a class="navbar-brand text-white fw-semibold">Restaurant Foods</a>
      <button
        class="navbar-toggler bg-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto gap-2">
          <li class="nav-item">
            <router-link to="/" class="text-white nav-link fw-semibold"
              >Home</router-link
            >
          </li>
          <li class="nav-item link-opacity-10-hover">
            <router-link to="/menu" class="text-white nav-link fw-semibold"
              >Menu</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="btn btn-light position-relative">
              <i class="bi bi-cart text-success"></i>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-1 bg-danger"
                >{{ updateCarts ? updateCarts.length : quantity.length }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'NavbarComponent',
  props: ['updateCarts'],

  data() {
    return {
      quantity: [],
    };
  },

  methods: {
    setQuantity(data) {
      this.quantity = data;
    },
  },

  mounted() {
    Axios.get('http://localhost:3000/carts')
      .then((response) => this.setQuantity(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
