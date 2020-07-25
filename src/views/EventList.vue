<template>
  <div class="Event List">
    <router-link :to="{name: 'event-show', params: {id:'1'}}">Event List</router-link>
    <MediaCard :cardData="data" v-for="info in data" :key="info.id"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import apiClient from '@/TS/axios'
import MediaCard from '@/components/MediaCard.vue';

@Component({
  components:{
    MediaCard
  }
})

export default class EventList extends Vue {
@Prop(Object || Array) public data!: Array<object>

  mounted(){
    apiClient.getEvents()
    .then(res => {this.data = res.data})
    .catch(error => console.log('There was an error:', error.response))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.eventJumbo {
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/9/9a/Muay_Thai_Fight_Us_Vs_Burma_%2880668065%29.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 65vh;
}

</style>
