<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-success">
    <div class="container">
      <a class="navbar-brand text-white fw-bold">Restaurant</a>
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
        <ul class="navbar-nav text-start">
          <li class="nav-item">
            <router-link class="text-white nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="text-white nav-link" to="/menu"
              >Menu</router-link
            >
          </li>
        </ul>
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
