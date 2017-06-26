<template>
<div id="wrap">
  <nav id="topbar" class="navbar navbar-full fixed-top navbar-light bg-faded">
    <div class="container">
      <div class="row">
        <div class="col">
          <router-link class="navbar-brand" :to="{name: 'home'}">
            Vue.js - Fast Forms
          </router-link>
        </div>
        <div class="col">
          <a id="githubBtn"
             class="float-right"
             target="_blank"
             href="https://github.com/Hovesyan/vue-fast-forms"
          >
            <vf-icon icon="star" /> Github
          </a>
        </div>
      </div>
    </div>
  </nav>
  <header id="header" class="jumbotron jumbotron-fluid text-center">
    <h1 style="font-weight: 600; font-size: 4rem">Vue Fast Forms</h1>
    <p class="lead mt-3" style="font-weight: 600">
      Vue.js components for fast and easy forms build, validation and data bindning.
    </p>
    <div class="container">
      <div class="row">
        <div class="col-auto mx-auto text-center">
          <h5 class="my-2">Install via npm</h5>
          <code class="install-code">npm install vue-fast-form --save-dev</code>
<!--           <h5 class="my-2">via yarn</h5>
          <code class="install-code">yarn add vue-fast-form --dev</code> -->
          <h5 class="my-2">or download</h5>
          <vf-btn class="mt-1">
            vue-fast-form.js
          </vf-btn>
          <vf-btn class="mt-1">
            vue-fast-form.min.js
          </vf-btn>
        </div>
      </div>
    </div>
  </header>
  <div class="container pt-4">
    <div class="row">
      <div class="col">
        <router-view />
      </div>
      <div class="col col-auto">
      <aside style="width: 15rem;"></aside>
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

  mounted() {
    const $window = $(window);
    const $sideNav = $('#sideNav');
    const offset = $sideNav.offset().top - 64;
    $window.on('scroll', () => {
      if ($window.scrollTop() >= offset) {
        $('#sideNav').addClass('scrolled');
        // $('#topbar').addClass('scrolled');
      } else {
        $('#sideNav').removeClass('scrolled');
        // $('#topbar').removeClass('scrolled');
      }
    });
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

<style lang="scss">

@import 'assets/styles/app.scss';

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
  background: #fff;
  color: #2C3E50;
  border: none;
  // border-bottom: 1px solid #888;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  border-radius: 0;
  line-height: 4rem;
  height: 4rem;
  padding: 0;
  width: 100%;
  transition: line-height .3s, height .3s;
  .navbar-brand {
    color: #2C3E50;
    padding: 0;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 4rem;
    height: 4rem;
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
  width: 15rem;
  h6 {
    margin: .5rem 0;
  }
  padding-left: 2rem;
  &.scrolled {
    position: fixed;
    top: 5rem;
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

#header {
  background: lighten(#2196F3, 5%);
  color: #fff;
}
.install-code {
  border: solid 1px #2196F3;
  border-radius: .15rem;
  display: block;
  line-height: 2.2rem;
  height: 2.3rem;
  padding: 0 1rem;
}

.lead {
  font-size: 1.5rem;
  font-weight: 400;
}
</style>
