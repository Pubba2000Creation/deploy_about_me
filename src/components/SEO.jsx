import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const defaultSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Prabod Pubudu",
  "jobTitle": "Software Engineer / AI Engineer",
  "url": "https://pubbadev.cv",
  "sameAs": [
    "https://linkedin.com/in/prabod-pubudu-a707b0230",
    "https://github.com/Pubba2000Creation"
  ],
  "knowsAbout": [
    "Artificial Intelligence", "Machine Learning", "RAG", "LangChain",
    "Node.js", "NestJS", "Express", "Python", "Django", "Flask", "FastAPI",
    "Ruby", "Go", "React", "Next.js", "TypeScript"
  ]
};

const SEO = ({ title, description, name = "Prabod Pubudu", type = "website", image, url, schema }) => {
  const pageTitle = title ? `${title} | ${name}` : `${name} | Portfolio`;
  const pageDescription = description || "Prabod Pubudu - Backend-focused Full Stack Engineer specializing in robust APIs, AI systems, and scalable architecture.";
  const siteUrl = "https://pubbadev.cv";
  const pageUrl = url || siteUrl;
  
  // Use a fallback image URL here if the specific page doesn't provide one
  const pageImage = image || `${siteUrl}/default-og.jpg`; 
  
  const finalSchema = schema || defaultSchema;
  
  // Prevent duplicate JSON-LD on Home page since it's already in index.html
  const shouldRenderSchema = Boolean(schema || (title && title !== "Home"));

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name='description' content={pageDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={pageImage} />
      
      {/* Twitter */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {/* JSON-LD Structured Data */}
      {shouldRenderSchema && (
        <script type="application/ld+json">
          {JSON.stringify(finalSchema)}
        </script>
      )}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  schema: PropTypes.object,
};

export default SEO;
