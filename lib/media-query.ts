/**
 * 订阅 matchMedia 变化。旧版 iOS（Safari 13 及更早）只有 addListener,
 * 没有 MediaQueryList.addEventListener;直接调用会抛错,ThemeProvider 整棵树就挂了。
 */
export function subscribeMediaQuery(
  mq: MediaQueryList,
  onChange: () => void,
): () => void {
  if (typeof mq.addEventListener === "function") {
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }
  mq.addListener(onChange);
  return () => mq.removeListener(onChange);
}
