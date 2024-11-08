import data from './data';
import AboutUsCard from './components/AboutUsCard';

export default function SobreNos() {
    return (
        <div>
            <div className='text-lg text-center mx-auto max-w-xl mb-14 mt-4'>

                <p>Há mais de 10 anos, a PVS atua na construção civil nas regiões de Sorocaba e Itu, entregando projetos de médio e alto padrão com sofisticação e qualidade. Com uma base sólida no mercado, nossa empresa é reconhecida pela excelência em cada detalhe, da fundação ao acabamento.</p>
                <p>Agora, expandimos nossa atuação para Itaí e Paranapanema, levando nossa expertise e compromisso com a inovação para novos horizontes. Na PVS, construímos mais do que espaços; realizamos sonhos com elegância e segurança.</p>
            </div>

            <div className="flex flex-row flex-wrap gap-2 justify-center">
                {data.people.map(person => (<AboutUsCard key={person.title} {...person} />))}
            </div>
        </div>
    )
}