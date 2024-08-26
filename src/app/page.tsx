import Image from "next/image";
import services from '@/app/servicios/data'
import Logo from '@/app/assets/Logo';
import ArrowRight from '@/app/assets/ArrowRight';
import { Link } from "@nextui-org/react";
import { portfolioData } from "./data";


export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row flex-nowrap mb-6 md:items-center">
        <div className="w-80 mx-auto flex-shrink-0 mb-6">
          <Logo />
        </div>
        <div className="text-lg text-center mx-auto max-w-xl">
          <p className="mb-2">
            {"A "}
            <span className="text-pvs-gold font-semibold">{"PVS Empreendimentos"}</span>
            {" é uma prestadora de serviços na área da "}
            <span className="text-pvs-gold font-semibold">{"construção civil residencial e comercial."}</span>
            {" Sua especialidade está na realização de projetos de médio e alto padrão."}
          </p>

          <p className="">
            {"A PVS Empreendimentos opera nas regiões de "}
            <span className="text-pvs-gold font-semibold">{"Sorocaba (SP)"}</span>
            {" e "}
            <span className="text-pvs-gold font-semibold">{"Itaí-Paranapanema (SP)"}</span>
            {"."}
          </p>
        </div>  
      </div>
      <section className="mb-10">
        <h2 className="text-pvs-gold text-4xl font-serif mb-6">Serviços</h2>
        <div className="pl-2 flex flex-row flex-nowrap overflow-x-scroll mb-6 -mr-4 gap-8  lg:justify-around">
          {services.map(item => (
            <div className="flex flex-row lg:flex-col items-center bg-pvs-gold rounded-lg p-4 lg:size-48 lg:justify-center lg:items-center lg:text-center lg:cursor-pointer">
              <div className="size-24"><item.Icon color={"#04223A"}/></div>
              <div className="text-md uppercase font-semibold text-pvs-indigo p-4">{item.shortTitle}</div>
          </div>
          ))}
        </div>
        <Link href="/servicios" className="text-pvs-gold">
          <span className="inline-block mr-2 font-serif text-2xl">{'Veja mais'}</span>
          <ArrowRight className="size-6" />
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-pvs-gold text-4xl font-serif mb-6">Portfolio</h2>
        <div className="pl-2 flex flex-row flex-nowrap overflow-x-scroll mb-6 gap-8 lg:justify-around -mr-4">
          {portfolioData.map(item => (
            <div className="flex flex-row justify-center items-stretch lg:flex-col" key={item.title}>
              <div className="size-32 lg:size-52">
                <Image src={item.thumb} alt={item.title} />
              </div>
              <div className="bg-pvs-gold text-pvs-indigo flex justify-center items-center p-4 uppercase font-semibold">{item.title}</div>
          </div>
          ))}
        </div>

        <Link href="/portfolio" className="text-pvs-gold">
          <span className="inline-block mr-2 font-serif text-2xl">{'Veja mais'}</span>
          <ArrowRight className="size-6" />
        </Link>

      </section>
      <section className="pb-4">
        <h2 className="text-pvs-gold text-4xl font-serif mb-6">Contato</h2>

            <div className="flex flex-col md:flex-row md:flex-nowrap">

            <div className="mb-3 md:flex-grow">
              <div className="text-pvs-gold text-xl font-serif mb-3">Sorocaba - SP</div>
              <div className="mb-2 text-md">Av. Professora Izoraida Marques Peres, 288<br/>Sala 42 - Pq. Campolim - Sorocaba - SP</div>
              <div><span className="text-md text-pvs-gold">telefone </span> +551530113450</div>
              <div><span className="text-md text-pvs-gold">whatsapp </span> +5515974019088</div>
            </div>

            <div className="mb-3 md:flex-grow">
              <div className="text-pvs-gold text-xl font-serif mb-3">Itaí - SP</div>
              <div className="mb-2 text-md">Av. Professora Izoraida Marques Peres, 288<br/>Sala 42 - Pq. Campolim - Sorocaba - SP</div>
              <div><span className="text-md text-pvs-gold">telefone </span> +551530113450</div>
              <div><span className="text-md text-pvs-gold">whatsapp </span> +5515974019088</div>
            </div>
          </div>

      </section>

    </div>
  );
}
