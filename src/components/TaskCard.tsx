import { Divider, Flex, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import { ICard } from '../@types/card';

interface ITaskCard {
    task: ICard
}

export const TaskCard = ({task}: ITaskCard) => {
    return (
        <LinkBox transition={'0.1s linear'} _hover={{
            filter: 'brightness(80%)'
        }}>
            <Flex bgColor={'gray.300'} m={'7'} p={'5'} borderRadius={'2xl'} textAlign={'center'} flexDir={'column'}>
                <Flex w={'full'} justify={'space-between'}>
                    <Flex flexDir={'column'}>
                        <LinkOverlay href={`/edit/${task.id}`}>
                            <Heading>
                                {task.name}
                            </Heading>
                        </LinkOverlay>
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
        </LinkBox>
    );
};