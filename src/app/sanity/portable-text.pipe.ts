import { Pipe, PipeTransform } from '@angular/core';
import { SanityImagePipe } from './sanity-image.pipe';
import { PortableTextComponents, toHTML } from '@portabletext/to-html';
import { PortableTextBlock } from '@portabletext/types';

@Pipe({
  name: 'portableText',
})
export class PortableTextPipe implements PipeTransform {
  constructor(private sanityImagePipe: SanityImagePipe) {}

  components: PortableTextComponents = {
    types: {
      image: ({ value }: { value: string }) =>
        '<img loading="lazy" class="my-4 rounded-lg w-full h-[500px] object-cover  object-center" src="' +
        this.sanityImagePipe.transform(value, 900) +
        '"  />',
    },
    marks: {},
    block: {
      blockquote: ({ children }) =>
        ` <blockquote class=" my-4  border-l-4 pl-2  italic  border-gray-400 ">${children}</blockquote>`,
      h3: ({ children, value }) => {
        return `<h3 class="font-bold text-2xl my-4">${children}</h3>`;
      },
      h2: ({ children, value }) => {
        return `<h2 class="font-bold text-3xl my-4">${children}</h2>`;
      },

      h4: ({ children, value }) => {
        return `<h2 class="font-semibold text-xl my-4">${children}</h2>`;
      },
    },

    list: {
      bullet: ({ children }) => ` <ul class=" m-6 list-disc">${children} </ul>`,
    },
  };
  transform(value: PortableTextBlock[]): string {
    return toHTML(value, { components: this.components });
  }
}
