export interface Teaching {
  slug: string;
  title: string;
  type: string;
  institution: string;
  department: string;
  period: string;
  note?: string;
}

export const teaching: Teaching[] = [
  {
    slug: '2025-autumn-teaching',
    title: 'Python Programming 2025',
    type: `Bachelor's course`,
    institution: 'China Agricultural University',
    department: 'College of Information and Electrical Engineering',
    period: '2025',
  },
  {
    slug: '2024-autumn-teaching',
    title: 'Java Programming 2024',
    type: `Bachelor's course`,
    institution: 'China Agricultural University',
    department: 'College of Information and Electrical Engineering',
    period: '2024',
  },
  {
    slug: '2023-spring-teaching',
    title: 'GEO881 Advanced Spatial Analysis II 2019-2023',
    type: 'Master course',
    institution: 'University of Zurich',
    department: 'Department of Geography',
    period: '2019–2023',
  },
  {
    slug: '2023-sdb',
    title: 'GEO875 Spatial Databases 2020-2022',
    type: 'Master course',
    institution: 'University of Zurich',
    department: 'Department of Geography',
    period: '2020–2022',
    note: 'Co-taught with Mr. Rolf Meile, WSL, Switzerland',
  },
  {
    slug: '2023-intro-db',
    title: 'GEO874 Introduction to Databases 2020-2022',
    type: 'Master course',
    institution: 'University of Zurich',
    department: 'Department of Geography',
    period: '2020–2022',
    note: 'Co-taught with Mr. Rolf Meile, WSL, Switzerland',
  },
  {
    slug: '2022-gis-proj',
    title: 'GEO885 GIScience Project 2022',
    type: 'Master course',
    institution: 'University of Zurich',
    department: 'Department of Geography',
    period: '2022',
  },
  {
    slug: '2021-small-group',
    title: 'GEO199 Small Group Teaching 2021',
    type: 'Undergraduate course',
    institution: 'University of Zurich',
    department: 'Department of Geography',
    period: '2021',
  },
  {
    slug: '2019-intro-prog',
    title: 'GEO876 Introduction to Programming for Spatial Problems 2019',
    type: 'Master course',
    institution: 'University of Zurich',
    department: 'Department of Geography',
    period: '2019',
  },
  {
    slug: '2016-oop',
    title: 'GEOG476 Object-oriented Programming for GIS 2016',
    type: 'Undergraduate course',
    institution: 'University of Maryland',
    department: 'Department of Geographical Sciences',
    period: '2016',
  },
  {
    slug: '2016-big-data',
    title: 'GEOG788F Big Data Analysis in Python 2016',
    type: 'Master course',
    institution: 'University of Maryland',
    department: 'Department of Geographical Sciences',
    period: '2016',
    note: 'Short course for graduate students from different departments',
  },
];
