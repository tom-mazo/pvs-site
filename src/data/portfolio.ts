import residencesThumbs from '@/app/portfolio/assets/thumbnails/residencias';
import projectsThumbs from '@/app/portfolio/assets/thumbnails/projetos';
import obrasThumbs from '@/app/portfolio/assets/thumbnails/obras';
import type { Tab } from '@/app/portfolio/types';

export const tabs: Tab[] = [
     {
         id: 'residencias',
         label: 'Residências',
     },
     {
         id: 'projetos',
         label: 'Projetos',
     },
     {
         id: 'obras',
         label: 'Obras',
     },
 ]

 export function getThumbs(currentTab: Tab | null) {
     if (currentTab?.id === 'residencias') return residencesThumbs;
     if (currentTab?.id === 'projetos') return projectsThumbs;
     if (currentTab?.id === 'obras') return obrasThumbs;
     return [...residencesThumbs, ...projectsThumbs, ...obrasThumbs];
 }