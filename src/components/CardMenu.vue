<template>
  <div class="card">
    <img
      :src="'../assets/menus/' + menu.gambar"
      class="card-img-top"
      alt="menus_image"
    />
    <div class="card-body mt-2">
      <h5 class="card-title fw-bold">{{ menu.nama }}</h5>
      <p>Harga Rp. {{ menu.harga }}</p>
      <a class="btn btn-success py-2 fw-semibold">
        <i class="bi bi-cart text-white me-2"></i>Order Now</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardMenu',
  props: ['menu'],
};
</script>
