## Prerequisites
Need to install git lfs ([link](https://github.com/git-lfs/git-lfs/wiki/Installation)):
- If you cloned the repo before this is installed, run this command `git lfs pull`
- If you managed to do everything right, the images in the assets folder should be showing when previewed

## BOOM documentation here
Some helpful npm scripts:
- `npm run dev` starts a local dev server with hot reloads so you can see your changes as soon as you save.
- `npm run build` builds the project for deployment. Built files are created in the `dist` folder.
- `npm run preview` spins up a full web server reading from that `dist` folder you just built. Good for checking that build-time things (compression, imagetools resize/conversion, etc.) are working properly.
- `npm run test` runs the linter but doesn't make any changes. Used in the GitHub Action.
- `npm run lint` runs the linter and tries to fix things.
- `npm run format` supposed to run `prettier` but is in kinda limbo-land since we're using `ts-standard` now, see [issue #7](https://github.com/ABuffSeagull/lazulight-one-year-website/issues/7) and [PR #11](https://github.com/ABuffSeagull/lazulight-one-year-website/pull/11).

Some important links for this project:

- [wouter](https://www.npmjs.com/package/wouter)
- [imagetools](https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md)
