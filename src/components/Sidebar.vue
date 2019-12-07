<template>
  <nav id="sidebar">
    <div class="sidebar-header">
      <h3>Sidebar</h3>
    </div>
    <ul class="list-unstyled components">
      <li class="active">
        <a
          href="#homeSubmenu"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
          >{{$t('home')}}</a
        >
        <ul class="collapse list-unstyled" id="homeSubmenu">
          <li>
            <a href="/home" class="nav-link">
              <font-awesome-icon icon="home" /> {{$t('home')}} 1
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a
          href="#pageSubmenu"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
          >{{$t('page')}}</a
        >
        <ul class="collapse list-unstyled" id="pageSubmenu">
          <li>
            <a href="/page">{{$t('page')}} 1</a>
          </li>
          <li>
            <a href="/page2">{{$t('page')}} 2</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="/about"> {{ $t('about')}}</a>
      </li>
      <li>
        <a href="/contact">{{$t('contact')}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style>
#sidebar {
  min-width: 250px;
  max-width: 250px;
  background: #7386d5;
  color: #fff;
  transition: all 0.3s;
  max-height: 100vh;
}

#sidebar.active {
  margin-left: -250px;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #6d7fcc;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
  text-decoration: none;
  color: #fff;
}

#sidebar ul li a:hover {
  color: #7386d5;
  background: #fff;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #6d7fcc;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

a.download {
  background: #fff;
  color: #7386d5;
}

a.article,
a.article:hover {
  background: #6d7fcc !important;
  color: #fff !important;
}

</style>
