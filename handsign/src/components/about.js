import React from 'react'
import handImages from '../images/handImages.svg';
import {
    Text,
    Button,
    Image,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
Link,
} from '@chakra-ui/react'

export default function About() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <div>
            <a href="http://127.0.0.1:3000/landing"><Button  colorScheme="orange">Learn More</Button></a>
            
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>American Sign Language (ASL)</ModalHeader>
          <ModalCloseButton />
       
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>
    )
}
