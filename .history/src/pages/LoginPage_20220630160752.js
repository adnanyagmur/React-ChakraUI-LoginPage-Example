import { Container, Checkbox, Link, Grid,Button, GridItem, Center, Heading, Box, Image, SimpleGrid, FormControl, FormLabel, Input, FormErrorMessage, FormHelperText } from "@chakra-ui/react";
import { ExternalLinkIcon,ArrowRightIcon } from '@chakra-ui/icons'
import KysLogo from "../assets/KysLogo.png"


const LoginPage = () => {

    return (
        <Container>
            <Grid>
                <GridItem h='50'></GridItem>
            </Grid>
            <Container bg="red.200" borderRadius={30}>
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
                            <FormLabel color="white" htmlFor='email'>E-posta</FormLabel>
                            <Input id='email' type='email' />

                        </FormControl>
                        <Grid>
                            <GridItem w='100%' h='10'></GridItem>
                        </Grid>
                        <FormControl isRequired>
                            <FormLabel htmlFor='email' color="white">Parola</FormLabel>
                            <Input id='email' type='password' />

                        </FormControl>
                        <Grid>
                            <GridItem>
                                <Checkbox color="white">Beni hatırla</Checkbox>
                            </GridItem>
                        </Grid>
                        <Grid>
                            <GridItem w='100%' h='10'></GridItem>
                        </Grid>
                        <Grid>
                        <Link href='/register' color="white">
                            Üye Ol <ExternalLinkIcon mx='2px' />
                        </Link>
                        </Grid>
                        <Grid>
                            <Link color='white' href='#'>
                               Parolamı unuttum <ExternalLinkIcon mx='2px' />
                            </Link>
                            </Grid>
                            
                            <Button  colorScheme='teal' size='md' >Button  <ArrowRightIcon mx='7px' ></ArrowRightIcon></Button>
                            

                    </Box>

                </SimpleGrid>
                <Grid>
                    <GridItem w='100%' h='10'></GridItem>
                </Grid>
            </Container>

        </Container>
    )
}

export default LoginPage;