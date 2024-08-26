import residencesThumbs from './assets/thumbnails/residencias'
import Image from 'next/image'


export default function Portfolio() {

    return (
        <div>
            <div className="flex flex-row flex-wrap justify-evenly items-center gap-2">
                {residencesThumbs.map(thumb => (
                    <div className="mb-2">
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