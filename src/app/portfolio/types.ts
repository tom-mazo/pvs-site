type TabName = 'obras' | 'residencias' | 'projetos';

type Tab = {
    id: TabName;
    label: string;
}

export type { TabName, Tab };