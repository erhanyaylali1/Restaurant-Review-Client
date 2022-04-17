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
					sign_up: {
						image_text: "Review Restourants",
						welcome_title: "Welcome to Review!",
						welcome_text: "You can find best restourants, or rate them.",
						sign_up_with_google: "Sign up with Googl.",
						sign_up_with_facebook: "Sign up with Facebook",
						sign_up: "Create a new account",
						sign_in: "Have an account? Sign In",
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
					sign_up: {
						image_text: "Restoranları İnceleyin",
						welcome_title: "Review'e Hoşgeldiniz!",
						welcome_text: "En iyi restoranları bulabilir, veya puanlayabilirsiniz.",
						sign_up_with_google: "Google ile giriş yap",
						sign_up_with_facebook: "Facebook ile giriş yap",
						sign_up: "Yeni bir hesap oluştur",
						sign_in: "Hesabın var mı? Giriş yap",
					},
				},
			},
		},
	});

export default i18n;
