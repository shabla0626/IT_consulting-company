import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/lib/site";

type BreadcrumbItem = {
  name: string;
  href: string;
};

type BreadcrumbJsonLdProps = {
  items: BreadcrumbItem[];
};

export default function BreadcrumbJsonLd({
  items,
}: BreadcrumbJsonLdProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: absoluteUrl(item.href),
        })),
      }}
    />
  );
}
