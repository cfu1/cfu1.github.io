export interface CvEntry {
  period: string;
  role: string;
  org?: string;
}

export const cv = {
  education: {
    en: [
      { period: '2010', role: 'B.S. in Remote Sensing and GIS', org: 'Peking University, PRC' },
      { period: '2012', role: 'M.A. in Geography', org: 'Binghamton University, USA' },
      { period: '2018', role: 'PhD in Geography', org: 'University of Maryland, USA' },
    ] as CvEntry[],
    zh: [
      { period: '2010', role: '遥感与地理信息系统学士', org: '北京大学，中国' },
      { period: '2012', role: '地理学硕士', org: '宾汉姆顿大学，美国' },
      { period: '2018', role: '地理学博士', org: '马里兰大学，美国' },
    ] as CvEntry[],
  },
  positions: {
    en: [
      {
        period: '2021.11–',
        role: 'Group Leader of Urban Geoinformatics',
        org: 'Department of Geography, University of Zurich',
      },
      {
        period: '2020.10–',
        role: '"Oberassistent" (Lecturer/Senior Scientist)',
        org: 'Geographic Information Systems Unit, Department of Geography, University of Zurich',
      },
      {
        period: '2018.7–2020.9',
        role: 'Postdoctoral Fellow',
        org: 'Department of Geography, University of Zurich',
      },
      {
        period: '2016.2–2018.5',
        role: 'Teaching Assistant and Graduate Assistant',
        org: 'Department of Geographical Sciences, University of Maryland',
      },
      {
        period: '2016.1–2016.5',
        role: 'Instructor of Object-oriented programming for GIS',
        org: 'Department of Geographical Sciences, University of Maryland',
      },
      {
        period: '2016.1',
        role: 'Teacher of Big Data Analysis on Python',
        org: 'Department of Geographical Sciences, University of Maryland',
      },
      {
        period: '2015.9–2015.12',
        role: 'Teaching Assistant and Graduate Research Assistant',
        org: 'Department of Geographical Sciences, University of Maryland',
      },
      {
        period: '2014.10–2015.3',
        role: 'Technology Assistant Consultant',
        org: 'Office of Regional Economic Integration, Asian Development Bank',
      },
      {
        period: '2014.6–2014.8',
        role: 'Intern Consultant',
        org: 'Office of Regional Economic Integration, Asian Development Bank',
      },
      {
        period: '2012.8–2015.5',
        role: 'Graduate Research Assistant',
        org: 'Department of Geographical Sciences, University of Maryland',
      },
      {
        period: '2012.2–2012.5',
        role: 'Graduate Assistant of the Vice Dean of Graduate School',
        org: 'Binghamton University',
      },
      {
        period: '2011.7–2011.8',
        role: 'Internship as Software Engineer',
        org: 'Geomatics Center of Zhejiang, Zhejiang Institute of Survey and Mapping, China',
      },
      {
        period: '2008.11–2010.7',
        role: 'Undergraduate Research Assistant',
        org: 'Global Navigation Satellite System and Application Lab, Remote Sensing and GIS Institute, Peking University, China',
      },
    ] as CvEntry[],
    zh: [
      {
        period: '2021.11–至今',
        role: '城市地理信息学团队负责人',
        org: '苏黎世大学地理系',
      },
      {
        period: '2020.10–至今',
        role: '“Oberassistent”（讲师/资深科学家）',
        org: '苏黎世大学地理系地理信息系统教研室',
      },
      {
        period: '2018.7–2020.9',
        role: '博士后研究员',
        org: '苏黎世大学地理系',
      },
      {
        period: '2016.2–2018.5',
        role: '助教与研究生助理',
        org: '马里兰大学地理科学系',
      },
      {
        period: '2016.1–2016.5',
        role: '面向 GIS 的面向对象编程课程讲师',
        org: '马里兰大学地理科学系',
      },
      {
        period: '2016.1',
        role: 'Python 大数据分析课程教师',
        org: '马里兰大学地理科学系',
      },
      {
        period: '2015.9–2015.12',
        role: '助教与研究生研究助理',
        org: '马里兰大学地理科学系',
      },
      {
        period: '2014.10–2015.3',
        role: '技术助理顾问',
        org: '亚洲开发银行区域经济一体化办公室',
      },
      {
        period: '2014.6–2014.8',
        role: '实习顾问',
        org: '亚洲开发银行区域经济一体化办公室',
      },
      {
        period: '2012.8–2015.5',
        role: '研究生研究助理',
        org: '马里兰大学地理科学系',
      },
      {
        period: '2012.2–2012.5',
        role: '研究生院副院长研究生助理',
        org: '宾汉姆顿大学',
      },
      {
        period: '2011.7–2011.8',
        role: '软件工程师实习',
        org: '浙江省测绘与地理信息局地理信息中心，中国',
      },
      {
        period: '2008.11–2010.7',
        role: '本科生研究助理',
        org: '北京大学遥感与地理信息系统研究所全球导航卫星系统与应用实验室，中国',
      },
    ] as CvEntry[],
  },
  awards: {
    en: [
      "International Graduate Workshop on GeoInformatics '20 Excellent Presentation Award",
      "NSF Mobility Workshop '17 Travel Grant",
      "ACM SIGSPATIAL'14 Travel Grant",
    ] as string[],
    zh: [
      '国际地理信息学研究生研讨会（GeoInformatics ’20）优秀报告奖',
      '美国国家科学基金会移动性研讨会（NSF Mobility Workshop ’17）旅行资助',
      'ACM SIGSPATIAL’14 旅行资助',
    ] as string[],
  },
  service: {
    en: [
      'Journal reviewer: ACM Transactions on Spatial Algorithms and Systems, Applied Energy, Cartography and Geographic Information Science (CartoGIS), Cities, Computers, Environment and Urban Systems (CEUS), Environment and Planning B: Urban Analytics and City Science (EPB), Geo-spatial Information Science (TGSI), International Journal of Applied Earth Observation and Geoinformation (IJAEOG), International Journal of Geographical Information Science (IJGIS), Journal of Location Based Services (JLBS), Journal of Spatial Information Science (JOSIS), PLOS One, Scientific Reports, Transactions in GIS (T-GIS), Transportation Research Part A: Policy and Practice',
      'Conference program committees: International Symposium on Location-Based Big Data and GeoAI 2023 (LocBigDataAI 2023); Traffic4cast 2022: from Few Public Vehicle Counters to Entire City-Wide Traffic; International Cartography Association Commission on Location Based Services, 16th International Conference on Location Based Services (LBS 2020, 2023); 6th, 7th, and 8th International Conference on Geographical Information Systems Theory, Application and Management (GISTAM 2020, 2021, and 2022); International Cartography Association Commission on Location Based Services, International Symposium on Location-Based Big Data 2019 (LocBigData 2019); 8th International Symposium “From Data to Models and Back” (DataMod 2019)',
      'Membership in professional associations: Co-founder of the Communication Group of Chinese Scholars and Students in Geography in Europe; Association of American Geographers; Chinese Professional in Geographic Information Systems (CPGIS); Official Nominator of VinFuture Prize by the VinFuture Foundation',
      'Grant reviewer: German Israeli Foundation for Scientific Research & Development. 2022',
      'Department service: Representative of the GIS Unit in the department faculty meeting since 2020.11',
      'Workshop organizer: CartoAI: AI for cartography. GIScience 2023; Traffic4cast Data Workshop by the Institute of Advanced Research in Artificial Intelligence. 2022.7',
    ] as string[],
    zh: [
      '期刊审稿人：ACM Transactions on Spatial Algorithms and Systems、Applied Energy、Cartography and Geographic Information Science (CartoGIS)、Cities、Computers, Environment and Urban Systems (CEUS)、Environment and Planning B: Urban Analytics and City Science (EPB)、Geo-spatial Information Science (TGSI)、International Journal of Applied Earth Observation and Geoinformation (IJAEOG)、International Journal of Geographical Information Science (IJGIS)、Journal of Location Based Services (JLBS)、Journal of Spatial Information Science (JOSIS)、PLOS One、Scientific Reports、Transactions in GIS (T-GIS)、Transportation Research Part A: Policy and Practice',
      '会议程序委员会：2023 年位置大数据与地理人工智能国际研讨会（LocBigDataAI 2023）；Traffic4cast 2022：从少量公共车辆计数器到全城市交通；国际制图协会位置服务委员会，第 16 届位置服务国际会议（LBS 2020、2023）；第 6、7、8 届地理信息系统理论、应用与管理国际会议（GISTAM 2020、2021、2022）；国际制图协会位置服务委员会，2019 年位置大数据国际研讨会（LocBigData 2019）；第 8 届“从数据到模型再返回”国际研讨会（DataMod 2019）',
      '专业协会会员：欧洲中国地理学者与学生交流组联合创始人；美国地理学家协会；华人地理信息科学协会（CPGIS）；VinFuture 基金会 VinFuture 奖官方提名人',
      '基金评审人：德国-以色列科学研究与发展基金会（German Israeli Foundation for Scientific Research & Development），2022',
      '院系服务：自 2020.11 起担任地理信息系统教研室在院系教师会议中的代表',
      '研讨会组织者：CartoAI：面向地图学的人工智能，GIScience 2023；人工智能高等研究院 Traffic4cast 数据研讨会，2022.7',
    ] as string[],
  },
};
