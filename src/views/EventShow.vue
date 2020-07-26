<template>
  <div>
    <b-container>
        <b-row>
            <b-col>
                <div id="eventShow">
                    <h2>{{data.title}}</h2>
                    <p>{{data.body}}</p>
                    <span> Post Id: {{data.id}}</span>
                </div>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import apiClient from '@/TS/axios'

@Component({
    props: ['id']
})

export default class EventList extends Vue {
data = []
    mounted(){
        apiClient.getPostId(this.id)
        .then (res => {this.data = res.data})
        .catch (error => console.log('error logged', error.responce))
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

#eventShow {
  background-color: #0f0f0f;
  color: #f0f0f0;
  width: 95%;
  padding: 1rem;
  margin: 15px;
}

</style>
