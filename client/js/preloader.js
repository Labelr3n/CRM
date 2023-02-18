import { svgPreloadMain } from "./svg.js";

export const createPreloader = () => {
  const preloaderBlock = document.createElement('div'),
        preloaderCircle = document.createElement('span');

        // class
        preloaderBlock.classList.add('preloader');
        preloaderCircle.id = 'loader';

        preloaderCircle.innerHTML = svgPreloadMain;

        preloaderBlock.append(preloaderCircle);

        return preloaderBlock;
}
