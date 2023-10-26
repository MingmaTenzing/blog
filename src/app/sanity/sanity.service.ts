import { Injectable } from '@angular/core';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { createClient, ClientConfig, SanityClient } from '@sanity/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { Blog } from './types';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  private client: SanityClient;
  private clientConfig: ClientConfig = {
    projectId: environment.sanity.projectId,
    dataset: environment.sanity.dataset,
    apiVersion: environment.sanity.apiVersion,
    useCdn: environment.sanity.useCdn,
  };
  constructor(private http: HttpClient) {
    this.client = this.sanityClient();
  }
  private sanityClient(): SanityClient {
    return createClient(this.clientConfig);
  }



  async getAllPosts():Promise<Blog[]> {
    return await this.sanityClient().fetch(`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      "categories": categories[]->title,
        "author": author -> name,
      body
    }`)
  }
}
