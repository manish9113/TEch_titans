import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import AdminLogin from "./AdminLogin";


const AdminHomepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        as="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          as="b"
          fontSize="30px"
          fontFamily="work sans"
          color="black"
          d="flex"
          justifyContent="center"
        >
          AluminiX
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="100%">AdminLogin</Tab>
            
          </TabList>
          <TabPanels>
            <TabPanel>
              <AdminLogin />
            </TabPanel>
            
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default AdminHomepage;
