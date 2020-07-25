<template>
  <div class="mediaCard">
    <article>
      <h1 class="header">{{cardData[0]}}</h1>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MediaCard extends Vue {
@Prop(Object || Array) private cardData!: Array<object>

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.mediaCard {
  height: 145px;
  width: 345px;
  border: 2px solid white;
  background: pink;
  padding:5px;
  cursor: pointer;

  .header {
    font-size: 10pt;
    color: red;

    p {
      color: white;
    }
  }
  .thumbnailUrl{
    width: 50px;
    height: 50px;
  }
}
</style>
