<template>
  <form class="Form" id="form" ref="form">
    <h1 style="margin-bottom: 30px">Login Form</h1>
    <div class="mb-3">
      <label class="form-label">Username</label>
      <input
        type="text"
        id="username"
        ref="username"
        v-model="loginData.username"
        class="form-control"
      />
    </div>
    <div class="mb-3 passwordContainer">
      <label class="form-label">Password</label>
      <input
        type="password"
        ref="passwordField"
        v-model="loginData.password"
        id="password"
        class="form-control"
      />
      <i
        class="fa-solid fa-eye passwordToggle"
        id="passwordIcon"
        ref="passwordIcon"
        @click="passwordVisibility"
      ></i>
    </div>
    <button type="submit" class="btn btn-primary" @click="loginSubmit">
      Login
    </button>
  </form>
</template>

<script>
export default {
  name: "Login_Component",
  data() {
    return {
      isAuth: false,
      data: null,
      loginData: {
        username: "",
        password: "",
      },

      token: "",
      received_response: {},
      mediaStream: {},
    };
  },

  methods: {
    //Login Submit

    async loginSubmit(event) {
      event.preventDefault();
      if (this.validate()) {
        fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: this.loginData.username,
            password: this.loginData.password,
          }),
        })
          .then((res) => {
            if (!res.ok) {
              this.$toast.error("Incorrect Username or Password", {
                position: "top-right",
              });
            } else {
              return res.json();
            }
          })
          .then((data) => {
            if (data) {
              localStorage.setItem("loginData", JSON.stringify(this.loginData));
              localStorage.setItem("token", data.token);
              this.$router.push("./products");
            } else {
              console.log("Not Found");
            }
          });

        // const { data } = this.received_response;
        // console.log(this.token);

        // this.$refs.form.reset();
      }
    },

    validate() {
      if (
        this.$refs.username.value.length < 1 ||
        this.$refs.passwordField.value.length < 1
      ) {
        if (
          this.$refs.username.value.length < 1 &&
          this.$refs.passwordField.value.length < 1
        ) {
          this.$toast.error("Please Enter Username and Password", {
            position: "top-right",
          });
        } else if (this.$refs.username.value.length < 1) {
          this.$toast.error("Please Enter Username", {
            position: "top-right",
          });
        } else if (this.$refs.passwordField.value.length < 1) {
          this.$toast.error("Please Enter Password", {
            position: "top-right",
          });
        }
        return false;
      }
      return true;
    },

    //Password Icon

    passwordVisibility() {
      if (this.$refs.passwordField.type === "password") {
        this.$refs.passwordField.type = "text";
        this.$refs.passwordIcon.classList.remove("fa-eye");
        this.$refs.passwordIcon.classList.add("fa-eye-slash");
      } else {
        this.$refs.passwordIcon.classList.add("fa-eye");
        this.$refs.passwordIcon.classList.remove("fa-eye-slash");
        this.$refs.passwordField.type = "password";
      }
    },
  },
};
</script>
