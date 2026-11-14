import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import './fonts';
import {C, F, ease, fade, fmt, prog} from './theme';
import {Bridge, Cap, Card, Cloud, Coin, Hanok, House, Marina, Mountain, Palm, Passport, Person, Plane, Skyline, Sun, Towers, Waves} from './illus';

const W = 1920, H = 1080;
const Svg: React.FC<{children: React.ReactNode}> = ({children}) => (
  <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{position: 'absolute', inset: 0}}>{children}</svg>
);
const Scene: React.FC<{dur: number; bg: string; children: React.ReactNode}> = ({dur, bg, children}) => {
  const f = useCurrentFrame();
  return <AbsoluteFill style={{background: bg, opacity: fade(f, 10, dur - 14, 14)}}>{children}</AbsoluteFill>;
};
const Wordmark: React.FC<{color?: string}> = ({color = C.ink}) => (
  <div style={{position: 'absolute', left: 80, top: 56, fontFamily: F.serif, fontWeight: 700, fontSize: 38, letterSpacing: 10, color}}>CARDFIT</div>
);
const Rise: React.FC<{start: number; children: React.ReactNode; style?: React.CSSProperties}> = ({start, children, style}) => {
  const f = useCurrentFrame(); const p = prog(f, start, 26);
  return <div style={{opacity: p, transform: `translateY(${(1 - p) * 40}px)`, ...style}}>{children}</div>;
};
const Pill: React.FC<{children: React.ReactNode; bg?: string; color?: string; size?: number}> = ({children, bg = C.white, color = C.ink, size = 34}) => (
  <span style={{display: 'inline-block', background: bg, color, borderRadius: 999, padding: '12px 30px', fontFamily: F.sans, fontWeight: 700, fontSize: size}}>{children}</span>
);

/* ───────── 1. 타이틀 ───────── */
const S1: React.FC = () => {
  const f = useCurrentFrame();
  const sunY = interpolate(prog(f, 0, 90), [0, 1], [560, 330]);
  return (
    <Scene dur={150} bg={C.sky}>
      <Svg>
        <Sun x={1500} y={sunY} r={120} />
        <Cloud x={1000 + ((f * 0.8) % 700)} y={110} s={1.3} /><Cloud x={1350 + ((f * 0.5) % 500)} y={470} s={0.8} />
        <Waves y={760} color={C.sea2} phase={f * 2} /><Waves y={830} color={C.sea} phase={-f * 3} amp={18} />
        <ellipse cx={460} cy={1010} rx={640} ry={210} fill={C.green2} /><ellipse cx={1500} cy={1090} rx={700} ry={170} fill={C.green} />
        <House x={250} y={870} s={1.35} />
        <Palm x={760} y={900} s={1.1} sway={Math.sin(f / 14) * 4} /><Palm x={1640} y={960} s={0.9} sway={Math.sin(f / 12 + 1) * 5} />
      </Svg>
      <Wordmark color={C.navy} />
      <div style={{position: 'absolute', left: 120, top: 190, fontFamily: F.sans, fontWeight: 900, color: C.navy, lineHeight: 1.12}}>
        <Rise start={6} style={{fontSize: 128}}>은퇴 후,</Rise>
        <Rise start={18} style={{fontSize: 128}}>어디서 <span style={{color: C.orange}}>어떻게</span> 살까.</Rise>
        <Rise start={40} style={{marginTop: 36}}><Pill>CardFit · 은퇴이민 4개국 비교</Pill></Rise>
      </div>
    </Scene>
  );
};

/* ───────── 2. 4개국 ───────── */
const countries = [
  {name: '한국', sub: 'KRW · 서울', note: '국내 거주는 비자 불필요. 학비는 사교육비만 반영', bg: C.sand, art: 'kr'},
  {name: '말레이시아', sub: 'MYR · 쿠알라룸푸르', note: 'MM2H 거주 시 해외주식 양도세 0%, FD 이자 면세', bg: C.mint, art: 'my'},
  {name: '싱가포르', sub: 'SGD · 싱가포르', note: '4개국 중 월 생활비 최고 수준 (₩1,623만/월)', bg: C.sky2, art: 'sg'},
  {name: '호주', sub: 'AUD · 브리즈번', note: '1년 정기예금 4.7% — 4개국 중 가장 높은 금리', bg: C.pink, art: 'au'},
];
const Art: React.FC<{k: string; f: number}> = ({k, f}) => {
  if (k === 'kr') return (<g><Sun x={820} y={170} r={70} color={C.orange} /><Mountain x={60} y={560} s={1.5} color={C.green} snow /><Mountain x={420} y={560} s={1.2} color={C.green2} /><rect x={0} y={560} width={1000} height={260} fill={C.green2} /><Hanok x={250} y={640} s={1.9} /></g>);
  if (k === 'my') return (<g><Cloud x={80 + (f % 400)} y={90} s={0.9} /><Sun x={160} y={170} r={60} /><Towers x={380} y={700} s={1.25} /><Palm x={160} y={740} s={0.9} sway={Math.sin(f / 12) * 4} /><rect x={0} y={700} width={1000} height={120} fill={C.green} /></g>);
  if (k === 'sg') return (<g><Sun x={160} y={150} r={60} /><Marina x={300} y={600} s={1.5} /><Waves y={600} w={1000} color={C.sea2} phase={f * 2} h={260} /><Waves y={660} w={1000} color={C.sea} phase={-f * 2.4} h={200} /></g>);
  return (<g><Sun x={820} y={140} r={64} color={C.orange} /><Skyline x={130} y={560} s={1.6} /><Bridge x={420} y={600} s={1.3} /><Waves y={600} w={1000} color={C.sea2} phase={f * 2} h={260} /><Waves y={670} w={1000} color={C.sea} phase={-f * 2.4} h={200} /><Palm x={880} y={640} s={0.7} sway={Math.sin(f / 12) * 4} /></g>);
};
const S2: React.FC = () => {
  const f = useCurrentFrame(); const per = 65, t0 = 44;
  const idx = Math.min(3, Math.max(0, Math.floor((f - t0) / per)));
  const local = f - t0 - idx * per; const c = countries[idx];
  const enter = prog(local, 0, 20); const leave = idx < 3 ? interpolate(local, [per - 12, per], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}) : 0;
  const shown = f >= t0;
  return (
    <Scene dur={310} bg={C.cream}>
      <Wordmark />
      <Rise start={4} style={{position: 'absolute', left: 80, top: 130, fontFamily: F.sans, fontWeight: 900, fontSize: 70, color: C.ink}}>4개국을 한눈에 비교</Rise>
      {shown && (
        <>
          <div style={{position: 'absolute', left: 80, top: 250, width: 1000, height: 720, borderRadius: 56, overflow: 'hidden', background: c.bg,
            opacity: enter * (1 - leave), transform: `translateX(${(1 - enter) * 120 - leave * 60}px)`}}>
            <svg width={1000} height={720} viewBox="0 0 1000 820" preserveAspectRatio="xMidYMax slice"><rect width={1000} height={820} fill={c.bg} /><Art k={c.art} f={f} /></svg>
          </div>
          <div style={{position: 'absolute', left: 1160, top: 300, width: 700, opacity: enter * (1 - leave), transform: `translateX(${(1 - enter) * 80 - leave * 40}px)`}}>
            <div style={{fontFamily: F.sans, fontWeight: 900, fontSize: 150, color: C.ink, lineHeight: 1}}>{c.name}</div>
            <div style={{marginTop: 28}}><Pill bg={C.ink} color={C.cream}>{c.sub}</Pill></div>
            <div style={{marginTop: 44, fontFamily: F.sans, fontWeight: 700, fontSize: 44, lineHeight: 1.5, color: C.ink}}>{c.note}</div>
          </div>
        </>
      )}
      <div style={{position: 'absolute', left: 1160, top: 900, display: 'flex', gap: 18}}>
        {countries.map((_, i) => <div key={i} style={{width: i === idx && shown ? 70 : 22, height: 22, borderRadius: 11, background: i === idx && shown ? C.ink : '#C9C4B8'}} />)}
      </div>
    </Scene>
  );
};

/* ───────── 3. 카드 ───────── */
const S3: React.FC = () => {
  const f = useCurrentFrame();
  const cards = [{c: C.green, a: -22, x: 0}, {c: C.navy, a: -8, x: 50}, {c: C.orange, a: 8, x: 100}, {c: C.ink, a: 22, x: 150}];
  const count = prog(f, 40, 70); const slider = 0.2 + 0.28 * prog(f, 14, 40);
  const cats = ['마트', '외식', '온라인', '쇼핑', '통신', '교통', '카페', '여행'];
  return (
    <Scene dur={190} bg={C.pink}>
      <Wordmark />
      <Svg>
        <circle cx={430} cy={560} r={330} fill={C.cream} />
        {cards.map((k, i) => {
          const p = prog(f, 6 + i * 8, 30);
          return <g key={i} transform={`translate(${380 + k.x * p} ${600 - (1 - p) * 200}) rotate(${k.a * p} 0 190)`} opacity={p}><Card color={k.c} w={440} h={270} /></g>;
        })}
      </Svg>
      <div style={{position: 'absolute', left: 900, top: 150, width: 960}}>
        <Rise start={4} style={{fontFamily: F.sans, fontWeight: 900, fontSize: 84, color: C.ink}}>카드 혜택, 최적 조합</Rise>
        <Rise start={14} style={{marginTop: 30, fontFamily: F.sans, fontWeight: 700, fontSize: 40, color: C.ink}}>월 카드 사용금액 <span style={{fontWeight: 900}}>₩4,000,000</span></Rise>
        <div style={{marginTop: 22, width: 780, height: 12, borderRadius: 6, background: 'rgba(22,24,29,0.15)', position: 'relative'}}>
          <div style={{width: `${slider * 100 * 1.6}%`, height: 12, borderRadius: 6, background: C.ink}} />
          <div style={{position: 'absolute', left: `${slider * 160}%`, top: -12, width: 36, height: 36, borderRadius: 18, background: C.ink, border: `6px solid ${C.pink}`, transform: 'translateX(-18px)'}} />
        </div>
        <Rise start={36} style={{marginTop: 54}}>
          <div style={{fontFamily: F.sans, fontWeight: 900, fontSize: 150, color: C.ink, lineHeight: 1}}>₩{fmt(79183 * count)}<span style={{fontSize: 56}}> /월</span></div>
          <div style={{marginTop: 16, fontFamily: F.sans, fontWeight: 700, fontSize: 38, color: C.ink}}>연 할인 ₩{fmt(950200 * count)} · 순 피킹률 {(1.83 * count).toFixed(2)}%</div>
        </Rise>
        <Rise start={70} style={{marginTop: 44, display: 'flex', flexWrap: 'wrap', gap: 12}}>
          {cats.map((c) => <Pill key={c} bg={C.cream} size={26}>{c}</Pill>)}
        </Rise>
      </div>
    </Scene>
  );
};

/* ───────── 4. 교육·생활비 ───────── */
const S4: React.FC = () => {
  const f = useCurrentFrame();
  const rows = [['말레이시아', 716, C.green2], ['호주', 895, C.sea2], ['한국', 910, C.ochre], ['싱가포르', 1623, C.orange]] as const;
  return (
    <Scene dur={190} bg={C.mint}>
      <Wordmark />
      <Svg>
        <circle cx={400} cy={600} r={310} fill={C.cream} />
        <rect x={120} y={830} width={560} height={14} rx={7} fill={C.green} />
        <Person x={250} y={720} body={C.sea} s={1.5} /><Person x={400} y={730} body={C.pink2} skirt s={1.4} hair={C.brown} /><Person x={540} y={785} body={C.ochre} s={1} />
        <g transform={`translate(400 ${380 - Math.sin(f / 10) * 6})`}><Cap s={1.1} /></g>
      </Svg>
      <div style={{position: 'absolute', left: 860, top: 140, width: 1000}}>
        <Rise start={4} style={{fontFamily: F.sans, fontWeight: 900, fontSize: 84, color: C.ink}}>교육비 · 생활비</Rise>
        <Rise start={12} style={{marginTop: 14, fontFamily: F.sans, fontWeight: 700, fontSize: 38, color: C.ink}}>자녀 출생연도로 졸업까지 학비, Numbeo로 월 생활비</Rise>
        <div style={{marginTop: 56}}>
          {rows.map(([n, v, col], i) => {
            const p = prog(f, 30 + i * 12, 40);
            return (
              <div key={n} style={{display: 'flex', alignItems: 'center', marginBottom: 30}}>
                <div style={{width: 210, fontFamily: F.sans, fontWeight: 900, fontSize: 40, color: C.ink}}>{n}</div>
                <div style={{width: 560, height: 54, borderRadius: 27, background: 'rgba(22,24,29,0.1)'}}>
                  <div style={{width: (v / 1623) * 560 * p, height: 54, borderRadius: 27, background: col}} />
                </div>
                <div style={{marginLeft: 22, fontFamily: F.sans, fontWeight: 900, fontSize: 40, color: C.ink, width: 190}}>{fmt(v * p)}<span style={{fontSize: 26}}>만/월</span></div>
              </div>
            );
          })}
        </div>
        <Rise start={90} style={{fontFamily: F.sans, fontWeight: 700, fontSize: 30, color: 'rgba(22,24,29,0.7)'}}>3인 가족 기준 · 생활비 + 주거(3BR) + 교육 = 월 총액</Rise>
      </div>
    </Scene>
  );
};

/* ───────── 5. 자산 시뮬레이션 ───────── */
const S5: React.FC = () => {
  const f = useCurrentFrame(); const p = prog(f, 24, 100);
  const X0 = 140, X1 = 1180, Y0 = 880, Y1 = 330; const maxV = 125;
  const px = (t: number) => X0 + (X1 - X0) * t; const py = (v: number) => Y0 - (Y0 - Y1) * (Math.max(v, 0) / maxV);
  const lines = [
    {n: '말레이시아', col: C.ochre, end: 123.23, label: '₩123.23억'},
    {n: '호주', col: C.sky, end: 46.68, label: '₩46.68억'},
    {n: '한국', col: C.white, end: 31.77, label: '₩31.77억'},
    {n: '싱가포르', col: C.red, end: -1, label: '2053년 고갈'},
  ];
  const path = (end: number) => {
    let d = '';
    for (let i = 0; i <= 60; i++) {
      const t = i / 60; if (t > p) break;
      let v: number;
      if (end < 0) { v = 30.4 * (1 - Math.pow(t / 0.78, 1.7)); if (v < 0) { d += ` L ${px(t)} ${py(0)}`; break; } } else v = 30.4 + (end - 30.4) * Math.pow(t, end > 100 ? 2.1 : 1.35);
      d += `${i === 0 ? 'M' : ' L'} ${px(t)} ${py(v)}`;
    }
    return d;
  };
  return (
    <Scene dur={190} bg={C.navy}>
      <Wordmark color={C.cream} />
      <Svg>
        {[0, 1, 2, 3, 4].map((i) => <line key={i} x1={X0} x2={X1} y1={Y0 - i * 137} y2={Y0 - i * 137} stroke="rgba(255,255,255,0.14)" strokeWidth={2} />)}
        {['50세', '60세', '70세', '85세'].map((a, i) => <text key={a} x={px([0, 0.29, 0.57, 1][i])} y={Y0 + 54} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize={30} fontFamily={F.sans} fontWeight={700}>{a}</text>)}
        {lines.map((l) => <path key={l.n} d={path(l.end)} fill="none" stroke={l.col} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />)}
        <Passport x={1560} y={620} s={1.5} /><g opacity={prog(f, 80, 20)}><Coin x={1330} y={400} s={1.2} /><Coin x={1780} y={380} s={0.9} /></g>
      </Svg>
      <div style={{position: 'absolute', left: 140, top: 130, fontFamily: F.sans, fontWeight: 900, fontSize: 76, color: C.cream}}>
        <Rise start={4}>85세 최종 총자산 시뮬레이션</Rise>
      </div>
      <div style={{position: 'absolute', left: 1300, top: 190, width: 560}}>
        {lines.map((l, i) => (
          <Rise key={l.n} start={100 + i * 10} style={{display: 'flex', alignItems: 'center', marginBottom: 16}}>
            <div style={{width: 22, height: 22, borderRadius: 11, background: l.col, marginRight: 16}} />
            <div style={{fontFamily: F.sans, fontWeight: 700, fontSize: 34, color: C.cream, width: 170}}>{l.n}</div>
            <div style={{fontFamily: F.sans, fontWeight: 900, fontSize: 36, color: l.col}}>{l.label}</div>
          </Rise>
        ))}
      </div>
      <Rise start={110} style={{position: 'absolute', left: 140, top: 990, fontFamily: F.sans, fontSize: 26, color: 'rgba(255,255,255,0.6)'}}>※ 만 50→85세, 투자수익·세금·생활비를 가정한 시뮬레이션 예시이며 투자 조언이 아닙니다.</Rise>
      <Rise start={96} style={{position: 'absolute', left: 1440, top: 760, fontFamily: F.sans, fontWeight: 900, fontSize: 40, color: C.cream, textAlign: 'center', width: 300}}>비자 조건도 함께</Rise>
    </Scene>
  );
};

/* ───────── 6. 아웃트로 ───────── */
const S6: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <Scene dur={130} bg={C.orange}>
      <Svg>
        <circle cx={1500} cy={300} r={360} fill={C.ochre} opacity={0.35} /><circle cx={340} cy={900} r={260} fill={C.cream} opacity={0.18} />
        <Plane x={((f * 16) % 3000) - 500} y={120 - f * 0.15} s={1.1} />
        <Waves y={900} color={C.sea2} phase={f * 2} /><Waves y={960} color={C.sea} phase={-f * 3} amp={18} />
      </Svg>
      <div style={{position: 'absolute', left: 0, right: 0, top: 230, textAlign: 'center', color: C.white}}>
        <Rise start={4} style={{fontFamily: F.sans, fontWeight: 900, fontSize: 96, lineHeight: 1.2}}>나라를 고르면<br />모든 값이 한 번에 바뀝니다</Rise>
        <Rise start={22} style={{marginTop: 50, fontFamily: F.serif, fontWeight: 700, fontSize: 120, letterSpacing: 18}}>CARDFIT</Rise>
        <Rise start={36} style={{marginTop: 24, fontFamily: F.sans, fontWeight: 700, fontSize: 38}}>카드 · 학비 · 생활비 · 비자 · 자산 시뮬레이션</Rise>
      </div>
    </Scene>
  );
};

export const Intro: React.FC = () => (
  <AbsoluteFill style={{background: C.cream}}>
    <Sequence from={0} durationInFrames={150}><S1 /></Sequence>
    <Sequence from={140} durationInFrames={310}><S2 /></Sequence>
    <Sequence from={440} durationInFrames={190}><S3 /></Sequence>
    <Sequence from={620} durationInFrames={190}><S4 /></Sequence>
    <Sequence from={800} durationInFrames={190}><S5 /></Sequence>
    <Sequence from={980} durationInFrames={130}><S6 /></Sequence>
  </AbsoluteFill>
);
export const INTRO_FRAMES = 1110;
