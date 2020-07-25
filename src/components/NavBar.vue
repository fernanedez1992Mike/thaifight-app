<template>
<div id="nav">
  <b-nav>
    <b-nav-item><router-link :to="{name: 'home'}">Home</router-link></b-nav-item>
    <b-nav-item-dropdown
      text="Profile"
    >
      <b-dropdown-item><router-link :to="{name: 'profile'}">Profile</router-link></b-dropdown-item>
      <b-dropdown-item><router-link :to="{name: 'user', params: {username: 'mike'}}">User</router-link></b-dropdown-item>
      <b-dropdown-item><router-link :to="{name: 'login'}">Log In</router-link></b-dropdown-item>
    </b-nav-item-dropdown>

    <b-nav-item-dropdown
      text="Events"
    >
      <b-dropdown-item><router-link :to="{name: 'event-create'}">Create Event</router-link></b-dropdown-item>
      <b-dropdown-item><router-link :to="{name: 'event-show'}">Show Event</router-link></b-dropdown-item>
      <b-dropdown-item><router-link :to="{name: 'event-list'}">Show List</router-link></b-dropdown-item>
    </b-nav-item-dropdown>

    <b-nav-item-dropdown
      text="Articles"
    >
      <b-dropdown-item><router-link :to="{name: 'article'}">Articles</router-link></b-dropdown-item>
      <b-dropdown-item><router-link :to="{name: 'articleEdit'}">Article-edit</router-link></b-dropdown-item>
    </b-nav-item-dropdown>
  </b-nav>
</div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {
  background: #262626;
  a {
    color: green;
  }
}
</style>