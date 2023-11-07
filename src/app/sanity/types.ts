import { PortableTextBlock } from '@portabletext/types';


export interface Blog {
author: [
    name: string,
    image: string,
];
categories: string[];
mainImage: string;
subtitle: string;
slug: string;
title:string;
_createdAt: Date;
_id:string;
body: PortableTextBlock[];
}