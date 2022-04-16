import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
		resources: {
			en: {
				translation: {
					navbar: {
						sign_in_button_text: "Sign In",
						sign_up_button_text: "Sign Up",
						settings_button_text: "Settings",
						sign_out_button_text: "Sign Out",
					},
				},
			},
			tr: {
				translation: {
					navbar: {
						sign_in_button_text: "Giriş Yap",
						sign_up_button_text: "Üye Ol",
						settings_button_text: "Ayarlar",
						sign_out_button_text: "Çıkış Yap",
					},
				},
			},
		},
	});

export default i18n;
