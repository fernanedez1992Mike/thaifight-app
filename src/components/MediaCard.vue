<template>
  <div class="mediaCard">
    <h1>{{msg="thai boxing post"}}</h1>
    <p>Media Card {{description}} </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MediaCard extends Vue {
  @Prop() private msg!: string;
  @Prop() public message!: string;

  description = 'Thai Boxing Rules'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mediaCard {
  height: 245px;
  width: 100%;
  background: rgb(243, 243, 243);
  padding: 1em 0 0 1em;
  border: 1px solid rgb(219, 219, 219);
  flex: 0 0 auto;
  cursor: pointer;
}

</style>
