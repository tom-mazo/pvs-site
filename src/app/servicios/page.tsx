import data from '@/data/servicios';
import Card from '@/app/_components/Card';

export default function Servicios() {
    return (
        <>
            <div className="flex flex-row flex-wrap justify-center gap-2 md:gap-0">
                {data.map(item => <Card key={item.shortTitle} item={item} />)}
            </div>
        </>
    )
}