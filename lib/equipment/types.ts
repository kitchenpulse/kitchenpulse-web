export type FaqItem = { q: string; a: string };

export type ContentSection = {
  heading: string;
  body: string;
};

export type Highlight = {
  label: string;
  body: string;
};

export type RelatedLink = {
  href: string;
  title: string;
  body?: string;
};

export type EquipmentKind = "hub" | "cluster" | "leaf";

export type EquipmentPageData = {
  /** URL segment under /equipment; empty string for hub */
  slug: string;
  kind: EquipmentKind;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  primaryKeyword: string;
  eyebrow?: string;
  highlights?: Highlight[];
  sections: ContentSection[];
  /** Slugs of related equipment pages (cluster or leaf) */
  relatedSlugs: string[];
  /** Parent cluster slug for leaves */
  clusterSlug?: string;
  linkFitOut?: boolean;
  linkHvac?: boolean;
  faqs: FaqItem[];
  includeProductSchema?: boolean;
  productName?: string;
  ctaHeading: string;
  ctaBody: string;
  whatsappMessage: string;
  /** Card blurb on hub/cluster listings */
  cardBody?: string;
  cardTitle?: string;
};
