export interface ResearchArea {
  id: string;
  order: number;
  color: string;
  label: { en: string; zh: string };
  desc: { en: string; zh: string };
}

export const researchAreas: ResearchArea[] = [
  {
    id: 'mobility-health',
    order: 1,
    color: 'var(--theme-mobility-health)',
    label: { en: 'Human mobility & health', zh: '人类移动性与健康' },
    desc: {
      en: 'Individual and aggregate mobility, and its links to health and well-being.',
      zh: '个体与群体移动性及其与健康和福祉的关系。',
    },
  },
  {
    id: 'generalization-geoai',
    order: 2,
    color: 'var(--theme-generalization-geoai)',
    label: { en: 'Cartographic generalization & GeoAI', zh: '地图综合与地理人工智能' },
    desc: {
      en: 'Deep learning, explainable AI, and automated cartographic generalization.',
      zh: '深度学习、可解释人工智能与自动化地图综合。',
    },
  },
  {
    id: 'place-giscience',
    order: 3,
    color: 'var(--theme-place-giscience)',
    label: { en: 'Place modeling & GIScience', zh: '地方建模与地理信息科学' },
    desc: {
      en: 'Computational models of place, and geographical information retrieval.',
      zh: '地方的计算建模与地理信息检索。',
    },
  },
  {
    id: 'urban-analytics',
    order: 4,
    color: 'var(--theme-urban-analytics)',
    label: { en: 'Urban analytics & big data', zh: '城市分析与大数据' },
    desc: {
      en: 'Data mining and modeling of human-behaviour big data in cities.',
      zh: '城市人类行为大数据的挖掘与建模。',
    },
  },
  {
    id: 'agri-environment',
    order: 5,
    color: 'var(--theme-agri-environment)',
    label: { en: 'Agricultural & environmental spatial systems', zh: '农业与环境空间系统' },
    desc: {
      en: 'Spatial data science for agricultural and environmental systems.',
      zh: '面向农业与环境系统的空间数据科学。',
    },
  },
];
