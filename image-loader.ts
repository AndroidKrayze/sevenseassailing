const basePath = "/sevenseassailing";

export default function githubPagesImageLoader({ src }: { src: string }) {
  if (/^https?:\/\//.test(src) || src.startsWith("data:")) {
    return src;
  }

  const path = src.startsWith("/") ? src : `/${src}`;
  return `${basePath}${path}`;
}
