'use client';

import { useEffect } from 'react';
import { Howl } from 'howler';

export default function SoundPage() {
  useEffect(() => {
    const sound = new Howl({
      src: ['/rec.mp3'],
      volume: 1.0,
    });

    const playSound = () => {
      sound.play();
    };

    // Play sound immediately and then every 2 seconds
    playSound();
    const intervalId = setInterval(playSound, 2000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
      if (sound.playing()) {
        sound.stop();
      }
      sound.unload();
    };
  }, []);

  return (
    <div>
      <h1>Sound Page</h1>
    </div>
  );
}
