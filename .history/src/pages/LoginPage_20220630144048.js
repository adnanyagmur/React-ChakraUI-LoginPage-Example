import { Container, Center,Heading, Box, Image, SimpleGrid, FormControl, FormLabel, Input, FormErrorMessage, FormHelperText } from "@chakra-ui/react";

import KysLogo from "../assets/KysLogo.png"


const LoginPage = () => {

    return (
        <Container>
            <SimpleGrid columns={1}>
                <Center>
                    <SimpleGrid>
                        <Box boxSize='sm'>
                            <Image src={KysLogo} alt='KysLogo' />
                        </Box>
                        <Box>
                            <Heading as='h2' size='lg'>
                                KURUMSAL YÖNETİM SİSTEMİ
                            </Heading>
                        </Box>
                    </SimpleGrid>
                </Center>
                <FormControl isRequired>
                    <FormLabel htmlFor='email'>E-posta</FormLabel>
                    <Input id='email' type='email' />

                </FormControl>

                <FormControl isRequired>
                    <FormLabel htmlFor='email'>Parola</FormLabel>
                    <Input id='email' type='password' />

                </FormControl>


            </SimpleGrid>
        </Container>
    )
}

export default LoginPage;