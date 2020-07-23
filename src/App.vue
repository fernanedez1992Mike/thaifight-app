<template>
  <div id="App">
    <NavBar />
     <router-view />
     <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components:{
    NavBar,
    Footer
  }
})
export default class App extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#App {
  background: #f0f0f0;
}

</style>
