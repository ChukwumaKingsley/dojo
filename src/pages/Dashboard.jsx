import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, HStack, Heading, SimpleGrid, Text, background } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const tasks = useLoaderData()
  
  return (
    <SimpleGrid spacing={10} minChildWidth={"300px"}>
      {tasks && tasks.map(task => (
        <Card key={task.id} borderTop={"8px"} borderColor={"purple.400"} background={"white"}>
          <CardHeader>
            <Flex gap={5}>
              <Avatar src={task.img} />
              <Box>
                <Heading as={'h3'} size={'sm'}>{task.title}</Heading>
                <Text>by {task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody color='gray.500'>
            <Text>{task.description}</Text>
          </CardBody>
          <Divider borderColor={'gray.200'}/>
          <CardFooter>
            <HStack>
              <Button variant={'ghost'} leftIcon={<ViewIcon />}>Watch</Button>
              <Button variant={'ghost'} leftIcon={<EditIcon />}>Comment</Button>
            </HStack>
          </CardFooter>
        </Card>
      ))}
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
