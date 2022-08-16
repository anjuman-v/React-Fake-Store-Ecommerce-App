import { Box } from "@chakra-ui/react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../Redux/products/action";
//import { fetchCart } from "../Redux/products/action";
export const CartCounter=()=>{
   const cart = useSelector((store=> store.ecommerceData.cart))       
    const dispatch = useDispatch();
      useEffect(()=>{
     if(cart?.length === 0){
         dispatch(fetchCart())
        }
    },[cart?.length,dispatch])
  return(
        <Box 
         textColor="white"
         backgroundColor="black"
         borderRadius="50%"
         width="25px"
         height="25px"
         textAlign="center"
         position="absolute"
         paddingBottom="20px"
         right="0"
         top="0"
         fontSize="18px">
                 {cart?.length ? cart.length : 0}
        </Box>
    )


}