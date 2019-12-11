<template>
  <div class="col-md-12">
    <div class="card card-container col-lg-5 col-sm-8">
      <img
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        id="profile-img"
        class="profile-img-card"
      />
      <form name="form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">{{ $t("username")}}</label>
          <input
            type="text"
            class="form-control"
            name="username"
            v-model="user.username"
            v-validate="'required'"
          />
          <div
            class="alert alert-danger"
            role="alert"
            v-if="errors.has('username')"
          >
            {{$t('usernameIsNotBlank')}}
          </div>
        </div>
        <div class="form-group">
          <label for="password">{{$t("password")}}</label>
          <input
            type="password"
            class="form-control"
            name="password"
            v-model="user.password"
            v-validate="'required'"
          />
          <div
            class="alert alert-danger"
            role="alert"
            v-if="errors.has('password')"
          >{{$t("passwordIsNotBlank")}}
          </div>
        </div>
        <div class="form-group">
            <button class="btn btn-primary btn-block">
                <span class="spinner-border spinner-border-sm" v-show="loading"></span>
                <span>{{$t("login")}}</span>
            </button>
        </div>
        <div class="form-group">
            <div class="alert alert-danger" role="alert" v-if="message">{{$t("unthorized")}}</div>
        </div>
      </form>
      
    </div>
  </div>
</template>

<script>
import User from "../models/user";


export default {
  name: "login",
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: '',
    };
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll();

      if (this.errors.any()) {
        this.loading = false;
        return;
      }
      if (this.user.username && this.user.password) {
        this.$store.dispatch('auth/login', this.user).then(
          () => {
            this.$router.push('/profile');
          },
          error => {
            this.loading = false;
            this.message = error.message
          }
        )
      }
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }

  }
};
</script>

<style  scoped>
label{
    display: block;
    margin-top: 10px;
}
.card-container .card {
    max-width: 350px !important;
    padding: 40px 40px;
}
.card {
    background-color: #f7f7f7;
    padding: 20px 25px 30px;
    margin: 0 auto 25px;
    margin-top: 50px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3); 
}
.profile-img-card {
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%; 
}
</style>>
<!--Trang này có một form với username và password. Chúng ta sử dụng VeeValidate 2.x để xác thực input trước khi submitting form
Nếu có một trường không khớp chúng ta sẽ thông báo lỗi
Chúng ta kiểm tra user trạng thái đã đăng nhập sử dụng VUex Store:
this.$store.state.auth.status.loggedIn. Nếu trạng thái là true, chúng ta sử dụng Vue Router đến user trực tiếp đến trang Profile
Trong function handleLogin(), chúng ta dispatch hành động 'auth/login' để Vuex Store. Nếu đăng nhập thành công , đi tới trang 
Profile, nếu không hiển thị thông báo lỗi.  -->