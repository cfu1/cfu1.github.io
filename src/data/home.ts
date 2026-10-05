export interface HomeContent {
  role: string;
  bio: string[];
}

export const home: Record<'en' | 'zh', HomeContent> = {
  en: {
    role: 'Professor, College of Information and Electrical Engineering, China Agricultural University',
    bio: [
      'Cheng Fu is a Professor at the College of Information and Electrical Engineering, China Agricultural University, since October 2024. He was previously a Postdoctoral Researcher, then a Lecturer and Senior Researcher (Oberassistent), and the Group Leader of Urban GeoInformatics in the Department of Geography, University of Zurich (UZH), Switzerland.',
      'Cheng received his Ph.D. in Geography from the Department of Geographical Sciences, University of Maryland (UMD), USA in 2018. Before that, he received his M.A. in Geography from Binghamton University (BU), NY, USA, and his B.S. in Remote Sensing and GIS from Peking University (PKU), Beijing, China.',
    ],
  },
  zh: {
    role: '中国农业大学信息与电气工程学院教授',
    bio: [
      '付诚自 2024 年 10 月起任中国农业大学信息与电气工程学院教授。此前，他先后在瑞士苏黎世大学地理系担任博士后研究员、讲师兼高级研究员（Oberassistent），并自 2021 年 11 月起担任城市地理信息研究组负责人。',
      '他于 2018 年在美国马里兰大学地理科学系获地理学博士学位；此前在美国宾汉姆顿大学获地理学硕士学位，在北京大学获遥感与地理信息系统学士学位。',
    ],
  },
};
