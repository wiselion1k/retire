import React from 'react';
import {C} from './theme';

type P = {x?: number; y?: number; s?: number; style?: React.CSSProperties};
const G: React.FC<P & {children: React.ReactNode}> = ({x = 0, y = 0, s = 1, children}) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>{children}</g>
);

export const Cloud: React.FC<P> = (p) => (
  <G {...p}>
    <rect x={0} y={30} width={220} height={50} rx={25} fill={C.white} />
    <circle cx={70} cy={32} r={34} fill={C.white} />
    <circle cx={130} cy={22} r={44} fill={C.white} />
    <circle cx={175} cy={40} r={26} fill={C.white} />
  </G>
);
export const Sun: React.FC<P & {r?: number; color?: string}> = ({r = 90, color = C.ochre, ...p}) => (
  <G {...p}>
    <circle r={r * 1.35} fill={color} opacity={0.25} />
    <circle r={r} fill={color} />
  </G>
);
export const Palm: React.FC<P & {sway?: number}> = ({sway = 0, ...p}) => (
  <G {...p}>
    <path d="M0 0 C-6 -90 6 -180 14 -260 L34 -260 C26 -170 14 -90 24 0 Z" fill={C.brown} />
    <g transform={`translate(24 -262) rotate(${sway})`}>
      {[-150, -110, -60, -10, 40, 90, 140].map((a, i) => (
        <path key={i} transform={`rotate(${a})`} d="M0 0 C60 -40 130 -30 170 20 C110 -4 60 -6 0 6 Z" fill={i % 2 ? C.green : C.green2} />
      ))}
      <circle cx={-6} cy={8} r={9} fill={C.brown} /><circle cx={10} cy={10} r={9} fill={C.brown} />
    </g>
  </G>
);
export const Waves: React.FC<{y: number; w?: number; color: string; phase?: number; amp?: number; h?: number}> = ({y, w = 1920, color, phase = 0, amp = 14, h = 400}) => {
  const seg = 160; const n = Math.ceil(w / seg) + 3; let d = `M ${-seg * 2 + (phase % seg)} ${y}`;
  for (let i = 0; i < n; i++) d += ` q ${seg / 4} ${-amp} ${seg / 2} 0 t ${seg / 2} 0`;
  d += ` L ${w + seg * 2} ${y + h} L ${-seg * 2} ${y + h} Z`;
  return <path d={d} fill={color} />;
};
export const House: React.FC<P> = (p) => (
  <G {...p}>
    <rect x={20} y={-110} width={26} height={60} fill={C.brown} />
    <rect x={0} y={-90} width={220} height={150} fill={C.cream} />
    <polygon points="-24,-84 110,-190 244,-84" fill={C.orange} />
    <rect x={92} y={-10} width={50} height={70} rx={6} fill={C.navy} />
    <rect x={20} y={-50} width={50} height={46} rx={4} fill={C.sky} /><rect x={150} y={-50} width={50} height={46} rx={4} fill={C.sky} />
    <circle cx={110} cy={-120} r={14} fill={C.cream} />
  </G>
);
export const Hanok: React.FC<P> = (p) => (
  <G {...p}>
    <rect x={30} y={-90} width={240} height={110} fill={C.cream} />
    {[50, 110, 170, 230].map((x) => <rect key={x} x={x} y={-90} width={10} height={110} fill={C.brown} />)}
    <rect x={70} y={-70} width={150} height={90} fill={C.sand} />
    <path d="M-40 -90 C20 -80 60 -120 150 -150 C240 -120 280 -80 340 -90 C300 -60 240 -66 150 -66 C60 -66 0 -60 -40 -90 Z" fill={C.navy} />
    <path d="M10 -86 C70 -90 100 -118 150 -134 C200 -118 230 -90 290 -86 C250 -78 200 -80 150 -80 C100 -80 50 -78 10 -86 Z" fill="#2B4E8C" />
    <rect x={20} y={20} width={260} height={14} fill={C.gray} />
  </G>
);
export const Mountain: React.FC<P & {color?: string; snow?: boolean}> = ({color = C.green, snow, ...p}) => (
  <G {...p}>
    <polygon points="0,0 160,-230 320,0" fill={color} />
    {snow && <polygon points="160,-230 118,-150 148,-164 164,-140 190,-164 204,-150" fill={C.white} />}
  </G>
);
export const Towers: React.FC<P> = (p) => (
  <G {...p}>
    {[0, 150].map((x) => (
      <g key={x} transform={`translate(${x} 0)`}>
        <rect x={0} y={-330} width={86} height={330} fill="#C9D3DE" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => <rect key={i} x={0} y={-330 + i * 46} width={86} height={10} fill="#8FA3B8" />)}
        <rect x={20} y={-380} width={46} height={52} fill="#C9D3DE" /><rect x={34} y={-440} width={18} height={62} fill="#9FB1C4" />
        <rect x={38} y={-470} width={10} height={36} fill={C.gray} />
      </g>
    ))}
    <rect x={86} y={-190} width={64} height={22} fill="#8FA3B8" />
  </G>
);
export const Marina: React.FC<P> = (p) => (
  <G {...p}>
    {[0, 110, 220].map((x, i) => <polygon key={x} points={`${x},0 ${x + 80},0 ${x + 80},${-250 + (i === 1 ? -10 : 0)} ${x},${-230}`} fill={['#C9D3DE', '#B7C4D3', '#C9D3DE'][i]} />)}
    <path d="M-30 -250 C60 -280 260 -280 350 -250 C340 -230 260 -240 160 -240 C60 -240 -20 -230 -30 -250 Z" fill={C.cream} />
    <path d="M10 -244 C90 -262 240 -262 330 -244 C250 -240 90 -240 10 -244 Z" fill={C.green2} />
  </G>
);
export const Skyline: React.FC<P> = (p) => (
  <G {...p}>
    {[[0, 130, '#C9D3DE'], [70, 210, '#B7C4D3'], [150, 160, '#D6DEE7'], [230, 260, '#9FB1C4'], [310, 150, '#C9D3DE'], [390, 200, '#B7C4D3']].map(([x, h, c], i) => (
      <g key={i}><rect x={x as number} y={-(h as number)} width={62} height={h as number} fill={c as string} />
        {[0, 1, 2, 3, 4].map((r) => <rect key={r} x={(x as number) + 10} y={-(h as number) + 16 + r * 30} width={14} height={12} fill={C.cream} opacity={0.8} />)}
      </g>
    ))}
  </G>
);
export const Bridge: React.FC<P> = (p) => (
  <G {...p}>
    <path d="M0 0 C40 -170 360 -170 400 0" fill="none" stroke={C.orange} strokeWidth={14} />
    <rect x={-10} y={-6} width={420} height={16} fill={C.navy} />
    {[60, 110, 160, 210, 260, 310, 350].map((x, i) => <line key={x} x1={x} y1={-6} x2={x} y2={-(40 + Math.sin(((x - 0) / 400) * Math.PI) * 120)} stroke={C.orange} strokeWidth={4} />)}
  </G>
);
export const Card: React.FC<P & {color: string; stripe?: string; w?: number; h?: number}> = ({color, stripe = 'rgba(0,0,0,0.18)', w = 420, h = 260, ...p}) => (
  <G {...p}>
    <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={26} fill={color} />
    <rect x={-w / 2} y={-h / 2 + 52} width={w} height={46} fill={stripe} />
    <rect x={-w / 2 + 30} y={h / 2 - 98} width={62} height={46} rx={9} fill={C.ochre} />
    <rect x={-w / 2 + 30} y={h / 2 - 40} width={140} height={14} rx={7} fill="rgba(255,255,255,0.7)" />
    <circle cx={w / 2 - 66} cy={h / 2 - 44} r={22} fill="rgba(255,255,255,0.75)" /><circle cx={w / 2 - 44} cy={h / 2 - 44} r={22} fill="rgba(255,255,255,0.45)" />
  </G>
);
export const Person: React.FC<P & {body: string; h?: number; hair?: string; skirt?: boolean}> = ({body, h = 1, hair = C.ink, skirt, ...p}) => (
  <G {...p} s={(p.s ?? 1) * h}>
    <rect x={-22} y={-80} width={44} height={90} rx={20} fill={body} />
    {skirt ? <polygon points="-30,10 30,10 22,-20 -22,-20" fill={body} /> : null}
    <rect x={-16} y={10} width={13} height={70} rx={6} fill={C.navy} /><rect x={3} y={10} width={13} height={70} rx={6} fill={C.navy} />
    <circle cx={0} cy={-110} r={28} fill="#F6C9A3" /><path d="M-28 -112 a28 28 0 0 1 56 0 q-28 -22 -56 0 Z" fill={hair} />
  </G>
);
export const Coin: React.FC<P> = (p) => (
  <G {...p}><circle r={30} fill={C.ochre} /><circle r={22} fill="none" stroke="#C98A1A" strokeWidth={5} /><text y={11} textAnchor="middle" fontSize={30} fontWeight={900} fill="#C98A1A" fontFamily="'Noto Sans KR'">₩</text></G>
);
export const Passport: React.FC<P> = (p) => (
  <G {...p}>
    <rect x={-70} y={-96} width={140} height={192} rx={12} fill={C.sea2} />
    <circle cy={-24} r={34} fill="none" stroke={C.ochre} strokeWidth={6} />
    <path d="M-34 -24 H34 M0 -58 V10 M-24 -48 Q0 -24 -24 0 M24 -48 Q0 -24 24 0" stroke={C.ochre} strokeWidth={4} fill="none" />
    <rect x={-40} y={40} width={80} height={10} rx={5} fill={C.ochre} /><rect x={-28} y={60} width={56} height={8} rx={4} fill={C.ochre} opacity={0.7} />
  </G>
);
export const Cap: React.FC<P> = (p) => (
  <G {...p}><polygon points="0,-40 90,0 0,40 -90,0" fill={C.ink} /><path d="M-50 20 v36 q50 24 100 0 v-36 l-50 24 Z" fill="#2B2F38" /><line x1={90} y1={0} x2={90} y2={60} stroke={C.ochre} strokeWidth={6} /><circle cx={90} cy={66} r={9} fill={C.ochre} /></G>
);
export const Plane: React.FC<P> = (p) => (
  <G {...p}><path d="M-80 0 L60 -14 C100 -16 120 0 100 10 L60 16 L-20 60 L-34 56 L-6 14 L-60 22 L-74 40 L-88 38 L-80 10 Z" fill={C.white} /></G>
);
