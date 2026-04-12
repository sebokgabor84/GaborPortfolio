import React, { useEffect } from "react";
import type { PageSeoProps } from "../../data/types";
import { PageSeoPropsSchema } from "../../data/types";

// Supported locales from the app config
const SUPPORTED_LOCALES = ["en", "de", "hu"];

export const SeoHead: React.FC<PageSeoProps> = (props) => {
  // Validate props on development
  if (import.meta.env.DEV) {
    try {
      PageSeoPropsSchema.parse(props);
    } catch (e) {
      console.error("SEO Props Validation Failed:", e);
    }
  }

  const { title, description, canonicalUrl, ogImage, locale, jsonLd } = props;

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 1.5 Update HTML lang attribute for accessibility/SEO
    document.documentElement.lang = locale;

    // Helper to safely upsert meta/link tags
    const upsertTag = (
      tagName: "meta" | "link",
      attributes: Record<string, string>
    ) => {
      // Build a selector to find existing
      const primaryAttr = tagName === "meta" ? "name" : "rel";
      const secondaryAttr = tagName === "meta" ? "property" : "";
      
      let selector = `${tagName}`;
      if (attributes[primaryAttr]) {
        selector += `[${primaryAttr}="${attributes[primaryAttr]}"]`;
      } else if (secondaryAttr && attributes[secondaryAttr]) {
        selector += `[${secondaryAttr}="${attributes[secondaryAttr]}"]`;
      } else if (attributes["hreflang"]) {
         selector += `[hreflang="${attributes["hreflang"]}"]`
      }

      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement(tagName);
        document.head.appendChild(element);
      }
      
      Object.entries(attributes).forEach(([key, value]) => {
        element!.setAttribute(key, value);
      });
    };

    // 2. Standard Meta
    upsertTag("meta", { name: "description", content: description });
    
    // 3. Open Graph
    upsertTag("meta", { property: "og:title", content: title });
    upsertTag("meta", { property: "og:description", content: description });
    upsertTag("meta", { property: "og:url", content: canonicalUrl });
    upsertTag("meta", { property: "og:image", content: ogImage });
    upsertTag("meta", { property: "og:locale", content: locale });
    upsertTag("meta", { property: "og:type", content: "website" });

    // 4. Twitter Cards
    upsertTag("meta", { name: "twitter:card", content: "summary_large_image" });
    upsertTag("meta", { name: "twitter:title", content: title });
    upsertTag("meta", { name: "twitter:description", content: description });
    upsertTag("meta", { name: "twitter:image", content: ogImage });

    // 5. Canonical
    upsertTag("link", { rel: "canonical", href: canonicalUrl });

    // 6. Hreflang alternates
    // We assume canonicalUrl represents the current route in the current language.
    // In a real multi-lingual site, you'd calculate the exact pathname for each locale.
    // For now, we point them to the domain root or just swap the path if structure dictates.
    SUPPORTED_LOCALES.forEach((lang) => {
      // Simplified: Just use canonicalUrl for now as an example constraint
      upsertTag("link", { rel: "alternate", hreflang: lang, href: canonicalUrl });
    });
    upsertTag("link", { rel: "alternate", hreflang: "x-default", href: canonicalUrl });

    return () => {
      // Cleanup? Usually SEO tags don't strictly need cleanup on SPA navigations 
      // if every page overrides them hook-style, but React Router v7 framework
      // might just hydrate over anyway.
    };
  }, [title, description, canonicalUrl, ogImage, locale]);

  return (
    <>
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </>
  );
};
