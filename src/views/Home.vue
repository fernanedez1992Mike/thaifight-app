<template>
  <div id="Home">
    <b-jumbotron class="homeJumbo">
    <h1 class="jumboHeader">Muay Thai Blog</h1>

    <hr class="my-4">

    <p>
      It uses utility classes for typography and spacing to space content out within the larger
      container.
    </p>
    <b-button variant="primary" href="#">Do Something</b-button>
    <b-button variant="success" href="#">Do Something Else</b-button>
  </b-jumbotron>

<b-container>
  <MainWrapper />
</b-container>

<br>

<b-container>
  <b-row>
    <b-col sm="5">
      <News />
    </b-col>
  </b-row>
</b-container>
     
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MainWrapper from '@/components/MainWrapper.vue'
import News from '@/components/News.vue'

@Component({
  components:{
    MainWrapper,
    News
  }
})
export default class Home extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#Home {
  .homeJumbo {
    background-image: url('https://images.pexels.com/photos/4651305/pexels-photo-4651305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 65vh;
    .jumboHeader {
      color: red;
    }
  }
}

</style>
