import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, Divider, VStack, SimpleGrid, HStack } from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function UserCreate() {
  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.red.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" label="Nome completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="password" type="password" label="Senha" />
              <Input name="password_check" type="password" label="Confirmação da senha" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="pink">Salvar</Button>
              <Button colorScheme="whiteAlpha">Cancelar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}