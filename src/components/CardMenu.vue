<template>
  <div class="card shadow rounded-4 border-0 mb-3">
    <img
      :src="'../assets/menus/' + menu.gambar"
      class="card-img-top rounded-4"
      alt="menus_image"
    />

    <div class="card-body mt-2">
      <h5 class="card-title fw-bold">{{ menu.nama }}</h5>
      <p class="card-price fw-normal">
        Harga <strong> Rp.{{ menu.harga }}</strong>
      </p>
      <router-link
        :to="'/menu/' + menu.id"
        class="btn btn-success fw-semibold py-2 mt-3"
      >
        <i class="bi bi-cart text-white me-2"></i>Order Now
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardMenuComponent',
  props: ['menu'],
};
</script>
