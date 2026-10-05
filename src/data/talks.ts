export interface Talk {
  slug: string;
  title: string;
  date: string;
  type: string;
  venue: string;
  location?: string;
  note?: string;
}

export const talks: Talk[] = [
  {
    slug: '2025-4-28-indonesia',
    title: `Applications of GNSS for Smart Farming in China`,
    date: '2025-04-28',
    type: 'Talk',
    venue: 'Online Seminar by Geospatial Information Agency and IPB University',
    location: 'Jakarta, Indonesia',
  },
  {
    slug: '2024-3-whu',
    title: `Progress in Project DeepGeneralization`,
    date: '2024-03-23',
    type: 'Talk',
    venue: '新时代地图学青年学者论坛, Wuhan University (online)',
    location: 'Wuhan, China',
  },
  {
    slug: '2023-6-23-beijing',
    title: `Progress in Deep Learning-backed Map Generalization`,
    date: '2023-06-23',
    type: 'Talk',
    venue: 'the 4th Youth Forum by the Institute of Remote Sensing and GIS, Peking University',
    location: 'Beijing, China',
  },
  {
    slug: '2022-4-dagstuhl',
    title: `Place and mobility`,
    date: '2022-04-18',
    type: 'Talk',
    venue: 'Dagstuhl Seminar 22162',
    location: 'Dagstuhl, Germany',
  },
  {
    slug: '2021-8-12-ogc',
    title: `Trajectory Modeling Practices in the Track&Know Project`,
    date: '2021-08-12',
    type: 'Talk',
    venue: 'Open Geospatial Consortium (OGC) Summit on Mobility Data Science, Online',
    note: 'Organized by OGC Moving Features Standards Working Group',
  },
  {
    slug: '2021-5-19-whu',
    title: `Mobility Modeling with Big Trajectory Data`,
    date: '2021-05-19',
    type: 'Talk',
    venue: 'State Key Laboratory of Information Engineering in Surveying, Mapping and Remote Sensing, Wuhan University, Online',
  },
  {
    slug: '2021-2-15-here',
    title: `Computational Place and Behavior Modeling Using Socially Sensed Data`,
    date: '2021-02-15',
    type: 'Talk',
    venue: 'HERE Inc., Online',
  },
  {
    slug: '2014-5-15-md',
    title: `Preliminary Study on Linking Twitter to Crime Issues`,
    date: '2014-05-15',
    type: 'Talk',
    venue: 'Maryland Emergency Management Association Conference 2014',
    location: 'Atlantic City, MD, USA',
  },
];
