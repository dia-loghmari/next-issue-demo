export type PageParams = {
  slug: string|Array<string>;
  title: string;
  components: Array<{
    name: string;
    props: Record<string, unknown>;
  }>;
};

export const allPages: PageParams[] = [
  {
    slug: '/',
    title: "Home",
    components: [
      {
        name: "Header",
        props: {},
      },
    ],
  },
  {
    slug: "about",
    title: "About",
    components: [
      {
        name: "Header",
        props: {},
      },
      {
        name: "Carousel",
        props: {
          title: "this is a carousel",
        },
      },
    ],
  },
  {
    slug: "contact",
    title: "Contact",
    components: [
      {
        name: "Header",
        props: {},
      },
      {
        name: "Accordion",
        props: {
          title: "this is a an accordion",
        },
      },
    ],
  },

];
