//importação do chakra ui
import { 
  Center, 
  Flex, 
  Text, 
  Button,
  Box
} from '@chakra-ui/react'
import { useState } from 'react'

function App() {

  // useState do tipo "number" para 
  const [contador, setContador] = useState<number>(0)

  // Arrow function para aumentar 1 no contador
  const add = () => {
    setContador(contador + 1)
  }

  // Arrow function para diminuir 1 no contador
  const remove = () => {
    // Condição para evitar o contador negativo
    if(contador > 0){
      setContador(contador - 1)
    }
  }

  return (
    <Flex color='black' direction='column' height='100vh' width='100vw' justify='center'> 
      <Center>
        <Text color='white' fontSize='4xl'> Contador | UseState </Text>
      </Center>
      
      <Center>
        <Box bg='white' my='5' borderRadius='lg' height='100px' width='70px'>
          <Text color='black' fontSize='6xl' textAlign='center'> 
             {contador}
          </Text>  
        </Box>
      </Center>
      
      <Box mt='5'>
        <Center>
          <Button me='3' colorScheme='red' size='md' onClick={remove}> 
            Remover 
          </Button> 
          <Button colorScheme='green' size='md' onClick={add}> 
            Adicionar 
          </Button>
        </Center>  
      </Box>
    </Flex>
  )
}

export default App
