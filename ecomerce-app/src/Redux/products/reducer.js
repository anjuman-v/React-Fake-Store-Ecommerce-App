import * as types from "./actionTypes";

const initialState={
    products :[],
    currentProduct:{},
    error: "",
   loading : false
}


const reducer = (state = initialState,action)=>{

    const {type,payload} = action;
    switch(type){
        case types.FETCH_DATA_REQUEST:
            return{
                ...state,
                error: "",
                loading :true,
            };

            case types.FETCH_DATA_SUCCESS:
                return{
                    ...state,
                    products:payload,
                    error: "",
                    loading :false,
                }
    
                case types.FETCH_DATA_FAILURE:
                    return{
                        ...state,
                      error: payload,
                        loading :false,
                    }

                    //single product k liye


            case types.GET_SINGLE_PRODUCT_REQUEST:
            return{
                ...state,
                error: "",
                loading :true,
            };

            case types.GET_SINGLE_PRODUCT_SUCCESS:
                return{
                    ...state,
                    error: "",
                    currentProduct:payload,
                    loading :false,
                }
    
                case types.GET_SINGLE_PRODUCT_FAILURE:
                    return{
                        ...state,
                      error: payload,
                        loading :false,
                    }
          




                    //Add To Cart Work Start


            case types.ADD_PRODUCT_CART_REQUEST:
            return{
                ...state,
                error: "",
                loading :true,
            };

            case types.ADD_PRODUCT_CART_SUCCESS:
                return{
                    ...state,
                    error: "",
                    cart : [...state.cart,payload],
                    loading :false,
                }
    
                case types.ADD_PRODUCT_CART_FAILURE:
                    return{
                        ...state,
                      error: payload,
                        loading :false,
                    }
          




                    //Fetch Card Wrk


          case types.FETCH_CART_REQUEST:
            return{
                ...state,
                error: "",
                loading :true,
            };

            case types.FETCH_CART_SUCCESS:
                return{
                    ...state,
                    error: "",
                    cart: [...payload],
                    loading :false,
                }
    
                case types.FETCH_CART_FAILURE:
                    return{
                        ...state,
                      error: payload,
                        loading :false,
                    }
          






                    default:
                        return state;
        

    }

}

export default reducer
