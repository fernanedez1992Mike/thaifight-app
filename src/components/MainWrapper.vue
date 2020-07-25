<template>
  <div class="mainWrapper">
    <b-container fluid>
        <b-row align-v="center">
          <MediaCard />
        </b-row>
        <br>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MediaCard from '@/components/MediaCard.vue'

@Component({
    components:{
        MediaCard
    }
})
export default class MainWrapper extends Vue {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.mainWrapper {
  width: 100%;
  height: auto;
  padding: 1rem;
  display:flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

</style>
