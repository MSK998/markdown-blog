<template>
  <div>
    <nav>
      <div class="container">
        <router-link to="/">
          <img src="@/assets/svg/md_logo.svg" class="logo" />
        </router-link>
        <div class="right-nav">
          <router-link to="/"
            ><button class="button-primary">Home</button></router-link
          >
          <router-link to="/new"
            ><button class="button-primary">New</button></router-link
          >
        </div>
      </div>
    </nav>
    <div class="router">
      <router-view />
    </div>
  </div>
</template>

<style>
nav {
  background-color: #222;
  min-width: 100%;
  display: block;
  overflow: hidden;
}

.right-nav {
  float: right;
}

.logo {
  height: 3rem;
}

@media (max-width: 400px) {
  nav {
    text-align: center;
  }
  button {
    width: 90%;
  }
  .right-nav {
    float: unset;
  }
}
nav a {
  color: white;
  text-decoration: none;
}
.logo {
  font-size: 3rem;
  padding: 0.5rem;
}
.item {
  padding: 0.666rem;
  margin: 0 0;
}
.item.button {
  padding: 9px 5px;
}
.item:not(.button) a:hover,
.item a:hover::after {
  color: #ccc;
}
.right-nav {
  display: flex;
  justify-content: center;
  float: right;
}
button {
  background-color: white;
}
</style>
