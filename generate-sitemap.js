import fs from 'fs';
import path from 'path';

// Read the constants file as a plain string to avoid asset import errors (PDF/PNG) in Node
const constantsPath = path.join(process.cwd(), 'src', 'constants', 'index.js');
const fileContent = fs.readFileSync(constantsPath, 'utf8');

// Use regex to extract the PROJECTS and RESEARCH blocks
const projectsMatch = fileContent.match(/export const PROJECTS\s*=\s*\[([\s\S]*?)\];/);
const researchMatch = fileContent.match(/export const RESEARCH\s*=\s*\[([\s\S]*?)\];/);

const projectIds = [];
const researchIds = [];

// Regex to extract `id: "some-id"`
const idRegex = /id:\s*["']([^"']+)["']/g;

if (projectsMatch) {
  let match;
  while ((match = idRegex.exec(projectsMatch[1])) !== null) {
    projectIds.push(match[1]);
  }
}

if (researchMatch) {
  let match;
  // Reset the global regex index just in case, though it's technically a new string
  idRegex.lastIndex = 0; 
  while ((match = idRegex.exec(researchMatch[1])) !== null) {
    researchIds.push(match[1]);
  }
}

// SILENT FAILURE GUARD
if (projectIds.length === 0) {
  console.error("❌ FATAL: No project IDs were extracted. The regex may have broken or PROJECTS export is missing.");
  process.exit(1);
}

if (researchIds.length === 0) {
  console.error("❌ FATAL: No research IDs were extracted. The regex may have broken or RESEARCH export is missing.");
  process.exit(1);
}

const today = new Date().toISOString().split('T')[0];
const baseUrl = 'https://pubbadev.cv';
const staticRoutes = ['/', '/experience', '/research', '/technologies'];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
${projectIds.map(id => `  <url>
    <loc>${baseUrl}/project/${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
${researchIds.map(id => `  <url>
    <loc>${baseUrl}/research/${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;

const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, sitemapContent);

console.log(`✅ Sitemap successfully generated at public/sitemap.xml`);
console.log(`Included ${staticRoutes.length} static routes and ${projectIds.length + researchIds.length} dynamic routes.`);
