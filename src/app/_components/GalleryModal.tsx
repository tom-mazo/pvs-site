
import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import Image from 'next/image'

function GaleryModal({ photo, onClose }: Props) {
    return (
        <Modal isOpen={!!photo} onOpenChange={onClose} placement='center'>
            <ModalContent>
                <>
                    <ModalBody>
                        <div className="flex justify-center items-center">
                            <Image
                                src={photo}
                                alt={"alt"}
                                height={350}
                                width={350}
                            />
                        </div>
                    </ModalBody>
                </>
            </ModalContent>
        </Modal>)
}

type Props = {
    photo: string,
    onClose: () => void
}

export default GaleryModal