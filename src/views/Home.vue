<template>
  <div id="Home">
    <b-jumbotron class="homeJumbo">
    <h1 class="jumboHeader"></h1>

    <hr class="my-4">

    <p>
    </p>
    <b-button variant="primary" href="#">Do Something</b-button>
    <b-button variant="success" href="#">Do Something Else</b-button>
  </b-jumbotron>

<b-container>
  
  <MainWrapper/>
  <h2>{{thaiMessage="hello thailand"}}</h2>
  <p>{{thaiNews="news"}}</p>
</b-container>

<br>

<b-container>
  <b-row>
    <b-col md="9">
      <News />
    </b-col>
    <b-col md="3">
      <PopularPosts />
    </b-col>
  </b-row>
</b-container>
     
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MainWrapper from '@/components/MainWrapper.vue'
import News from '@/components/News.vue'
import PopularPosts from '@/components/PopularPosts.vue'

@Component({
  components:{
    MainWrapper,
    News,
    PopularPosts
  }
})
export default class Home extends Vue {
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
