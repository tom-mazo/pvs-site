'use client';
import residencesThumbs from './assets/thumbnails/residencias'
import projectsThumbs from '@/app/portfolio/assets/thumbnails/projetos';
import obrasThumbs from '@/app/portfolio/assets/thumbnails/obras';
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Chip } from "@nextui-org/react";
import Link from 'next/link'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";
import { useState } from 'react';


export default function Portfolio() {
    const params = useSearchParams();
    const currentTab = tabs.find(tab => tab.id === params.get('tab'))  as Tab;
    const thumbs = getThumbs(currentTab);
    const [photo, setPhoto] = useState<string>('')

    const handleOpenModal = (id: string) => {
        setPhoto(id);
    }
    
    const onOpenChange = (args: any) => {
        setPhoto('')
    }

    return (
        <div>
            <Modal isOpen={!!photo} onOpenChange={onOpenChange} placement='center'>
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
            </Modal>
            <div className='mb-8'>

                {!currentTab && (
                    <div className='flex flex-row gap-4'>
                        {tabs.map(tab => (
                            <Link href={{pathname: '/portfolio', query: { tab: tab.id}}}>
                                <Chip size='lg' color='primary' variant="bordered" className="hover:bg-primary hover:text-background">{tab.label}</Chip>
                            </Link>
                        ))}
                    </div>
                )}
                {!!currentTab && (<Link href="/portfolio"><Chip onClose={() => {}} size='lg' color='primary' variant="bordered">{currentTab.label}</Chip></Link>)}
            </div>
            <div className="flex flex-row flex-wrap justify-evenly items-center gap-2">
                {thumbs.map(thumb => (
                    <div className="mb-2 cursor-pointer" onClick={() => handleOpenModal(thumb.src)}>
                        <Image
                            className="rounded-2xl border-3 border-pvs-gold border-solid"
                            src={thumb.src}
                            alt={"alt"}
                            height={150}
                            width={150}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

var tabs2: TabName[] = ['residencias', 'projetos', 'obras'];

var tabs: Tab[] = [
    {
        id: 'residencias',
        label: 'Residências',
    },
    {
        id: 'projetos',
        label: 'Projetos',
    },
    {
        id: 'obras',
        label: 'Obras',
    },
]

function getThumbs(currentTab: Tab) {
    if (currentTab?.id === 'residencias') return residencesThumbs;
    if (currentTab?.id === 'projetos') return projectsThumbs;
    if (currentTab?.id === 'obras') return obrasThumbs;
    return [...residencesThumbs, ...projectsThumbs, ...obrasThumbs];
}

type TabName = 'obras' | 'residencias' | 'projetos';

type Tab = {
    id: TabName;
    label: string;
}