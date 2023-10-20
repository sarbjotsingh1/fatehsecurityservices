window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb = window.wsb || {};
window.wsb["Theme18"] =
  window.wsb["Theme18"] ||
  window
    .radpack("@widget/LAYOUT/bs-layout18-Theme-publish-Theme")
    .then(function (t) {
      return new t.default();
    });
window.wsb["FreemiumAd"] = function (e) {
  let { adEndpoint: t, isPublish: a, containerId: o } = e;
  const r = 1e4,
    l = /<script[^>]*>([\s\S]*)<\/script>/;
  let n, i, s;
  function c(e) {
    e.preventDefault(), e.stopPropagation();
    const t = new CustomEvent("editor", {
      detail: { type: "showModal", modal: "plans", source: "freemiumAd" },
    });
    window.dispatchEvent(t);
  }
  function g(e) {
    if (((s = document.getElementById(o)), !s)) return;
    (n = document.createElement("div")),
      (n.style.cssText = "width:100%;"),
      s.prepend(n),
      (i = document.createElement("div")),
      i.setAttribute("data-freemium-ad", !0),
      (i.style.cssText = `overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`),
      (i.innerHTML = (e || "").replace(l, "")),
      s.prepend(i);
    const t = `${i.offsetHeight}px`;
    if (
      ((n.style.minHeight = t),
      window.requestAnimationFrame(() => {
        const e = document.querySelector("[data-stickynav]");
        e && "fixed" === e.style.position && (e.style.top = t);
      }),
      a)
    ) {
      const t = l.exec(e);
      if (t) {
        const e = document.createElement("script");
        e.appendChild(document.createTextNode(t[1])),
          document.head.appendChild(e);
      }
    } else i.addEventListener("click", c, { useCapture: !0 });
  }
  return (
    (function () {
      const e = (a && sessionStorage.getItem(t)) || "";
      e
        ? g(e)
        : window
            .fetch(t)
            .then((e) => e.ok && e.text())
            .then((e) => {
              e && (sessionStorage.setItem(t, e), g(e));
            })
            .catch(() => {});
    })(),
    function () {
      !a && i.removeEventListener("click", c, { useCapture: !0 }),
        s && (s.removeChild(n), s.removeChild(i));
    }
  );
};
window.wsb["FreemiumAd"](
  JSON.parse(
    '{"adEndpoint":"/markup/ad","isPublish":true,"containerId":"freemium-ad-108347"}'
  )
);
window.wsb["DynamicFontScaler"] = function (e) {
  let t,
    {
      containerId: o,
      targetId: n,
      fontSizes: r,
      maxLines: a,
      prioritizeDefault: s,
    } = e;
  if ("undefined" == typeof document) return;
  const i = document.getElementById(o),
    c = document.getElementById(n);
  function l(e) {
    return (
      (function (e) {
        const t = parseInt(d(e, "padding-left") || 0, 10),
          o = parseInt(d(e, "padding-right") || 0, 10);
        return e.scrollWidth + t + o;
      })(e) <= i.clientWidth &&
      (function (e) {
        const t = e.offsetHeight,
          o = parseInt(d(e, "line-height"), 10) || 1;
        return Math.floor(t / o);
      })(e) <= a
    );
  }
  function p() {
    if (!i || !c || t === window.innerWidth) return;
    if (c.hasAttribute("data-font-scaled"))
      return void (function () {
        c.removeAttribute("data-last-size");
        const e = document.querySelector(`#${n}-style`);
        e && e.parentNode.removeChild(e);
      })();
    t = window.innerWidth;
    const e = Array.prototype.slice
      .call(i.querySelectorAll(`[data-scaler-id="scaler-${o}"]`))
      .sort(
        (e, t) =>
          r.indexOf(e.getAttribute("data-size")) -
          r.indexOf(t.getAttribute("data-size"))
      );
    if (i.clientWidth && e.length) {
      const t = i.style.width || "";
      (i.style.width = "100%"),
        e.forEach((e) => {
          (e.style.display = "inline-block"),
            (e.style.maxWidth = `${i.clientWidth}px`);
        });
      const o = (function (e) {
        return e.find(l) || e[e.length - 1];
      })(e);
      !(function (e) {
        e.forEach((e) => {
          (e.style.display = "none"), (e.style.maxWidth = "");
        });
      })(e),
        (i.style.width = t);
      const r = d(o, "font-size"),
        a = c.getAttribute("data-last-size");
      if (r && r !== a) {
        if (s) {
          const e = d(c, "font-size");
          if (parseInt(r, 10) >= parseInt(e, 10)) return;
        }
        c.setAttribute("data-last-size", r);
        let e = document.querySelector(`#${n}-style`);
        e ||
          ((e = document.createElement("style")),
          (e.id = `${n}-style`),
          document.head.appendChild(e)),
          (e.textContent = `#${c.id} { font-size: ${r} !important; }`);
      }
    }
  }
  function d(e, t) {
    return document.defaultView.getComputedStyle(e).getPropertyValue(t);
  }
  p(), window.addEventListener("resize", p);
};
window.wsb["DynamicFontScaler"](
  JSON.parse(
    '{"containerId":"tagline-container-108354","targetId":"dynamic-tagline-108355","fontSizes":["xxxlarge","xxlarge","xlarge"],"maxLines":4}'
  )
);
window.wsb["DynamicFontScaler"](
  JSON.parse(
    '{"containerId":"tagline-container-108356","targetId":"dynamic-tagline-108357","fontSizes":["xxxlarge","xxlarge","xlarge"],"maxLines":4}'
  )
);
window.wsb["context-bs-1"] = JSON.parse(
  '{"env":"production","renderMode":"PUBLISH","fonts":["lato","default","indigo-outline"],"colors":["#77b2d1"],"fontScale":"medium","locale":"en-IN","language":"en","resellerId":1,"internalLinks":{},"isHomepage":true,"navigationMap":{"6c7e551a-483a-43ce-9642-fc448f84a9dc":{"isFlyoutMenu":false,"active":true,"pageId":"6c7e551a-483a-43ce-9642-fc448f84a9dc","name":"Home","href":"/","target":"","visible":true,"requiresAuth":false,"tags":[],"rel":"","type":"page","showInFooter":false},"c66cdfd4-ba49-4ad5-b759-df375ab13187":{"isFlyoutMenu":false,"active":false,"pageId":"c66cdfd4-ba49-4ad5-b759-df375ab13187","name":"404","href":"/404","target":"","visible":false,"requiresAuth":false,"tags":["404"],"rel":"","type":"page","showInFooter":false}},"dials":{"colors":[{"id":"#77b2d1","meta":{"primary":"rgb(119, 178, 209)","accent":"rgb(17, 17, 17)","neutral":"rgb(255, 255, 255)"}}],"fonts":{"primary":{"id":"lato","description":"Distinctive fonts that give you a friendly yet professional feel.","tags":["sans-serif","modern","clean"],"meta":{"order":19,"primary":{"id":"lato","name":"Lato","url":"//fonts.googleapis.com/css?family=Lato:400,700&display=swap","family":"\'Lato\', arial, sans-serif","size":16,"weight":400,"weights":[400,700],"styles":{"letterSpacing":"1px"}},"alternate":{"id":"lusitana","name":"Lusitana","url":"//fonts.googleapis.com/css?family=Lusitana:400,700&display=swap","family":"\'Lusitana\', Georgia, serif","size":16,"weight":400,"weights":[400,700],"styles":{"letterSpacing":"normal","textTransform":"none"}}},"overridesAlternate":[{"locales":["tr-TR","vi-VN","pl-PL"],"meta":{"alternate":{"family":"Georgia, serif"}}},{"locales":["ta-IN","mr-IN","hi-IN"],"meta":{"alternate":{"family":"Georgia, serif"}}}],"overridesPrimary":[{"languages":["en"],"meta":{"primary":{"styles":{"textTransform":"uppercase"}}}},{"locales":["tr-TR","vi-VN","pl-PL"],"meta":{"primary":{"family":"sans-serif"}}}]},"logo":{"id":"indigo-outline","description":"","tags":["elegant","fancy","logo"],"meta":{"order":15,"logo":{"id":"indigo-outline","name":"Indigo","url":"//img1.wsimg.com/blobby/go/font/indigo-outline/indigo-outline.css","family":"\'Indigo Outline\', arial, sans-serif","styles":{"letterSpacing":"6px","textTransform":"uppercase","fontSize":"xlarge","fontWeight":700},"size":16,"weight":700,"weights":[700]}}}}},"theme":"Theme18"}'
);
Core.utils.deferBootstrap(
  {
    elId: "bs-1",
    componentName: "@widget/CONTACT/bs-contact1-contact-form",
    props: JSON.parse(
      '{"formTitle":"Drop us a line!","formFields":[{"type":"SINGLE_LINE","label":"Name","required":false,"keyName":"name"},{"type":"EMAIL","label":"Email","validation":"email","required":true,"replyTo":true,"keyName":"email"},{"type":"MULTI_LINE","label":"Message","required":false,"keyName":"message"},{"type":"ATTACHMENT","label":"Attachments","required":false},{"type":"SUBMIT","label":"Send","required":false}],"blankInfo":false,"formSubmitHost":"https://contact.apps-api.instantpage.secureserver.net","showMap":true,"recaptchaEnabled":true,"recaptchaType":"V3","domainName":"fatehsecurityservices.godaddysites.com","formSuccessMessage":"Thank you for your inquiry! We will get back to you within 48 hours.","formEnabled":true,"websiteId":"ad1297bc-17e7-4252-ba06-78205f5c467a","pageId":"6c7e551a-483a-43ce-9642-fc448f84a9dc","accountId":"d17e1677-0101-11ee-82e2-3417ebe72601","staticContent":{"today":"Today","submitButtonLoadingLabel":"Sending","contactFormResponseErrorMessage":"Something went wrong while sending your message, please try again later","phoneValidationErrorMessage":"Please enter a valid phone number.","defaultCancelButtonLabel":"Cancel","byAppointment":"By Appointment","defaultSubmitButtonLabel":"Send","unsupportedFileType":"Unsupported file type","maxFileCountLimit":"Only {0} files are allowed","closed":"Closed","attachments":"Attachments","termsOfSerivce":"Terms of Service","attachFiles":"Attach Files","recaptchaDisclosure":"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.","emailValidationErrorMessage":"Please enter a valid email address.","mapCTA":"Get directions","privacyPolicyURL":"https://policies.google.com/privacy","requiredValidationErrorMessage":"Please fill in this required field","openToday":"Open today","couldNotAttach":"Could not attach the following file(s)","totalFileSizeLimit":"Total files would exceed {0} limit","privacyPolicy":"Privacy Policy","termsOfSerivceURL":"https://policies.google.com/terms","fileSizeLimit":"File exceeds {0} limit","emailMaxCountValidationErrorMessage":"Your email address is too long"},"emailOptInEnabled":false,"emailOptInMessage":"Sign up for our email list for updates, promotions, and more.","emailConfirmationMessage":"We\'ve sent you a confirmation email, please click the link to verify your address.","widgetId":"e9cba2ed-dc8a-4c04-9b1b-0ce7929f3800","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'
    ),
    context: JSON.parse(
      '{"order":1,"widgetId":"e9cba2ed-dc8a-4c04-9b1b-0ce7929f3800","widgetType":"CONTACT","widgetPreset":"contact1","group":"Content","groupType":"Default","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'
    ),
    contextKey: "context-bs-1",
    radpack: "@widget/CONTACT/bs-contact1-contact-form",
  },
  false
);
Core.utils.deferBootstrap(
  {
    elId: "bs-2",
    componentName: "@widget/CONTACT/bs-Component",
    props: JSON.parse(
      '{"structuredHours":[{"hour":{"day":"Monday","dayOfWeek":1,"openTime":"09:00","closeTime":"17:00","byAppointmentOnly":false,"closed":false}},{"hour":{"day":"Tuesday","dayOfWeek":2,"openTime":"09:00","closeTime":"17:00","byAppointmentOnly":false,"closed":false}},{"hour":{"day":"Wednesday","dayOfWeek":3,"openTime":"09:00","closeTime":"17:00","byAppointmentOnly":false,"closed":false}},{"hour":{"day":"Thursday","dayOfWeek":4,"openTime":"09:00","closeTime":"17:00","byAppointmentOnly":false,"closed":false}},{"hour":{"day":"Friday","dayOfWeek":5,"openTime":"09:00","closeTime":"17:00","byAppointmentOnly":false,"closed":false}},{"hour":{"day":"Saturday","dayOfWeek":6,"openTime":"09:00","closeTime":"17:00","byAppointmentOnly":false,"closed":true}},{"hour":{"day":"Sunday","dayOfWeek":0,"openTime":"09:00","closeTime":"17:00","byAppointmentOnly":false,"closed":true}}],"staticContent":{"today":"Today","submitButtonLoadingLabel":"Sending","contactFormResponseErrorMessage":"Something went wrong while sending your message, please try again later","phoneValidationErrorMessage":"Please enter a valid phone number.","defaultCancelButtonLabel":"Cancel","byAppointment":"By Appointment","defaultSubmitButtonLabel":"Send","unsupportedFileType":"Unsupported file type","maxFileCountLimit":"Only {0} files are allowed","closed":"Closed","attachments":"Attachments","termsOfSerivce":"Terms of Service","attachFiles":"Attach Files","recaptchaDisclosure":"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.","emailValidationErrorMessage":"Please enter a valid email address.","mapCTA":"Get directions","privacyPolicyURL":"https://policies.google.com/privacy","requiredValidationErrorMessage":"Please fill in this required field","openToday":"Open today","couldNotAttach":"Could not attach the following file(s)","totalFileSizeLimit":"Total files would exceed {0} limit","privacyPolicy":"Privacy Policy","termsOfSerivceURL":"https://policies.google.com/terms","fileSizeLimit":"File exceeds {0} limit","emailMaxCountValidationErrorMessage":"Your email address is too long"},"collapsible":true,"widgetId":"e9cba2ed-dc8a-4c04-9b1b-0ce7929f3800","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'
    ),
    context: JSON.parse(
      '{"order":1,"widgetId":"e9cba2ed-dc8a-4c04-9b1b-0ce7929f3800","widgetType":"CONTACT","widgetPreset":"contact1","group":"Content","groupType":"Default","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'
    ),
    contextKey: "context-bs-1",
    radpack: "@widget/CONTACT/bs-Component",
  },
  false
);
Core.utils.deferBootstrap(
  {
    elId: "bs-3",
    componentName: "@widget/CONTACT/bs-genericMap",
    props: JSON.parse(
      '{"lat":"42.2743071","lon":"-82.9838187","address":"4325 County Rd 42,Windsor, Ontario - N9A6J3","type":"google","isEditMode":false,"zoom":14,"mapboxAccessToken":"pk.eyJ1IjoiZ29kYWRkeSIsImEiOiJjaWc5b20wcjcwczAydGFsdGxvamdvYnV0In0.JK9HuO6nAzc8BnMv6W7NBQ","mapboxStyleUrl":"mapbox://styles/godaddy/ciovyeygh0029atm6zbntgxk2","staticContent":{"today":"Today","submitButtonLoadingLabel":"Sending","contactFormResponseErrorMessage":"Something went wrong while sending your message, please try again later","phoneValidationErrorMessage":"Please enter a valid phone number.","defaultCancelButtonLabel":"Cancel","byAppointment":"By Appointment","defaultSubmitButtonLabel":"Send","unsupportedFileType":"Unsupported file type","maxFileCountLimit":"Only {0} files are allowed","closed":"Closed","attachments":"Attachments","termsOfSerivce":"Terms of Service","attachFiles":"Attach Files","recaptchaDisclosure":"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.","emailValidationErrorMessage":"Please enter a valid email address.","mapCTA":"Get directions","privacyPolicyURL":"https://policies.google.com/privacy","requiredValidationErrorMessage":"Please fill in this required field","openToday":"Open today","couldNotAttach":"Could not attach the following file(s)","totalFileSizeLimit":"Total files would exceed {0} limit","privacyPolicy":"Privacy Policy","termsOfSerivceURL":"https://policies.google.com/terms","fileSizeLimit":"File exceeds {0} limit","emailMaxCountValidationErrorMessage":"Your email address is too long"},"viewDevice":null,"widgetId":"e9cba2ed-dc8a-4c04-9b1b-0ce7929f3800","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'
    ),
    context: JSON.parse(
      '{"order":1,"widgetId":"e9cba2ed-dc8a-4c04-9b1b-0ce7929f3800","widgetType":"CONTACT","widgetPreset":"contact1","group":"Map","groupType":"Banner","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'
    ),
    contextKey: "context-bs-1",
    radpack: "@widget/CONTACT/bs-genericMap",
  },
  false
);
window.wsb["CookieBannerScript"] = function (e) {
  let { id: t, acceptCookie: o, dismissCookie: a } = e;
  const n = 864e5;
  let i, l, r;
  function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60;
    const o = new Date();
    o.setTime(o.getTime() + n * t);
    const a = `expires=${o.toUTCString()}`;
    document.cookie = `${e}=true;${a};path=/`;
  }
  function c(e) {
    return document.cookie.includes(e);
  }
  function p() {
    l && l.removeEventListener("click", g),
      r && r.removeEventListener("click", d),
      (i.style.display = "none");
  }
  function g(e) {
    e.preventDefault(), u(), s(a), s(o), p();
  }
  function d(e) {
    var t;
    e.preventDefault(),
      s(a),
      c(o) &&
        ((t = o),
        (document.cookie = `${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`)),
      p();
  }
  function u() {
    (window._allowCT = !0),
      window._allowCTListener && window._allowCTListener.forEach((e) => e());
  }
  c(o)
    ? u()
    : c(a) ||
      setTimeout(() => {
        (i = document.getElementById(`${t}-banner`)),
          (l = document.getElementById(`${t}-accept`)),
          (r = document.getElementById(`${t}-decline`)),
          l && l.addEventListener("click", g),
          r && r.addEventListener("click", d),
          (i.style.transform = "translateY(-500px)");
      }, 200);
};
window.wsb["CookieBannerScript"](
  JSON.parse(
    '{"id":"b53d7fd4-da25-4de8-8d7e-d165f3d9d393","dismissCookie":"cookie_warning_dismissed","acceptCookie":"cookie_terms_accepted"}'
  )
);
Core.utils.renderBootstrap({
  elId: "bs-4",
  componentName: "@widget/MESSAGING/bs-Component",
  props: JSON.parse(
    '{"config":{"formSubmitEndpoint":"/messaging","assetsHost":"https://img1.wsimg.com","assetsBasePath":"/isteam","contactsHost":"https://contacts.godaddy.com","conversationsWebHost":"https://conversations.godaddy.com","formSubmitHost":"https://contact.apps-api.instantpage.secureserver.net","generateUrlHost":"https://url-generator.apps.secureserver.net","vNextApiHost":"https://websites.api.godaddy.com","reamazeApiHost":"https://{{websiteId}}reamaze.godaddy.com","reamazeJsSource":"https://cdn.reamaze.com/assets/reamaze-loader.js","reamazeCookieJsSource":"https://cdn.reamaze.com/assets/reamaze-godaddy-loader.js"},"upgradeable":false,"preset":"messaging1","order":0,"id":"d1cf32a9-41bf-4dee-a26c-e67540804617","isMobile":null,"websiteId":"ad1297bc-17e7-4252-ba06-78205f5c467a","accountId":"d17e1677-0101-11ee-82e2-3417ebe72601","isReseller":false,"domainName":"fatehsecurityservices.godaddysites.com","staticContent":{"submitButtonLoadingLabel":"Sending","infoStartTitle":"Conversations","contactFormResponseErrorMessage":"Something went wrong while sending your message, please try again later","infoStartDesc":"Respond smarter and faster to website messages, text messages and Facebook Messenger. Receive instant notifications, reply from anywhere, all from your phone.","infoStartTag":"New","phoneValidationErrorMessage":"Please enter a valid phone number.","defaultCancelButtonLabel":"Cancel","contactsLinkInfoMessaging":"Contacts from your website messaging form are captured in Connections.","defaultSubmitButtonLabel":"Send","endOfChat":"end of chat","infoConnectedDesc":"You are connected to the Conversations mobile app and are currently receiving all website messages there.","infoRecommendedTag":"Recommended","infoStartLink":"Get Started","phoneUsOnlyValidationErrorMessage":"Please enter a valid U.S. mobile phone number.","infoIncludedTag":"Included","infoPublishRequiredDesc":"A publish is needed in order to complete this first step of enabling this feature.","infoPendingLoginDesc":"A text message has been sent to you to download the Conversations app. Please download and install to complete set up.","termsOfSerivce":"Terms of Service","infoUnavailableDesc":"We currently only allow this to work with one website. To use this feature on this website, please disconnect from the active one.","recaptchaDisclosure":"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.","emailValidationErrorMessage":"Please enter a valid email address.","privacyPolicyURL":"https://policies.google.com/privacy","infoUnavailableTitle":"Conversations","requiredValidationErrorMessage":"Please fill in this required field","infoUnavailableTag":"Unavailable","contactsLinkText":"Manage my contacts","privacyPolicy":"Privacy Policy","infoPublishRequiredLink":"Publish Now","infoPendingLoginLink":"Resend Link","infoConnectedTitle":"Conversations Mobile App","termsOfSerivceURL":"https://policies.google.com/terms","messagesRatesLegalDisclosure":"By submitting your phone number, you agree to receive text messages from us. Message/ data rates may apply.","emailMaxCountValidationErrorMessage":"Your email address is too long","infoConnectedTag":"Connected"},"businessName":"Fateh Security Services","reamazeBrandId":null,"emailConfirmationMessage":"We\'ve sent you a confirmation email, please click the link to verify your address.","recaptchaType":"V3","formFields":[{"keyName":"name","type":"SINGLE_LINE","label":"Name","validation":"required","required":true},{"keyName":"phone","type":"PHONE","label":"Mobile","validation":"phone","required":true},{"keyName":"email","type":"EMAIL","label":"Email","validation":"email","required":true,"replyTo":true},{"keyName":"message","type":"MULTI_LINE","label":"How can we help?","validation":"required","required":true},{"type":"SUBMIT","label":"Send"}],"cookieBannerEnabled":true,"notificationPreference":"EMAIL","formEmail":"fatehsecurities@outlook.com","welcomeMessage":"Hi! Let us know how we can help and we\u2019ll respond shortly.","formSuccessMessage":"Thanks for the message. We\'ll get back to you as soon as we can.","emailOptInEnabled":false,"emailOptInMessage":"Sign up to receive email updates, announcements, and more.","reamazePosition":"bottom-right","reamazeThemeColor":"#77b2d1","reamazePromptEnabled":true,"reamazePrompt":"Let me know if you have any questions!","reamazeConfirmationMessage":"Thanks! Your message has been submitted. We\'ll get back to you here or via email.","reamazeAvatarImage":"","reamazeDismissCarousel":false,"widgetId":"d1cf32a9-41bf-4dee-a26c-e67540804617","section":"default","category":"neutral","locale":"en-IN","env":"production","renderMode":"PUBLISH"}'
  ),
  context: JSON.parse(
    '{"widgetId":"d1cf32a9-41bf-4dee-a26c-e67540804617","widgetType":"MESSAGING","widgetPreset":"messaging1","section":"default","category":"neutral","fontSize":"medium","fontFamily":"alternate","websiteThemeOverrides":{},"widgetThemeOverrides":{}}'
  ),
  contextKey: "context-bs-1",
  radpack: "@widget/MESSAGING/bs-Component",
});
document
  .getElementById("page-108344")
  .addEventListener("click", function () {}, false);
var t = document.createElement("script");
(t.type = "text/javascript"),
  t.addEventListener("load", () => {
    window.tti.calculateTTI(({ name: t, value: e } = {}) => {
      let i = {
        wam_site_hasPopupWidget: false,
        wam_site_hasMessagingWidget: true,
        wam_site_headerTreatment: "Fill",
        wam_site_hasSlideshow: false,
        wam_site_hasFreemiumBanner: true,
        wam_site_homepageFirstWidgetType: "ABOUT",
        wam_site_homepageFirstWidgetPreset: "about1",
        wam_site_businessCategory: "securityguards",
        wam_site_theme: "layout18",
        wam_site_locale: "en-IN",
        wam_site_fontPack: "lato",
        wam_site_cookieBannerEnabled: true,
        wam_site_membershipEnabled: true,
        wam_site_hasHomepageHTML: false,
        wam_site_hasHomepageShop: false,
        wam_site_hasHomepageOla: false,
        wam_site_hasHomepageBlog: false,
        wam_site_hasShop: false,
        wam_site_hasOla: false,
        wam_site_planType: "freemiumV1",
        wam_site_isHomepage: true,
        wam_site_htmlWidget: false,
      };
      window.networkInfo &&
        window.networkInfo.downlink &&
        (i = Object.assign({}, i, {
          ["wam_site_networkSpeed"]: window.networkInfo.downlink.toFixed(2),
        })),
        window.tti.setCustomProperties(i),
        window.tti._collectVitals({ name: t, value: e });
    });
  }),
  t.setAttribute("src", "//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),
  document.body.appendChild(t);
