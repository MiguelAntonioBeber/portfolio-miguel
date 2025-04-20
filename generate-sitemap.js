import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://miguelantoniobeber.github.io/portfolio-miguel-beber/' });

const writeStream = createWriteStream('./public/sitemap.xml');

sitemap.pipe(writeStream);

sitemap.write({ url: '/portfolio-miguel-beber/', changefreq: 'monthly', priority: 1.0 });
sitemap.write({ url: '/portfolio-miguel-beber/#/contato', changefreq: 'monthly', priority: 0.8 });

sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log('✅ Sitemap gerado com sucesso!');
});
