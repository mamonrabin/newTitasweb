export type TBanner = {
    _id: string;
    subtitle: string;
    title: string;
    description: string;
}
export type TProcess = {
     _id: string;
    title: string;
    description: string;
}
export type TProject = {
   _id: string;
   slug: string;
    companyName: string;
    title: string;
    link: string;
    author: string;
    description: string;   
    image: string | import('next/image').StaticImageData  
    category: string;   
}
export type TTeam = {
    _id: string;
    name: string;
    position: string;  
    image: string | import('next/image').StaticImageData  
}
export type TFeedback = {
    _id: string;
    name: string;
    position: string;  
    feedback: string;  
    image: string | import('next/image').StaticImageData  
}
export type TBlog = {
    _id: string;
    slug: string;
    title: string;
    description: string;  
    author: string;   
    category: string;  
    createdAt: string;  
    image: string | import('next/image').StaticImageData  
    authorImg: string | import('next/image').StaticImageData  
}

export type TService = {
    _id: string;
    slug: string;
    title: string;
    description: string;  
    image: string;
}
export type TBrand = {
    _id: string;
    title: string; 
    image: string;
}
export type TTech = {
    _id: string;
    title: string; 
}