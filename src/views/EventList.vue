<template>
  <div class="Event List">
    <h1>EventList</h1>
     <HorizontalCard />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import apiClient from '@/TS/axios'
import HorizontalCard from '@/components/HorizontalCard.vue';

@Component({
  components:{
    HorizontalCard
  }
})
export default class EventList extends Vue {

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
