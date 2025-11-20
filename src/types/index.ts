export type TBanner = {
  _id: number;
  subtitle: string;
  title: string;
  description: string;
};
export type TProcess = {
  _id: number;
  title: string;
  description: string;
};
export type TProject = {
  id: number;
  projectTitle: string;
  name: string;
  description: string;
  link: string;
  author: string;
  fecility: string[];
  image: string | import("next/image").StaticImageData;
  category: string;
};
export type TTeam = {
  _id: number;
  name: string;
  position: string;
  image: string | import("next/image").StaticImageData;
};
export type TFeedback = {
  _id: number;
  name: string;
  position: string;
  feedback: string;
  image: string | import("next/image").StaticImageData;
};
export type TBlog = {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  link: string;
  image: string | import("next/image").StaticImageData;
};

export type TService = {
  id: number;
  title: string;
  description: string;
  image: string | import("next/image").StaticImageData;
  link: string;
  icon: React.ReactNode;
};
export type TBrand = {
  _id: number;
  title: string;
  image: string;
};
export type TTech = {
  _id: number;
  title: string;
};
