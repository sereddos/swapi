<template>
  <div id="app">

    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div id="navbar" class="navbar-collapse">
          <ul class="nav navbar-nav">
            <router-link tag="li" to="/" active-class="active" exact>
              <a>
                Список кораблей
              </a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
#app {
  margin-top: 60px;
}
</style>
