<template>
  <div id="Home">
    <b-jumbotron class="homeJumbo">
    <h1 class="jumboHeader">Event List</h1>
    <MediaCard v-bind:data="post" v-for="post in data" :key="post"/>
    </b-jumbotron>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import apiClient from '@/TS/axios'
import MediaCard from '@/components/MediaCard.vue'

@Component({
    components: {
        MediaCard
    }
})

export default class EventList extends Vue {
    
data = []
    mounted(){
        apiClient.getPosts()
        .then (res => {this.data = res.data})
        .catch (error => console.log('error logged', error.responce))
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>
