import residencesThumbs from '@/app/portfolio/assets/thumbnails/residencias';
import projectsThumbs from '@/app/portfolio/assets/thumbnails/projetos';
import obrasThumbs from '@/app/portfolio/assets/thumbnails/obras';
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const portfolioData = [
     { title: 'Residências', thumb: residencesThumbs[0] },
     { title: 'Projetos', thumb: projectsThumbs[0] },
     { title: 'Obras', thumb: obrasThumbs[0] },
];

const socialMediaIcons = [
     {
       icon: FaInstagram,
       link: 'https://www.instagram.com/pvsconstrutora'
     },
     {
       icon: FaLinkedin,
       link: 'https://www.linkedin.com/company/pvs-empreendimentos-imobili%C3%A1rios'
     },
     {
       icon: FaWhatsapp,
       link: 'https://wa.me/5515974019088'
     },
   ]

export { portfolioData, socialMediaIcons };