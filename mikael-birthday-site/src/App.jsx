import { useMemo, useState } from 'react'

const seaLions = [
  { id: 1, left: '8%', top: '25%', delay: '0s', duration: '7s', size: 'small' },
  { id: 2, left: '72%', top: '22%', delay: '1s', duration: '8s', size: 'medium' },
  { id: 3, left: '18%', top: '58%', delay: '0.5s', duration: '9s', size: 'medium' },
  { id: 4, left: '78%', top: '63%', delay: '1.5s', duration: '7.5s', size: 'small' },
  { id: 5, left: '46%', top: '38%', delay: '0.8s', duration: '8.5s', size: 'large', special: true },
]

function App() {
  const [giftRevealed, setGiftRevealed] = useState(false)
  const [messageVisible, setMessageVisible] = useState(false)

  const bubbles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        left: `${5 + index * 5.2}%`,
        delay: `${(index % 6) * 0.9}s`,
        duration: `${7 + (index % 5)}s`,
        size: `${10 + (index % 4) * 6}px`,
      })),
    [],
  )

  const revealGift = () => {
    setGiftRevealed(true)
    setMessageVisible(true)
  }

  return (
    <div className="page-shell">
      <div className="ocean-glow glow-one" />
      <div className="ocean-glow glow-two" />

      <header className="hero-card">
        <h1>Happy Birthday, Mikael!</h1>
        <button className="message-button" onClick={() => setMessageVisible((prev) => !prev)}>
          {messageVisible ? 'Hide birthday note' : 'Show birthday note'}
        </button>

        {messageVisible && (
          <div className="love-note">
            <p>
              To the sweetest person ever, I hope your birthday is full of laughter, love and all the happiness you deserve. Don't ever change who you are at heart, just keep evolving into all you're meant to be.🩵 #kaelSalad
            </p>
          </div>
        )}
      </header>

      <main className="ocean-stage">
        <div className="water-surface" />

        {bubbles.map((bubble) => (
          <span
            key={bubble.id}
            className="bubble"
            style={{
              left: bubble.left,
              animationDelay: bubble.delay,
              animationDuration: bubble.duration,
              width: bubble.size,
              height: bubble.size,
            }}
          />
        ))}

        {seaLions.map((lion) => (
          <button
            key={lion.id}
            className={`sea-lion ${lion.size} ${lion.special ? 'special' : ''}`}
            style={{
              left: lion.left,
              top: lion.top,
              animationDelay: lion.delay,
              animationDuration: lion.duration,
            }}
            onClick={lion.special ? revealGift : undefined}
            aria-label={lion.special ? 'Reveal Mikael gift card' : 'Animated sea lion'}
            title={lion.special ? 'Click me for your surprise!' : 'Sea lion'}
          >
            <span className="sea-lion-emoji">🦭</span>
            {lion.special && <span className="sparkle-ring">✨ Surprise ✨</span>}
          </button>
        ))}

        <div className={`gift-card-panel ${giftRevealed ? 'revealed' : ''}`}>
          <div className="gift-card">
            <p className="gift-label">Your Birthday Gift</p>
            <h2>Surprise!</h2>
            <p className="gift-text">
              Your PSN gift cards await, sea lion!</p>
            <div className="gift-code-box">
              <span>PSN Gift Cards:</span>
              <strong>MO5K-GP3P-IL9S</strong>
              <strong>H6F2-K0Z9-JZK0</strong>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
