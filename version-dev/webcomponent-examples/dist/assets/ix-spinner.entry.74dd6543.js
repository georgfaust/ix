import { r as registerInstance, h, H as Host, g as getElement } from "./index.eca5b8a3.js";
const spinnerCss = ':host(.small){display:block;position:relative;width:1.5rem;height:1.5rem;border-radius:100%;position:relative;animation:rotate 2s linear infinite}:host(.small) *,:host(.small) *::after,:host(.small) *::before{box-sizing:border-box}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes clipMask{0%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}12.5%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}25%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}37.5%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}50%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}62.5%{-webkit-clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0)}75%{-webkit-clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0)}87.5%{-webkit-clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0)}100%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}}:host(.small)::after{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:2px solid var(--ix-button-color, var(--theme-color-soft-text));animation:clipMask 3s linear infinite}:host(:not(.hide-track)):host(.small)::before{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:2px solid var(--theme-color-ghost--hover)}:host(.primary)::after{border-color:var(--theme-color-dynamic)}:host(.primary)::before{border-color:var(--theme-color-ghost--hover)}:host(.medium){display:block;position:relative;width:2rem;height:2rem;border-radius:100%;position:relative;animation:rotate 2s linear infinite}:host(.medium) *,:host(.medium) *::after,:host(.medium) *::before{box-sizing:border-box}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes clipMask{0%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}12.5%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}25%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}37.5%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}50%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}62.5%{-webkit-clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0)}75%{-webkit-clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0)}87.5%{-webkit-clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0)}100%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}}:host(.medium)::after{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:2px solid var(--ix-button-color, var(--theme-color-soft-text));animation:clipMask 3s linear infinite}:host(:not(.hide-track)):host(.medium)::before{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:2px solid var(--theme-color-ghost--hover)}:host(.primary)::after{border-color:var(--theme-color-dynamic)}:host(.primary)::before{border-color:var(--theme-color-ghost--hover)}:host(.large){display:block;position:relative;width:6rem;height:6rem;border-radius:100%;position:relative;animation:rotate 2s linear infinite}:host(.large) *,:host(.large) *::after,:host(.large) *::before{box-sizing:border-box}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes clipMask{0%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}12.5%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}25%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}37.5%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}50%{-webkit-clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}62.5%{-webkit-clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0)}75%{-webkit-clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0)}87.5%{-webkit-clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0);clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0)}100%{-webkit-clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}}:host(.large)::after{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:4px solid var(--ix-button-color, var(--theme-color-soft-text));animation:clipMask 3s linear infinite}:host(:not(.hide-track)):host(.large)::before{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:4px solid var(--theme-color-ghost--hover)}:host(.primary)::after{border-color:var(--theme-color-dynamic)}:host(.primary)::before{border-color:var(--theme-color-ghost--hover)}';
const Spinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "secondary";
    this.size = "medium";
    this.hideTrack = false;
  }
  render() {
    return h(Host, { class: {
      primary: this.variant === "primary",
      small: this.size === "small",
      medium: this.size === "medium",
      large: this.size === "large",
      "hide-track": this.hideTrack
    } });
  }
  get hostElement() {
    return getElement(this);
  }
};
Spinner.style = spinnerCss;
export {
  Spinner as ix_spinner
};
