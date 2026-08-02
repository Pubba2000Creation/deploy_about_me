import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, name = "Prabod Pubudu", type = "website" }) => {
  const pageTitle = title ? `${title} | ${name}` : `${name} | Portfolio`;
  const pageDescription = description || "Prabod Pubudu - Backend-focused Full Stack Engineer specializing in robust APIs, AI systems, and scalable architecture.";

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name='description' content={pageDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      
      {/* Twitter */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
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
        })}
      </script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default SEO;
