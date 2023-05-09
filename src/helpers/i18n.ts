import i18n from "./translations"

const locale = localStorage.getItem("locale") || "en"
Object.keys(i18n).forEach(
  (key) => (i18n[key] = i18n[key][locale] ? i18n[key][locale] : i18n[key]["en"]),
)

export default i18n