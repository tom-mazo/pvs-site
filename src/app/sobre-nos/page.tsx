import data from '@/data/sobre-nos';
import AboutUsCard from '@/app/_components/AboutUsCard';

export default function SobreNos() {
    return (
        <>
            <div className='text-lg text-center mx-auto max-w-xl mb-14 mt-4'>
                {data.introduction.map(p => <p key={p.substring(0,5)}>{p}</p>)}
            </div>

            <div className="flex flex-row flex-wrap gap-2 justify-center">
                {data.people.map(person => (<AboutUsCard key={person.title} {...person} />))}
            </div>
        </>
    )
}