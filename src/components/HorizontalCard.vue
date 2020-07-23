<template>
  <div>
  <b-card v-for="post in posts" :key="post.id">
    <h1>{{post.title}}</h1>
    <p>{{post.body}}</p>
  </b-card>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import apiClient from '@/TS/axios'
import HorizontalCard from '@/components/HorizontalCard.vue';

@Component
export default class EventList extends Vue {
  @Prop() private posts!: object;
  @Prop() private index!: number;

  created(){
    apiClient.getEvents()
    .then(res => {this.posts = res.data})
    .catch(err => {console.log('error', err.res)})
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>