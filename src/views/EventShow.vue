<template>
  <div class="eventShow">
      <router-link class="event-link" :to="{ name: 'event-show', params: { id: data.id } }"></router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class HorizontalCard extends Vue {
  //@Prop() private post!: string;
  @Prop() readonly id!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
