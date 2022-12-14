import * as types from './actionTypes'
const initialState = {
    products:[],
    currentProduct:{},
    error:'',
    loading:false
}

const productReducer = (state = initialState, action) =>{
    const {type, payload} = action;
    switch(type){
        case types.FETCH_DATA_REQUEST:
            return{
                ...state,
                error:"",
               loading:true

            }

            case types.FETCH_DATA_SUCCESS:
                return{
                    ...state,
                    products:payload,
                    error:"",
                    loading:false

                }

                case types.FETCH_DATA_FAILURE:
                return{
                    ...state,
                    error:payload, 
                    loading:false
                }



                //sinlge product
    
                case types.GET_SINGLE_PRODUCT_REQUEST:
                    return{
                        ...state,
                        error:'',
                       loading:true
        
                    }

                    case types.GET_SINGLE_PRODUCT_SUCCESS:
                        return{
                            ...state,
                            error:"", 
                            currentProduct:payload,
                            loading:false
                        }

        
                    case types.GET_SINGLE_PRODUCT_FAILURE:
                        return{
                            ...state,
                            error:payload,
                            loading:false
        
                        }
        
                        


                default:
                return state;
    }

};

export default productReducer;