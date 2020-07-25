<template>
  <div>
    <b-jumbotron class="homeJumbo">
    <h1 class="jumboHeader">{{username}}</h1>

    <b-button variant="primary" href="#">Do Something</b-button>
    <b-button variant="success" href="#">Do Something Else</b-button>
  </b-jumbotron>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class User extends Vue {
  @Prop() private username!: string;
}
</script>

<style scoped lang="scss">

</style>
