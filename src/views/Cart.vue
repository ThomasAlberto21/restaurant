<template>
  <div class="cart container">
    <div class="row my-5">
      <div class="col">
        <router-link to="/menu" type="button" class="btn btn-success">
          <i class="bi bi-arrow-left"></i> Back
        </router-link>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col">
        <h1 class="fw-bold">Carts</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartViews',
};
</script>
