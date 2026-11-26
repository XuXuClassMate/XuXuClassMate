"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

/**
 * 包住页面主体。Hero / GSAP / Motion 在 iOS 上若 hydration 抛错,
 * 顶栏的语言、主题、菜单仍能用,不要被整棵客户端树一起拖死。
 */
export class ClientErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("page client error", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="container-ap py-24 text-center text-muted">
            Something went wrong. Please refresh.
          </div>
        )
      );
    }
    return this.props.children;
  }
}
