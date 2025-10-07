// A simple, short, rising synth sound for correct answers.
export const CORRECT_ANSWER_SOUND = 'data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU';

// A simple, short, buzzing sound for incorrect answers.
export const INCORRECT_ANSWER_SOUND = 'data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU';

/**
 * Plays a sound from a Base64 encoded audio string.
 * @param base64Audio The Base64 data URL of the sound to play.
 */
export const playAudio = (base64Audio: string) => {
  try {
    const audio = new Audio(base64Audio);
    audio.volume = 0.4; // Set a moderate volume
    // The play() method returns a Promise which may be rejected
    // if the user hasn't interacted with the page yet.
    audio.play().catch(error => {
      // Log error if audio playback fails, but don't crash.
      console.error("Audio playback failed:", error);
    });
  } catch (error) {
    console.error("Failed to create audio element:", error);
  }
};
