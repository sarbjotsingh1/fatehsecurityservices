define(
  "@widget/LAYOUT/bs-layout18-Theme-publish-Theme-8f422b0a.js",
  [
    "exports",
    "~/c/bs-_rollupPluginBabelHelpers",
    "~/c/bs-index3",
    "~/c/bs-legacyOverrides",
    "~/c/bs-modernThinRound",
    "~/c/bs-defaultSocialIconPack",
    "~/c/bs-loaders",
    "~/c/bs-index2",
    "~/c/bs-index",
    "~/c/bs-overlayTypes",
  ],
  function (e, t, r, o, a, l, n, i, s, d) {
    "use strict";
    const { colorPackCategories: g, buttons: h } = (
        global.Core || guac["@wsb/guac-widget-core"]
      ).constants,
      {
        LIGHT: m,
        LIGHT_ALT: c,
        LIGHT_COLORFUL: u,
        DARK: p,
        DARK_ALT: b,
        DARK_COLORFUL: y,
        COLORFUL: f,
      } = (global.Core || guac["@wsb/guac-widget-core"]).constants.paintJobs,
      S = {
        [d.F]: "accent-overlay",
        [d.b]: "accent-overlay",
        [d.I]: "category-alt-solid",
        [d.B]: "accent-overlay",
        [d.L]: "accent-overlay",
      },
      H = {
        defaultHeaderTreatment: d.F,
        hasLegacy: !0,
        heroContentItems: ["tagline", "tagline2", "cta"],
        nonHeroContentItems: ["phone"],
        imageTreatments: S,
      };
    var C = {
      id: "layout18",
      name: "dawn",
      packs: { color: "000", font: "lato" },
      logo: { font: "primary" },
      packCategories: { color: g.NEUTRAL },
      headerProperties: { alignmentOption: "center" },
      headerTreatmentsConfig: H,
      hasNavWithBackground: !0,
      showSlideshowTab: !0,
      paintJobs: [m, c, u, f, y, b, p],
      defaultPaintJob: m,
      buttons: {
        primary: {
          fill: h.fills.SOLID,
          shape: h.shapes.SQUARE,
          decoration: h.decorations.NONE,
          shadow: h.shadows.NONE,
          color: h.colors.PRIMARY,
        },
        secondary: {
          fill: h.fills.SOLID,
          decoration: h.decorations.NONE,
          shadow: h.shadows.NONE,
          color: h.colors.PRIMARY,
        },
        ...s.C,
      },
    };
    const { FULL_UNDERLINE: x } = s.s,
      I = {
        style: {
          font: "primary",
          color: "highContrast",
          fontSize: "large",
          fontWeight: "normal",
          letterSpacing: "normal",
        },
      };
    class L extends r.D {
      static get displayName() {
        return "Theme18";
      }
      static getMutatorDefaultProps(e, t) {
        const r = super.getMutatorDefaultProps(e, t),
          o = s.W[t] || r.enableCircularImage;
        return "HEADER" === e
          ? {
              ...r,
              hasLogoAlign: !0,
              showOverlayOpacityControls: !0,
              enableVideoOverlaySlider: !0,
              hasNavBackgroundToggle: !0,
              useSlideshow: !0,
              headerTreatmentsConfig: {
                ...r.headerTreatmentsConfig,
                heroContentItems: ["tagline", "tagline2", "cta"],
                nonHeroContentItems: ["phone"],
                insetConfig: {
                  borderStyles: {
                    borderColor: "highContrast",
                    borderStyle: "solid",
                    borderWidth: "large",
                  },
                  props: { vAlign: "top" },
                },
                fillConfig: {
                  needsContentOverlayItems: ["tagline", "tagline2", "cta"],
                  props: { fixedMinHeight: "xlarge" },
                },
                imageTreatments: {
                  [d.F]: "accent-overlay",
                  [d.b]: "accent-overlay",
                  [d.I]: "category-alt-solid",
                  [d.B]: "accent-overlay",
                  [d.L]: "accent-overlay",
                },
              },
            }
          : { ...r, enableCircularImage: o };
      }
      constructor() {
        super(),
          t._(this, "sharedInputStyles", { typography: "BodyAlpha" }),
          (this.mappedValues = {
            ...this.mappedValues,
            typographyOverrides: {
              LogoAlpha: { ...I },
              HeadingAlpha: {
                style: {
                  font: "primary",
                  color: "highContrast",
                  fontSize: "xxxlarge",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                },
              },
              HeadingBeta: { ...I },
              HeadingGamma: {
                style: {
                  font: "alternate",
                  color: "highlight",
                  fontSize: "xlarge",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
                },
              },
              HeadingEpsilon: {
                style: {
                  font: "primary",
                  color: "highContrast",
                  fontSize: "xxlarge",
                  fontWeight: "normal",
                  letterSpacing: "none",
                },
              },
              NavAlpha: {
                style: {
                  font: "alternate",
                  color: "highContrast",
                  fontSize: "medium",
                  fontWeight: "normal",
                  letterSpacing: "0.063em",
                  textTransform: "none",
                  ":hover": { color: "highlight" },
                  ":active": { color: "highContrast" },
                },
                active: {
                  style: {
                    fontWeight: "normal",
                    color: "highContrast",
                    paddingBottom: "xxsmall",
                    borderBottom: "1px solid",
                    ":hover": { color: "highlight" },
                  },
                },
              },
              SubNavAlpha: {
                style: {
                  font: "alternate",
                  color: "section",
                  fontSize: "medium",
                  fontWeight: "normal",
                  letterSpacing: "0.063em",
                  textTransform: "none",
                  ":hover": { color: "highlight" },
                  ":active": { color: "section" },
                },
              },
              SubNavBeta: {
                style: {
                  font: "alternate",
                  color: "section",
                  fontSize: "medium",
                  fontWeight: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
                },
              },
              ButtonAlpha: (e) => {
                const { size: t = "default" } = e;
                return {
                  style: {
                    font: "alternate",
                    fontWeight: "bold",
                    letterSpacing: "0.063em",
                    textTransform: "none",
                    ...{
                      small: { fontSize: "small" },
                      default: { fontSize: "medium" },
                      large: { fontSize: "mlarge" },
                    }[t],
                  },
                };
              },
            },
          });
      }
      Heading(e) {
        const { tag: t, level: a } = e,
          { widgetType: l, widgetPreset: n } = this.base;
        return super.Heading(
          this.merge(
            {
              typography: { 2: "HeadingEpsilon" }[r.l({ tag: t, level: a })],
              style: o.g(t, l, n),
            },
            e
          )
        );
      }
      HeadingMajor(e) {
        return super.HeadingMajor(
          this.merge({ typography: "HeadingEpsilon" }, e)
        );
      }
      Section(e) {
        let { children: t, skipDivider: r, ...o } = e;
        const a = { paddingVertical: "xlarge" };
        let l = this.merge({ style: a, children: t }, o);
        return (
          "FOOTER" !== this.base.widgetType ||
            r ||
            (l = this.merge(
              {
                style: a,
                children: (global.React || guac.react).createElement(
                  (global.React || guac.react).Fragment,
                  null,
                  (global.React || guac.react).createElement(
                    (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element
                      .Divider,
                    { style: { paddingVertical: "medium" } }
                  ),
                  t
                ),
              },
              o
            )),
          super.Section(l)
        );
      }
      SectionHeading(e) {
        return super.SectionHeading(
          this.merge({ style: { textAlign: "left" }, sectionHeadingHR: x }, e)
        );
      }
      SectionSplitHeading(e) {
        return this.SectionHeading(
          this.merge({ style: { textAlign: "left" } }, e)
        );
      }
      SectionHeadingHR(e) {
        return super.HR(
          this.merge(
            {
              style: {
                borderBottomWidth: "xsmall",
                borderColor: "input",
                marginBottom: "large",
                marginTop: "small",
                width: "100%",
              },
            },
            e
          )
        );
      }
      Intro(e) {
        return super.Intro(this.merge({ alignment: "left" }, e));
      }
      NavLinkActive(e) {
        const t =
          this.parseSizedUnit(this.mapPropValue("padding", "-xxsmall"))[0] - 1;
        return this.NavLink(
          this.merge({ active: !0, style: { marginBottom: t } }, e)
        );
      }
      Hero(e) {
        return super.Hero(
          this.merge(
            {
              style: {
                textAlign: "center",
                "@md": { maxWidth: "100%", ...i.a("small") },
                "@xs-only": { ":last-child": { marginBottom: "large" } },
              },
            },
            e
          )
        );
      }
      HeroLeft(e) {
        return this.Hero(
          this.merge(
            {
              style: {
                border: "none",
                borderBottomWidth: "xsmall",
                borderColor: "highContrast",
                paddingLeft: 0,
                width: "100%",
                "@sm": {
                  borderColor: "white",
                  borderLeftStyle: "solid",
                  borderLeftWidth: "1px",
                },
                "@md": {
                  borderBottom: "none",
                  borderLeftStyle: "solid",
                  borderLeftWidth: "xsmall",
                },
              },
            },
            e
          )
        );
      }
      Tagline(e) {
        return super.Tagline(
          this.merge(
            {
              style: {
                position: "relative",
                marginHorizontal: "auto",
                "@xs-only": {
                  borderBottomStyle: "solid",
                  borderBottomWidth: "xsmall",
                  borderColor: "highContrast",
                  paddingBottom: "small",
                },
              },
            },
            e
          )
        );
      }
      HeroText(e) {
        return super.SubTagline(
          this.merge(
            {
              style: {
                lineHeight: "1.5",
                maxWidth: "750px",
                display: "inline-block",
              },
            },
            e
          )
        );
      }
      HeroLeftHeading(e) {
        return this.HeroHeading(
          this.merge(
            {
              style: {
                borderBottomStyle: "solid",
                borderBottomWidth: "xsmall",
                borderColor: "highContrast",
                paddingBottom: "small",
                "@md": { borderBottomWidth: 0 },
              },
            },
            e
          )
        );
      }
      HeroRight(e) {
        return this.Hero(
          this.merge(
            {
              style: {
                border: "none",
                borderBottomWidth: "xsmall",
                borderColor: "highContrast",
                paddingRight: 0,
                width: "100%",
                "@sm": {
                  borderColor: "white",
                  borderRightStyle: "solid",
                  borderRightWidth: "1px",
                },
                "@md": {
                  borderBottom: "none",
                  borderRightStyle: "solid",
                  borderRightWidth: "xsmall",
                },
              },
            },
            e
          )
        );
      }
      HeroRightHeading(e) {
        return this.HeroHeading(
          this.merge(
            {
              style: {
                borderBottomStyle: "solid",
                borderBottomWidth: "xsmall",
                borderColor: "highContrast",
                paddingBottom: "small",
                "@md": { borderBottomWidth: 0 },
              },
            },
            e
          )
        );
      }
      HeaderMediaInsetImage(e) {
        return super.Image(
          this.merge(
            {
              style: {
                borderWidth: 4,
                borderStyle: "solid",
                borderColor: "white",
              },
            },
            e
          )
        );
      }
      HeaderMediaBlurImage(e) {
        return this.HeaderMediaInsetImage(e);
      }
      Input(e) {
        return super.Input(
          this.merge(
            this.sharedInputStyles,
            {
              style: {
                borderColor: "input",
                borderRadius: "none",
                borderStyle: "solid",
                borderWidth: "xsmall",
                paddingHorizontal: "small",
                paddingVertical: "small",
              },
            },
            e
          )
        );
      }
      InputFloatLabelInput(e) {
        return super.InputFloatLabelInput(
          this.merge({ style: { paddingBottom: "xsmall" } }, e)
        );
      }
      InputFloatLabelLabel(e) {
        return super.InputFloatLabelLabel(
          this.merge(this.sharedInputStyles, { style: { left: "16px" } }, e)
        );
      }
      InputSelect(e) {
        return super.InputSelect(
          this.merge(
            this.sharedInputStyles,
            {
              style: {
                borderRadius: "medium",
                borderStyle: "solid",
                borderWidth: "xsmall",
              },
            },
            e
          )
        );
      }
      InputSelectElement(e) {
        return super.InputSelectElement(
          this.merge(
            { style: { paddingHorizontal: "small", paddingVertical: "small" } },
            e
          )
        );
      }
      Icon(e) {
        return super.Icon(this.merge({ iconPack: { ...a.m, ...l.s } }, e));
      }
      Loader(e) {
        return n.B.apply(this, [e]);
      }
      DividerHR(e) {
        return super.HR(this.merge({ style: { borderColor: "input" } }, e));
      }
      Table(e) {
        return super.Table(this.merge({ style: { borderRadius: 0 } }, e));
      }
      MediaObjectBackground(e) {
        return super.MediaObjectBackground(
          this.merge({ style: { borderRadius: "0" } }, e)
        );
      }
      ContentCard(e) {
        const t =
          "about1" === this.base.widgetPreset
            ? { style: { alignItems: "center" } }
            : {};
        return super.ContentCard(this.merge(t, e));
      }
    }
    t._(L, "config", C),
      (e.default = L),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }
),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-layout18-Theme-publish-Theme-8f422b0a.js.map
