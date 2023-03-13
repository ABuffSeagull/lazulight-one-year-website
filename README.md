Website hosted at https://lazulight.com/

## Getting Started
Setup
- Ask the project leadership add you as a collaborator to this repository
- Install Git with Git LFS (e.g. GitHub Desktop)
- Install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating), then use nvm to install [npm](https://github.com/nvm-sh/nvm#usage)
- Clone this repository onto your machine
- In the clone, run `npm install` to install the dependencies

Use
- In the clone, run `npm run dev`, then enter the localhost url into your browser to view the site

Contributing
- Make a new branch to work on. Do not work on `main`
- Edit the website as required
- run `npm run lint` and fix any issues that it detects
- Push your changes and create a pull request from your branch to `main`

## npm Commands
- `npm install` installs/updates the dependencies on your computer
- `npm run dev` starts a local dev server with hot reloads so you can see your changes as soon as you save.
- `npm run build` builds the project for deployment. Built files are created in the `dist` folder.
- `npm run preview` spins up a full web server reading from that `dist` folder you just built. Good for checking that build-time things (compression, imagetools resize/conversion, etc.) are working properly.
- `npm run test` runs the linters but doesn't make any changes. Used in the GitHub Action.
- `npm run lint` runs the linters and tries to fix things.

## Troubleshooting
- Vite throws `Input file contains unsupported image format` and all the images are 1KB
  - We store our media in Git LFS. If you don't have it, grab it from [here](https://git-lfs.github.com/) or from your favourite package manager. See [here](https://github.com/git-lfs/git-lfs/wiki/Installation) for more detailed install instructions. After that, run `git lfs install` to activate it. If you've already cloned the repo before you installed Git LFS, you'll need to manually pull the media from LFS with `git lfs pull`. After that, everything should Just Work&#x2122;.

Key dependencies of this project:
- [wouter](https://www.npmjs.com/package/wouter) to link to other pages within the website
- [imagetools](https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md)
- [react-countdown](https://github.com/ndresx/react-countdown) to release content at a specific time
- [react-slick](https://react-slick.neostack.com/docs/api) for the slide shows
- [react-medium-image-zoom](https://github.com/rpearce/react-medium-image-zoom) for images to fullscreen-zoom when clicked

