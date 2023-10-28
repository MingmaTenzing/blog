import { Pipe, PipeTransform } from '@angular/core';
import { SanityImagePipe } from './sanity-image.pipe';
import { PortableTextComponents, toHTML } from '@portabletext/to-html';
import { PortableTextBlock } from '@portabletext/types';

@Pipe({
  name: 'portableText'
})
export class PortableTextPipe implements PipeTransform {
  constructor(private sanityImagePipe: SanityImagePipe) {}

  components: PortableTextComponents = {
    types: {
      image: ({ value }: { value: string }) =>
        '<img loading="lazy" class="rounded-lg w-full h-[500px] object-cover  object-center" src="' + this.sanityImagePipe.transform(value, 900) + '" />',
    },
  };
  transform(value: PortableTextBlock[]): string {
    return toHTML(value, { components: this.components });
  }
}
