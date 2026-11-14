import {continueRender, delayRender, staticFile} from 'remotion';

const faces: [string, string, string][] = [
  ['Noto Sans KR', '400', 'fonts/NotoSansKR-400.ttf'],
  ['Noto Sans KR', '700', 'fonts/NotoSansKR-700.ttf'],
  ['Noto Sans KR', '900', 'fonts/NotoSansKR-900.ttf'],
  ['Noto Serif KR', '700', 'fonts/NotoSerifKR-700.ttf'],
];
const handle = delayRender('fonts');
Promise.all(
  faces.map(async ([family, weight, file]) => {
    const ff = new FontFace(family, `url(${staticFile(file)})`, {weight});
    await ff.load();
    document.fonts.add(ff);
  }),
).then(() => continueRender(handle)).catch(() => continueRender(handle));
