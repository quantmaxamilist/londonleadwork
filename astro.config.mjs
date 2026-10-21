import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://londonleadwork.co.uk',
  output: 'static',
  build: { format: 'file' },
  trailingSlash: 'ignore',
  scopedStyleStrategy: 'class',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  server: { port: 4341 },
  devToolbar: { enabled: false },
});
