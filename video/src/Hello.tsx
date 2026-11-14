import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const Hello = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'});
  const y = interpolate(frame, [0, 30], [24, 0], {extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{background: '#DCDDD5', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{opacity, transform: `translateY(${y}px)`, fontFamily: 'serif', fontSize: 72, color: '#0D0D0D'}}>
        Remotion is ready
      </div>
    </AbsoluteFill>
  );
};
