<template>
  <div class="cart">
    <Navbar :updateCarts="carts" />

    <div class="container">
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
                    <button
                      class="btn btn-danger text-white"
                      @click="deleteCart(cart.id)"
                    >
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
  </div>
</template>

<script>
import Axios from 'axios';
import { useToast } from 'vue-toastification';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'CartViews',
  components: {
    Navbar,
  },

  data() {
    return {
      carts: [],
    };
  },

  methods: {
    setCarts(data) {
      this.carts = data;
    },

    deleteCart(id) {
      Axios.delete('http://localhost:3000/carts/' + id)
        .then(() => {
          const toast = useToast();
          toast.error('Success Delete Carts', {
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
          });

          // Update Data
          Axios.get('http://localhost:3000/carts')
            .then((response) => this.setCarts(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    Axios.get('http://localhost:3000/carts')
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
