import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box
        mr="4"
        textAlign="right"
      >
        <Text>Johnny Wevany</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >wevanyjohnny@gmail.com</Text>
      </Box>

      <Avatar
        size="md"
        name="Johnny Wevany"
        src="https://github.com/wevanyjohnny1.png"
      />
    </Flex>
  )
}