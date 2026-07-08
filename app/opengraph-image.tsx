import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'CasinoJackpots.io — Jackpot news, slot reviews and the best UK casino offers';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Site-wide default Open Graph / social share image, generated at build. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #111a2e 0%, #080d18 100%)',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 96,
              background: '#d4af37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 56,
              fontWeight: 900,
              color: '#0b1220',
            }}
          >
            £
          </div>
          <div style={{ display: 'flex', fontSize: 72, fontWeight: 800 }}>
            <span style={{ color: '#ffffff' }}>Casino</span>
            <span style={{ color: '#d4af37' }}>Jackpots</span>
            <span style={{ color: '#64748b', fontSize: 48, alignSelf: 'flex-end' }}>.io</span>
          </div>
        </div>
        <div style={{ marginTop: 32, fontSize: 30, color: '#94a3b8', display: 'flex' }}>
          Jackpot news · Slot reviews · Best UK casino offers
        </div>
        <div style={{ marginTop: 48, fontSize: 22, color: '#475569', display: 'flex' }}>
          18+ · Please gamble responsibly · GambleAware.org
        </div>
      </div>
    ),
    { ...size },
  );
}
