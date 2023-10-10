import { UnlockIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Heading, Spacer, Text, useToast } from "@chakra-ui/react";

export default function Navbar() {

  const toast = useToast()

  const showToast = () => {
    toast({
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon />,
    })
  }

  return (
    <Flex as='nav' p={10} alignItems={"center"} marginBottom={"40px"}>
        <Heading as={"h1"}>Dojo Stuffs</Heading>
        <Spacer />
        <HStack spacing={"20px"}>
            <Box bg={'gray'} p={"10px"} >M</Box>
            <Text>stupidstuff@crazy.mad</Text>
            <Button colorScheme="purple" onClick={showToast}>Logout</Button>
        </HStack>
    </Flex>
  )
}

    // <Flex bg={"gray.200"} justifyContent={"space-between"} wrap={"wrap"} gap={2}>
    //     <Box w="150px" h={50} bg={"red"} >1</Box>
    //     <Box w="150px" h={50} flexGrow={2} bg={"blue"} >2</Box>
    //     <Box w="150px" h={50} flexGrow={1} bg={"green"} >3</Box>
    //     <Box w="150px" h={50} bg={"yellow"} >4</Box>
    // </Flex>