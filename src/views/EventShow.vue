<template>
  <div class="eventShow">
      <h1>Show event {{event.title}}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class HorizontalCard extends Vue {
  @Prop() private post!: string;
  @Prop() private id!: number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
