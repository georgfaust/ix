import { r as registerInstance, h, H as Host } from "./index.b8b85bd9.js";
const flipTileContentCss = ":host{display:block}";
const FlipTileContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.contentVisible = false;
  }
  render() {
    return h(Host, null, this.contentVisible ? h("slot", null) : null);
  }
};
FlipTileContent.style = flipTileContentCss;
export {
  FlipTileContent as ix_flip_tile_content
};
