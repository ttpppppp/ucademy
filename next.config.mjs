/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cloud.z.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 's3-sgn09.fptcloud.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'techvccloud.mediacdn.vn',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'vietnix.vn',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'dotnetguru.org',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  
export default nextConfig;
  