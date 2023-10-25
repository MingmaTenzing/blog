import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environments';
import { TypeBlog, TypeBlogFields } from './types';
import { createClient } from 'contentful';
@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor() {}

  client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken,
    environment: environment.contentful.environment,
  });
  getBlogs() {
    this.client.getEntries({content_type: 'blog'}).then(({items}) => console.log(items))
  }
}
