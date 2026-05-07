import { ImageResponse } from 'next/og';

/* Next.js reads this file and serves the result at /opengraph-image */
export const runtime = 'edge';
export const alt     = 'ForgeAI — AI Automation Agency';
export const size    = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#080C14',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background grid lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(245,166,35,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,166,35,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />

        {/* Amber glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 65%)',
          }}
        />

        {/* Top row — logo + tag */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            <span style={{ color: '#ffffff', fontSize: 28, fontWeight: 900, letterSpacing: '-0.5px' }}>
              FORGE
            </span>
            <span style={{ color: '#F5A623', fontSize: 28, fontWeight: 900, letterSpacing: '-0.5px' }}>
              AI
            </span>
          </div>

          {/* Status pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              backgroundColor: 'rgba(245,166,35,0.1)',
              border: '1px solid rgba(245,166,35,0.25)',
              borderRadius: 100,
              padding: '8px 18px',
            }}
          >
            <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#F5A623' }} />
            <span style={{ color: '#F5A623', fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              AI Automation Agency
            </span>
          </div>
        </div>

        {/* Middle — headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, position: 'relative', zIndex: 1 }}>
          <span style={{ color: '#ffffff', fontSize: 72, fontWeight: 900, lineHeight: 1.0, letterSpacing: '-2px' }}>
            We build AI systems
          </span>
          <span style={{ color: '#F5A623', fontSize: 72, fontWeight: 900, lineHeight: 1.0, letterSpacing: '-2px' }}>
            that work for you
          </span>
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 72, fontWeight: 900, lineHeight: 1.0, letterSpacing: '-2px' }}>
            around the clock.
          </span>
        </div>

        {/* Bottom row — metrics */}
        <div
          style={{
            display: 'flex',
            gap: 0,
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 14,
            overflow: 'hidden',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {[
            { num: '200+', label: 'Hours saved / client / mo' },
            { num: '65%',  label: 'Avg cost reduction'        },
            { num: '2wk',  label: 'Kickoff to live agent'     },
            { num: '47',   label: 'AI systems live'           },
          ].map(({ num, label }, i) => (
            <div
              key={label}
              style={{
                flex: 1,
                padding: '24px 28px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                backgroundColor: 'rgba(255,255,255,0.02)',
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              <span style={{ color: '#F5A623', fontSize: 32, fontWeight: 900, letterSpacing: '-0.5px' }}>
                {num}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13 }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
