<!--Trang này lấy User hiện tại từ Vuex Store và hiển thị thông tin. Nếu User không đăng nhập, nó chuyển đến trang Login -->
<template>
  <div class="container">
      <header class="jumbotron">
          <h3>
              <strong>{{currentuser.username}}</strong> Profile
          </h3>
      </header>
      <p>
          <strong>Token: </strong>
          {{currentuser.accessToken.substring(0,20)}} ... {{currentuser.accessToken.substr(currentuser.accessToken.length -20)}}
      </p>
      <p>
          <strong>Id:</strong>
          {{currentuser.id}}
      </p>
      <p>
          <strong>Email: </strong>
          {{currentuser.email}}
      </p>
      <strong>Authorities: </strong>
      <ul>
          <li v-for="(role, index) in currentuser.roles" :key="index">{{role}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'profile',
    computed: {
        currentuser() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        if (!this.currentuser) {
            this.$router.push('/login');
        }
    }
}
</script>

<style>

</style>