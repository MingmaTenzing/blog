import { PortableTextBlock } from '@portabletext/types';


export interface Blog {
author: string;
categories: string[];
mainImage: string;
slug: string;
title:string;
_createdAt: Date;
_id:string;
body: PortableTextBlock[];
}