import { Flex } from "@chakra-ui/react"
import {
    Menu,
    Button,
    MenuButton,
    MenuList,
    MenuItem,
    Avatar

} from '@chakra-ui/react'

export const Profile = () => {
    return (
        <Flex>
            <Menu>
                <MenuButton
                    as={Button}
                    rounded="full"
                    variant="link"
                    cursor="pointer"
                    minW={0}

                >
                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                </MenuButton>
                <MenuList>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>Log out</MenuItem>
                    <MenuItem>Cart</MenuItem>
                  
                </MenuList>
            </Menu>
        </Flex>
    )
}