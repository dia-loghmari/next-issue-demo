"use client";
import { allPages } from "../all-pages";
import resolveComponent from "../resolveComponent";

type PageProps = {
  params: Promise<{ slug?: string[] | string }>;
};

/* export async function generateStaticParams() {
  return allPages.map((onePage) => ({
    slug: Array.isArray(onePage.slug) ? onePage.slug : [onePage.slug],
  }));
} */

export default async function Page({ params }: PageProps) {
  const slug = (await params).slug || ['/'];
  const page = allPages.find((p) => p.slug === (Array.isArray(slug) ? slug.join("/") : slug));

  if (!page) {
    return <div>Page not found</div>;
  }

  return (
    <div>
      <h1>{page.title}</h1>
      {page.components.map((component, index) => {
        const Component = resolveComponent(component.name);
        return Component ? <Component key={index} {...component.props} /> : null;
      })}
    </div>
  );
}
