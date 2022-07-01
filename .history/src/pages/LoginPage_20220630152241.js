import { Container,Link,Ex, Grid, GridItem, Center, Heading, Box, Image, SimpleGrid, FormControl, FormLabel, Input, FormErrorMessage, FormHelperText } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import KysLogo from "../assets/KysLogo.png"


const LoginPage = () => {

    return (
        
        <Container bg="purple.300">
            <SimpleGrid columns={1}>
                <Center>
                    <SimpleGrid>
                        <Box >
                            <Image src={KysLogo} alt='KysLogo' />
                        </Box>

                        <Box >
                            <Center>
                                <Heading as='h2' size='lg'>
                                    KURUMSAL YÖNETİM SİSTEMİ
                                </Heading>
                            </Center>
                        </Box>
                        <Box >
                            <Center>
                                <Heading as='h2' size='sm'>
                                    Türkiye Teknoloji Takımı
                                </Heading>
                            </Center>
                        </Box>
                        <Grid>
                            <GridItem w='100%' h='10'></GridItem>
                            <GridItem w='100%' h='10'></GridItem>
                        </Grid>
                    </SimpleGrid>
                </Center>
                <Box>
                    <FormControl isRequired>
                        <FormLabel htmlFor='email'>E-posta</FormLabel>
                        <Input id='email' type='email' />

                    </FormControl>
                    <Grid>
                        <GridItem w='100%' h='10'></GridItem>
                    </Grid>
                    <FormControl isRequired>
                        <FormLabel htmlFor='email'>Parola</FormLabel>
                        <Input id='email' type='password' />

                    </FormControl>
                    <Grid>
                        <GridItem w='100%' h='10'></GridItem>
                    </Grid>
                    <Link href='https://chakra-ui.com' isExternal>
  Chakra Design system <ExternalLinkIcon mx='2px' />
</Link>

                </Box>

            </SimpleGrid>
        </Container>
    )
}

export default LoginPage;