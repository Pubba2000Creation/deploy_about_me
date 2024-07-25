import { useEffect, useState } from 'react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Initial volume set to 50%

  const togglePlay = () => {
    const audio = document.getElementById('background-music');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(error => {
        console.log("Audio playback was prevented.", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const audio = document.getElementById('background-music');
    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  useEffect(() => {
    const audio = document.getElementById('background-music');
    const handleAutoPlay = () => {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(error => console.log("Audio playback was prevented.", error));
    };

    // Listen for user interaction to enable autoplay
    window.addEventListener('click', handleAutoPlay, { once: true });

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('click', handleAutoPlay);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button 
        onClick={togglePlay} 
        className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600"
      >
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
      <div className="mt-2">
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={volume} 
          onChange={handleVolumeChange} 
          className="w-32 h-5 rounded-md overflow-hidden appearance-none bg-gray-300 outline-none"
        />
      </div>
      <audio id="background-music" loop>
        <source src="/bg.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
