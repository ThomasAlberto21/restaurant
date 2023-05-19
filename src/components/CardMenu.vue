<template>
  <div>
    <h1>{{ menu.nama }}</h1>
  </div>
</template>

<script>
export default {
  name: 'CardMenu',
  props: ['menu'],
};
</script>
