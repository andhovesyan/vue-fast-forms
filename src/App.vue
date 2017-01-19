<template>
<div id="wrap">
  <nav id="topbar" class="navbar navbar-full fixed-top navbar-light bg-faded">
    <div class="container">
      <a class="navbar-brand" href="#">Vue.js Fast Forms</a>
      <a id="githubBtn" class="float-right" target="_blank" href="https://github.com/Hovesyan/vue-fast-forms">
        <vf-icon icon="star" /> Github
      </a>
    </div>
  </nav>
  <div class="container pt-4">
    <div class="row">
      <div class="col-9">
        <router-view />
      </div>
      <div class="col-3">
        <ul id="sideNav" class="nav flex-column">
          <li><h5>Components</h5></li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'forms'}">
              Forms
            </router-link>
          </li>
          <li><h6>Inputs</h6></li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'inputs'}">
              Base inputs
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'custom'}">
              Custom inputs
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'datepicker'}">
              Datepicker
            </router-link>
          </li>
          <li><h6>Buttons</h6></li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'buttons'}">
              Buttons
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import $ from 'jquery';

export default {

  name: 'App',

  created() {
    if (!this.$isServer) {
      const $window = $(window);
      $window.on('scroll', () => {
        if ($window.scrollTop() > 60) {
          $('#sideNav').addClass('scrolled');
          $('#topbar').addClass('scrolled');
        } else {
          $('#sideNav').removeClass('scrolled');
          $('#topbar').removeClass('scrolled');
        }
      });
    }
  },
  watch: {
    $route() {
      $('html, body').animate({
          scrollTop: 0,
       }, 500);
    },
  },
};
</script>

<style lang="sass" scoped>

#githubBtn {
  background: lighten(#2196f3, 5%);
  border-radius: .15rem;
  color: #fff;
  font-weight: 400;
  padding: 0 1rem;
  line-height: 2.9rem;
  height: 3rem;
  margin: .6rem 0 0;
  transition: border-radius .3s, margin .3s;
  .star {
    font-size: 1.3rem;
    margin-right: .1rem;
  }
  &:hover {
    background: darken(#2196f3, 7.5%);
    cursor: pointer;
    text-decoration: none;
  }
}

#topbar {
  background: #2196f3;
  color: #fff;
  border: none;
  border-bottom: 1px solid #888;
  border-radius: 0;
  line-height: 4rem;
  height: 4.5rem;
  padding: 0;
  transition: line-height .3s, height .3s;
  .navbar-brand {
    color: #fff;
    padding: 0;
    font-weight: 600;
    font-size: 1.5rem;
    font-family: 'Dosis', sans-serif;
    line-height: 4.5rem;
    margin-top: -2px;
    height: 4.5rem;
    transition: font-size .3s, line-height .3s, height .3s;
  }
  &.scrolled {
    height: 3rem;
    line-height: 2.75rem;
    border-bottom-color: #888;
    .navbar-brand {
      height: 3rem;
      line-height: 3rem;
      font-size: 1.3rem;
      margin-top: -2px;
    }
    #githubBtn {
      border-radius: 0;
      margin: 0;
      transition: border-radius .3s ease .3s, margin .3s;
    }
  }
}

#sideNav {
    position: fixed;
  h6 {
    margin: .5rem 0;
  }
  padding-left: 2rem;
  &.scrolled {
    top: 4.25rem;
  }
  .nav-item {
    line-height: 2rem;
  }
  .nav-link {
    color: #1565c0;
    padding: 0;
    text-decoration: none!important;
    outline: none!important;
    &::before {
      content: '';
      border-left: 2px solid transparent;
      margin-right: .5rem;
    }
    &:hover {
      color: #2196f3;
    }
    &.active {
      color: #64b5f6;
      pointer-events: none;
      &::before {
        border-color: #2196f3;
      }
    }
  }
}
</style>