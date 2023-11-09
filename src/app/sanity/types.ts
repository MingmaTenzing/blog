import { PortableTextBlock } from '@portabletext/types';


export interface Blog {
author: [
    name: string,
    image: string,
];
categories: category[],
mainImage: string;
subtitle: string;
slug: string;
title:string;
_createdAt: Date;
_id:string;
body: PortableTextBlock[];
}

export interface category{
    title: string,
    _id: string,
}