<template>
  <router-link :to="{ name: 'event-show', params: { id: data.id }}">
    <div id="mediaCard">
      <h2>{{data.title}}</h2>
      <p>{{data.body}}</p>
      <span>{{data.id}}</span>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import apiClient from '@/TS/axios'

@Component({
    props: {
        data: Object
    }
})
export default class MediaCard extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

#mediaCard {
  background-color: #0f0f0f;
  color: #f0f0f0;
  height: 300px;
  width: 450px;
  margin: 15px;
  padding: 1rem;

  h2 {
    font-size: 24pt;
    font-kerning: auto;
  } 
  p {
    font-size: 14pt;
    font-kerning: auto;
    overflow: hidden;
  }
}
#mediaCard:hover{
  background: #f0f0f0;
  color: #0f0f0f;
  box-shadow: #0f0f0f;
  -webkit-box-shadow: 15px 10px 7px -1px rgba(0,0,0,0.04);
  -moz-box-shadow: 15px 10px 7px -1px rgba(0,0,0,0.04);
  box-shadow: 15px 10px 7px -1px rgba(0,0,0,0.04);
  cursor: pointer;
}

</style>
