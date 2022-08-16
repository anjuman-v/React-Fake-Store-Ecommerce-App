import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterComponent from "../components/FilterComponent";
import  fetchData  from "../Redux/products/action";
import {
    Box, 
    Flex,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';


// const IMAGE =
//   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';


function Products(){
  const dispatch = useDispatch()

    const products = useSelector((store) => store.ecommerceData.products)
    console.log(products);
   

   
      useEffect(() => {
        if(products?.length === 0){
            dispatch(fetchData())
        }
    },[dispatch, products?.length]);
    console.log(products);
   
   

   
    return(
       <Box>
           <Stack display={{md:'flex'}} flexDirection={{md:"row"}}>
           <Box>
              <FilterComponent />
           </Box>
           <Box> 
               <Heading as='h3'>Products</Heading>
               <Flex flexWrap="wrap" justifyContent="space-around">
                   {products.map(product => {
                       return (
                        <ProductSimple 
                        key ={product.key} 
                        image={product.image} 
                        title={product.title} 
                        price={product.price} 
                        />
                       );
                   })}
               </Flex>
               <ProductSimple />
           </Box>
           </Stack>
       </Box>
    )
}



 function ProductSimple({image, title, price}) {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
                 <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cntain'}
            src={image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
           {title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
            ₹{price}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
            ₹199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}



export default Products