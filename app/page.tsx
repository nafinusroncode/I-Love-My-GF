'use client';

import { useState } from 'react';
import DomeGallery from '@/components/DomeGallery';
import InteractionFlow from '@/components/InteractionFlow';

const basePath = '/I-Love-My-GF';

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);

  const userImages = [
    `${basePath}/1.jpeg`,
    `${basePath}/2.jpeg`,
    `${basePath}/3.jpeg`,
    `${basePath}/4.jpeg`,
    `${basePath}/5.jpeg`,
    `${basePath}/6.jpeg`,
    `${basePath}/7.jpeg`,
    `${basePath}/8.jpeg`,
    `${basePath}/9.jpeg`,
    `${basePath}/10.jpeg`,
    `${basePath}/11.jpeg`,
    `${basePath}/12.jpeg`,
    `${basePath}/13.jpeg`,
    `${basePath}/14.jpeg`,
    `${basePath}/15.jpeg`,
  ];

  return (
    <main className="w-screen h-screen bg-[#060010]">
      {!showGallery ? (
        <InteractionFlow onFlowComplete={() => setShowGallery(true)} />
      ) : (
        <>
          <audio src={`${basePath}/pretty.mp3`} autoPlay loop className="hidden" />
          <DomeGallery
            images={userImages}
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
            autoRotationSpeed={0.1}
          />
        </>
      )}
    </main>
  );
}
