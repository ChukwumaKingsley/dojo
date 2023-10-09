import { Box, SimpleGrid, Text } from "@chakra-ui/react";

export default function Dashboard() {

  
  return (
    <SimpleGrid p="10px" columns={4} spacing={10} minChildWidth={"250px"}>
      <Box bg={"white"} height={"200px"} border={"1px solid"}>
        <Text color={{base: 'purple', md: 'green', lg: 'yellow'}}>Hello</Text>
      </Box>
      <Box bg={"white"} height={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} height={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} height={"200px"} border={"1px solid"}></Box>

      <Box bg={"white"} height={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} height={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} height={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} height={"200px"} border={"1px solid"}></Box>

      <Box bg={"white"} height={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} height={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} height={"200px"} border={"1px solid"}></Box>
      <Box bg={"white"} height={"200px"} border={"1px solid"}></Box>
    </SimpleGrid>
    )
  }


  // const boxStyles = {
  //   p: "10px",
  //   bg: "purple.400",
  //   color: "white",
  //   textAlign: "right",
  //   m: "10px",
  //   filter: "blur(1px)",
  //   ':hover': {
  //     color: "black",
  //     bg: "blue.200"
  //   }
  // }
  // <Container as={"section"} maxWidth={"90%"}>
  //   <Heading my="30px" p="10px">There are some bosses heehehe</Heading>
      //   <Text marginLeft={"30px"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus inventore error recusandae at molestias nisi necessitatibus perferendis impedit praesentium eius.</Text>
      //   <Text marginLeft={"20px"} color={"blue.800"} fontWeight={"bold"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus inventore error recusandae at molestias nisi necessitatibus perferendis impedit praesentium eius.</Text>
        
      //   <Box bg={"#323567"} margin={"20px"} padding={10}>
      //     <Text color={"White"}>Helaba na box</Text>
      //   </Box>
      //   <Box sx={boxStyles}>
      //     Hello, Bastards
      //   </Box>
      // </Container>
