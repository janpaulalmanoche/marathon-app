<template>
    <div class="q-pa-md" style="margin-left:24%">

        <div class="card">
    <q-page style="max-width: 800px;margin-top:5px;" >
        <q-input color="lime-11"  @change="this.send" bg-color="green" filled v-model="rfid" label="Scan Rfid" autofocus>
            <template v-slot:prepend>
                <q-icon name="event" />
            </template>
        </q-input>



                <q-input color="purple-12" v-model="first_name" label="Participant First Name" disable>
                    <template v-slot:prepend>
                        <q-icon name="event" />
                    </template>
                </q-input>

        <q-input color="purple-12" v-model="last_name" label="Participant Last Name" disable>
            <template v-slot:prepend>
                <q-icon name="event" />
            </template>
        </q-input>


                <q-input color="purple-12" v-model="par_no" label="Participant No." disable>
                    <template v-slot:prepend>
                        <q-icon name="event" />
                    </template>
                </q-input>



        <q-input color="purple-12" v-model="cat_event" label="Category Event" disable>
            <template v-slot:prepend>
                <q-icon name="event" />
            </template>
        </q-input>


        <q-input color="purple-12" v-model="cat_distance" label="Category Distance Event" disable>
            <template v-slot:prepend>
                <q-icon name="event" />
            </template>
        </q-input>




    </q-page>
        </div>
            </div>
</template>

<script>

    // import {mapState} from 'vuex'
    import axios from 'axios';

    let api = 'http://127.0.0.1:8000' + '/api/';
    // let api = 'https://2525afa1.ngrok.io'+'/api/';
    export default {


        mounted: function () {
            // window.setInterval(() => {
            //     this.get_data(),
            //         this.remove_1hour_reserved_no_show_up()
            // },1000);
            // this.get_data()
        },

        methods: {
            showNotif ($pos,$msg) {
                this.$q.notify({
                    position:$pos,
                    message: $msg,
                    color: 'purple'
                })
            },
            send(){
                // alert('haha')

                        axios.get('http://127.0.0.1:8000/api/send/'+ this.rfid)
                            .then( (response)=>{
                            this.showNotif('top',response.data.place )
                                this.first_name = response.data.data.user.first_name,
                                    this.last_name = response.data.data.user.last_name,
                                    this.par_no = response.data.data.participant_no,
                                    this.cat_event = response.data.data.distance.category.category,
                                    this.cat_distance = response.data.data.distance.distance
                        }).catch((error)=>{
                            this.showNotif('No. not registred!' )
                        })

                this.rfid = ''
            }


        },
        data() {
            return {
                rfid:'',
                first_name: '',
                lat_name:'',
                par_no:'',
                cat_event:'',
                cat_distance:'',

            }
        },


    }
</script>

<style scoped>
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        align-items: start;
        justify-items: center;
        margin:2% 2px;
    }
    .grid img {
        border: 1px solid rgba(0,0,0,0.3);
        box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.3);
        max-width: 30%;
    }
    .grid-item {

        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 20px;
        font-size: 67px;
        text-align: center;
        text-align: center;
        line-height: 80px;
        height: 350px;
        width: 400px;
    }
    #taken{
        background-color:red;

    }
    .span{
        font-size: 25px;
        margin-top: -200px !important;
    }

</style>


<!--ssh -R 80:localhost:8500 ssh.localhost.run-->