import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getIsLogged } from "../features/UserSlice";
import { useNavigate } from "react-router-dom";
import Text from "../components/Text";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthInput from "../components/Sign Up/AuthInput";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import { getScreenSize } from "../features/GeneralSlice";
import SecondBannerImage from "../assets/SecondBannerImage.jpeg";
import BannerImage from "../components/Sign Up/BannerImage";

const SignUpCreatPage = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const is_user_logged_in: boolean = useSelector(getIsLogged);
	const screenSize = useSelector(getScreenSize);

	if (is_user_logged_in) navigate("/profile");

	const navigateToSignIn = () => navigate("/sign-in");

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

	const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	const renderImage = () => {
		if (measures.shouldImageShown) {
			return <BannerImage image={SecondBannerImage} height="50vh" />;
		} else return null;
	};

	const measures: IDynamicMeasurements = measureDynamicHeights(screenSize);

	return (
		<Container flexDirection={measures.flexDirection}>
			<HeaderContainer marginTop={measures.headerContainerMarginTop}>
				<TextContainer>
					<Text
						text={t<string>("sign_up_create.header_title")}
						fontFamily="Merriweather"
						fontSize="30px"
						color="#333"
						fontWeight="500"
						textAlign="center"
					/>
				</TextContainer>
				<TextContainer>
					<Text
						text={t<string>("sign_up_create.header_text")}
						fontFamily="Montserrat"
						fontSize="18px"
						color="#333"
						fontWeight="400"
						textAlign="center"
						hasHtml
					/>
				</TextContainer>
				<ImageContainer>{renderImage()}</ImageContainer>
			</HeaderContainer>
			<FormContainer marginTop={measures.formContainerMarginTop}>
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
						size={measures.inputSize}
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
						size={measures.inputSize}
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
						size={measures.inputSize}
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
						size={measures.inputSize}
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
						size={measures.inputSize}
					/>
					<ButtonContainer>
						<Button
							type="submit"
							text="Sign Up"
							backgroundColor="#20438C"
							hover="#4b659a"
							color="#fff"
							fontFamily="Markazi Text"
							fontSize="25px"
							width="100%"
							maxWidth="450px !important"
							margin="20px 0 15px 0"
							borderRadius="3px"
							textAlign="center"
						/>
						<IconButton
							containerWidth="100%"
							borderRadius="3px"
							text={t<string>("sign_up.sign_in")}
							fontFamily="Markazi Text"
							fontSize="22px"
							color="#20438C"
							textAlign="center"
							callBack={navigateToSignIn}
						/>
					</ButtonContainer>
				</form>
			</FormContainer>
		</Container>
	);
};

export default SignUpCreatPage;

// STYLED COMPONENTS

const Container = styled(Grid)`
	display: flex;
	padding: 15px;
	flex-direction: ${(props: ContainerProps) => props.flexDirection + " !important" || "initial"};
`;
const HeaderContainer = styled(Grid)`
	flex: 1;
	margin-top: ${(props: ContainerProps) => props.marginTop + " !important" || "0"};
`;
const TextContainer = styled(Grid)`
	display: flex;
	justify-content: center;
	width: 100%;
	margin-top: 20px;
`;
const ImageContainer = styled(Grid)`
	margin-top: 30px;
	width: 90%;
	margin-inline: auto;
`;
const FormContainer = styled(Grid)`
	flex: 1;
	margin-top: 70px;
	display: flex;
	flex-direction: column !important;
	margin-top: ${(props: ContainerProps) => props.marginTop + " !important" || "0"};
`;
const ButtonContainer = styled(Grid)`
	display: flex;
	flex-direction: column !important;
	justify-content: center;
	align-items: center;
	width: 90%;
	margin-inline: auto;
	& div {
		max-width: 450px !important;
	}
`;

interface IForm {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	password_confirmation: string;
}

interface ContainerProps {
	flexDirection?: string;
	marginTop?: string;
}

interface IDynamicMeasurements {
	inputSize?: "small" | "medium";
	flexDirection?: "row" | "column";
	shouldImageShown?: boolean;
	headerContainerMarginTop?: string;
	headerContainerMarginBottom?: string;
	formContainerMarginTop?: string;
}

// UTIL FUNCTION
const measureDynamicHeights = (screenSize: number): IDynamicMeasurements => {
	const result: IDynamicMeasurements = {};
	if (screenSize < 500) {
		result.inputSize = "small";
		result.flexDirection = "column";
		result.shouldImageShown = false;
		result.headerContainerMarginTop = "10px";
		result.formContainerMarginTop = "50px";
	} else if (screenSize < 992) {
		result.inputSize = "medium";
		result.flexDirection = "column";
		result.shouldImageShown = false;
		result.headerContainerMarginTop = "10px";
		result.formContainerMarginTop = "70px";
	} else {
		result.inputSize = "medium";
		result.flexDirection = "row";
		result.shouldImageShown = true;
		result.headerContainerMarginTop = "3%";
		result.formContainerMarginTop = "8%";
	}

	return result;
};
