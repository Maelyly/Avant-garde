import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Menu, MenuButton, Button, MenuList, Select, MenuItem, MenuDivider } from '@chakra-ui/react';

interface IFilterProps{
    setItem: (e:string) => void,
    filtrar: () => void
}

export const Filter = (props:IFilterProps) => {

    return (
        <Flex
        flexDir={'row'}
        justify={'right'}
        h={'30px'}
        w={'60%'}
        bg={'gray.600'}
        >
            <Menu autoSelect={false}>
                <MenuButton bg={'green.300'} h={'30px'} as={Button} rightIcon={<HamburgerIcon/>}>
                    Filter Tasks
                </MenuButton>
                <MenuList bg={'gray.200'}>
                    <Select variant={'outline'} placeholder='All Tasks' onChange={(e:any) => props.setItem(e.target.value)}>
                        <option value='Work' > Work </option>
                        <option value='Study' > Studies </option>
                        <option value='SocialLife' > Social </option>
                        <option value='Health' > Health </option>
                    </Select>
                    <MenuDivider/>
                    <MenuItem as={Button} colorScheme={'white'} variant={'outline'} w={'100%'} onClick={props.filtrar}>Filter</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
};