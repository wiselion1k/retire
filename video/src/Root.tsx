import {Composition} from 'remotion';
import {Hello} from './Hello';
import {Intro, INTRO_FRAMES} from './Intro';

export const Root = () => (
  <>
    <Composition id="Intro" component={Intro} durationInFrames={INTRO_FRAMES} fps={30} width={1920} height={1080} />
    <Composition id="Hello" component={Hello} durationInFrames={60} fps={30} width={1280} height={720} />
  </>
);
