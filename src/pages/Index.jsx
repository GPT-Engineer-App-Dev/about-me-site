import { Box, Flex, Heading, Text, VStack, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box
      maxW="container.xl"
      mx="auto"
      px={8}
      py={12}
      minHeight="100vh"
    >
      <VStack spacing={10} align="stretch">
        <Box as="section" id="about">
          <Heading as="h1" size="2xl" mb={4}>About Me</Heading>
          <Text fontSize="xl">
            Hello! I'm a passionate software developer with a knack for building engaging and efficient applications.
          </Text>
        </Box>
        <Box as="section" id="projects">
          <Heading as="h2" size="xl" mb={4}>Projects</Heading>
          <VStack spacing={5}>
            <Text as="h3" fontSize="lg">Project 1: Innovative Web App</Text>
            <Text>Details about this project and what it accomplishes.</Text>
            <Text as="h3" fontSize="lg">Project 2: Mobile Solution</Text>
            <Text>Insight into the mobile app developed to solve common issues.</Text>
          </VStack>
        </Box>
        <Box as="section" id="contact">
          <Heading as="h2" size="xl" mb={4}>Contact Information</Heading>
          <VStack spacing={3}>
            <Link href="https://github.com" isExternal>
              <Icon as={FaGithub} w={6} h={6} mr={2} />
              Github
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <Icon as={FaLinkedin} w={6} h={6} mr={2} />
              LinkedIn
            </Link>
            <Link href="mailto:example@example.com">
              <Icon as={FaEnvelope} w={6} h={6} mr={2} />
              Email Me
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;