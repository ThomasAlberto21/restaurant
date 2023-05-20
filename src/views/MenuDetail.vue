<template>
  <div class="menu-detail container">
    <div class="row my-5">
      <div class="col">
        <router-link to="/menu" type="button" class="btn btn-success">
          <i class="bi bi-arrow-left"></i> Back
        </router-link>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-lg-7">
        <img
          :src="'../assets/menus/' + menus.gambar"
          class="card-img-top rounded-4 h-100 shadow"
          alt="menus_image"
        />
      </div>

      <div class="col-lg-5 mt-lg-0 mt-5">
        <h1 class="fw-bold">{{ menus.nama }}</h1>
        <hr />
        <p><strong>Description Foods</strong> : {{ menus.desc }}</p>
        <p><strong>Price</strong> : Rp.{{ menus.harga }}</p>
        <form v-on:submit.prevent>
          <div class="form-group">
            <label for="quantity"><strong>Quantity</strong></label>
            <input
              type="number"
              name="quantity"
              class="form-control mt-2"
              placeholder="Enter the quantity.."
              v-model="orders.quantity"
            />
          </div>
          <div class="form-group mt-2">
            <label for="description"><strong>Description</strong></label>
            <textarea
              rows="6"
              type="text"
              name="description"
              class="form-control mt-2"
              placeholder="For example: Spicy, Very Spicy etc..."
              v-model="orders.description"
            />
          </div>
          <button
            class="btn btn-success rounded-2 text-white mt-3 w-100 py-3"
            @click="submitOrder"
          >
            <i class="bi bi-cart text-white me-2"></i>
            <span class="fw-semibold">Order</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import { useToast } from 'vue-toastification';

export default {
  name: 'MenuDetailViews',

  data() {
    return {
      menus: {},
      orders: {},
    };
  },

  methods: {
    setMenus(data) {
      this.menus = data;
    },

    submitOrder() {
      const toast = useToast();
      if (this.orders.quantity) {
        this.orders.menus = this.menus;
        Axios.post('http://localhost:3000/orders', this.orders)
          .then(() => {
            this.$router.push({ path: '/cart' });
            toast.success('Success Add To Cart', {
              position: 'top-center',
              timeout: 3000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: false,
              hideProgressBar: true,
              closeButton: 'button',
              icon: true,
              rtl: false,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        toast.error('Order Quantity And Description Are Required', {
          position: 'top-center',
          timeout: 3000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: 'button',
          icon: true,
          rtl: false,
        });
      }
    },
  },

  mounted() {
    Axios.get('http://localhost:3000/menus/' + this.$route.params.id)
      .then((response) => this.setMenus(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
