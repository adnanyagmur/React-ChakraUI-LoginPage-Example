import { Container, Center, Box, Image, SimpleGrid, FormControl,FormLabel,Input,FormErrorMessage } from "@chakra-ui/react";

import KysLogo from "../assets/KysLogo.png"


const LoginPage = () => {

    return (
        <Container>
            <SimpleGrid columns={1}>
                <Center>
                    <Box boxSize='sm'>
                        <Image src={KysLogo} alt='KysLogo' />
                    </Box>
                </Center>
                <FormControl>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input id='email' type='email' />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input id='email' type='email' />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>


            </SimpleGrid>
        </Container>
    )
}

export default LoginPage;