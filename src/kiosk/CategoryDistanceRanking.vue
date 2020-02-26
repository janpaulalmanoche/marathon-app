<template>
    <div class="q-pa-md">
        <q-card class="my-card">
            <q-card-section>
                <!--{{this.$store.state.marathon.evet_cat_dis_fee_id}}-->
                <div class="text-h6">Ranking : {{category_name}}</div>
                <div class="text-h7">Distance : {{distance}} km</div>
                <!--<div class="text-subtitle2">Category Distance</div>-->
            </q-card-section>

            <q-markup-table>
                <thead>
                <tr>

                    <th class="text-center">Place</th>
                    <th class="text-center">Participant Name</th>
                    <th class="text-center">Time Finished</th>
                    <th class="text-center">No.</th>

                </tr>
                </thead>
                <tbody>
                <!--{{events}}-->
                <tr v-for="(r , index ) in ranking" :key="r.id">
                    <!--<td class="text-center">{{cat.category[0].category}}</td>-->
                    <td class="text-center">{{index + 1}}</td>
                    <td class="text-center">
                        {{r.user_w.first_name}}
                        {{r.user_w.last_name}}
                    </td>
                    <td class="text-center">
                        {{r.finish_time}}
                    </td>
                    <td class="text-center">
                        {{r.participant_no}}
                    </td>
                    <!--<td class="text-center">Select Distance's</td>-->
                </tr>



                </tbody>
            </q-markup-table>
        </q-card>
    </div>
</template>


<script>

    import {mapState} from 'vuex'
    import axios from 'axios';
    // import Vuex from 'vuex'

    
   let api =  'http://192.168.1.46' + '/api';
    export default {
        // name: 'MyLayout',
        mounted: function () {
            window.setInterval(() => {
                this.req()

            },2000);
            // this.req()
        },
        data () {
            return {
                leftDrawerOpen: false
            }
        },


        methods: {

            req(){
        // alert('haha')
                axios.get(api + '/ranking/'+ this.$store.state.marathon.evet_cat_dis_fee_id)
                    .then( (response) => {
                            // alert('hsha')
                        this.$store.dispatch('SET_RANKING_BY_EVENT_CAT_DIS__FEE_ID_A', response.data)
                    })
            },

            set_id($id){
                alert('haha')
                    this.$store.dispatch('SET_EVENT_ID_A',$id)
            }

        },

        computed:mapState({
            category_name : state => state.marathon.cat_name,
            distance : state => state.marathon.cat_distance,
            ranking : state => state.marathon.ranking_by_evet_cat_dis_fee_id,
            id : state => state.marathon.evet_cat_dis_fee_id
        })
    }
</script>
