export type SchematicId =
  | 'buildings'
  | 'map-scale'
  | 'network'
  | 'trajectory'
  | 'raster-grid'
  | 'land-cover'
  | 'solar-field'
  | 'dashboard'
  | 'gan';

export interface GraphicalAbstract {
  takeaway: string;
  keywords: string[];
  schematic: SchematicId;
}

export const graphicalAbstracts: Record<string, GraphicalAbstract> = {
  '2018-7-27-ceus-fu-etal': {
    takeaway: 'Linguistic signatures in social media reveal spatiotemporal urban activities.',
    keywords: ['urban activities', 'social media', 'linguistic signatures'],
    schematic: 'network',
  },
  '2019-12-11-rs-fu-song-stewart': {
    takeaway: 'Activity data combined with long-term remote sensing maps urban land-use change.',
    keywords: ['land use', 'remote sensing', 'activity data'],
    schematic: 'land-cover',
  },
  '2020-6-16-ijgis-fu-huang-weibel': {
    takeaway: 'Quadtree geographic context simplifies GPS trajectories while preserving shape.',
    keywords: ['GPS', 'trajectory simplification', 'quadtree'],
    schematic: 'trajectory',
  },
  '2022-1-31-ceus-bruehwiler-etal': {
    takeaway: 'Trajectories, driving events and geographic context predict individual car-accident risk.',
    keywords: ['car-accident risk', 'trajectories', 'driving events'],
    schematic: 'trajectory',
  },
  '2023-1-24-gsis-zhao-etal': {
    takeaway: 'Survey-based modeling reveals urban–rural gaps in daily mobility during COVID-19.',
    keywords: ['COVID-19', 'daily mobility', 'urban–rural', 'China'],
    schematic: 'trajectory',
  },
  '2023-4-11-cagis-conrow-etal': {
    takeaway: 'A conceptual framework for dashboards that make big mobility data usable.',
    keywords: ['dashboards', 'big mobility data', 'visual analytics'],
    schematic: 'dashboard',
  },
  '2023-09-11-re-he-etal': {
    takeaway: 'Large-scale solar-PV projects measurably reduced poverty across Chinese counties.',
    keywords: ['photovoltaic', 'poverty reduction', 'renewable energy'],
    schematic: 'solar-field',
  },
  '2023-11-14-cagis-fu-etal': {
    takeaway: 'Data model and training-set size, not architecture, drive deep-learning building generalization.',
    keywords: ['building generalization', 'deep learning', 'data model'],
    schematic: 'buildings',
  },
  '2024-06-20-ijgis-fu-etal': {
    takeaway: 'Explainable AI shows a ResU-Net learns building boundaries, not interiors.',
    keywords: ['map generalization', 'XAI', 'deep learning', 'U-Net'],
    schematic: 'buildings',
  },
  '2024-12-01-zhou-fu-weibel': {
    takeaway: 'A spatially-aware generative network generalizes building shapes while preserving context.',
    keywords: ['GAN', 'building generalization', 'image maps'],
    schematic: 'gan',
  },
  '2025-6-17-he-fu-ye': {
    takeaway: 'Solar photovoltaic projects lifted households out of poverty in Huoshan County.',
    keywords: ['photovoltaic', 'poverty alleviation', 'China'],
    schematic: 'solar-field',
  },
  '2026-02-18-ijgis-zhou-etal': {
    takeaway: 'A research agenda for GeoAI in multi-scale cartographic map generalization.',
    keywords: ['GeoAI', 'map generalization', 'multi-scale cartography'],
    schematic: 'map-scale',
  },
  '2026-07-10-jgsa-han-etal': {
    takeaway: 'Modelling move segments, not just stops, improves place-location detection.',
    keywords: ['place detection', 'move segments', 'trajectories'],
    schematic: 'trajectory',
  },
};
