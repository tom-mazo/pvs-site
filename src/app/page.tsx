import Logo from '@/assets/icons/Logo';
import { socialMediaIcons } from "@/data/home";
import services from '@/data/servicios'
import ArrowRight from '@/assets/icons/ArrowRight';
import { Link } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row flex-nowrap mb-8 md:items-center">
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

          <p className="mb-6">
            {"A PVS Empreendimentos opera nas regiões de "}
            <span className="text-pvs-gold font-semibold">{"Sorocaba (SP)"}</span>
            {" e "}
            <span className="text-pvs-gold font-semibold">{"Itaí-Paranapanema (SP)"}</span>
            {"."}
          </p>

          <div className="flex flex-row flex-nowrap gap-8 justify-center text-pvs-gold mb-4 h-9">
            {socialMediaIcons.map(({ icon: Icon, link }) => <a key={Icon.name} href={link}><div className="size-9 flex justify-center align-center cursor-pointer"><div className="size-8 hover:size-9"><Icon size="100%" className="" /></div></div></a>)}
          </div>

        </div>  
      </div>

      <div className="mb-10 mt-10 rounded-lg bg-primary h-[1px] w-52 mx-auto lg:hidden"></div>

      <section className="">
        <h2 className="text-pvs-gold text-4xl font-serif mb-6">Serviços</h2>
        <p className="text-lg max-w-xl mb-4">{'Realizamos todos os tipos de projetos residenciais e comerciais sem compromissos, adequamos valores ao perfil do clientes.'}</p>
        <div className="pl-2 flex flex-row flex-nowrap overflow-x-scroll mb-4 -mr-4 gap-8  lg:justify-around">
          {services.map(item => (
            <div key={item.shortTitle} className="flex flex-row lg:flex-col items-center bg-pvs-gold rounded-lg p-4 lg:size-48 lg:justify-center lg:items-center lg:text-center cursor-pointer hover:scale-105 focus-within:scale-105 mb-2 mt-2">
              <div className="size-24"><item.Icon color={"#04223A"}/></div>
              <div className="text-md uppercase font-semibold text-pvs-indigo p-4">{item.shortTitle}</div>
          </div>
          ))}
        </div>
        <Link href="/servicios" className="text-pvs-gold hover:opacity-100 hover:underline hover:underline-offset-8">
          <span className="inline-block mr-2 font-serif text-2xl">{'Veja mais'}</span>
          <ArrowRight className="size-6" />
        </Link>
      </section>

    </div>
  );
}
