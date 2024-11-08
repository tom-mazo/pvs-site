'use client';
import { useState } from 'react';

import { tabs, getThumbs } from '@/data/portfolio';

import GalleryModal from '@/app/_components/GalleryModal';
import Thumb from '@/app/_components/Thumb';
import Chip from '@/app/_components/Chip';

import type { Tab } from "./types";


export default function Portfolio() {
    const [currentTab, setCurrentTab] = useState<Tab | null>(null);
    const [photo, setPhoto] = useState<string>('');

    const thumbs = getThumbs(currentTab);
    const chips = currentTab ? [currentTab] : tabs;

    return (
        <>
            <div className='mb-8 flex flex-row gap-4'>
                {chips.map(chip => (<Chip
                    key={chip.id}
                    isTabSelected={!!currentTab}
                    chipData={chip}
                    onSelect={setCurrentTab}
                    onClose={() => setCurrentTab(null)} />))
                }
            </div>

            <div className="flex flex-row flex-wrap justify-evenly items-center gap-2">
                {thumbs.map(({ src }) => <Thumb key={src} src={src} onClick={setPhoto} />)}
                <GalleryModal photo={photo} onClose={() => setPhoto('')} />
            </div>
        </>
    )
}