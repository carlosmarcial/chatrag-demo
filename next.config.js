/** @type {import('next').NextConfig} */
// Dynamically include remote image hosts used in production (Supabase storage, custom logos)
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
let supabaseHost = null;
try {
  if (SUPABASE_URL) supabaseHost = new URL(SUPABASE_URL).hostname;
} catch {}

function parseHost(url) {
  try { return url ? new URL(url).hostname : null; } catch { return null; }
}
const headerLogoHost = parseHost(process.env.NEXT_PUBLIC_HEADER_LOGO_URL);
const aiLogoHost = parseHost(process.env.NEXT_PUBLIC_AI_RESPONSE_LOGO_URL);

const remotePatterns = [
  { protocol: 'https', hostname: 'replicate.delivery', port: '', pathname: '/xezq/**' },
];
if (supabaseHost) {
  remotePatterns.push({ protocol: 'https', hostname: supabaseHost, port: '', pathname: '/storage/v1/object/public/**' });
}
if (headerLogoHost) {
  remotePatterns.push({ protocol: 'https', hostname: headerLogoHost, port: '', pathname: '/**' });
}
if (aiLogoHost) {
  remotePatterns.push({ protocol: 'https', hostname: aiLogoHost, port: '', pathname: '/**' });
}

const nextConfig = {
  experimental: {
    reactCompiler: true,
    serverActions: {
      allowedOrigins: ["localhost:3000"]
    }
  },
  eslint: {
    // Do not fail the production build on ESLint errors
    ignoreDuringBuilds: true,
  },
  // Allow cross-origin requests from ngrok for development
  allowedDevOrigins: ["cd1fdd0c8c48.ngrok-free.app"],
  typescript: {
    // This will allow builds to complete even with TypeScript errors
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig; 
