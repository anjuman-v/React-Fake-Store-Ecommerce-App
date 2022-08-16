import {
    Menu,
    MenuButton,
    MenuList,
    MenuItemOption,
    MenuOptionGroup,
    MenuDivider,
    Box,
    Text,
    Button
  } from '@chakra-ui/react'

import React, { useEffect, useState } from "react";
import { Checkbox, CheckboxGroup, VStack } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import fetchData from '../Redux/products/action'
function FilterComponent(){
    
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams)
    
    const dispatch = useDispatch()

    const [categoryValues, setCategoryValues] = useState([]);
    const categoryHandler = (values) => {
        console.log(values);
        setCategoryValues(values);
    };

    useEffect(() =>{
        if(categoryValues){
            setSearchParams({category: categoryValues},{replace:true})
            let params = {
                category: searchParams.getAll("category"),
            };
            dispatch(fetchData(params));
        }
    },[categoryValues, searchParams, setSearchParams])
    return(
        <Box>
            <Box display={{base:"none", md:"block"}} p="1rem 2rem">
                <Text fontSize="2xl">Filters</Text>
                <Text>Category</Text>
                <CheckboxGroup 
                colorScheme='green' 
                defaultValue={categoryValues} 
                onChange={categoryHandler}
                >

                <VStack alignItems={"baseline"}>
                <Checkbox value="Men's clothing">Men's clothing</Checkbox>
                <Checkbox value="Women's clothing">Women's clothing</Checkbox>
                <Checkbox value="jwelery">jwelery</Checkbox>
                <Checkbox value="clectronics">clectronics</Checkbox>
                <Checkbox value="bages">bages</Checkbox>
             </VStack>
             </CheckboxGroup>
            </Box>

            <Box display={{base: 'block', md: 'none'}} p="0rem 2rem">
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


export default FilterComponent;