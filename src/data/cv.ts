export interface LocalizedText {
  en: string;
  zh: string;
}

export interface CvEntry {
  period: LocalizedText;
  role: LocalizedText;
  org?: LocalizedText;
}

export interface CvServiceGroup {
  label: LocalizedText;
  items: LocalizedText[];
}

export const cv = {
  education: [
    {
      period: { en: '2010', zh: '2010' },
      role: { en: 'B.S. in Remote Sensing and GIS', zh: '遥感与地理信息系统学士' },
      org: { en: 'Peking University, PRC', zh: '北京大学，中国' },
    },
    {
      period: { en: '2012', zh: '2012' },
      role: { en: 'M.A. in Geography', zh: '地理学硕士' },
      org: { en: 'Binghamton University, USA', zh: '宾汉姆顿大学，美国' },
    },
    {
      period: { en: '2018', zh: '2018' },
      role: { en: 'PhD in Geography', zh: '地理学博士' },
      org: { en: 'University of Maryland, USA', zh: '马里兰大学，美国' },
    },
  ] satisfies CvEntry[],
  positions: [
    {
      period: { en: '2021.11–present', zh: '2021.11–至今' },
      role: { en: 'Group Leader of Urban Geoinformatics', zh: '城市地理信息学团队负责人' },
      org: { en: 'Department of Geography, University of Zurich', zh: '苏黎世大学地理系' },
    },
    {
      period: { en: '2020.10–present', zh: '2020.10–至今' },
      role: { en: '"Oberassistent" (Lecturer/Senior Scientist)', zh: '“Oberassistent”（讲师/资深科学家）' },
      org: {
        en: 'Geographic Information Systems Unit, Department of Geography, University of Zurich',
        zh: '苏黎世大学地理系地理信息系统教研室',
      },
    },
    {
      period: { en: '2018.7–2020.9', zh: '2018.7–2020.9' },
      role: { en: 'Postdoctoral Fellow', zh: '博士后研究员' },
      org: { en: 'Department of Geography, University of Zurich', zh: '苏黎世大学地理系' },
    },
    {
      period: { en: '2016.2–2018.5', zh: '2016.2–2018.5' },
      role: { en: 'Teaching Assistant and Graduate Assistant', zh: '助教与研究生助理' },
      org: { en: 'Department of Geographical Sciences, University of Maryland', zh: '马里兰大学地理科学系' },
    },
    {
      period: { en: '2016.1–2016.5', zh: '2016.1–2016.5' },
      role: { en: 'Instructor of Object-oriented programming for GIS', zh: '面向 GIS 的面向对象编程课程讲师' },
      org: { en: 'Department of Geographical Sciences, University of Maryland', zh: '马里兰大学地理科学系' },
    },
    {
      period: { en: '2016.1', zh: '2016.1' },
      role: { en: 'Teacher of Big Data Analysis on Python', zh: 'Python 大数据分析课程教师' },
      org: { en: 'Department of Geographical Sciences, University of Maryland', zh: '马里兰大学地理科学系' },
    },
    {
      period: { en: '2015.9–2015.12', zh: '2015.9–2015.12' },
      role: { en: 'Teaching Assistant and Graduate Research Assistant', zh: '助教与研究生研究助理' },
      org: { en: 'Department of Geographical Sciences, University of Maryland', zh: '马里兰大学地理科学系' },
    },
    {
      period: { en: '2014.10–2015.3', zh: '2014.10–2015.3' },
      role: { en: 'Technology Assistant Consultant', zh: '技术助理顾问' },
      org: { en: 'Office of Regional Economic Integration, Asian Development Bank', zh: '亚洲开发银行区域经济一体化办公室' },
    },
    {
      period: { en: '2014.6–2014.8', zh: '2014.6–2014.8' },
      role: { en: 'Intern Consultant', zh: '实习顾问' },
      org: { en: 'Office of Regional Economic Integration, Asian Development Bank', zh: '亚洲开发银行区域经济一体化办公室' },
    },
    {
      period: { en: '2012.8–2015.5', zh: '2012.8–2015.5' },
      role: { en: 'Graduate Research Assistant', zh: '研究生研究助理' },
      org: { en: 'Department of Geographical Sciences, University of Maryland', zh: '马里兰大学地理科学系' },
    },
    {
      period: { en: '2012.2–2012.5', zh: '2012.2–2012.5' },
      role: { en: 'Graduate Assistant of the Vice Dean of Graduate School', zh: '研究生院副院长研究生助理' },
      org: { en: 'Binghamton University', zh: '宾汉姆顿大学' },
    },
    {
      period: { en: '2011.7–2011.8', zh: '2011.7–2011.8' },
      role: { en: 'Internship as Software Engineer', zh: '软件工程师实习' },
      org: {
        en: 'Geomatics Center of Zhejiang, Zhejiang Institute of Survey and Mapping, China',
        zh: '浙江省测绘与地理信息局地理信息中心，中国',
      },
    },
    {
      period: { en: '2008.11–2010.7', zh: '2008.11–2010.7' },
      role: { en: 'Undergraduate Research Assistant', zh: '本科生研究助理' },
      org: {
        en: 'Global Navigation Satellite System and Application Lab, Remote Sensing and GIS Institute, Peking University, China',
        zh: '北京大学遥感与地理信息系统研究所全球导航卫星系统与应用实验室，中国',
      },
    },
  ] satisfies CvEntry[],
  awards: [
    {
      en: "International Graduate Workshop on GeoInformatics '20 Excellent Presentation Award",
      zh: '国际地理信息学研究生研讨会（GeoInformatics ’20）优秀报告奖',
    },
    {
      en: "NSF Mobility Workshop '17 Travel Grant",
      zh: '美国国家科学基金会移动性研讨会（NSF Mobility Workshop ’17）旅行资助',
    },
    {
      en: "ACM SIGSPATIAL'14 Travel Grant",
      zh: 'ACM SIGSPATIAL’14 旅行资助',
    },
  ] satisfies LocalizedText[],
  service: [
    {
      label: { en: 'Journal reviewer', zh: '期刊审稿人' },
      items: [
        { en: 'ACM Transactions on Spatial Algorithms and Systems', zh: 'ACM Transactions on Spatial Algorithms and Systems' },
        { en: 'Applied Energy', zh: 'Applied Energy' },
        { en: 'Cartography and Geographic Information Science (CartoGIS)', zh: 'Cartography and Geographic Information Science (CartoGIS)' },
        { en: 'Cities', zh: 'Cities' },
        { en: 'Computers, Environment and Urban Systems (CEUS)', zh: 'Computers, Environment and Urban Systems (CEUS)' },
        { en: 'Environment and Planning B: Urban Analytics and City Science (EPB)', zh: 'Environment and Planning B: Urban Analytics and City Science (EPB)' },
        { en: 'Geo-spatial Information Science (TGSI)', zh: 'Geo-spatial Information Science (TGSI)' },
        { en: 'International Journal of Applied Earth Observation and Geoinformation (IJAEOG)', zh: 'International Journal of Applied Earth Observation and Geoinformation (IJAEOG)' },
        { en: 'International Journal of Geographical Information Science (IJGIS)', zh: 'International Journal of Geographical Information Science (IJGIS)' },
        { en: 'Journal of Location Based Services (JLBS)', zh: 'Journal of Location Based Services (JLBS)' },
        { en: 'Journal of Spatial Information Science (JOSIS)', zh: 'Journal of Spatial Information Science (JOSIS)' },
        { en: 'PLOS One', zh: 'PLOS One' },
        { en: 'Scientific Reports', zh: 'Scientific Reports' },
        { en: 'Transactions in GIS (T-GIS)', zh: 'Transactions in GIS (T-GIS)' },
        { en: 'Transportation Research Part A: Policy and Practice', zh: 'Transportation Research Part A: Policy and Practice' },
      ],
    },
    {
      label: { en: 'Conference program committees', zh: '会议程序委员会' },
      items: [
        {
          en: 'International Symposium on Location-Based Big Data and GeoAI 2023 (LocBigDataAI 2023)',
          zh: '2023 年位置大数据与地理人工智能国际研讨会（LocBigDataAI 2023）',
        },
        {
          en: 'Traffic4cast 2022: from Few Public Vehicle Counters to Entire City-Wide Traffic',
          zh: 'Traffic4cast 2022：从少量公共车辆计数器到全城市交通',
        },
        {
          en: 'International Cartography Association Commission on Location Based Services, 16th International Conference on Location Based Services (LBS 2020, 2023)',
          zh: '国际制图协会位置服务委员会，第 16 届位置服务国际会议（LBS 2020、2023）',
        },
        {
          en: '6th, 7th, and 8th International Conference on Geographical Information Systems Theory, Application and Management (GISTAM 2020, 2021, and 2022)',
          zh: '第 6、7、8 届地理信息系统理论、应用与管理国际会议（GISTAM 2020、2021、2022）',
        },
        {
          en: 'International Cartography Association Commission on Location Based Services, International Symposium on Location-Based Big Data 2019 (LocBigData 2019)',
          zh: '国际制图协会位置服务委员会，2019 年位置大数据国际研讨会（LocBigData 2019）',
        },
        {
          en: '8th International Symposium “From Data to Models and Back” (DataMod 2019)',
          zh: '第 8 届“从数据到模型再返回”国际研讨会（DataMod 2019）',
        },
      ],
    },
    {
      label: { en: 'Membership in professional associations', zh: '专业协会会员' },
      items: [
        {
          en: 'Co-founder of the Communication Group of Chinese Scholars and Students in Geography in Europe',
          zh: '欧洲中国地理学者与学生交流组联合创始人',
        },
        { en: 'Association of American Geographers', zh: '美国地理学家协会' },
        { en: 'Chinese Professional in Geographic Information Systems (CPGIS)', zh: '华人地理信息科学协会（CPGIS）' },
        {
          en: 'Official Nominator of VinFuture Prize by the VinFuture Foundation',
          zh: 'VinFuture 基金会 VinFuture 奖官方提名人',
        },
      ],
    },
    {
      label: { en: 'Grant reviewer', zh: '基金评审人' },
      items: [
        {
          en: 'German Israeli Foundation for Scientific Research & Development. 2022',
          zh: '德国-以色列科学研究与发展基金会（German Israeli Foundation for Scientific Research & Development），2022',
        },
      ],
    },
    {
      label: { en: 'Department service', zh: '院系服务' },
      items: [
        {
          en: 'Representative of the GIS Unit in the department faculty meeting since 2020.11',
          zh: '自 2020.11 起担任地理信息系统教研室在院系教师会议中的代表',
        },
      ],
    },
    {
      label: { en: 'Workshop organizer', zh: '研讨会组织者' },
      items: [
        {
          en: 'CartoAI: AI for cartography. GIScience 2023',
          zh: 'CartoAI：面向地图学的人工智能，GIScience 2023',
        },
        {
          en: 'Traffic4cast Data Workshop by the Institute of Advanced Research in Artificial Intelligence. 2022.7',
          zh: '人工智能高等研究院 Traffic4cast 数据研讨会，2022.7',
        },
      ],
    },
  ] satisfies CvServiceGroup[],
};
