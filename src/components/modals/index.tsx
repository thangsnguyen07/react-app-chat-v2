import {
  ModalBodyStyle,
  ModalHeaderStyle,
  ModalStyle,
} from "../../styled/shared";

interface ModalProps {
  children: React.ReactNode;
}
export const Modal: React.FC<ModalProps> = ({ children }: ModalProps) => {
  return <ModalStyle>{children}</ModalStyle>;
};

export const ModalHeader: React.FC<ModalProps> = ({ children }: ModalProps) => {
  return <ModalHeaderStyle>{children}</ModalHeaderStyle>;
};

export const ModalBody: React.FC<ModalProps> = ({ children }: ModalProps) => {
  return <ModalBodyStyle>{children}</ModalBodyStyle>;
};
