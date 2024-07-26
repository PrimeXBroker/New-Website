"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@nextui-org/react";
const CustomModal = ({
  isOpen,
  onClose,
  modalPlacement = "center",
  children,
  onOpen,
  onOpenChange,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      placement={modalPlacement}
      onOpenChange={onOpenChange}
      size="2xl"
      backdrop="blur"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col justify-center items-center gap-1">
              Client Agreement
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter className="flex justify-center">
              <Button className="bg-secondary text-primary" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
