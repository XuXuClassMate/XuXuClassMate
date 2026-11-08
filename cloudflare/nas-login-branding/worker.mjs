import { recordExchange } from "../http-log/src/record.mjs";
import {
  SITE_FOOTER_CSS,
  SITE_FOOTER_DUAL_HTML,
  SITE_FOOTER_GEO_SCRIPT,
} from "../shared/site-footer.mjs";

const LOGIN_CSS = `
:root {
  color-scheme: light dark;
  --nas-page: #1c1c1e;
  --nas-ink: #f5f5f7;
  --nas-secondary: rgba(245, 245, 247, 0.72);
  --nas-card: #2c2c2e;
  --nas-card-ink: #f5f5f7;
  --nas-card-body: rgba(245, 245, 247, 0.78);
  --nas-muted: rgba(245, 245, 247, 0.5);
  --nas-link: #2997ff;
  --nas-signin-bg: #fff;
  --nas-signin-ink: #1d1d1f;
  --nas-signin-hover: #f5f5f7;
  --icloud-blue: #0071e3;
  --icloud-link: var(--nas-link);
  --icloud-label: #1d1d1f;
  --icloud-secondary: #6e6e73;
  --icloud-line: #d2d2d7;
  --icloud-page: var(--nas-page);
  --icloud-green: #34c759;
  --icloud-font: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display",
    "PingFang SC", "Hiragino Sans GB", "Helvetica Neue", sans-serif;
  --icloud-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text",
    "PingFang SC", "Hiragino Sans GB", "Helvetica Neue", sans-serif;
}

@media (prefers-color-scheme: light) {
  :root {
    --nas-page: #ffffff;
    --nas-ink: #1d1d1f;
    --nas-secondary: #6e6e73;
    --nas-card: #f5f5f7;
    --nas-card-ink: #1d1d1f;
    --nas-card-body: #6e6e73;
    --nas-muted: rgba(0, 0, 0, 0.48);
    --nas-link: #0066cc;
    --nas-signin-bg: #1d1d1f;
    --nas-signin-ink: #f5f5f7;
    --nas-signin-hover: #333336;
  }
}

html,
body,
#app,
.contain,
.login {
  background-color: var(--icloud-page) !important;
  background-image: none !important;
}

html,
body,
#app,
.contain {
  min-height: 100dvh !important;
  font-family: var(--icloud-font) !important;
  color: var(--icloud-label) !important;
  -webkit-font-smoothing: antialiased !important;
}

html,
body,
#app,
.contain,
.login {
  min-width: 0 !important;
  max-width: 100% !important;
}

body,
#app,
.contain {
  width: 100% !important;
}

body,
#app {
  overflow-x: hidden !important;
}

.contain {
  position: relative !important;
  display: block !important;
  min-height: 100dvh !important;
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
}

.contain::before,
.contain::after,
.login::before,
.login::after {
  content: none !important;
  display: none !important;
}

.titleText > .titleSplit,
.titleText > .fl.pointer,
.titleText > .fr.pointer,
.extend_fun,
.copyright,
.notice,
.login > div:empty:not(.login-mode) {
  display: none !important;
}

.login {
  position: relative !important;
  z-index: 1 !important;
  top: auto !important;
  right: auto !important;
  bottom: auto !important;
  left: auto !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  width: 100% !important;
  max-width: none !important;
  min-height: 100dvh !important;
  margin: 0 !important;
  padding: 88px 24px 112px !important;
  box-sizing: border-box !important;
  transform: none !important;
  color: var(--nas-ink) !important;
  color-scheme: light dark !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  overflow: visible !important;
  animation: icloud-in 0.45s ease both !important;
}

.logo-title-area,
.titleText,
.qrcode-title,
.xuxu-subtitle,
.xuxu-account,
.login .el-form,
.login > .el-row,
.loginFooter,
.qrcode-code,
.qrcode-desc {
  width: min(400px, 100%) !important;
}

.logo-title-area {
  order: 1;
  position: static !important;
  display: flex !important;
  justify-content: center !important;
  height: auto !important;
  margin: 0 0 20px !important;
}

.login .logo-title-area .logo-image {
  width: 120px !important;
  height: 90px !important;
  margin: 0 !important;
  border-radius: 0 !important;
  background-color: transparent !important;
  background-image: url("data:image/png;base64,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") !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: contain !important;
  box-shadow: none !important;
  filter: none !important;
  animation: none !important;
}

.titleText,
.qrcode-title {
  order: 2;
  position: static !important;
  display: block !important;
  height: auto !important;
  margin: 0 !important;
  color: var(--icloud-label) !important;
  font-family: var(--icloud-display) !important;
  font-size: 32px !important;
  font-weight: 600 !important;
  letter-spacing: -0.3px !important;
  line-height: 1.15 !important;
  text-align: center !important;
  text-shadow: none !important;
}

.titleText > .fl.f30 {
  float: none !important;
  width: 100% !important;
  margin: 0 !important;
  color: inherit !important;
  font: inherit !important;
  letter-spacing: inherit !important;
  line-height: inherit !important;
  text-align: center !important;
  text-shadow: none !important;
}

.xuxu-subtitle {
  order: 3;
  margin: 8px 0 28px !important;
  color: var(--icloud-secondary) !important;
  font-family: var(--icloud-font) !important;
  font-size: 17px !important;
  font-weight: 400 !important;
  letter-spacing: -0.37px !important;
  line-height: 1.35 !important;
  text-align: center !important;
}

.login:has(.qrcode-title) .xuxu-subtitle,
.login:has(.qrcode-title) .titleText,
.login:has(.qrcode-title) .el-form,
.login:has(.qrcode-title) > .el-row,
.login:has(.qrcode-title) .loginFooter,
.login:has(.qrcode-title) .xuxu-account {
  display: none !important;
}

.xuxu-account {
  order: 4;
  display: none;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 48px;
  margin: 0 0 12px;
  padding: 0 16px;
  box-sizing: border-box;
  border: 1px solid var(--icloud-line);
  border-radius: 12px;
  background: #fff;
  color: var(--icloud-label);
  font: 400 17px/22px var(--icloud-font);
  letter-spacing: -0.37px;
  text-align: left;
  cursor: pointer;
}

html[data-xuxu-step="password"] .login:not(:has(.qrcode-title)) .xuxu-account {
  display: flex;
}

.xuxu-account-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.xuxu-account-change {
  flex: none;
  color: var(--icloud-link);
  font-size: 15px;
}

.login .el-form {
  order: 5;
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  overflow: visible !important;
}

.login .el-form-item,
.login .el-form-item__content,
.login .el-input,
.login .el-col {
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  float: none !important;
  box-sizing: border-box !important;
}

.login .el-form-item {
  margin: 0 !important;
  background: #fff !important;
  border: 1px solid var(--icloud-line) !important;
  border-radius: 12px !important;
  overflow: hidden !important;
  transition: border-color 0.15s ease, box-shadow 0.15s ease !important;
}

.login .el-form-item:focus-within {
  border-color: var(--icloud-blue) !important;
  box-shadow: 0 0 0 4px rgba(0, 113, 227, 0.16) !important;
}

html:not([data-xuxu-step="password"]) .login .el-form-item:has(input[type="password"]),
html:not([data-xuxu-step="password"]) .loginFooter {
  display: none !important;
}

html[data-xuxu-step="password"] .login .el-form-item:has(input[type="text"]) {
  display: none !important;
}

.login .el-form-item__content,
.login .el-form-item--mini .el-form-item__content {
  line-height: normal !important;
}

.login .el-input__inner {
  width: 100% !important;
  height: 48px !important;
  padding: 0 16px !important;
  color: var(--icloud-label) !important;
  font-family: var(--icloud-font) !important;
  font-size: 17px !important;
  font-weight: 400 !important;
  letter-spacing: -0.37px !important;
  line-height: 22px !important;
  background: transparent !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  outline: none !important;
  -webkit-appearance: none !important;
  appearance: none !important;
  caret-color: var(--icloud-blue) !important;
}

.login .el-input__inner::placeholder {
  color: #86868b !important;
  font-weight: 400 !important;
}

.login .el-input__inner:hover,
.login .el-input__inner:focus {
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  outline: none !important;
  transform: none !important;
}

.login .el-input__suffix {
  right: 12px !important;
  color: var(--icloud-secondary) !important;
}

.login .el-input__icon,
.login .el-input__suffix .el-icon-view,
.login .el-input__suffix [class*="icon"] {
  color: var(--icloud-secondary) !important;
  line-height: 48px !important;
}

.login .el-input--suffix .el-input__inner {
  padding-right: 40px !important;
}

.login input:-webkit-autofill {
  -webkit-text-fill-color: var(--icloud-label) !important;
  caret-color: var(--icloud-blue) !important;
  box-shadow: inset 0 0 0 1000px #fff !important;
  transition: background-color 99999s ease-out !important;
}

.login > .tip {
  order: 6;
  width: min(400px, 100%) !important;
  margin: 10px 0 0 !important;
  color: #d70015 !important;
  font: 400 13px/1.35 var(--icloud-font) !important;
  letter-spacing: -0.08px !important;
  text-align: center !important;
}

.login > .el-row {
  order: 7;
  width: min(400px, 100%) !important;
  margin-top: 4px !important;
}

.login .el-button--primary {
  width: 100% !important;
  height: 48px !important;
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  border-radius: 12px !important;
  color: #fff !important;
  font-family: var(--icloud-font) !important;
  font-size: 17px !important;
  font-weight: 500 !important;
  letter-spacing: -0.37px !important;
  line-height: 48px !important;
  background: var(--icloud-blue) !important;
  box-shadow: none !important;
  transition: background 0.15s ease, transform 0.15s ease !important;
}

.login .el-button--primary span {
  color: #fff !important;
  font-weight: 500 !important;
  letter-spacing: -0.37px !important;
}

.login .el-button--primary:hover,
.login .el-button--primary:focus {
  background: #0077ed !important;
  filter: none !important;
  transform: none !important;
  opacity: 1 !important;
}

.login .el-button--primary:active {
  background: #0068d1 !important;
  transform: scale(0.985) !important;
  filter: none !important;
  box-shadow: none !important;
}

.loginFooter {
  order: 8;
  display: flex !important;
  flex-direction: column !important;
  gap: 0 !important;
  margin: 16px 0 0 !important;
  padding: 0 !important;
  background: #fff !important;
  border: 1px solid var(--icloud-line) !important;
  border-radius: 12px !important;
  overflow: hidden !important;
  color: var(--icloud-label) !important;
}

.loginFooter .fl,
.loginFooter .fr {
  float: none !important;
  width: 100% !important;
}

.loginFooter .fr {
  border-top: 0.5px solid rgba(60, 60, 67, 0.18) !important;
}

.loginFooter .el-checkbox {
  display: flex !important;
  flex-direction: row-reverse !important;
  align-items: center !important;
  justify-content: space-between !important;
  width: 100% !important;
  min-height: 48px !important;
  margin: 0 !important;
  padding: 8px 16px !important;
  box-sizing: border-box !important;
  white-space: nowrap !important;
}

.loginFooter .el-checkbox__label {
  padding: 0 !important;
  color: var(--icloud-label) !important;
  font-family: var(--icloud-font) !important;
  font-size: 15px !important;
  font-weight: 400 !important;
  letter-spacing: -0.24px !important;
  line-height: 20px !important;
}

.login[data-v-561ad85a] .el-checkbox .el-checkbox__input {
  display: inline-flex !important;
  align-items: center !important;
  line-height: 0 !important;
}

.login[data-v-561ad85a] .el-checkbox .el-checkbox__input .el-checkbox__inner {
  width: 51px !important;
  height: 31px !important;
  border: 0 !important;
  border-radius: 16px !important;
  background: rgba(120, 120, 128, 0.16) none !important;
  background-size: auto !important;
  transition: background-color 0.2s ease !important;
}

.login[data-v-561ad85a] .el-checkbox .el-checkbox__input .el-checkbox__inner::after {
  content: "" !important;
  display: block !important;
  box-sizing: border-box !important;
  width: 27px !important;
  height: 27px !important;
  border: 0 !important;
  border-radius: 50% !important;
  background: #fff !important;
  position: absolute !important;
  left: 2px !important;
  top: 2px !important;
  transform: none !important;
  transform-origin: center !important;
  transition: left 0.22s cubic-bezier(0.32, 0.72, 0, 1) !important;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15), 0 0.5px 1px rgba(0, 0, 0, 0.06) !important;
}

.login[data-v-561ad85a] .el-checkbox .el-checkbox__input.is-checked .el-checkbox__inner,
.login[data-v-561ad85a] .el-checkbox .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background: #34c759 none !important;
  background-size: auto !important;
  border-color: transparent !important;
}

.login[data-v-561ad85a] .el-checkbox .el-checkbox__input.is-checked .el-checkbox__inner::after,
.login[data-v-561ad85a] .el-checkbox .el-checkbox__input.is-indeterminate .el-checkbox__inner::after {
  display: block !important;
  left: 22px !important;
  transform: none !important;
  border: 0 !important;
}

.login-mode,
.login-mode:hover,
.login-mode.qrcode-mode,
.login-mode.qrcode-mode:hover {
  order: 9;
  position: static !important;
  top: auto !important;
  right: auto !important;
  display: block !important;
  width: min(400px, 100%) !important;
  height: auto !important;
  margin: 22px 0 0 !important;
  padding: 8px 0 !important;
  background: none !important;
  background-image: none !important;
  box-shadow: none !important;
  text-align: center !important;
  cursor: pointer !important;
}

html[data-xuxu-step="password"] .login:not(:has(.qrcode-title)) .login-mode {
  display: none !important;
}

.login:has(.qrcode-title) .login-mode {
  display: block !important;
}

.login-mode::after {
  content: "Sign in with QR";
  color: var(--icloud-link);
  font: 400 15px/1.3 var(--icloud-font);
  letter-spacing: -0.24px;
}

.login-mode.qrcode-mode::after {
  content: "Use your account";
}

html[lang="zh-CN"] .login-mode::after {
  content: "\\4f7f\\7528\\4e8c\\7ef4\\7801\\767b\\5f55";
}

html[lang="zh-CN"] .login-mode.qrcode-mode::after {
  content: "\\4f7f\\7528\\8d26\\53f7\\767b\\5f55";
}

.login-mode:hover::after {
  text-decoration: underline;
}

.qrcode-title {
  margin-bottom: 8px !important;
}

.qrcode-code {
  order: 5;
  display: flex !important;
  justify-content: center !important;
  margin: 20px 0 0 !important;
}

.qrcode-container {
  display: inline-block !important;
  padding: 16px !important;
  background: #fff !important;
  border: 1px solid var(--icloud-line) !important;
  border-radius: 18px !important;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.05) !important;
}

.qrcode-container canvas {
  display: block !important;
  border-radius: 8px !important;
}

.qrcode-desc {
  order: 6;
  margin: 18px 0 0 !important;
  color: var(--icloud-secondary) !important;
  font: 400 14px/1.5 var(--icloud-font) !important;
  letter-spacing: -0.15px !important;
  text-align: center !important;
}

.xuxu-language-toggle {
  position: fixed;
  z-index: 20;
  top: max(18px, env(safe-area-inset-top));
  right: 22px;
  height: auto;
  padding: 6px 2px;
  border: 0;
  border-radius: 0;
  color: var(--icloud-link);
  background: transparent;
  box-shadow: none;
  font: 400 15px/1.2 var(--icloud-font);
  letter-spacing: -0.24px;
  cursor: pointer;
}

.xuxu-language-toggle:hover {
  text-decoration: underline;
}

.xuxu-copyright {
  position: static;
  z-index: 4;
  width: min(980px, calc(100% - 48px));
  margin: 0 auto;
  padding: 28px 0 40px;
  color: var(--nas-muted);
  font: 400 12px/1.6 var(--icloud-font);
  letter-spacing: -0.06px;
  text-align: center;
}

a[href*="beian.miit.gov.cn"] {
  display: none !important;
}

@keyframes icloud-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  .login,
  .login .el-button--primary,
  .login .el-checkbox__inner::after,
  .login .el-form-item {
    animation: none !important;
    transition: none !important;
  }
}

@media (max-width: 520px) and (max-height: 620px) {
  .login {
    padding: 72px 20px 48px !important;
    justify-content: flex-start !important;
  }
}

@media (max-width: 520px) and (min-height: 621px) {
  .login {
    justify-content: center !important;
    min-height: 100svh !important;
    min-height: 100dvh !important;
    padding: 72px 24px !important;
  }

  html:not([data-xuxu-auth="form"]) .login .logo-title-area .logo-image {
    width: 144px !important;
    height: 108px !important;
  }

  html:not([data-xuxu-auth="form"]) .xuxu-wordmark {
    margin-top: 22px !important;
    font-size: 48px !important;
    letter-spacing: -1.2px !important;
  }

  html:not([data-xuxu-auth="form"]) .xuxu-signin {
    margin-top: 36px !important;
  }

  html:not([data-xuxu-auth="form"]) .xuxu-tagline {
    margin-top: 40px !important;
    font-size: 28px !important;
    letter-spacing: -0.5px !important;
  }
}

@media (max-width: 480px) {

  .titleText,
  .qrcode-title {
    font-size: 28px !important;
  }

  .xuxu-wordmark {
    font-size: 40px !important;
    letter-spacing: -1px !important;
  }

  .xuxu-tagline {
    font-size: 22px !important;
    letter-spacing: -0.4px !important;
    margin-top: 24px !important;
  }

  .logo-title-area,
  .titleText,
  .qrcode-title,
  .xuxu-subtitle,
  .xuxu-account,
  .login .el-form,
  .login > .el-row,
  .loginFooter,
  .qrcode-code,
  .qrcode-desc {
    width: 100% !important;
  }

  .xuxu-promo,
  .xuxu-copyright {
    width: calc(100% - 32px) !important;
  }

  .xuxu-card {
    min-height: 0 !important;
    padding: 24px 20px 28px !important;
  }
}

html:not([data-xuxu-auth="form"]) .titleText,
html:not([data-xuxu-auth="form"]) .xuxu-subtitle,
html:not([data-xuxu-auth="form"]) .login-mode,
html:not([data-xuxu-auth="form"]) .xuxu-account,
html:not([data-xuxu-auth="form"]) .login .el-form,
html:not([data-xuxu-auth="form"]) .login > .el-row,
html:not([data-xuxu-auth="form"]) .loginFooter,
html:not([data-xuxu-auth="form"]) .login > .tip,
html:not([data-xuxu-auth="form"]) .qrcode-title,
html:not([data-xuxu-auth="form"]) .qrcode-code,
html:not([data-xuxu-auth="form"]) .qrcode-desc,
html:not([data-xuxu-auth="form"]) .xuxu-back {
  display: none !important;
}

html[data-xuxu-auth="form"] .xuxu-wordmark,
html[data-xuxu-auth="form"] .xuxu-signin,
html[data-xuxu-auth="form"] .xuxu-tagline {
  display: none !important;
}

html[data-xuxu-auth="form"] .login .logo-title-area .logo-image {
  width: 72px !important;
  height: 54px !important;
}

.titleText,
.qrcode-title,
.xuxu-wordmark,
.xuxu-tagline,
.xuxu-nav {
  color: var(--nas-ink) !important;
}

.xuxu-wordmark,
.xuxu-tagline {
  max-width: 100% !important;
  box-sizing: border-box !important;
}

.xuxu-subtitle,
.qrcode-desc {
  color: var(--nas-secondary) !important;
}

.xuxu-language-toggle,
.xuxu-back {
  color: var(--nas-ink);
}

.xuxu-nav {
  position: fixed;
  z-index: 20;
  top: max(18px, env(safe-area-inset-top));
  left: 22px;
  border: 0;
  background: transparent;
  font: 600 21px/1.2 var(--icloud-display);
  letter-spacing: -0.3px;
  cursor: pointer;
}

.xuxu-wordmark {
  order: 2;
  margin: 18px 0 0;
  font: 600 clamp(56px, 8vw, 80px)/1.02 var(--icloud-display);
  letter-spacing: -1.6px;
  text-align: center;
}

.xuxu-signin {
  order: 3;
  height: 44px;
  margin-top: 28px;
  padding: 0 22px;
  border: 0;
  border-radius: 980px;
  background: var(--nas-signin-bg);
  color: var(--nas-signin-ink);
  font: 400 17px/44px var(--icloud-font);
  letter-spacing: -0.37px;
  cursor: pointer;
}

.xuxu-signin:hover {
  background: var(--nas-signin-hover);
}

.xuxu-signin:active {
  transform: scale(0.98);
}

.xuxu-tagline {
  order: 4;
  max-width: 760px;
  margin: 36px 0 0;
  font: 600 clamp(28px, 4vw, 40px)/1.15 var(--icloud-display);
  letter-spacing: -0.6px;
  text-align: center;
}

.xuxu-back {
  order: 2;
  margin: 0 0 8px;
  border: 0;
  background: transparent;
  font: 400 15px/1.2 var(--icloud-font);
  cursor: pointer;
}

.xuxu-promo {
  width: min(980px, calc(100% - 48px));
  margin: 8px auto 0;
  padding: 12px 0 8px;
}

.xuxu-promo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.xuxu-card {
  min-height: 280px;
  padding: 36px 32px 40px;
  border-radius: 28px;
  background: var(--nas-card);
  box-sizing: border-box;
}

.xuxu-card-title {
  margin: 0 0 16px;
  color: var(--nas-card-ink);
  font: 600 32px/1.15 var(--icloud-display);
  letter-spacing: -0.4px;
}

.xuxu-card-body {
  margin: 0;
  color: var(--nas-card-body);
  font: 400 17px/1.45 var(--icloud-font);
  letter-spacing: -0.37px;
}

.xuxu-copyright {
  position: static;
  width: min(980px, calc(100% - 48px));
  margin: 0 auto;
  padding: 28px 0 40px;
  color: var(--nas-muted);
  box-sizing: border-box !important;
}

@media (max-width: 800px) {
  .xuxu-promo-grid {
    grid-template-columns: 1fr;
  }

  .xuxu-card-title {
    font-size: 26px;
  }
}

`;

const LOGIN_CSS_FULL = LOGIN_CSS + SITE_FOOTER_CSS;

const LOGIN_SCRIPT = `
(() => {
  const copy = {
    en: {
      title: "Sign In",
      passwordTitle: "Enter Password",
      subtitle: "Use your account to continue",
      passwordSubtitle: "Enter your password to continue",
      username: "Account",
      password: "Password",
      submit: "Continue",
      keep: "Keep Me Signed In",
      remember: "Remember Account",
      change: "Change",
      qrTitle: "Scan to Sign In",
      qrLine1: "In the app, tap your avatar at the top left and scan.",
      qrLine2: "Local accounts cannot use QR sign-in.",
      wordmark: "XuXu NAS",
      signIn: "Sign In",
      tagline: "The best place to keep your photos, files, and private data.",
      back: "Back",
      card1Title: "Open it from any browser",
      card1Body: "Photos, documents, and backups stay on your XuXu NAS. Sign in from the web and continue with the same library you use at home.",
      card2Title: "A private cloud you control",
      card2Body: "Your files live on hardware you own. Sign in with your account, or scan a QR code in the app. Nothing here is kept on a public cloud."
    },
    zh: {
      title: "\\u767b\\u5f55",
      passwordTitle: "\\u8f93\\u5165\\u5bc6\\u7801",
      subtitle: "\\u4f7f\\u7528\\u4f60\\u7684\\u8d26\\u53f7\\u7ee7\\u7eed",
      passwordSubtitle: "\\u8bf7\\u8f93\\u5165\\u5bc6\\u7801\\u4ee5\\u7ee7\\u7eed",
      username: "\\u8d26\\u53f7",
      password: "\\u5bc6\\u7801",
      submit: "\\u7ee7\\u7eed",
      keep: "\\u4fdd\\u6301\\u81ea\\u52a8\\u767b\\u5f55",
      remember: "\\u8bb0\\u4f4f\\u8d26\\u53f7",
      change: "\\u66f4\\u6539",
      qrTitle: "\\u626b\\u7801\\u767b\\u5f55",
      qrLine1: "\\u70b9\\u51fb\\u6781\\u7a7a\\u95f4 APP \\u9996\\u9875\\u5de6\\u4e0a\\u89d2\\u5934\\u50cf\\uff0c\\u626b\\u63cf\\u767b\\u5f55",
      qrLine2: "\\u672c\\u5730\\u8d26\\u53f7\\u6682\\u4e0d\\u652f\\u6301\\u626b\\u7801\\u767b\\u5f55",
      wordmark: "XuXu NAS",
      signIn: "\\u767b\\u5f55",
      tagline: "\\u50a8\\u5b58\\u4f60\\u7684\\u7167\\u7247\\u3001\\u6587\\u4ef6\\u548c\\u5168\\u90e8\\u79c1\\u6709\\u6570\\u636e\\u7684\\u6700\\u4f73\\u9009\\u62e9\\u3002",
      back: "\\u8fd4\\u56de",
      card1Title: "\\u7528\\u4efb\\u610f\\u6d4f\\u89c8\\u5668\\u6253\\u5f00",
      card1Body: "\\u7167\\u7247\\u3001\\u6587\\u6863\\u548c\\u5907\\u4efd\\u90fd\\u5728\\u4f60\\u7684 XuXu NAS \\u4e0a\\u3002\\u4ece\\u7f51\\u9875\\u767b\\u5f55\\uff0c\\u5c31\\u80fd\\u7ee7\\u7eed\\u4f7f\\u7528\\u5bb6\\u91cc\\u7684\\u90a3\\u4efd\\u8d44\\u6599\\u3002",
      card2Title: "\\u7531\\u4f60\\u638c\\u63a7\\u7684\\u79c1\\u6709\\u4e91",
      card2Body: "\\u6587\\u4ef6\\u653e\\u5728\\u4f60\\u81ea\\u5df1\\u7684\\u8bbe\\u5907\\u91cc\\u3002\\u53ef\\u4ee5\\u7528\\u8d26\\u53f7\\u5bc6\\u7801\\u767b\\u5f55\\uff0c\\u4e5f\\u53ef\\u4ee5\\u7528 App \\u626b\\u7801\\u3002\\u8fd9\\u91cc\\u7684\\u6570\\u636e\\u4e0d\\u4f1a\\u8fdb\\u5165\\u516c\\u6709\\u4e91\\u3002"
    }
  };

  let scheduled = false;
  const languageKey = "xuxu-nas-language-v4";

  function getLanguage() {
    const saved = localStorage.getItem(languageKey);
    if (saved === "zh" || saved === "en") return saved;
    return "en";
  }


  const promptEn = {
    "\\u8bf7\\u8f93\\u5165\\u8d26\\u53f7": "Enter your account",
    "\\u8bf7\\u8f93\\u5165\\u5bc6\\u7801": "Enter your password",
    "\\u83b7\\u53d6\\u4fe1\\u606f\\u5931\\u8d25\\uff0c\\u8bf7\\u7a0d\\u540e\\u91cd\\u8bd5": "Couldn't get the information. Try again later.",
    "\\u83b7\\u53d6\\u8bbe\\u5907\\u4fe1\\u606f\\u5931\\u8d25\\uff0c\\u8bf7\\u68c0\\u67e5\\u8bbe\\u5907\\u8054\\u7f51\\u60c5\\u51b5\\u540e\\u91cd\\u8bd5": "Couldn't get device information. Check the network and try again.",
    "\\u65e0\\u6cd5\\u8fde\\u63a5\\u5230NAS\\u8bbe\\u5907\\uff0c\\u8bf7\\u68c0\\u67e5\\u8bbe\\u5907\\u8054\\u7f51\\u60c5\\u51b5\\u540e\\u91cd\\u8bd5": "Can't connect to the NAS. Check the network and try again.",
    "\\u8fde\\u63a5\\u8d85\\u65f6\\uff0c\\u8bf7\\u7a0d\\u540e\\u91cd\\u8bd5": "The connection timed out. Try again later.",
    "\\u5bc6\\u7801\\u91cd\\u7f6e\\u4e2d\\uff0c\\u8bf7\\u7528\\u624b\\u673aAPP\\u5b8c\\u6210\\u5bc6\\u7801\\u91cd\\u7f6e": "Password reset in progress. Finish it in the mobile app.",
    "\\u83b7\\u53d6\\u65b0\\u8bbe\\u5907\\u4fe1\\u606f\\u5931\\u8d25": "Couldn't get the new device information.",
    "\\u65e0\\u6cd5\\u8fde\\u63a5\\u5230\\u6b64\\u6781\\u7a7a\\u95f4\\u8bbe\\u5907": "Can't connect to this device.",
    "\\u65e0\\u6cd5\\u8fde\\u63a5\\u5230\\u8bbe\\u5907\\uff0c\\u8bf7\\u68c0\\u67e5\\u8bbe\\u5907\\u7f51\\u7edc": "Can't connect to the device. Check its network.",
    "\\u7ba1\\u7406\\u5458\\u8d26\\u53f7\\u548c\\u786c\\u76d8\\u4fe1\\u606f\\u4e0d\\u4e00\\u81f4\\uff0c\\u8bf7\\u91cd\\u65b0\\u8f93\\u5165": "The admin account doesn't match the drive. Enter it again.",
    "\\u670d\\u52a1\\u9047\\u5230\\u95ee\\u9898\\uff0c\\u8bf7\\u7a0d\\u540e\\u91cd\\u8bd5": "Something went wrong. Try again later.",
    "\\u8bf7\\u8f93\\u5165\\u77ed\\u4fe1\\u9a8c\\u8bc1\\u7801": "Enter the SMS code",
    "\\u8bf7\\u8f93\\u5165\\u90ae\\u7bb1\\u9a8c\\u8bc1\\u7801": "Enter the email code",
    "\\u9a8c\\u8bc1\\u7801\\u6709\\u8bef": "Incorrect verification code",
    "\\u9a8c\\u8bc1\\u901a\\u8fc7": "Verified",
    "\\u4f60\\u8f93\\u5165\\u7684\\u8d26\\u53f7\\u5728\\u662f\\u672c\\u5730\\u79bb\\u7ebf\\u8d26\\u53f7\\uff0c\\u8bf7\\u9009\\u62e9\\u201c\\u672c\\u5730\\u79bb\\u7ebf\\u8d26\\u53f7\\u767b\\u5f55\\u201d\\u65b9\\u5f0f\\u8fdb\\u884c\\u767b\\u5f55\\u3002\\u5982\\u679c\\u5df2\\u7ecf\\u5347\\u7ea7\\u6210\\u666e\\u901a\\u8d26\\u53f7\\uff0c\\u8bf7\\u8f93\\u5165\\u666e\\u901a\\u8d26\\u53f7\\u8fdb\\u884c\\u767b\\u5f55\\u3002": "This is a local offline account. Use the local offline sign-in option, or the regular account if it has been upgraded.",
    "\\u5f53\\u524dIP\\u5730\\u5740\\u8fd8\\u6709\\u6700\\u540e\\u4e00\\u6b21\\u5c1d\\u8bd5\\u673a\\u4f1a\\uff0c\\u8d26\\u53f7\\u5bc6\\u7801\\u4ecd\\u7136\\u9519\\u8bef\\u5c06\\u4f1a\\u9501\\u5b9a\\u8be5IP\\uff0c\\u901a\\u8fc7\\u5f53\\u524dIP\\u5730\\u5740\\u5c06\\u65e0\\u6cd5\\u767b\\u5f55\\u6781\\u7a7a\\u95f4": "Last attempt from this IP. Another wrong password will lock this IP.",
    "\\u767b\\u5f55\\u63d0\\u9192": "Sign-In Alert",
    "\\u77e5\\u9053\\u4e86": "OK",
    "\\u63d0\\u793a": "Notice",
    "\\u786e\\u5b9a": "OK",
    "\\u53d6\\u6d88": "Cancel",
    "\\u8b66\\u544a": "Warning",
    "\\u7528\\u6237\\u540d\\u6216\\u5bc6\\u7801\\u4e0d\\u6b63\\u786e\\uff0c\\u8bf7\\u91cd\\u65b0\\u8f93\\u5165\\u3002": "Incorrect account or password.",
    "\\u7528\\u6237\\u540d\\u6216\\u5bc6\\u7801\\u4e0d\\u6b63\\u786e\\uff0c\\u8bf7\\u91cd\\u65b0\\u8f93\\u5165": "Incorrect account or password.",
    "\\u8d26\\u53f7\\u683c\\u5f0f\\u4e0d\\u5bf9\\u6216\\u8be5\\u8d26\\u53f7\\u5df2\\u5b58\\u5728": "The account format is invalid, or this account already exists."
  };
  const codeEn = {
    N001200: "The account format is invalid, or this account already exists.",
    N001203: "Incorrect account or password."
  };
  const promptZh = {};
  Object.keys(promptEn).forEach((key) => {
    promptZh[promptEn[key]] = key;
  });

  function translatePrompt(value) {
    if (!value) return value;
    if (getLanguage() === "en") {
      if (promptEn[value]) return promptEn[value];
      if (value.indexOf("\\u7528\\u6237\\u540d\\u6216\\u5bc6\\u7801\\u4e0d\\u6b63\\u786e") >= 0) return "Incorrect account or password.";
      if (value.indexOf("\\u8d26\\u53f7\\u683c\\u5f0f\\u4e0d\\u5bf9") >= 0) return "The account format is invalid, or this account already exists.";
      return value;
    }
    return promptZh[value] || value;
  }

  function applyPrompts() {
    const loginVm = document.querySelector(".contain") && document.querySelector(".contain").__vue__;
    if (loginVm) {
      if (getLanguage() === "en" && loginVm.tipsCode && codeEn[loginVm.tipsCode] && loginVm.tips !== codeEn[loginVm.tipsCode]) {
        loginVm.tips = codeEn[loginVm.tipsCode];
      }
      ["tips", "smsTips", "changeErrorMsg"].forEach((key) => {
        if (!loginVm[key]) return;
        const next = translatePrompt(loginVm[key]);
        if (next !== loginVm[key]) loginVm[key] = next;
      });
    }
    const root = document.querySelector("#app") && document.querySelector("#app").__vue__;
    const alertBox = root && root.$myAlert;
    if (alertBox && alertBox.show && !alertBox.show.__xuxu) {
      const originalShow = alertBox.show.bind(alertBox);
      function wrappedShow() {
        const args = Array.prototype.slice.call(arguments);
        if (args.length > 0) args[0] = translatePrompt(args[0]);
        if (args.length > 1) args[1] = translatePrompt(args[1]);
        if (args.length > 3) args[3] = translatePrompt(args[3]);
        return originalShow.apply(alertBox, args);
      }
      wrappedShow.__xuxu = true;
      alertBox.show = wrappedShow;
    }
    document.querySelectorAll(".el-message__content, .el-message-box__message, .el-message-box__title, .el-dialog__title, .el-dialog__body").forEach((node) => {
      const next = translatePrompt((node.textContent || "").trim());
      if (next && next !== node.textContent.trim()) node.textContent = next;
    });
  }


  function showSignIn() {
    document.documentElement.dataset.xuxuAuth = "form";
    applyLanguage();
    const field = document.querySelector('.login input[type="text"]');
    if (field) field.focus();
  }

  function showLanding() {
    delete document.documentElement.dataset.xuxuAuth;
    delete document.documentElement.dataset.xuxuStep;
    const loginVm = document.querySelector(".contain") && document.querySelector(".contain").__vue__;
    if (loginVm && loginVm.tips) loginVm.tips = "";
    applyLanguage();
  }

  function applyMarketing(text) {
    const login = document.querySelector(".login");
    if (!login) return;
    let nav = document.querySelector(".xuxu-nav");
    if (!nav) {
      nav = document.createElement("button");
      nav.type = "button";
      nav.className = "xuxu-nav";
      nav.addEventListener("click", showLanding);
      document.body.appendChild(nav);
    }
    nav.textContent = text.wordmark;

    let wordmark = login.querySelector(".xuxu-wordmark");
    if (!wordmark) {
      wordmark = document.createElement("h1");
      wordmark.className = "xuxu-wordmark";
      const logo = login.querySelector(".logo-title-area");
      if (logo && logo.parentNode) logo.parentNode.insertBefore(wordmark, logo.nextSibling);
      else login.appendChild(wordmark);
    }
    wordmark.textContent = text.wordmark;

    let signIn = login.querySelector(".xuxu-signin");
    if (!signIn) {
      signIn = document.createElement("button");
      signIn.type = "button";
      signIn.className = "xuxu-signin";
      signIn.addEventListener("click", showSignIn);
      if (wordmark.parentNode) wordmark.parentNode.insertBefore(signIn, wordmark.nextSibling);
    }
    signIn.textContent = text.signIn;

    let tagline = login.querySelector(".xuxu-tagline");
    if (!tagline) {
      tagline = document.createElement("p");
      tagline.className = "xuxu-tagline";
      if (signIn.parentNode) signIn.parentNode.insertBefore(tagline, signIn.nextSibling);
    }
    tagline.textContent = text.tagline;

    let back = login.querySelector(".xuxu-back");
    if (!back) {
      back = document.createElement("button");
      back.type = "button";
      back.className = "xuxu-back";
      back.addEventListener("click", showLanding);
      const logo = login.querySelector(".logo-title-area");
      if (logo && logo.parentNode) logo.parentNode.insertBefore(back, logo.nextSibling);
    }
    back.textContent = text.back;

    let promo = document.querySelector(".xuxu-promo");
    if (!promo) {
      promo = document.createElement("section");
      promo.className = "xuxu-promo";
      const grid = document.createElement("div");
      grid.className = "xuxu-promo-grid";
      [1, 2].forEach((index) => {
        const card = document.createElement("article");
        card.className = "xuxu-card";
        const title = document.createElement("h2");
        title.className = "xuxu-card-title";
        title.dataset.card = String(index);
        const body = document.createElement("p");
        body.className = "xuxu-card-body";
        body.dataset.card = String(index);
        card.append(title, body);
        grid.append(card);
      });
      promo.append(grid);
      const host = document.querySelector(".contain") || document.body;
      host.append(promo);
    }
    const card1 = promo.querySelector('.xuxu-card-title[data-card="1"]');
    const card2 = promo.querySelector('.xuxu-card-title[data-card="2"]');
    const body1 = promo.querySelector('.xuxu-card-body[data-card="1"]');
    const body2 = promo.querySelector('.xuxu-card-body[data-card="2"]');
    if (card1) card1.textContent = text.card1Title;
    if (card2) card2.textContent = text.card2Title;
    if (body1) body1.textContent = text.card1Body;
    if (body2) body2.textContent = text.card2Body;
    const copyright = document.querySelector(".xuxu-copyright");
    const host = document.querySelector(".contain");
    if (copyright && host && copyright.parentNode !== host) host.appendChild(copyright);
    if (promo.parentNode && copyright && promo.nextSibling !== copyright) promo.parentNode.insertBefore(copyright, promo.nextSibling);
  }

  function passwordStep() {
    return document.documentElement.dataset.xuxuStep === "password";
  }

  function advance(event) {
    if (document.querySelector(".qrcode-title") || passwordStep()) return;
    event.preventDefault();
    event.stopPropagation();
    const username = document.querySelector('.login input[type="text"]');
    if (!username || !username.value.trim()) {
      if (username) username.focus();
      const loginVm = document.querySelector(".contain") && document.querySelector(".contain").__vue__;
      if (loginVm) loginVm.tips = translatePrompt("\\u8bf7\\u8f93\\u5165\\u8d26\\u53f7");
      return;
    }
    document.documentElement.dataset.xuxuStep = "password";
    applyLanguage();
    requestAnimationFrame(() => {
      const password = document.querySelector('.login input[type="password"]');
      if (password) password.focus();
    });
  }

  function bindLogin(login) {
    const loginVm = document.querySelector(".contain") && document.querySelector(".contain").__vue__;
    if (loginVm && loginVm.doValidate && !loginVm.doValidate.__xuxu) {
      const original = loginVm.doValidate.bind(loginVm);
      function wrappedValidate() {
        const result = original.apply(loginVm, arguments);
        const finish = () => setTimeout(applyPrompts, 0);
        if (result && result.then) result.then(finish, finish);
        return result;
      }
      wrappedValidate.__xuxu = true;
      loginVm.doValidate = wrappedValidate;
    }
    if (login.dataset.xuxuBound) return;
    login.dataset.xuxuBound = "1";
    login.addEventListener("click", (event) => {
      const button = event.target.closest && event.target.closest(".el-button--primary");
      if (!button || !login.contains(button)) return;
      advance(event);
    }, true);
    login.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      if (!event.target || event.target.type !== "text") return;
      advance(event);
    }, true);
    login.addEventListener("click", (event) => {
      const button = event.target.closest && event.target.closest(".el-button--primary");
      if (!button || !login.contains(button)) return;
      setTimeout(applyPrompts, 0);
    });
  }

  function fitHero() {
    const login = document.querySelector(".login");
    if (!login) return;
    if (!window.matchMedia("(max-width: 520px)").matches) {
      login.style.removeProperty("min-height");
      login.style.removeProperty("justify-content");
      return;
    }
    const viewport = window.visualViewport;
    const height = Math.round((viewport && viewport.height) || window.innerHeight);
    login.style.setProperty("min-height", height + "px", "important");
    login.style.setProperty("justify-content", height < 620 ? "flex-start" : "center", "important");
  }

  function applyLanguage() {
    scheduled = false;
    const login = document.querySelector(".login");
    if (!login) return;
    bindLogin(login);
    fitHero();
    if (!window.__xuxuHeroFit) {
      window.__xuxuHeroFit = true;
      window.addEventListener("resize", fitHero);
      window.addEventListener("orientationchange", fitHero);
      if (window.visualViewport) window.visualViewport.addEventListener("resize", fitHero);
    }

    const language = getLanguage();
    const text = copy[language];
    const step = passwordStep();
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";
    document.title = "XuXu NAS";

    const title = document.querySelector(".titleText > .fl.f30") || document.querySelector(".titleText");
    const username = document.querySelector('.login input[type="text"]');
    const password = document.querySelector('.login input[type="password"]');
    const submit = document.querySelector(".login .el-button--primary span");
    const labels = document.querySelectorAll(".loginFooter .el-checkbox__label");
    const qrTitle = document.querySelector(".qrcode-title");
    const qrDesc = document.querySelector(".qrcode-desc");

    if (title) title.textContent = step ? text.passwordTitle : text.title;
    if (username) username.placeholder = text.username;
    if (password) password.placeholder = text.password;
    if (submit) submit.textContent = text.submit;
    if (labels[0]) labels[0].textContent = text.keep;
    if (labels[1]) labels[1].textContent = text.remember;
    if (qrTitle) qrTitle.textContent = text.qrTitle;
    if (qrDesc) {
      qrDesc.textContent = "";
      qrDesc.append(text.qrLine1, document.createElement("br"), text.qrLine2);
    }

    let subtitle = document.querySelector(".xuxu-subtitle");
    if (!subtitle) {
      subtitle = document.createElement("div");
      subtitle.className = "xuxu-subtitle";
      const anchor = document.querySelector(".titleText") || document.querySelector(".qrcode-title");
      if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(subtitle, anchor.nextSibling);
    }
    if (subtitle) subtitle.textContent = step ? text.passwordSubtitle : text.subtitle;

    let account = document.querySelector(".xuxu-account");
    if (!account) {
      account = document.createElement("button");
      account.type = "button";
      account.className = "xuxu-account";
      account.addEventListener("click", () => {
        delete document.documentElement.dataset.xuxuStep;
        applyLanguage();
        const field = document.querySelector('.login input[type="text"]');
        if (field) field.focus();
      });
      const form = document.querySelector(".login .el-form");
      if (form && form.parentNode) form.parentNode.insertBefore(account, form);
    }
    if (account && !account.dataset.ready) {
      account.dataset.ready = "1";
    }
    if (account) {
      let name = account.querySelector(".xuxu-account-name");
      let change = account.querySelector(".xuxu-account-change");
      if (!name || !change) {
        account.textContent = "";
        name = document.createElement("span");
        name.className = "xuxu-account-name";
        change = document.createElement("span");
        change.className = "xuxu-account-change";
        account.append(name, change);
      }
      name.textContent = (username && username.value.trim()) || text.username;
      change.textContent = text.change;
    }

    let toggle = document.querySelector(".xuxu-language-toggle");
    if (!toggle) {
      toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "xuxu-language-toggle";
      toggle.setAttribute("aria-label", "Switch language");
      toggle.addEventListener("click", () => {
        localStorage.setItem(languageKey, getLanguage() === "en" ? "zh" : "en");
        applyLanguage();
      });
      document.body.appendChild(toggle);
    }
    toggle.textContent = language === "en" ? "\\u4e2d\\u6587" : "EN";

    const footer = document.getElementById("xuxu-site-footer");
    if (footer) {
      footer.dataset.activeLang = getLanguage() === "en" ? "en" : "zh";
    }
    applyPrompts();
    applyMarketing(text);
    login.classList.add("xuxu-icloud");
  }

  function scheduleApply() {
    if (scheduled) return;
    scheduled = true;
    setTimeout(applyLanguage, 0);
  }

  new MutationObserver(scheduleApply).observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true
  });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", applyLanguage);
  else applyLanguage();

  let tries = 0;
  const timer = setInterval(() => {
    applyLanguage();
    tries += 1;
    if (document.querySelector(".xuxu-language-toggle") || tries > 40) clearInterval(timer);
  }, 250);
})();
`;

class LoginHtmlRewriter {
  element(element) {
    element.setAttribute("lang", "en");
  }
}

class LoginHeadRewriter {
  element(element) {
    element.append(
      `<meta name="color-scheme" content="light dark"><style id="xuxu-nas-login-branding">${LOGIN_CSS_FULL}</style>`,
      { html: true },
    );
  }
}

class LoginBodyRewriter {
  element(element) {
    element.append(SITE_FOOTER_DUAL_HTML, { html: true });
    element.append(
      `<script data-cfasync="false" id="xuxu-site-footer-geo">${SITE_FOOTER_GEO_SCRIPT}</script>`,
      { html: true },
    );
    element.append(
      `<script data-cfasync="false" id="xuxu-nas-login-language">${LOGIN_SCRIPT}</script>`,
      { html: true },
    );
  }
}

async function render(request) {
    const response = await fetch(request);
    const contentType = response.headers.get("content-type") || "";
    const { pathname } = new URL(request.url);

    if (!contentType.includes("text/html")) return response;

    if (
      pathname === "/home" ||
      pathname === "/home/" ||
      pathname.startsWith("/home/login")
    ) {
      const transformed = new HTMLRewriter()
        .on("html", new LoginHtmlRewriter())
        .on("head", new LoginHeadRewriter())
        .on("body", new LoginBodyRewriter())
        .transform(response);

      const headers = new Headers(transformed.headers);
      headers.set("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
      headers.set("CDN-Cache-Control", "no-store");
      headers.set("Pragma", "no-cache");
      headers.set("Expires", "0");
      headers.delete("ETag");
      headers.delete("Last-Modified");

      return new Response(transformed.body, {
        status: transformed.status,
        statusText: transformed.statusText,
        headers,
      });
    }

    return response;
}

export default {
  async fetch(request, env, ctx) {
    const response = await render(request);
    if (env?.LOGS) ctx.waitUntil(recordExchange(env.LOGS, request, response).catch(() => {}));
    return response;
  },
};
