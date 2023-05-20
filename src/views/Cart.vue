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

          <div class="table-responsive-md mt-3">
            <table class="table">
              <thead class="table-success">
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
            <button
              type="button"
              class="btn btn-success float-end"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              Checkout <i class="bi bi-cart-check"></i>
            </button>
          </div>

          <!-- Modal -->
          <div
            class="modal"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1
                    class="modal-title fs-5 fw-bold text-success"
                    id="exampleModalLabel"
                  >
                    Checkout
                  </h1>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-2">
                      <label for="name" class="col-form-label fw-bold"
                        >Name</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="orders.name"
                        placeholder="Enter Your Name..."
                      />
                    </div>
                    <div class="mb-3">
                      <label for="address" class="col-form-label fw-bold"
                        >Address</label
                      >
                      <textarea
                        rows="5"
                        class="form-control"
                        v-model="orders.address"
                        placeholder="Enter Your Address..."
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    class="btn btn-success"
                    @click="checkoutOrder"
                  >
                    Checkout <i class="bi bi-cart-check"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import Navbar from '@/components/Navbar.vue';
import { useToast } from 'vue-toastification';

export default {
  name: 'CartViews',
  components: {
    Navbar,
  },

  data() {
    return {
      carts: [],
      orders: {},
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

    checkoutOrder() {
      const toast = useToast();
      if (this.orders.name && this.orders.address) {
        this.orders.carts = this.carts;
        Axios.post('http://localhost:3000/orders', this.orders).then(() => {
          // Hapus semua keranjang jika sudah route ke success-order
          this.carts.map(async (item) => {
            try {
              return await Axios.delete(
                'http://localhost:3000/carts/' + item.id
              );
            } catch (error) {
              console.log(error);
            }
          });

          this.$router.push({ path: '/success-order' });
          toast.success('Success Order Food', {
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
        });
      } else {
        toast.error('Please Enter Your Name And Address', {
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
      }
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
