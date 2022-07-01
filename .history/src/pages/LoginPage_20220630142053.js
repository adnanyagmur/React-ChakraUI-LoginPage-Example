import { Container,Center,Box,Image } from "@chakra-ui/react";
import KysLogo from "../assets/KysLogo.png"


const LoginPage = ()=>{

    return(
        <Container>
            <Center>
            <Box boxSize='sm'>
  <Image src={KysLogo} alt='KysLogo' />
</Box>
            </Center>
        </Container>
    )
}

export default LoginPage;