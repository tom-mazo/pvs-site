function Card({ item }: { item: { Icon: ({ color }: { color?: string; }) => JSX.Element, title: string; description: string;}}) {
    return (
        <div className="flex flex-col items-center justify-center p-2 md:basis-2/4 mb-4 max-w-80 md:max-w-none md:justify-evenly">
            <div className="size-24 mb-3"><item.Icon /></div>
            <div className="text-pvs-gold text-2xl text-center mb-3">{item.title}</div>
            <p className="text-pvs-beige text-center max-w-80 pr-3 pl-3">{item.description}</p>
        </div>
    )
}

export default Card;