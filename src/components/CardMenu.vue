<template>
  <div class="card" style="width: 18rem">
    <img
      :src="'../assets/menus/' + menu.gambar"
      class="card-img-top"
      alt="menus"
    />
    <div class="card-body">
      <h5 class="card-title">{{ menu.nama }}</h5>
      <p>Rp.{{ menu.harga }}</p>
      <a href="#" class="btn btn-success">Order Now</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardMenu',
  props: ['menu'],
};
</script>
