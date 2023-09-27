import { r as registerInstance, h, H as Host } from "./index.b8b85bd9.js";
const menuAboutItemCss = ":host{display:block}";
const MenuAboutItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = void 0;
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
MenuAboutItem.style = menuAboutItemCss;
export {
  MenuAboutItem as ix_menu_about_item
};
