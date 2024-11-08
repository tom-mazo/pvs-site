import Logo from '@/assets/icons/Logo';
import { socialMediaIcons } from "./data";


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

    </div>
  );
}
