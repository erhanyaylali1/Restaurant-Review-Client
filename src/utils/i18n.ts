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
						welcome_text: "You can find best restourants, or rate them",
						sign_up_with_google: "Sign up with Google.",
						sign_up_with_facebook: "Sign up with Facebook",
						sign_up: "Create a new account",
						sign_in: "Have an account? Sign In",
					},
					sign_up_create: {
						header_title: "Lets Get Started!",
						header_text: "Can't decide a place to eat? Create an account in <b style='color: #C34646'>Review</b>, then.",
						first_name_label: "First Name",
						first_name_placeholder: "Enter your first name",
						last_name_label: "Last Name",
						last_name_placeholder: "Enter your last name",
						email_label: "Email",
						email_placeholder: "Enter your email",
						password_label: "Password",
						password_placeholder: "Enter your password",
						confirm_password_label: "Confirm Password",
						password_confirmation_placeholder: "Confirm your password",
						create_account_button_text: "Sign Up",
						sign_in_button_text: "Have an account? Sign In.",
					},
					sign_in: {
						sign_in_title: "Sign In to Review!",
						banner_text: "Welcome Back! You can find best restourants here, rate them",
						forgot_password_text: "Forgot Password?",
						or_text: "or",
						sign_in: "Sign In",
						sign_up_with_google: "Sign up with Google.",
						sign_up_with_facebook: "Sign up with Facebook",
						sign_up: "Don't have an account? Sign In",
					},
					validation_messages: {
						first_name: "First Name is required",
						first_name_min: "First Name must be at least 2 characters long",
						last_name: "Last Name is required",
						last_name_min: "Last Name must be at least 2 characters long",
						email: "Email is required",
						email_not_valid: "Email must be valid",
						password: "Password is required",
						password_min: "Password must be at least 6 characters long",
						password_not_match: "Passwords do not match",
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
					sign_up_create: {
						header_title: "Hazırsan Başlayalım!",
						header_text: "Nerede yiyeceğine karar veremedin mi? <b style='color: #C34646'>Review</b>'de bir hesap oluştur.",
						first_name_label: "İsim",
						first_name_placeholder: "Lütfen isminizi giriniz",
						last_name_label: "Soyisim",
						last_name_placeholder: "Lütfen soyisminizi giriniz",
						email_label: "Email",
						email_placeholder: "Lütfen email adresinizi giriniz",
						password_label: "Şifre",
						password_placeholder: "Lütfen şifrenizi giriniz",
						confirm_password_label: "Şifreyi Onayla",
						password_confirmation_placeholder: "Lütfen şifrenizi onaylayınız",
						create_account_button_text: "Üye Ol",
						sign_in_button_text: "Hesabın var mı? Giriş yap",
					},
					sign_in: {
						sign_in_title: "Review'a giriş yap!",
						banner_text: "Hoşgeldiniz! Burada en iyi restoranları bulup, puanlayabilirsiniz",
						forgot_password_text: "Şifremi unuttum?",
						or_text: "veya",
						sign_in: "Giriş Yap",
						sign_up_with_google: "Google ile giriş yap",
						sign_up_with_facebook: "Facebook ile giriş yap",
						sign_up: "Hesabınız yok mu? Üye olun",
					},
					validation_messages: {
						first_name: "İsim boş olamaz",
						first_name_min: "İsim en az 2 karakter uzunluğunda olmalı",
						last_name: "Soyisim boş olamaz",
						last_name_min: "Soyisim en az 2 karakter uzunluğunda olmalı",
						email: "Email boş olamaz",
						email_not_valid: "Geçerli bir email adresi giriniz",
						password: "Şifre boş olamaz",
						password_min: "Şifre en az 6 karakter olmalıdır",
						password_not_match: "Şifreler uyuşmuyor",
					},
				},
			},
		},
	});

export default i18n;
