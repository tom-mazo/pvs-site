import { Tab } from "../types";
import { Chip as NextUIChip } from "@nextui-org/react";


function Chip({ isTabSelected, chipData, onSelect, onClose }: Props) {
    return (
        <NextUIChip
            size='lg'
            color='primary'
            variant="bordered"
            className={isTabSelected ? undefined : 'hover:bg-primary hover:text-background cursor-pointer'}
            onClick={isTabSelected ? undefined: () => onSelect(chipData)}
            onClose={isTabSelected ? onClose : undefined }
        >{chipData.label}</NextUIChip>
    );
}

export default Chip;

type Props = {
    isTabSelected: boolean,
    chipData: Tab,
    onSelect: (tab: Tab) => void,
    onClose: () => void
}