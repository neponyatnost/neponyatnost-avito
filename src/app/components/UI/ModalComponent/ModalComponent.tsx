import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { FC } from 'react'

interface ModalComponentProps {
  children: React.ReactNode | string
  isOpen: boolean
  onClose: () => void
  buttonText: string
  buttonTextTwo: string
  onStay: () => void
}

const ModalComponent: FC<ModalComponentProps> = ({
  children,
  isOpen,
  onClose,
  onStay,
  buttonText,
  buttonTextTwo,
}) => {
  return (
    <Modal onClose={onStay} isOpen={isOpen} isCentered variant={''}>
      <ModalOverlay backdropBlur={'10px'} />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button
            onClick={onClose}
            __css={{ marginRight: 10 }}
            _hover={{ color: 'red' }}
          >
            {buttonText}
          </Button>
          <Button onClick={onStay}>{buttonTextTwo}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalComponent
