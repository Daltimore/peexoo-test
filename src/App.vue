<template>
  <div id="app">
    <div class="sidebar-container">
      <Sidebar />
    </div>
    <div class="main-route">
      <top-nav class="profile-container"></top-nav>
      <router-view class="router-container" />
    </div>
  </div>
</template>

<script>
import Sidebar from "./views/Sidebar";
import TopNav from "./views/TopNav";
export default {
  components: {
    Sidebar,
    TopNav
  }
};
</script>

<style>
  body {
    font-family: "Montserrat", "Lato";
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #fffdf7;
    overflow-x: hidden;
  }
  a {
    font-weight: bold;
    color: #d4d4d4;
    text-decoration: none;
  }
  a:hover {
    background-color: #5c5c5c;
  }
  a.router-link-exact-active {
    color: #ffb603;
    border-left: 5px solid #ffb603;
    background-color: #5c5c5c;
  }
  #app {
    display: flex;
    width: 100vw;
  }
  #app .sidebar-container {
    width: 20vw;
    background: #4d4d4d;
    position: fixed;
    min-height: 100vh;
    top: 0;
    bottom: 0;
    overflow-y: scroll;
  }
  #app .main-route {
    width: 80vw;
    margin-left: 20vw;
  }
  #app .profile-container {
    position: fixed;
    height: 9vh;
    width: 80vw;
    background-color: #fffdf9;
    box-shadow: 0 1px 4px 0 rgba(204, 204, 204, 0.5);
    z-index: 30;
    overflow: hidden;
  }
  #app .router-container {
    margin-top: 9vh;
  }
</style>
