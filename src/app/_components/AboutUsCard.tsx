import Image, { StaticImageData } from 'next/image'

function AboutUsCard({ image, title, name, description }: Props) {
    return (<div className="flex flex-col items-center p-2 mb-5 max-w-72">
        <div>
            <Image className="rounded-full border-4 border-pvs-gold border-solid mb2" src={image} width={150} height={150} alt="Paulo Vinicius, fundador e CEO" />
        </div>
        <div className="text-pvs-beige text-xl text-center mb-2">{title}</div>
        <div className="text-pvs-gold text-2xl text-center mb-2">{name}</div>
        <p className="text-pvs-beige text-center pl-2 pr-2">{description}</p>
    </div>)
}

type Props = {
    image: StaticImageData,
    title: string,
    name: string,
    description: string,
}

export default AboutUsCard;