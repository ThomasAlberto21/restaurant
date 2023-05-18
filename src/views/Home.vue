<template>
  <div class="home">
    <Navbar />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    Navbar,
  },
};
</script>
