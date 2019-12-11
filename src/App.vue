<template>
  <div id="app" class="wrapper">
    <Sidebar v-show="currentUser" v-if="showSidebar" />
    <div id="content">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <h3 class="nav-item" v-if="!currentUser">
          <a href class="nav-link">Pin</a>
        </h3>
        <button
          @click.prevent="showSb()"
          type="button"
          id="sidebarCollapse"
          class="btn btn-info"
          v-if="currentUser"
        >
          <font-awesome-icon :icon="['fas', 'align-left']" />
        </button>
        <div class="navbar-nav mr-auto">
          <li class="nav-item" v-if="showAdminBoard">
            <a href="/admin" class="nav-link">{{ $t("userBoard") }}</a>
          </li>
          <li class="nav-item" v-if="showModeratorBoard">
            <a href="/mod" class="nav-link">{{ $t("moderatorBoard") }}</a>
          </li>
          <li class="nav-item">
            <a href="/user" class="nav-link" v-if="currentUser">{{
              $t("user")
            }}</a>
          </li>
        </div>
        <div class="navbar-nav ml-auto" v-if="!currentUser">
          <div
            class="nav-link item"
            :value="vn"
            @click.prevent="callSetLangActions"
          >
            {{ $t("vietnamese") }}
          </div>
          <div
            class="nav-link item"
            :value="en"
            @click.prevent="callSetLangActions"
          >
            {{ $t("english") }}
          </div>
        </div>
        <div class="navbar-nav ml-auto" v-if="currentUser">
          <li class="nav-item">
            <a href="/profile" class="nav-link">
              <font-awesome-icon icon="user" />
              {{ currentUser.username }}
            </a>
          </li>
          <li class="nav-item">
            <a href class="nav-link" @click="logOut">
              <font-awesome-icon icon="sign-out-alt" />{{ $t("logout") }}
            </a>
          </li>
        </div>
      </nav>
      <div id="mainContent">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";

export default {
  name: "app",
  components: {
    Sidebar
  },
  data() {
    return {
      showSidebar: true,
      vn: "vn",
      en: "en"
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser) {
        return this.currentUser.roles.includes("ROLE_ADMIN");
      }
      return false;
    },
    showModeratorBoard() {
      if (this.currentUser) {
        return this.currentUser.roles.includes("ROLE_MODERATOR");
      }
      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
    showSb() {
      if (!this.showSidebar) {
        this.showSidebar = true;
      } else {
        this.showSidebar = false;
      }
    },
    callSetLangActions(event) {
      sessionStorage.setItem("lang", event.target.getAttribute("value"));
      this.$store.dispatch("setLang", sessionStorage.getItem("lang"));
    }
  }
};
</script>

<style>
a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

.navbar {
  padding: 15px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
  box-shadow: none;
  outline: none !important;
  border: none;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #ddd;
  margin: 40px 0;
}
.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}
#content {
  width: 100%;
  min-height: 100vh;
  transition: all 0.3s;
}
#mainContent {
  max-height: 92vh;
  overflow: scroll;
}
</style>
