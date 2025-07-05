'use client';

import dynamic from 'next/dynamic';

const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), {
  ssr: false,
  loading: () => <div className="fixed top-0 left-0 w-full h-full bg-black" />,
});

export default function ClientAnimatedBackground() {
  return <AnimatedBackground />;
}
