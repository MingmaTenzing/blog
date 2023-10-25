import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeAuthorFields {
    name: EntryFieldTypes.Symbol;
    profileImage: EntryFieldTypes.AssetLink;
    introduction?: EntryFieldTypes.Text;
}

export type TypeAuthorSkeleton = EntrySkeletonType<TypeAuthorFields, "author">;
export type TypeAuthor<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAuthorSkeleton, Modifiers, Locales>;

export interface TypeBlogFields {
    title?: EntryFieldTypes.Symbol;
    date: EntryFieldTypes.Date;
    content?: EntryFieldTypes.RichText;
    mainImage?: EntryFieldTypes.AssetLink;
    slug: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
    author: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    category?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeBlogSkeleton = EntrySkeletonType<TypeBlogFields, "blog">;
export type TypeBlog<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBlogSkeleton, Modifiers, Locales>;

export interface TypeCategoryFields {
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
}

export type TypeCategorySkeleton = EntrySkeletonType<TypeCategoryFields, "category">;
export type TypeCategory<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCategorySkeleton, Modifiers, Locales>;
