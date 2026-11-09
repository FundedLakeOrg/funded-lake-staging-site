import { useEffect } from "react";

const image = "https://fundedlake.com/assets/logo-fundedlake.webp";

export default function Seo({ title, description, path }) {
  useEffect(() => {
    const url = `https://fundedlake.com${path}`;
    document.title = title;
    const set = (selector, tag, attributes) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement(tag);
        document.head.appendChild(element);
      }
      for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, value);
    };
    set('meta[name="description"]', 'meta', { name: 'description', content: description });
    set('link[rel="canonical"]', 'link', { rel: 'canonical', href: url });
    for (const [property, content] of Object.entries({
      'og:type': 'website', 'og:site_name': 'FundedLake', 'og:title': title,
      'og:description': description, 'og:url': url, 'og:image': image,
      'og:image:alt': 'FundedLake logo',
    })) set(`meta[property="${property}"]`, 'meta', { property, content });
    for (const [name, content] of Object.entries({
      'twitter:card': 'summary', 'twitter:title': title,
      'twitter:description': description, 'twitter:image': image,
    })) set(`meta[name="${name}"]`, 'meta', { name, content });
  }, [title, description, path]);
  return null;
}
