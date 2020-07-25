<template>
    <div class="popPosts">
        <aritcle class="popPosts" v-for="pop in popularPosts" :key="pop.id">
            <img :src="pop.img" class="popImg">
            <h1 class="popHeader">{{pop.title}}</h1>
            <p class="blurb">{{pop.blurb}}</p>
          </aritcle>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
//import apiClient from '@/TS/axios'

@Component
export default class EventList extends Vue {
  @Prop() popularPost!: object;

  popularPosts = [
    {id:1, title:'thaiPost1', img:'https://www.muaythaicitizen.com/wp-content/uploads/2019/03/buakaw-all-star-fight.jpg', blurb:'Thousands of local and foreign fans showed up at the home of the Royal King’s Guard 2nd Cavalry Division for what is the biggest All Star Fight event to date. The inaugural World Soldier marked the promotion’s first collaboration with the Royal Thai Army, and was broadcasted live on Channel 3 and Fox Sports.'},

    {id:2, title:'thaiPost2', img:'https://www.muaythaicitizen.com/wp-content/uploads/2019/03/superbon-returns.jpg', blurb:'It’s a call of duty and the soldiers have responded! All Star Fight: World Soldier has assembled some of today’s most recognized Muay Thai and kickboxing world champions from the Royal Thai Army. These men of honor will come together for a night of explosive action in Bangkok at the home of the Royal King’s Guard 2nd Cavalry Division.'},

    {id:3, title:'thaiPost3', img:'https://www.muaythaicitizen.com/wp-content/uploads/2019/03/superbon-ko-win.jpg', blurb:'Eight matchups have already been confirmed for the 9 March show. As highlighted in an earlier press release, global fight superstar, Buakaw Banchamek will star in the main event bout against Russian kickboxing champion, Artem Pashporin. In another highly-anticipated match, Superbon Banchamek will join his mentor on the show and take on European Muay Thai champion, Luis Passos.'}
    ]
}

</script>

<style scoped lang="scss">

.popPosts {
    display: inline-block;
    background: #d1d1d1;
    margin:auto;

    .popPosts{
        height: 350px;
        overflow-y: hidden;
        padding: 15px;
        border: 2px solid #d1d1d1; 
    }
    .popImg {
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: center;
    }
    .popHeader{
        font-size: 18pt;
        font-variant-caps: all-small-caps;
    }
    .blurb{
        font-size: 10pt;
        height: 100px;
    }
}

</style>