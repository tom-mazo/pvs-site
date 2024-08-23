import { Tab } from "../types";
import { Chip } from "@nextui-org/react";


export default function({ isTabSelected, chipData, onSelect, onClose }: Props) {
    return (
        <Chip
            size='lg'
            color='primary'
            variant="bordered"
            className={isTabSelected ? undefined : 'hover:bg-primary hover:text-background cursor-pointer'}
            onClick={isTabSelected ? undefined: () => onSelect(chipData)}
            onClose={isTabSelected ? onClose : undefined }
        >{chipData.label}</Chip>
    );
}

type Props = {
    isTabSelected: boolean,
    chipData: Tab,
    onSelect: (tab: Tab) => void,
    onClose: () => void
}