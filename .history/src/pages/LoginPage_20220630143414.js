import { Container, Center, Box, Image, SimpleGrid, FormControl,FormLabel,Input,FormErrorMessage, FormHelperText } from "@chakra-ui/react";

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
                    </SimpleGrid>
                </Center>
                <FormControl>
                    <FormLabel htmlFor='email'>E-posta*</FormLabel>
                    <Input id='email' type='email' />
                   
                </FormControl>
                <Box></Box>
                <FormControl>
                    <FormLabel htmlFor='email'>Parola*</FormLabel>
                    <Input id='email' type='password' />
                   
                </FormControl>


            </SimpleGrid>
        </Container>
    )
}

export default LoginPage;