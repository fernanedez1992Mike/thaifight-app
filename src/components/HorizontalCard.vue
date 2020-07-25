<template>
  <div>
  <b-card v-for="post in posts" :key="post.id" class="horizontalCard">
    <img :src="img" class="cardImg">
    <h1 class="cardHeader">{{post.title}}</h1>
    <p>{{post.body}}</p>
    <button class="cardButton">Link somewhere</button>
  </b-card>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import apiClient from '@/TS/axios'


@Component
export default class EventList extends Vue {
  @Prop() private posts!: object;
  @Prop() private index!: number;

img = 'https://www.muaythaicitizen.com/wp-content/uploads/2019/04/artur-kyshenko-mas-fight.jpg'

  created(){
    apiClient.getEvents()
    .then(res => {this.posts = res.data})
    .catch(err => {console.log('error', err.res)})
  }
}

</script>

<style scoped lang="scss">
.horizontalCard {
  background: #dbdbdb;
  padding: .5em;
  margin: .5em;
  border: 1px solid #c2c2c2;
  width: 100%;
  height: auto;

  .cardButton {
    left:0;
    top:0;
    background: red;
    color: orange;
    margin: auto;
    paddging: 5px;
  }
  .cardImg{
    width: 100%;
    margin:auto;
    padding: .5em;
  }
  
  h1{
    color: #000;
    font-size: 18pt;

  }

  p{
    color: #000;
    font-size: 14pt;
  }
}

</style>