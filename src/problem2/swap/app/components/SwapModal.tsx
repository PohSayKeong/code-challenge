import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Spinner,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";

interface SwapModalProps {
    onOpenChange: () => void;
    swapInfo: {
        selectedToken: string;
        destinationToken: string;
        inAmount: string;
        outAmount: string;
    };
}

export const SwapModal = ({ onOpenChange, swapInfo }: SwapModalProps) => {
    const [isSwapping, setIsSwapping] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsSwapping(false);
        }, 5000);
    }, []);

    return (
        <Modal
            isOpen={true}
            onOpenChange={onOpenChange}
            hideCloseButton={isSwapping}
            isDismissable={false}
        >
            <ModalContent>
                {isSwapping ? (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Swapping Tokens...
                        </ModalHeader>
                        <ModalBody>
                            <Spinner />
                        </ModalBody>
                        <ModalFooter />
                    </>
                ) : (
                    (onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Swap Successful!
                            </ModalHeader>
                            <ModalBody>
                                <TiTick
                                    className="mx-auto bg-success rounded-full"
                                    size={"4rem"}
                                />
                                <div className="flex flex-col gap-1 text-center">
                                    <span>
                                        Swapped {swapInfo.inAmount}{" "}
                                        {swapInfo.selectedToken} for{" "}
                                        {swapInfo.outAmount}{" "}
                                        {swapInfo.destinationToken}
                                    </span>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )
                )}
            </ModalContent>
        </Modal>
    );
};
