import React, { useState, useEffect } from 'react';

const HeroVisual = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  // Theme-aware palette
  const t = isDark
    ? {
        bg: '#0B0F14',
        bgStroke: '#1E2A35',
        grid: '#34D399',
        primary: '#10B981',
        primaryLight: '#34D399',
        primaryLighter: '#6EE7B7',
        primaryMuted: 'rgba(52, 211, 153, 0.04)',
        primaryStroke: 'rgba(52, 211, 153, 0.25)',
        orbitDash: '#1E2A35',
        orbitInner: 'rgba(52, 211, 153, 0.1)',
        connLine: 'rgba(52, 211, 153, 0.08)',
        cardBg: '#111820',
        cardStroke: '#1E2A35',
        barFill: '#1E2A35',
        barFillSoft: 'rgba(30, 42, 53, 0.6)',
        facePlate: '#111820',
        facePlateStroke: '#1E2A35',
        mouthStroke: '#1E2A35',
        eyeGlow: 'rgba(52, 211, 153, 0.08)',
        earBg: '#111820',
        earStroke: 'rgba(52, 211, 153, 0.2)',
        antennaStroke: 'rgba(52, 211, 153, 0.4)',
        shoulderStroke: 'rgba(52, 211, 153, 0.15)',
        badgeBg: '#111820',
        badgeStroke: '#1E2A35',
        badgeText: '#9CA3AF',
        dotFill: 'rgba(52, 211, 153, 0.1)',
        nodeShadow: 'rgba(16, 185, 129, 0.5)',
        orbitNodeShadow1: 'rgba(16, 185, 129, 0.4)',
        orbitNodeShadow2: 'rgba(52, 211, 153, 0.3)',
        orbitNodeShadow3: 'rgba(110, 231, 183, 0.3)',
        robotGhost: 'rgba(52, 211, 153, 0.12)',
      }
    : {
        bg: '#FFFFFF',
        bgStroke: '#E5E7EB',
        grid: '#10B981',
        primary: '#059669',
        primaryLight: '#10B981',
        primaryLighter: '#34D399',
        primaryMuted: 'rgba(16, 185, 129, 0.06)',
        primaryStroke: 'rgba(5, 150, 105, 0.3)',
        orbitDash: '#D1D5DB',
        orbitInner: 'rgba(16, 185, 129, 0.12)',
        connLine: 'rgba(16, 185, 129, 0.1)',
        cardBg: '#F9FAFB',
        cardStroke: '#E5E7EB',
        barFill: '#E5E7EB',
        barFillSoft: 'rgba(229, 231, 235, 0.7)',
        facePlate: '#F3F4F6',
        facePlateStroke: '#D1D5DB',
        mouthStroke: '#D1D5DB',
        eyeGlow: 'rgba(16, 185, 129, 0.1)',
        earBg: '#F3F4F6',
        earStroke: 'rgba(5, 150, 105, 0.25)',
        antennaStroke: 'rgba(5, 150, 105, 0.5)',
        shoulderStroke: 'rgba(5, 150, 105, 0.2)',
        badgeBg: '#F9FAFB',
        badgeStroke: '#E5E7EB',
        badgeText: '#6B7280',
        dotFill: 'rgba(16, 185, 129, 0.15)',
        nodeShadow: 'rgba(16, 185, 129, 0.35)',
        orbitNodeShadow1: 'rgba(16, 185, 129, 0.3)',
        orbitNodeShadow2: 'rgba(52, 211, 153, 0.25)',
        orbitNodeShadow3: 'rgba(110, 231, 183, 0.25)',
        robotGhost: 'rgba(16, 185, 129, 0.08)',
      };

  return (
    <div style={{ position: 'relative', width: 440, height: 440 }}>
      <style>{`
        @keyframes heroFloat1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes heroFloat2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
        }
        @keyframes heroFloat3 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(8px, -8px); }
        }
        @keyframes heroPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes heroOrbit {
          0% { transform: rotate(0deg) translateX(155px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(155px) rotate(-360deg); }
        }
        @keyframes heroOrbitReverse {
          0% { transform: rotate(0deg) translateX(125px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(125px) rotate(360deg); }
        }
        @keyframes heroDashMove {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -40; }
        }
      `}</style>

      <svg viewBox="0 0 440 440" width="440" height="440" style={{ position: 'absolute', top: 0, left: 0 }}>
        {/* Background */}
        <circle cx="220" cy="220" r="200" fill={t.bg} stroke={t.bgStroke} strokeWidth="1" />

        {/* Grid */}
        <g opacity="0.04" stroke={t.grid} strokeWidth="0.5">
          {[80, 120, 160, 200, 240, 280, 320, 360].map(v => (
            <React.Fragment key={v}>
              <line x1="40" y1={v} x2="400" y2={v} />
              <line x1={v} y1="40" x2={v} y2="400" />
            </React.Fragment>
          ))}
        </g>

        {/* Outer dashed orbit */}
        <circle cx="220" cy="220" r="175" fill="none" stroke={t.orbitDash} strokeWidth="1"
          strokeDasharray="8 6" style={{ animation: 'heroDashMove 8s linear infinite' }} />

        {/* Inner orbit */}
        <circle cx="220" cy="220" r="130" fill="none" stroke={t.orbitInner} strokeWidth="1"
          strokeDasharray="4 8" style={{ animation: 'heroDashMove 12s linear infinite' }} />

        {/* Connection lines */}
        <g stroke={t.connLine} strokeWidth="1">
          <line x1="220" y1="50" x2="220" y2="160" />
          <line x1="390" y1="160" x2="300" y2="200" />
          <line x1="380" y1="340" x2="290" y2="270" />
          <line x1="60" y1="340" x2="150" y2="270" />
          <line x1="60" y1="140" x2="150" y2="195" />
          <line x1="220" y1="400" x2="220" y2="300" />
        </g>

        {/* AI Brain */}
        <g transform="translate(220, 220)">
          {/* Brain outline - left hemisphere */}
          <path d="M-4,-65 C-35,-65 -58,-50 -62,-28 C-66,-6 -58,14 -48,28 C-38,42 -24,56 -4,58"
            fill={t.primaryMuted} stroke={t.primaryStroke} strokeWidth="1.5" />
          {/* Brain outline - right hemisphere */}
          <path d="M4,-65 C35,-65 58,-50 62,-28 C66,-6 58,14 48,28 C38,42 24,56 4,58"
            fill={t.primaryMuted} stroke={t.primaryStroke} strokeWidth="1.5" />

          {/* Center divide */}
          <line x1="0" y1="-62" x2="0" y2="56" stroke={t.primaryStroke} strokeWidth="1" />

          {/* Brain folds - left */}
          <path d="M-8,-48 C-28,-46 -42,-36 -46,-22" fill="none" stroke={t.primary} strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
          <path d="M-6,-28 C-30,-26 -48,-14 -50,0" fill="none" stroke={t.primary} strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
          <path d="M-6,-6 C-26,-2 -42,8 -44,22" fill="none" stroke={t.primary} strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
          <path d="M-6,18 C-22,22 -34,32 -34,42" fill="none" stroke={t.primary} strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />

          {/* Brain folds - right */}
          <path d="M8,-48 C28,-46 42,-36 46,-22" fill="none" stroke={t.primary} strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
          <path d="M6,-28 C30,-26 48,-14 50,0" fill="none" stroke={t.primary} strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
          <path d="M6,-6 C26,-2 42,8 44,22" fill="none" stroke={t.primary} strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
          <path d="M6,18 C22,22 34,32 34,42" fill="none" stroke={t.primary} strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />

          {/* Neural circuit overlay - left side */}
          <g stroke={t.primary} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5">
            <line x1="-20" y1="-44" x2="-36" y2="-30" />
            <line x1="-36" y1="-30" x2="-28" y2="-10" />
            <line x1="-28" y1="-10" x2="-42" y2="6" />
            <line x1="-42" y1="6" x2="-30" y2="24" />
            <line x1="-30" y1="24" x2="-18" y2="40" />
            <line x1="-28" y1="-10" x2="-14" y2="-18" />
            <line x1="-42" y1="6" x2="-20" y2="2" />
          </g>

          {/* Neural circuit overlay - right side */}
          <g stroke={t.primary} strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5">
            <line x1="20" y1="-44" x2="38" y2="-28" />
            <line x1="38" y1="-28" x2="30" y2="-8" />
            <line x1="30" y1="-8" x2="44" y2="10" />
            <line x1="44" y1="10" x2="32" y2="26" />
            <line x1="32" y1="26" x2="20" y2="42" />
            <line x1="30" y1="-8" x2="14" y2="-16" />
            <line x1="44" y1="10" x2="22" y2="4" />
          </g>

          {/* Cross-hemisphere connections */}
          <g stroke={t.primary} strokeWidth="0.8" fill="none" opacity="0.25" strokeDasharray="3 3">
            <line x1="-14" y1="-18" x2="14" y2="-16" />
            <line x1="-20" y1="2" x2="22" y2="4" />
            <line x1="-18" y1="40" x2="20" y2="42" />
          </g>

          {/* Neural nodes - left */}
          <circle cx="-20" cy="-44" r="4" fill={t.primaryLight}
            style={{ animation: 'heroPulse 3s ease-in-out infinite' }} />
          <circle cx="-36" cy="-30" r="3" fill={t.primaryLighter} />
          <circle cx="-28" cy="-10" r="3.5" fill={t.primaryLight}
            style={{ animation: 'heroPulse 3s ease-in-out infinite 0.5s' }} />
          <circle cx="-42" cy="6" r="3" fill={t.primaryLighter} />
          <circle cx="-30" cy="24" r="3.5" fill={t.primaryLight}
            style={{ animation: 'heroPulse 3s ease-in-out infinite 1s' }} />
          <circle cx="-18" cy="40" r="3" fill={t.primaryLighter} />
          <circle cx="-14" cy="-18" r="2.5" fill={t.primary} opacity="0.7" />
          <circle cx="-20" cy="2" r="2.5" fill={t.primary} opacity="0.7" />

          {/* Neural nodes - right */}
          <circle cx="20" cy="-44" r="4" fill={t.primaryLight}
            style={{ animation: 'heroPulse 3s ease-in-out infinite 0.2s' }} />
          <circle cx="38" cy="-28" r="3" fill={t.primaryLighter} />
          <circle cx="30" cy="-8" r="3.5" fill={t.primaryLight}
            style={{ animation: 'heroPulse 3s ease-in-out infinite 0.7s' }} />
          <circle cx="44" cy="10" r="3" fill={t.primaryLighter} />
          <circle cx="32" cy="26" r="3.5" fill={t.primaryLight}
            style={{ animation: 'heroPulse 3s ease-in-out infinite 1.2s' }} />
          <circle cx="20" cy="42" r="3" fill={t.primaryLighter} />
          <circle cx="14" cy="-16" r="2.5" fill={t.primary} opacity="0.7" />
          <circle cx="22" cy="4" r="2.5" fill={t.primary} opacity="0.7" />

          {/* Brain stem */}
          <path d="M-8,58 Q0,72 8,58" fill="none" stroke={t.primaryStroke} strokeWidth="1.5" />
          <line x1="0" y1="65" x2="0" y2="78" stroke={t.primaryStroke} strokeWidth="1.5" />
          <circle cx="0" cy="65" r="3" fill={t.primary} opacity="0.4" />
        </g>

        {/* Floating data cards */}
        <g style={{ animation: 'heroFloat1 4s ease-in-out infinite' }}>
          <rect x="320" y="60" width="90" height="40" rx="8" fill={t.cardBg} stroke={t.cardStroke} strokeWidth="1" />
          <rect x="332" y="72" width="28" height="4" rx="2" fill={t.primary} opacity="0.5" />
          <rect x="364" y="72" width="34" height="4" rx="2" fill={t.barFill} />
          <rect x="332" y="82" width="50" height="3" rx="1.5" fill={t.barFillSoft} />
        </g>

        <g style={{ animation: 'heroFloat2 5s ease-in-out infinite' }}>
          <rect x="30" y="340" width="100" height="48" rx="8" fill={t.cardBg} stroke={t.cardStroke} strokeWidth="1" />
          <circle cx="50" cy="356" r="5" fill="none" stroke={t.primary} strokeWidth="1" opacity="0.4" />
          <rect x="62" y="352" width="40" height="4" rx="2" fill={t.barFill} />
          <rect x="62" y="360" width="26" height="3" rx="1.5" fill={t.barFillSoft} />
          <rect x="42" y="374" width="78" height="4" rx="2" fill={t.primary} opacity="0.06" />
          <rect x="42" y="374" width="52" height="4" rx="2" fill={t.primary} opacity="0.25" />
        </g>

        <g style={{ animation: 'heroFloat3 6s ease-in-out infinite' }}>
          <rect x="40" y="80" width="72" height="28" rx="14" fill={t.cardBg} stroke={t.cardStroke} strokeWidth="1" />
          <circle cx="56" cy="94" r="4" fill={t.primary} opacity="0.7" />
          <rect x="66" y="91" width="36" height="4" rx="2" fill={t.barFill} />
        </g>

        <g style={{ animation: 'heroFloat1 5.5s ease-in-out infinite 1s' }}>
          <rect x="340" y="350" width="70" height="32" rx="8" fill={t.cardBg} stroke={t.cardStroke} strokeWidth="1" />
          <rect x="352" y="360" width="14" height="14" rx="4" fill="none" stroke={t.primary} strokeWidth="0.8" opacity="0.3" />
          <text x="355" y="371" fontFamily="monospace" fontSize="7" fill={t.primary} opacity="0.7">01</text>
          <rect x="372" y="360" width="28" height="3" rx="1.5" fill={t.barFill} />
          <rect x="372" y="367" width="20" height="3" rx="1.5" fill={t.barFillSoft} />
        </g>

        {/* Decorative dots */}
        <g fill={t.dotFill}>
          {[[460,120],[470,120],[480,120],[460,130],[470,130],[480,130],[460,140],[470,140],[480,140],
            [40,380],[50,380],[60,380],[40,390],[50,390],[60,390]].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="1.5" />
          ))}
        </g>

        {/* Badge */}
        <g transform="translate(180,490)">
          <rect width="160" height="32" rx="16" fill={t.badgeBg} stroke={t.badgeStroke} strokeWidth="1" />
          <circle cx="20" cy="16" r="5" fill={t.primary} opacity="0.8" />
          <text x="34" y="20" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fontWeight="600"
            fill={t.badgeText} letterSpacing="0.05em">PHYSICAL AI</text>
        </g>
      </svg>

      {/* Orbiting nodes */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', width: 0, height: 0 }}>
        <div style={{
          position: 'absolute', width: 12, height: 12, borderRadius: '50%',
          background: t.primary, boxShadow: `0 0 16px ${t.orbitNodeShadow1}`,
          animation: 'heroOrbit 20s linear infinite', marginLeft: -6, marginTop: -6,
        }} />
        <div style={{
          position: 'absolute', width: 8, height: 8, borderRadius: '50%',
          background: t.primaryLight, boxShadow: `0 0 12px ${t.orbitNodeShadow2}`,
          animation: 'heroOrbitReverse 15s linear infinite', marginLeft: -4, marginTop: -4,
        }} />
        <div style={{
          position: 'absolute', width: 10, height: 10, borderRadius: '50%',
          background: t.primaryLighter, boxShadow: `0 0 14px ${t.orbitNodeShadow3}`,
          animation: 'heroOrbit 25s linear infinite 5s', marginLeft: -5, marginTop: -5,
        }} />
      </div>

      {/* Static pulsing nodes */}
      {[
        { top: 42, left: 218, size: 10, delay: '0s' },
        { top: 140, left: 385, size: 8, delay: '1s' },
        { top: 342, left: 388, size: 9, delay: '0.5s' },
        { top: 395, left: 215, size: 8, delay: '1.5s' },
        { top: 335, left: 52, size: 7, delay: '0.8s' },
        { top: 130, left: 50, size: 8, delay: '0.3s' },
      ].map((node, i) => (
        <div key={i} style={{
          position: 'absolute', top: node.top, left: node.left,
          width: node.size, height: node.size, borderRadius: '50%',
          background: t.primary, boxShadow: `0 0 10px ${t.nodeShadow}`,
          animation: `heroPulse 3s ease-in-out infinite ${node.delay}`,
        }} />
      ))}
    </div>
  );
};

export default HeroVisual;
