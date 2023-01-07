/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

const {execSync} = require('child_process');

// So that we don't need to check them into the repo.
// Serving them from the same domain is better for perf so do this on deploy.
execSync(
  'curl https://conf.reactjs.org/fonts/Optimistic_Display_W_Lt.woff2 --output public/fonts/Optimistic_Display_W_Lt.woff2'
);
execSync(
  'curl https://conf.reactjs.org/fonts/Optimistic_Display_W_Md.woff2 --output public/fonts/Optimistic_Display_W_Md.woff2'
);
execSync(
  'curl https://conf.reactjs.org/fonts/Optimistic_Display_W_Bd.woff2 --output public/fonts/Optimistic_Display_W_Bd.woff2'
);

// Download optimistic display font of weight 400 from Facebook CDN
execSync(
  'curl https://z-p3-static.xx.fbcdn.net/rsrc.php/y2/r/6YirsaXqsap.woff2 --output public/fonts/Optimistic_Display_W_Rr.woff2'
);
