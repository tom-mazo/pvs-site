import Image from 'next/image'

export default function Thumb({ src, onClick }: Props) {
    return (
        <div className="mb-2 cursor-pointer" onClick={() => onClick(src)}>
            <Image
                className="rounded-2xl border-3 border-pvs-gold border-solid"
                src={src}
                alt={"alt"}
                height={150}
                width={150}
            />
        </div>
    )
}

type Props = {
    src: string,
    onClick: (src: string) => void
}