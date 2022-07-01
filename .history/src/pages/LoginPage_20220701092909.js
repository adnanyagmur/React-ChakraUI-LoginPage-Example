import { Container, Checkbox, Link, Grid,
     Button, GridItem, Center, Heading, Box,
    Image,Switch, SimpleGrid, FormControl,
    FormLabel, Input, Wrap, WrapItem, Avatar} from "@chakra-ui/react";
import { ExternalLinkIcon, ArrowRightIcon } from '@chakra-ui/icons'
import KysLogo from "../assets/KysLogo.png"


const LoginPage = () => {

    return (
        <Container>
            <Grid>
                <GridItem h='50'></GridItem>
            </Grid>
            <Container bg="" borderRadius={30}>
                <SimpleGrid columns={1}>
                    <Center>
                        <SimpleGrid>
                            <Box >
                               <Wrap>
                                <Center>
                                <WrapItem>
                                    <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo'></Avatar>
                                </WrapItem>
                                </Center>
                               </Wrap>
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
                                <GridItem w='100%' h='7'></GridItem>
                                
                            </Grid>
                        </SimpleGrid>
                    </Center>
                    <Box>
                    <FormControl isRequipurple>
                            <FormLabel color="black" htmlFor='email'>TC. ile giriş <Switch colorScheme='red' size='lg' /> E-posta ile giriş </FormLabel>
                        </FormControl>
                        <Grid>
                            <GridItem w='100%' h='5'></GridItem>
                        </Grid>
                        <FormControl isRequipurple>
                            <FormLabel color="black" htmlFor='email'>E-posta</FormLabel>
                            <Input id='email' type='email' />

                        </FormControl>
                        <Grid>
                            <GridItem w='100%' h='6'></GridItem>
                        </Grid>
                        <FormControl isRequipurple>
                            <FormLabel htmlFor='email' color="black">Parola</FormLabel>
                            <Input id='email' type='password' />

                        </FormControl>
                        <Grid>
                            <GridItem w='100%' h='4'></GridItem>
                        </Grid>
                        <Grid>
                            <GridItem>
                                <Checkbox color="black">Beni hatırla</Checkbox>
                            </GridItem>
                        </Grid>
                        <Grid>
                            <GridItem w='100%' h='4'></GridItem>
                        </Grid>
                        <Grid>
                            <Link href='/register' color="black">
                                Üye Ol <ExternalLinkIcon mx='2px' />
                            </Link>
                        </Grid>
                        <Grid>
                            <Link color='black' href='#'>
                                Parolamı unuttum <ExternalLinkIcon mx='2px' />
                            </Link>
                        </Grid>
                        <Grid>
                    <GridItem w='100%' h='4'></GridItem>
                </Grid>
                        <Grid>
                            <Center>
                                <GridItem>
                                    <Center bg='grey' h='50px' color='black' borderRadius={5}>
                                        <Checkbox size='lg' color="white" margin="3">
                                           Ben robot değilim
                                        </Checkbox>
                                    </Center>
                                </GridItem>
                            </Center>
                        </Grid>
                        <Grid>
                            <GridItem w='100%' h='3'></GridItem>
                        </Grid>
                        <Grid>
                            <Center>
                                <GridItem>
                                    <Button bg="red.500" color="white" size='md' >Giriş yap  <ArrowRightIcon mx='7px' ></ArrowRightIcon></Button>
                                </GridItem>
                            </Center>
                        </Grid>

                    </Box>

                </SimpleGrid>
                <Grid>
                    <GridItem w='100%' h='4'></GridItem>
                </Grid>
            </Container>

        </Container>
    )
}

export default LoginPage;