/** @type {import('next').NextConfig} */
const isProduction = process.env.NEXT_PUBLIC_MODE === 'production';
const nextConfig = {
    basePath: isProduction ? '/hackathon' : '',
    devIndicators: {
        appIsrStatus: false,
      },
};

export default nextConfig;
