Uhhhhhhhhh, add some documentation or something here
## BOOM documentation here
Some helpful npm scripts:
- `npm run dev` starts a local dev server with hot reloads so you can see your changes as soon as you save.
- `npm run build` builds the project for deployment. Built files are created in the `dist` folder.
- `npm run preview` spins up a full web server reading from that `dist` folder you just built. Good for checking that build-time things (compression, imagetools resize/conversion, etc.) are working properly.
- `npm run test` runs the linters but doesn't make any changes. Used in the GitHub Action.
- `npm run lint` runs the linters and tries to fix things.

## Troubleshooting
- Vite throws `Input file contains unsupported image format` and all the images are 1KB
  - We store our media in Git LFS. If you don't have it, grab it from [here](https://git-lfs.github.com/) or from your favorite package manager. See [here](https://github.com/git-lfs/git-lfs/wiki/Installation) for more detailed install instructions. After that, run `git lfs install` to activate it. If you've already cloned the repo before you installed Git LFS, you'll need to manually pull the media from LFS with `git lfs pull`. After that, everything should Just Work&#x2122;.

Some important links for this project:

- [wouter](https://www.npmjs.com/package/wouter)
- [imagetools](https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md)
