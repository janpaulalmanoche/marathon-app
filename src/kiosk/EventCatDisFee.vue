<template>
    <div class="q-pa-md">
        <q-card class="my-card">
            <q-card-section>
                <div class="text-h6">Category Distance's Events List </div>
                <!--<div class="text-subtitle2">Category Distance</div>-->
            </q-card-section>

            <q-markup-table>
                <thead>
                <tr>

                    <th class="text-center">Distance</th>
                    <th class="text-center">Category</th>
                    <th class="text-center">VIew Live Ranking's</th>

                </tr>
                </thead>
                <tbody>
                <!--{{events}}-->
                <tr v-for="cat in category" :key="cat.id">
                    <td class="text-center">{{cat.category_distance.distance }} {{cat.category_distance.measurement }}</td>
                    <td class="text-center">{{cat.category_distance.category.category }}</td>
                    <td class="text-center"
                        @click="set_event_cat_dis_fee_id(cat.id ,
                        cat.category_distance.category.category,
                        cat.category_distance.distance)
                        "> Select</td>
                    <!--<td class="text-center" @click="cat_id(cat.category[0].id)">Select Distance's</td>-->
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
        afterCreate(){
            // alert('jaja')
            // axios.get( api + '/event-cat/'+ event_id)
                // .then( (response)=>{
                //     console.log(response.data)
                //     this.$store.dispatch('SET_EVENTS_A',response.data)
                // })
    },
        data () {
            return {
                leftDrawerOpen: false
            }
        },

        computed:mapState({
            category: state => state.marathon.EventCategoryDistanceFee
        }),
        methods: {
            set_event_cat_dis_fee_id($id , $cat_name ,$distance){
                // alert('haha')
                //     this.$store.dispatch('SET_EVENT_CAT_DIS_FEE_ID_A',$id)
                axios.get(api + '/ranking/'+ $id)
                    .then( (response) =>{

                        this.$store.dispatch('SET_RANKING_BY_EVENT_CAT_DIS__FEE_ID_A',response.data)
                        this.$router.push('category-distance-ranking')
                        this.$store.dispatch('SET_EVENT_CAT_DIS_FEE_ID_A',$id)
                        this.$store.dispatch('SET_CAT_NAME_A',$cat_name)
                        this.$store.dispatch('SET_CAT_DISTANCE_A',$distance)
                    })


            }

        }
    }
</script>
