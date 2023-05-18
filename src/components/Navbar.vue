<template>
  <nav class="navbar bg-success navbar-expand-lg bg-body-tertiary shadow-sm">
    <div class="container">
      <span class="navbar-brand fw-bold text-light">Restaurant</span>

      <button
        class="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto text-start gap-lg-3">
          <a class="nav-link fw-semibold text-light" href="#">Home</a>
          <a class="nav-link fw-semibold text-light" href="#">Menu</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
};
</script>
