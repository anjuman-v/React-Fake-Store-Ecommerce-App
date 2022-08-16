import React, { useEffect } from "react";
import { Box ,Stack} from "@chakra-ui/react";
import { FilterComponent } from "../Components/FilterComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/products/action";
import {Center,useColorModeValue,Heading,Text,Image,Flex } from '@chakra-ui/react';
import ProductCard from "./ProductsCard";
import { useSearchParams } from "react-router-dom";
  


export const Products=()=>{

    const products = useSelector((store)=> store.ecommerceData.products)
    const dispatch = useDispatch()

    const [searchParams] = useSearchParams()



   useEffect(()=>{
       if(products?.length === 0){

        let params ={
            category:searchParams.getAll("category")                // new page bhi whi data k liye
        }
           dispatch(fetchData(params));

       }
   }, [dispatch,products?.length,searchParams])     //new page bhi whi data k liye

   //console.log(products)
  
    return (
        <Box>
        <Stack display={{md:"flex"}} flexDirection={{md:"row"}}>

            <Box minWidth={"15rem"}> <FilterComponent/> </Box>                                                   {/* Filter */}
            



            <Box> 
                <Heading as="h3"> Products</Heading>
         <Flex flexWrap="wrap" justifyContent="space-around"  gap="3"> 
         {products.map((item)=> <ProductCard  key={item.id} {...item}/> )}
         </Flex>
             </Box>                                                  {/*products card */ };

            </Stack>
        </Box>
    )


}



