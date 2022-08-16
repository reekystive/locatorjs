import reactAdapter from "./../adapters/react/reactAdapter";
import jsxAdapter from "./../adapters/jsx/jsxAdapter";
import svelteAdapter from "./../adapters/svelte/svelteAdapter";
import vueAdapter from "../adapters/vue/vueAdapter";
import { AdapterId } from "../consts";

export function getElementInfo(target: HTMLElement, adapterId?: AdapterId) {
  if (adapterId === "react") {
    return reactAdapter.getElementInfo(target);
  }
  if (adapterId === "svelte") {
    return svelteAdapter.getElementInfo(target);
  }
  if (adapterId === "jsx") {
    return jsxAdapter.getElementInfo(target);
  }
  if (adapterId === "vue") {
    return vueAdapter.getElementInfo(target);
  }

  return (
    reactAdapter.getElementInfo(target) ||
    svelteAdapter.getElementInfo(target) ||
    jsxAdapter.getElementInfo(target) ||
    vueAdapter.getElementInfo(target)
  );
}
