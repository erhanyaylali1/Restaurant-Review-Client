import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getIsLogged } from "../features/UserSlice";
import { getScreenSize } from "../features/GeneralSlice";
import { useNavigate } from "react-router-dom";
import Text from "../components/Text";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthInput from "../components/Sign Up/AuthInput";

const SignUpCreatPage = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const is_user_logged_in: boolean = useSelector(getIsLogged);
	const screenSize: number = useSelector(getScreenSize);

	if (is_user_logged_in) navigate("/profile");

	const validationSchema = Yup.object({
		first_name: Yup.string().required(t<string>("validation_messages.first_name")).min(2, t<string>("validation_messages.first_name_min")),
		last_name: Yup.string().required(t<string>("validation_messages.last_name")).min(2, t<string>("validation_messages.last_name_min")),
		email: Yup.string().email(t<string>("validation_messages.email_not_valid")).required(t<string>("validation_messages.email")),
		password: Yup.string().required(t<string>("validation_messages.password")).min(6, t<string>("validation_messages.password_min")),
	});

	const initialValues: IForm = {
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		password_confirmation: "",
	};

	const onSubmit = (values: any) => {
		console.log(values);
	};

	const { handleSubmit, values, handleChange, handleBlur, errors, touched, ...others } = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	return (
		<Container>
			<HeaderContainer>
				<Text
					text={t<string>("sign_up_create.header_title")}
					fontFamily="Merriweather"
					fontSize="30px"
					color="#333"
					fontWeight="500"
					textAlign="center"
				/>
			</HeaderContainer>
			<HeaderContainer>
				<Text
					text={t<string>("sign_up_create.header_text")}
					fontFamily="Montserrat"
					fontSize="18px"
					color="#333"
					fontWeight="400"
					textAlign="center"
					hasHtml
				/>
			</HeaderContainer>
			<FormContainer>
				<form onSubmit={handleSubmit}>
					<AuthInput
						label={t<string>("sign_up_create.first_name_label")}
						placeholder={t<string>("sign_up_create.first_name_placeholder")}
						name="first_name"
						type="text"
						onChange={handleChange}
						handleBlur={handleBlur}
						value={values.first_name}
						error={errors.first_name}
						isTouched={touched["first_name"]}
					/>
					<AuthInput
						label={t<string>("sign_up_create.last_name_label")}
						placeholder={t<string>("sign_up_create.last_name_placeholder")}
						name="last_name"
						type="text"
						onChange={handleChange}
						handleBlur={handleBlur}
						value={values.last_name}
						error={errors.last_name}
						isTouched={touched["last_name"]}
					/>
					<AuthInput
						label={t<string>("sign_up_create.email_label")}
						placeholder={t<string>("sign_up_create.email_placeholder")}
						name="email"
						type="email"
						onChange={handleChange}
						handleBlur={handleBlur}
						value={values.email}
						error={errors.email}
						isTouched={touched["email"]}
					/>
					<AuthInput
						label={t<string>("sign_up_create.password_label")}
						placeholder={t<string>("sign_up_create.password_placeholder")}
						name="password"
						type="password"
						onChange={handleChange}
						handleBlur={handleBlur}
						value={values.password}
						error={errors.password}
						isTouched={touched["password"]}
					/>
					<AuthInput
						label={t<string>("sign_up_create.confirm_password_label")}
						placeholder={t<string>("sign_up_create.password_confirmation_placeholder")}
						name="password_confirmation"
						type="password"
						onChange={handleChange}
						handleBlur={handleBlur}
						value={values.password_confirmation}
						error={
							errors.password_confirmation ||
							(values.password !== values.password_confirmation ? t<string>("validation_messages.password_not_match") : "")
						}
						isTouched={touched["password_confirmation"]}
					/>
					<button type="submit">Submit</button>
				</form>
			</FormContainer>
		</Container>
	);
};

export default SignUpCreatPage;

// STYLED COMPONENTS

const Container = styled(Grid)`
	display: flex;
	flex-direction: column !important;
	padding: 15px;
`;
const HeaderContainer = styled(Grid)`
	display: flex;
	justify-content: center;
	width: 100%;
	margin-top: 10px;
`;
const FormContainer = styled(Grid)`
	margin-top: 60px;
	display: flex;
	flex-direction: column !important;
`;

interface IForm {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	password_confirmation: string;
}
