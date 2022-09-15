import { Modal, ModalBody, ModalHeader } from "./index";
import { OverlayStyle } from "../../styled/shared";
import CreateConversationForm from "../forms/CreateConversationForm";
import { createRef, useEffect } from "react";
import { MdClose } from "react-icons/md";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateConversationModal = ({ setShowModal }: Props) => {
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) =>
      e.key === "Escape" && setShowModal(false);
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  });

  const handleOverlayClick = (e: React.MouseEvent<HTMLElement>) => {
    const { current } = ref;
    if (current === e.target) {
      setShowModal(false);
    }
  };
  return (
    <OverlayStyle ref={ref} onClick={(e) => handleOverlayClick(e)}>
      <Modal>
        <ModalHeader>
          <h2>Create a conversation</h2>
          <MdClose
            size={32}
            cursor="pointer"
            onClick={() => setShowModal(false)}
          />
        </ModalHeader>
        <ModalBody>
          <CreateConversationForm />
        </ModalBody>
      </Modal>
    </OverlayStyle>
  );
};

export default CreateConversationModal;
