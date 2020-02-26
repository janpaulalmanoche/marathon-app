<template>
    <div class="q-pa-md">
        <q-card class="my-card">
            <q-card-section>
                <div class="text-h6">Event Today</div>
                <!--<div class="text-subtitle2">Category Distance</div>-->
            </q-card-section>

            <q-markup-table>
                <thead>
                <tr>
                    <!--<th class="text-center">Event Name</th>-->
                    <th class="text-center">Title</th>
                    <th class="text-center">Host</th>
                    <th class="text-center">Action</th>
                    <!--<th class="text-right">Fat (g)</th>-->
                    <!--<th class="text-right">Carbs (g)</th>-->
                    <!--<th class="text-right">Protein (g)</th>-->
                    <!--<th class="text-right">Sodium (mg)</th>-->
                    <!--{{events}}-->
                </tr>
                </thead>
                <tbody>
                <!--{{events}}-->
                <tr v-for="event in events" :key="event.id">
                    <!--<td class="text-center">{{event.id}}</td>-->
                    <td class="text-center">{{event.title}}</td>
                    <td class="text-center">{{event.organizer}}</td>
                    <td class="text-center" @click="set_id(event.id)">
                              Select
                     </td>
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
        beforeMount(){
            // alert('jaja')
            axios.get(api + '/event-today')
                .then( (response)=>{

                    this.$store.dispatch('SET_EVENTS_A',response.data)
                })
    },
        data () {
            return {
                leftDrawerOpen: false
            }
        },

        computed:mapState({
            events: state => state.marathon.events,
            event_id: state => state.marathon.event_id
        }),
        methods: {
            set_id($id){
                // alert('haha')
                    this.$store.dispatch('SET_EVENT_ID_A',$id)


                axios.get(api + '/event-dis-cat-fee/'+ this.event_id)
                    .then((response)=>{
                        // console.log(response.data)
                        this.$store.dispatch('SET_EventCategoryDistanceFee_A',response.data)
                    })

                this.$router.push('/cat-event-distance-fee')
            }

        }
    }
</script>
