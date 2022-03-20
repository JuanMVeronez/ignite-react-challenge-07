import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody padding={0} bgColor="pGray.700">
          <Image
            src={imgUrl}
            w="100%"
            h="100%"
            maxW="900px"
            maxH="600px"
            objectFit="contain"
          />
        </ModalBody>
        <ModalFooter justifyContent="left" bgColor="pGray.800" py={2} pl={2.5}>
          <Link target="_blank" href={imgUrl}>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
