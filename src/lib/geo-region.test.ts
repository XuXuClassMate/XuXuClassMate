import { describe, expect, it } from "vitest";
import { regionDisplayName } from "../../functions/api/geo";

describe("region display names", () => {
  it("names the UAE in each site language", () => {
    expect(regionDisplayName("AE", "en")).toBe("United Arab Emirates");
    expect(regionDisplayName("AE", "zh")).toBe("阿拉伯联合酋长国");
    expect(regionDisplayName("AE", "es")).toBe("Emiratos Árabes Unidos");
    expect(regionDisplayName("AE", "ar")).toBe("الإمارات العربية المتحدة");
    expect(regionDisplayName("AE", "ja")).toBe("アラブ首長国連邦");
    expect(regionDisplayName("AE", "de")).toBe("Vereinigte Arabische Emirate");
    expect(regionDisplayName("AE", "fr")).toBe("Émirats arabes unis");
    expect(regionDisplayName("AE", "pt")).toBe("Emirados Árabes Unidos");
    expect(regionDisplayName("AE", "ru")).toBe("ОАЭ");
    expect(regionDisplayName("AE", "hi").length).toBeGreaterThan(0);
  });
});
