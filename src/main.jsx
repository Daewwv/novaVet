import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import site from "./config/site";
import "./styles/global.css";

const { seo, theme } = site;

const setMeta = (selector, attributes) => {
  let tag = document.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    tag.setAttribute(name, value);
  });
};

document.title = seo.title;

setMeta('meta[name="description"]', {
  name: "description",
  content: seo.description,
});

setMeta('meta[name="keywords"]', {
  name: "keywords",
  content: seo.keywords,
});

setMeta('meta[name="author"]', {
  name: "author",
  content: seo.author,
});

setMeta('meta[property="og:title"]', {
  property: "og:title",
  content: seo.title,
});

setMeta('meta[property="og:description"]', {
  property: "og:description",
  content: seo.description,
});

setMeta('meta[property="og:image"]', {
  property: "og:image",
  content: seo.ogImage,
});

setMeta('meta[property="og:type"]', {
  property: "og:type",
  content: "website",
});

const root = document.documentElement;

const variables = {
  "--primary": theme.colors.primary,
  "--primary-dark": theme.colors.primaryDark,
  "--secondary": theme.colors.secondary,
  "--accent": theme.colors.accent,
  "--background": theme.colors.background,
  "--surface": theme.colors.surface,
  "--surface-strong": theme.colors.surfaceStrong,
  "--text": theme.colors.text,
  "--heading": theme.colors.heading,
  "--muted": theme.colors.muted,
  "--border": theme.colors.border,
  "--dark": theme.colors.dark,
  "--dark-soft": theme.colors.darkSoft,
  "--white": theme.colors.white,
  "--whatsapp": theme.colors.whatsapp,

  "--font-body": theme.fonts.body,
  "--font-heading": theme.fonts.heading,

  "--radius-small": theme.radius.small,
  "--radius-medium": theme.radius.medium,
  "--radius-large": theme.radius.large,
  "--radius-pill": theme.radius.pill,

  "--shadow-soft": theme.shadow.soft,
  "--shadow-medium": theme.shadow.medium,
  "--shadow-strong": theme.shadow.strong,
};

Object.entries(variables).forEach(([property, value]) => {
  root.style.setProperty(property, value);
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);