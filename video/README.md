# Remotion

- 스튜디오: `npm run studio`
- 렌더: `npm run render` (`out/hello.mp4`)
- 이 클라우드 환경에서는 브라우저를 직접 지정해야 렌더됩니다:
  `npx remotion render src/index.ts Hello out/hello.mp4 --browser-executable=/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell --gl=swangle`
