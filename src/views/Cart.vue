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

        <div class="table-responsive mt-3">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Picture</th>
                <th scope="col">Name Food</th>
                <th scope="col">Description Order</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>

                <th scope="col">Total Price</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cart, index) in carts" :key="cart.id">
                <th>{{ index + 1 }}</th>
                <td class="w-25">
                  <img
                    :src="'../assets/menus/' + cart.menus.gambar"
                    class="card-img-top rounded-4 shadow"
                    alt="menus_image"
                  />
                </td>
                <td>{{ cart.menus.nama }}</td>
                <td>
                  {{ cart.descriptionOrder ? cart.descriptionOrder : '-' }}
                </td>
                <td>{{ cart.quantity }}</td>
                <td>Rp. {{ cart.menus.harga }}</td>
                <td>Rp. {{ cart.menus.harga * cart.quantity }}</td>
                <td>
                  <button class="btn btn-danger text-white">
                    <i class="bi bi-trash3"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td colspan="6" align="right">Total Price :</td>
                <td>
                  <strong>Rp.{{ totalPrice }}</strong>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'CartViews',

  data() {
    return {
      carts: [],
    };
  },

  methods: {
    setCarts(data) {
      this.carts = data;
    },
  },

  mounted() {
    Axios.get('http://localhost:3000/orders/')
      .then((response) => this.setCarts(response.data))
      .catch((error) => console.log(error));
  },

  computed: {
    totalPrice() {
      return this.carts.reduce(function (item, data) {
        return item + data.menus.harga * data.quantity;
      }, 0);
    },
  },
};
</script>
