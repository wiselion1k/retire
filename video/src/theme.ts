import {Easing, interpolate} from 'remotion';

export const C = {
  cream: '#F7F1E8', sage: '#DCDDD5', ink: '#16181D', white: '#FFFFFF',
  sky: '#8EC5F0', sky2: '#C6E2F7', sea: '#3E74BA', sea2: '#5B93D6', navy: '#1F3B6B',
  green: '#2E8038', green2: '#4BA34F', mint: '#BFE3C6', pink: '#F0BCD2', pink2: '#E58AB0',
  ochre: '#E8A93C', orange: '#E2603A', sand: '#F2D8A6', red: '#D64545', brown: '#7A4B2A', gray: '#8A8F98',
};
export const F = {sans: "'Noto Sans KR', sans-serif", serif: "'Noto Serif KR', serif"};
export const ease = Easing.bezier(0.22, 1, 0.36, 1);
export const prog = (frame: number, start: number, dur: number) =>
  interpolate(frame, [start, start + dur], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});
export const fade = (frame: number, inDur: number, outStart: number, outDur: number) =>
  Math.min(
    interpolate(frame, [0, inDur], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
    interpolate(frame, [outStart, outStart + outDur], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
  );
export const fmt = (n: number) => Math.round(n).toLocaleString('ko-KR');
