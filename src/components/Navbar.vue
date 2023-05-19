<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-success">
    <div class="container">
      <a class="navbar-brand text-white fw-bolder">Restaurant</a>
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
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="text-white nav-link fw-semibold" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/menu" class="text-white nav-link fw-semibold"
              >Menu</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/cart" class="btn btn-light position-relative">
              <i class="bi bi-cart text-success"></i>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-1 bg-danger"
              >
                0
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponents',
};
</script>
