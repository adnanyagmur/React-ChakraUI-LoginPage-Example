import { Container,Center,Box,Image,SimpleGrid } from "@chakra-ui/react";

import KysLogo from "../assets/KysLogo.png"


const LoginPage = ()=>{

    return(
        <Container>
            <SimpleGrid>
            <Center>
            <Box boxSize='sm'>
  <Image src={KysLogo} alt='KysLogo' />
</Box>
            </Center>
            </SimpleGrid>
        </Container>
    )
}

export default LoginPage;