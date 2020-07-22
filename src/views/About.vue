<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Github test</p>
    <p>{{test}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data(){
    return {
      msg: 'test'
    }
  }
})
</script>