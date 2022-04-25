import { Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { ICard } from '../@types/card';

interface ITaskCard {
    task: ICard
}

export const TaskCard = ({task}: ITaskCard) => {
    return (
        <Flex bgColor={'gray.300'} m={'7'} p={'5'} borderRadius={'2xl'} textAlign={'center'} flexDir={'column'}>
            <Flex w={'full'} justify={'space-between'}>
                <Flex flexDir={'column'}>
                    <Heading>
                        {task.name}
                    </Heading>
                </Flex>
                <Flex align={'center'}>
                    <Text fontWeight={'bold'} fontSize={'2xl'} m={'3'}>
                        {task.tag}
                    </Text>
                    <Text fontWeight={'bold'} fontSize={'2xl'} m={'3'}>
                        {task.status}
                    </Text>
                </Flex>
            </Flex>
            <Divider borderColor={'#4A5568'} opacity={1} orientation={'horizontal'} />
            <Flex w={'full'} my={'3'}>
                <Text>
                    {task.resume}
                </Text>
            </Flex>
        </Flex>
    );
};