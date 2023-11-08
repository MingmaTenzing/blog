import { PortableTextBlock } from '@portabletext/types';


export interface Blog {
author: [
    name: string,
    image: string,
];
categoryTitle: string[],
categoryId: string[],
mainImage: string;
subtitle: string;
slug: string;
title:string;
_createdAt: Date;
_id:string;
body: PortableTextBlock[];
}

export interface Categorytitle{
    title: string,



}

export interface CategoryId {
    _id: string;
}