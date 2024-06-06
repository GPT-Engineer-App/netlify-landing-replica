import { 
  Box, 
  Button, 
  Container, 
  Flex, 
  Heading, 
  HStack, 
  Image, 
  SimpleGrid, 
  Text, 
  VStack 
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="white" boxShadow="sm" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Netlify_logo_%282%29.svg/1200px-Netlify_logo_%282%29.svg.png" alt="Netlify Logo" boxSize="50px" />
            <HStack spacing={8}>
              <Text>Platform</Text>
              <Text>Solutions</Text>
              <Text>Integrations</Text>
              <Text>Start Building</Text>
              <Text>Docs</Text>
              <Text>Pricing</Text>
              <Text>Contact</Text>
              <Text>Log in</Text>
              <Button colorScheme="blue">Sign up</Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box bg="blue.800" color="white" py={20} textAlign="center">
        <Container maxW="container.md">
          <Heading as="h1" size="2xl" mb={4}>Connect everything. Build anything.</Heading>
          <Text fontSize="xl" mb={8}>Netlify is the essential platform for the delivery of exceptional and dynamic web experiences, without limitations.</Text>
          <HStack spacing={4} justify="center">
            <Button colorScheme="teal" size="lg">Deploy to Netlify</Button>
            <Button colorScheme="whiteAlpha" size="lg">Request demo</Button>
          </HStack>
        </Container>
      </Box>

      {/* Video Section */}
      <Box py={20} textAlign="center">
        <Container maxW="container.md">
          <Box position="relative" display="inline-block">
            <Image src="https://via.placeholder.com/800x450" alt="Video Thumbnail" />
            <Button 
              position="absolute" 
              top="50%" 
              left="50%" 
              transform="translate(-50%, -50%)" 
              colorScheme="teal" 
              size="lg" 
              borderRadius="full"
            >
              <FaPlay />
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.xl">
          <Heading as="h2" size="xl" mb={8} textAlign="center">Netlify Composable Web Platform</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box bg="white" p={6} boxShadow="md" borderRadius="md">
              <Heading as="h3" size="md" mb={4}>Deploy faster</Heading>
              <Text>Netlify Core is a frontend cloud solution for developers to build and deploy future-proof digital solutions with modern, composable tooling that works with all modern frameworks.</Text>
            </Box>
            <Box bg="white" p={6} boxShadow="md" borderRadius="md">
              <Heading as="h3" size="md" mb={4}>Unify all content</Heading>
              <Text>Netlify Connect is a data unification layer that gives web teams the freedom to create world-class websites, online stores, and applications with data from any existing or new content source.</Text>
            </Box>
            <Box bg="white" p={6} boxShadow="md" borderRadius="md">
              <Heading as="h3" size="md" mb={4}>Click, edit, publish</Heading>
              <Text>Netlify Create gives digital teams the freedom to autonomously perform content and website updates faster than ever before with an intuitive visual editor.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Enterprises Section */}
      <Box py={20} textAlign="center">
        <Container maxW="container.md">
          <Heading as="h2" size="xl" mb={8}>Enterprises run on Netlify</Heading>
          <HStack spacing={8} justify="center">
            <Image src="https://via.placeholder.com/100x50" alt="Company Logo" />
            <Image src="https://via.placeholder.com/100x50" alt="Company Logo" />
            <Image src="https://via.placeholder.com/100x50" alt="Company Logo" />
            <Image src="https://via.placeholder.com/100x50" alt="Company Logo" />
            <Image src="https://via.placeholder.com/100x50" alt="Company Logo" />
          </HStack>
        </Container>
      </Box>

      {/* Edge Function Section */}
      <Box py={20} bg="blue.800" color="white">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading as="h2" size="xl" mb={4}>Ship your edge function in just a few clicks</Heading>
              <Text mb={8}>Spin up a new project, or connect to an existing, and explore rollbacks, CI/CD, edge functions, collaborative deploy previews, and more.</Text>
              <HStack spacing={4}>
                <Button colorScheme="teal">Read the docs</Button>
                <Button colorScheme="whiteAlpha">Developer Hub</Button>
              </HStack>
            </Box>
            <Box bg="gray.900" p={6} borderRadius="md">
              <Text as="pre" fontSize="sm" whiteSpace="pre-wrap">
                {`export function CartMain({layout, cart}) {
  const linesCount = Boolean(cart?.linesCount)
  const withDiscount = cart?.discountCodes?.filter(code => code)
  return (
    <div className="cart-main ${linesCount ? '' : 'hidden'}">
      <CartEmpty hidden={linesCount} />
    </div>
  )
}`}
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Customer Story Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Image src="https://via.placeholder.com/150x50" alt="Mammut Logo" mb={4} />
              <Heading as="h3" size="lg" mb={4}>Mammut means quality - in brand and in technology</Heading>
              <Text>Mammut came to Netlify because they needed a performant, interoperable Composable Web Platform that could deliver a best-in-class digital brand experience for their customers. They needed a partner that could keep their site reliable and performant during peak retail season and unexpected traffic spikes.</Text>
              <Button colorScheme="teal" mt={4}>View the story</Button>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={4}>Customer Story</Heading>
              <Text>Increase in developer productivity</Text>
              <Text>Increase in site reliability</Text>
              <Text>Quality on par with extremely high standards</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box py={20} bg="gray.900" color="white">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 5 }} spacing={10}>
            <Box>
              <Heading as="h4" size="md" mb={4}>Why Netlify?</Heading>
              <Text>Customers</Text>
              <Text>Composable Web Platform</Text>
              <Text>Security</Text>
              <Text>Agency Partner Program</Text>
              <Text>Technology Partner Program</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>Products</Heading>
              <Text>Composable Web Platform</Text>
              <Text>Netlify Connect</Text>
              <Text>Netlify Core</Text>
              <Text>Netlify Create</Text>
              <Text>Netlify SDK</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>Explore</Heading>
              <Text>Docs</Text>
              <Text>Integrations</Text>
              <Text>Jamstack Book</Text>
              <Text>Community</Text>
              <Text>Resources & Guides</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>Company</Heading>
              <Text>Blog</Text>
              <Text>About</Text>
              <Text>Careers</Text>
              <Text>Compose Conference</Text>
              <Text>Press</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>Contact Us</Heading>
              <Text>Sales</Text>
              <Text>Support</Text>
              <Text>Status</Text>
              <Text>Forums</Text>
              <Text>Hire an Agency</Text>
            </Box>
          </SimpleGrid>
          <Box mt={10} textAlign="center">
            <Text mb={4}>Stay up to date with Netlify news</Text>
            <HStack justify="center">
              <input type="email" placeholder="Enter your email" style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
              <Button colorScheme="teal">Subscribe</Button>
            </HStack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;