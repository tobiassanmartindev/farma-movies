<template>
  <div aria-label="Login" class="row justify-center bg-dark text-white">
    <div class="q-pa-md q-mt-lg" style="max-width: 400px; height: 100vh">
      <div class="text-h6 text-center">Veri Movies</div>
      <div class="text-center q-ma-md">
        Inicia sesion para disfrutar de las mejores peliculas
      </div>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-mt-md">
        <q-input
          standout="bg-teal text-white"
          aria-label="Contraseña"
          dark
          filled
          v-model="email"
          label="Email"
          lazy-rules
        />

        <q-input
          dark
          standout="bg-teal text-white"
          label="Contraseña"
          aria-label="Contraseña"
          v-model="password"
          filled
          :type="isPwd ? 'password' : 'text'"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <div>
          <q-btn
            label="Ingresar"
            aria-label="Ingresar"
            @click="login"
            color="teal full-width"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useLoginStore } from "src/stores/loginStore";
// import { store } from "quasar/wrappers";

export default defineComponent({
  name: "LoginPage",
  methods: {
    login() {
      localStorage.setItem("authorized", true);
      this.$router.push("/movies");
    },
  },
  data() {
    return {
      mail: "",
      password: "",
      store: useLoginStore(),
      isPwd: false,
    };
  },
  components: {},
});
</script>
