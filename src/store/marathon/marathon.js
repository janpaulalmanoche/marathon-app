export const state = {
    event_id:'',
    events:
        [
            {
                "id":'',
                "title":"",
                "organizer":"",
                "date":"",
                "status":'',
                "created_at":"",
                "updated_at":""
            }
        ],

    EventCategoryDistanceFee:[{"id":'',"event_id":'',"category_id":'',"created_at":"","updated_at":"",
        "event":{"id":'',"title":"","organizer":"","date":"","status":'',"created_at":"","updated_at":""},
        "category":[{"id":'',"category":"","start_time":'',"created_at":"","updated_at":""}]}],

        //not in use anymore
    cat_id:'',

    evet_cat_dis_fee_id : '',

    ranking_by_evet_cat_dis_fee_id:[{"id":'',"event_category_distance_fees_id":'',
        "category_distances_id":'',"fee":'',"event_id":'',"participant_no":"","user_id":'',"created_at":"",
        "updated_at":"","category_distance_w":{"id":'',"category_id":'',
            "distance":'',"measurement":"","created_at":"","updated_at":""}
            ,"user_w":{"id":'',"first_name":"","middle_name":"","last_name":"","email":"","role_id":"","type_id":"","gender":null,
            "phone_no":"","email_verified_at":"","created_at":"","updated_at":""}}],

        cat_name:'',
        cat_distance:''
    //sate ending tag
}



export const mutations = {
    SET_EVENT_ID(state, $params) {
        state.event_id = $params
       },

       SET_EVENTS(state,$params){
        state.events = $params
       },


    //not in use
    SET_EventCategoryDistanceFee(state,$param){
        state.EventCategoryDistanceFee = $param
    },
    //not in use
    SET_CAT_ID(state,$param){
        state.cat_id = $param
    },

    SET_EVENT_CAT_DIS_FEE_ID(state,$param){
        state.evet_cat_dis_fee_id = $param
    },

    SET_RANKING_BY_EVENT_CAT_DIS__FEE_ID(state,$param){
        state.ranking_by_evet_cat_dis_fee_id = $param
    },

    SET_CAT_DISTANCE(state,$param){
        state.cat_distance = $param
    },

    SET_CAT_NAME(state,$param){
        state.cat_name = $param
    },

}

export const actions = {

    SET_EVENT_ID_A({commit},$param){
        commit('SET_EVENT_ID',$param)
    },
    SET_EVENTS_A({commit},$param){
        commit('SET_EVENTS',$param)
    },


    SET_EventCategoryDistanceFee_A({commit},$param){
        commit('SET_EventCategoryDistanceFee',$param)
    },

    SET_EVENT_CAT_DIS_FEE_ID_A({commit},$param){
        commit('SET_EVENT_CAT_DIS_FEE_ID',$param)
    },

    SET_RANKING_BY_EVENT_CAT_DIS__FEE_ID_A({commit},$param){
        commit('SET_RANKING_BY_EVENT_CAT_DIS__FEE_ID',$param)
    },


    SET_CAT_NAME_A({commit},$param){
        commit('SET_CAT_NAME',$param)
    },
    SET_CAT_DISTANCE_A({commit},$param){
        commit('SET_CAT_DISTANCE',$param)
    }







}