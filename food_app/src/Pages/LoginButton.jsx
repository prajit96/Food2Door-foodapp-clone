import React from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import  { Login } from './Login';

export const LoginButton = ({setrandom,isOpen, onOpen, onClose }) => {
 
  return (
    <div>
        <button onClick={onOpen}>LOGIN</button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                <Login onClose={onClose} setrandom={setrandom} />
                </ModalBody>
            </ModalContent>
        </Modal>
    </div>
  )
}