import React, { useState ,useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import { Box ,Text,VStack,Checkbox,CheckboxGroup,  Menu,Button,
    MenuButton,
    MenuList,
    MenuItemOption,
    MenuOptionGroup,
    MenuDivider,
  } from "@chakra-ui/react";
  import { fetchData } from "../Redux/products/action";
  import { useDispatch } from "react-redux";
  
  


export const FilterComponent=()=>{

const [searchParams,setSearchParams] = useSearchParams()                                  

    const [categoryValues,SetCategoryValues] = useState(searchParams.getAll("category") ||[])    

    const dispatch = useDispatch()

    const categoryHandler=(values)=>{
        console.log(values)
        SetCategoryValues(values);

    }


    useEffect(()=>{
      if(categoryValues){
        setSearchParams({category:categoryValues});

        let params= {
          category:searchParams.getAll('category')
        }
          dispatch(fetchData(params));

        

      }
    },[categoryValues,searchParams,dispatch,setSearchParams])

    return(
        <Box>
            <Box display={{base : 'none', md:'block'}} p="1rem 2rem"> 
            <Text fontSize="2xl">Filters</Text>
            <Text>Category</Text>
              
<CheckboxGroup colorScheme='green' 
defaultValue={categoryValues}
onChange={categoryHandler}

>

  <VStack alignItems={"baseline"}  >
    <Checkbox value="men's clothing">Men's cloathing</Checkbox>
    <Checkbox value="women's clothing">Women's cloathing</Checkbox>
    <Checkbox value="jewelery">Jewelery</Checkbox>
    <Checkbox value='electronics'>Electronics</Checkbox>
    <Checkbox value="bags">Bags</Checkbox>

  </VStack>
</CheckboxGroup>
            </Box>



 {/* Menu Box Start */}

 <Box display={{base:"block",md:"none"}} p="0rem, 2rem">
    <Menu closeOnSelect={false}>
  <MenuButton as={Button} colorScheme='blue'>
    MenuItem
  </MenuButton>
  <MenuList minWidth='240px'>
    <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
      <MenuItemOption value='asc'>Ascending</MenuItemOption>
      <MenuItemOption value='desc'>Descending</MenuItemOption>
    </MenuOptionGroup>
    <MenuDivider />
    <MenuOptionGroup title='Country' type='checkbox'>
      <MenuItemOption value='email'>Email</MenuItemOption>
      <MenuItemOption value='phone'>Phone</MenuItemOption>
      <MenuItemOption value='country'>Country</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu>
</Box>


        </Box>
    )
}