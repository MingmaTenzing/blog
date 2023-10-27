import { Injectable } from '@angular/core';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { createClient, ClientConfig, SanityClient } from '@sanity/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { from } from 'rxjs';
import imageUrlBuilder from '@sanity/image-url';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  private client: SanityClient;
  private imageUrlBuilder: ImageUrlBuilder;
  private clientConfig: ClientConfig = {
    projectId: environment.sanity.projectId,
    dataset: environment.sanity.dataset,
    apiVersion: environment.sanity.apiVersion,
    useCdn: environment.sanity.useCdn,
  };
  constructor(private http: HttpClient) {
    this.client = this.sanityClient();
    this.imageUrlBuilder = imageUrlBuilder(this.client);

  }
  private sanityClient(): SanityClient {
    return createClient(this.clientConfig);
  }

   getAllPosts(){
   const promise = this.sanityClient().fetch(`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      "categories": categories[]->title,
        "author": author -> name,
      body
    }`)
    return from(promise)
  }
  getImageUrlBuilder(source: SanityImageSource): ImageUrlBuilder {
    return this.imageUrlBuilder.image(source);
  }

  getSinglePost(slug:string) {
    const promise = this.sanityClient().fetch(`*[_type == "post" && slug.current == "${slug}"][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      "categories": categories[]->title,
      "author": [author->name, author->image.asset->url],
      body
    }`)
    return from(promise)
  }
}
