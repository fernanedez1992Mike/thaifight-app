<template>
  <div class="profile">
    <b-jumbotron>
    <template v-slot:header>Profile</template>

    <template v-slot:lead>
      {{msg="user profile"}}
    </template>

    <hr class="my-4">

    <p v-for="album in albums" :key="album.id">

      
    </p>

    <b-button variant="primary" href="#">Do Something</b-button>
    <b-button variant="success" href="#">Do Something Else</b-button>
  </b-jumbotron>    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import apiClient from '@/TS/axios'

@Component
export default class Profile extends Vue {
  @Prop() private msg!: string;
  
  albums = []

  created(){
    apiClient.getAlbums()
    .then(res => {this.albums = res.data})
    .catch(err => {console.log('error', err.res)})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
