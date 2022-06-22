import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import Text from "../components/shared/Text";
import IconButton from "../components/shared/IconButton";
import GoogleIcon from "../assets/GoogleIcon.svg";
import FacebookIcon from "../assets/FacebookIcon.svg";
import AuthInput from "../components/Sign Up/AuthInput";
import Button from "../components/shared/Button";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getScreenSize } from "../features/GeneralSlice";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { signIn } from "../features/UserSlice";
import apiCall, { ISignInResponse, IUserSignIn } from "../utils/apiCall";
import { message } from "antd";

const SignInPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToSignUp = () => navigate("/sign-up");
  const screenSize = useSelector(getScreenSize);
  const measures = measureDynamicHeights(screenSize);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t<string>("validation_messages.email_not_valid"))
      .required(t<string>("validation_messages.email")),
    password: Yup.string()
      .required(t<string>("validation_messages.password"))
      .min(6, t<string>("validation_messages.password_min")),
  });

  const initialValues: IForm = {
    email: "",
    password: "",
  };

  const onSubmit = async (values: any) => {
    const user: IUserSignIn = {
      email: values.email,
      password: values.password,
    };
    await apiCall
      .sign_in(user)
      .then((response: ISignInResponse) => {
        dispatch(signIn(response.data));
        navigate("/profile");
        message.success(t<string>("sign_up.sign_up_response_success_message"));
      })
      .catch((err) => message.error(err.response.data.message));
  };

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });

  const handleGoogleSignIn = async (googleData: any) => {
    if (!googleData.error) {
      const user: IUserSignIn = {
        email: googleData.profileObj.email,
        token: googleData.googleId,
      };
      await apiCall
        .sign_in(user)
        .then((response: ISignInResponse) => {
          dispatch(signIn(response.data));
          navigate("/profile");
          message.success(
            t<string>("sign_up.sign_up_response_success_message")
          );
        })
        .catch(() =>
          message.error(t<string>("sign_up.sign_up_response_error_message"))
        );
    }
  };

  const handleFacebookSignIn = async (facebookData: any) => {
    if (!facebookData.error) {
      const user: IUserSignIn = {
        email: facebookData.email,
        token: facebookData.id,
      };
      await apiCall
        .sign_in(user)
        .then((response: ISignInResponse) => {
          dispatch(signIn(response.data));
          navigate("/profile");
          message.success(
            t<string>("sign_up.sign_up_response_success_message")
          );
        })
        .catch(() =>
          message.error(t<string>("sign_up.sign_up_response_error_message"))
        );
    }
  };

  return (
    <Container
      flexDirection={measures.containerFlexDirection}
      justifyContent={measures.containerJustifyContent}
      alignItems="center"
    >
      <SignInEmail>
        <Banner>
          <Grid>
            <Text
              color="#000"
              textAlign="center"
              text={t<string>("sign_in.sign_in_title")}
              fontSize="35px"
              fontFamily="Markazi Text"
              margin="15px 0 10px 0"
            />
            <Text
              color="#000"
              textAlign="center"
              text={t<string>("sign_in.banner_text")}
              fontSize="22px"
              fontFamily="Markazi Text"
              lineHeight="20px"
            />
          </Grid>
        </Banner>
        <FormContainer>
          <form onSubmit={handleSubmit}>
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
              size={"small"}
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
              size={"small"}
            />
            <ButtonContainer>
              <Button
                type="submit"
                text={t<string>("sign_in.sign_in")}
                backgroundColor="#20438C"
                hover="#4b659a"
                color="#fff"
                fontFamily="Markazi Text"
                fontSize="24px"
                width="90%"
                maxWidth="450px !important"
                margin="20px auto"
                padding="5px 10px"
                borderRadius="3px"
                textAlign="center"
              />
              <IconButton
                maxWidth="450px !important"
                containerWidth="90%"
                borderRadius="3px"
                text={t<string>("sign_in.sign_up")}
                margin="0 auto"
                padding="5px 10px"
                fontFamily="Markazi Text"
                fontSize="22px"
                color="#20438C"
                textAlign="center"
                callBack={navigateToSignUp}
              />
            </ButtonContainer>
          </form>
        </FormContainer>
      </SignInEmail>
      <OrSeperator
        flexDirection={measures.orSeperatorFlexDirection}
        height={measures.orSeperatorHeight}
        width={measures.orSeperatorWidth}
        margin={measures.orSeperatorMargin}
        maxWidth={measures.orSeperatorMaxWidth}
      >
        <Line
          borderLeft={measures.orLineBorderLeft}
          borderTop={measures.orLineBorderTop}
          width={measures.orLineWidth}
          height={measures.orLineHeight}
        />
        <Text
          text={t<string>("sign_in.or_text")}
          textAlign="center"
          margin={measures.orLineTextMargin}
        />
        <Line
          borderLeft={measures.orLineBorderLeft}
          borderTop={measures.orLineBorderTop}
          width={measures.orLineWidth}
          height={measures.orLineHeight}
        />
      </OrSeperator>
      <SignInWithSocials
        justifyContent={measures.signInSocialJustifyContent}
        alignItems={measures.signInSocialAlignItems}
      >
        {process.env.REACT_APP_GOOGLE_CLIENT_ID && (
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log in with Google"
            onSuccess={handleGoogleSignIn}
            render={(renderProps) => (
              <IconButton
                hover="#EEE"
                height="30px"
                width="30px"
                containerWidth="90%"
                maxWidth="450px !important"
                iconMargin="0 15px 0 0"
                padding="10px 0"
                borderRadius="3px"
                boxShadow="0px 2px 4px 0px rgba(0,0,0,0.25)"
                text={t<string>("sign_in.sign_up_with_google")}
                callBack={renderProps.onClick}
                icon={GoogleIcon}
                fontFamily="Markazi Text"
                fontSize="22px"
              />
            )}
          />
        )}
        {process.env.REACT_APP_FACEBOOK_APP_ID && (
          <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
            autoLoad={false}
            fields="name,email,picture"
            status={false}
            callback={handleFacebookSignIn}
            render={(renderProps) => (
              <IconButton
                hover="#EEE"
                height="30px"
                width="30px"
                maxWidth="450px !important"
                containerWidth="90%"
                iconMargin="0 15px 0 0"
                padding="10px 0"
                borderRadius="3px"
                margin="20px 0 20px 0"
                boxShadow="0px 2px 4px 0px rgba(0,0,0,0.25)"
                text={t<string>("sign_in.sign_up_with_facebook")}
                callBack={renderProps.onClick}
                icon={FacebookIcon}
                fontFamily="Markazi Text"
                fontSize="22px"
              />
            )}
          />
        )}

        <IconButton
          margin="0 0 0 0"
          borderRadius="3px"
          padding="5px 0"
          containerWidth="90%"
          maxWidth="450px !important"
          text={t<string>("sign_in.sign_up")}
          fontFamily="Markazi Text"
          fontSize="22px"
          color="#20438C"
          textAlign="center"
          callBack={navigateToSignUp}
        />
      </SignInWithSocials>
    </Container>
  );
};

export default SignInPage;

const Container = styled(Grid)`
	flex-direction: ${(props: IContainerProps) => props.flexDirection || "column"};
    align-items= ${(props: IContainerProps) =>
      props.alignItems || "flex-start"};
    justify-content= ${(props: IContainerProps) =>
      props.justifyContent || "flex-start"};
	display: flex;
	margin-inline: auto;
	padding: 40px 30px;
    width: 100%;
    min-height: 80vh;
`;
const SignInEmail = styled(Grid)`
	display: flex;
	flex-direction: column !important;
	flex: 1;
    justify-content= ${(props: IContainerProps) =>
      props.justifyContent || "flex-start"};
`;
const Banner = styled(Grid)``;
const FormContainer = styled(Grid)`
  margin: 40px 0 20px 0;
`;
const ButtonContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  flex-direction: column !important;
`;
const OrSeperator = styled(Grid)`
  display: flex;
  align-items: center;
  flex-direction: ${(props: OrSeperatorProps) =>
    props.flexDirection || "column"};
  height: ${(props: OrSeperatorProps) => props.height || "auto"};
  width: ${(props: OrSeperatorProps) => props.width || "auto"};
  max-width: ${(props: OrSeperatorProps) => props.maxWidth || "auto"};
  margin: ${(props: OrSeperatorProps) => props.margin || "0"};
`;
const Line = styled(Grid)`
  border-top: ${(props: LineProps) => props.borderTop || "1px solid #333"};
  border-left: ${(props: LineProps) => props.borderLeft || "none"};
  width: ${(props: LineProps) => props.width || "0"};
  height: ${(props: LineProps) => props.height || "0"};
`;
const SignInWithSocials = styled(Grid)`
	margin-top: 25px;
	display: flex;
	flex-direction: column !important;
    justify-content= ${(props: IContainerProps) =>
      props.justifyContent || "flex-start"};
    align-items= ${(props: IContainerProps) => props.alignItems || "center"};
	flex: 0.7;
	width: 100%;
`;
interface IForm {
  email: string;
  password: string;
}

interface IContainerProps {
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
}

interface OrSeperatorProps {
  flexDirection?: string;
  height?: string;
  width?: string;
  maxWidth?: string;
  margin?: string;
}

interface IForm {
  email: string;
  password: string;
}

interface LineProps {
  borderTop?: string;
  borderLeft?: string;
  width?: string;
  height?: string;
  margin?: string;
}

interface IDynamicMeasurements {
  containerFlexDirection?: "row" | "column";
  containerJustifyContent?: "center" | "space-around";
  orSeperatorFlexDirection?: "row" | "column";
  orSeperatorHeight?: "auto" | "30vh";
  orSeperatorWidth?: "auto" | "100%";
  orSeperatorMaxWidth?: "auto" | "70%";
  orSeperatorMargin?: "0" | "0 5% 0 0";
  orLineBorderLeft?: "0" | "1px solid #333";
  orLineBorderTop?: "0" | "1px solid #333";
  orLineWidth?: "100%" | "0";
  orLineHeight?: "100%" | "0";
  orLineTextMargin?: "20px 0" | "0 20px";
  signInSocialAlignItems?: string;
  signInSocialJustifyContent?: string;
}

// UTIL FUNCTION
const measureDynamicHeights = (screenSize: number): IDynamicMeasurements => {
  const result: IDynamicMeasurements = {};
  if (screenSize < 1000) {
    result.containerFlexDirection = "column";
    result.containerJustifyContent = "center";
    result.orSeperatorFlexDirection = "row";
    result.orSeperatorHeight = "auto";
    result.orSeperatorWidth = "100%";
    result.orSeperatorMaxWidth = "70%";
    result.orSeperatorMargin = "0";
    result.orLineBorderLeft = "0";
    result.orLineBorderTop = "1px solid #333";
    result.orLineWidth = "100%";
    result.orLineHeight = "0";
    result.orLineTextMargin = "0 20px";
    result.signInSocialAlignItems = "center";
    result.signInSocialJustifyContent = "center";
  } else {
    result.containerFlexDirection = "row";
    result.containerJustifyContent = "space-around";
    result.orSeperatorFlexDirection = "column";
    result.orSeperatorHeight = "30vh";
    result.orSeperatorWidth = "auto";
    result.orSeperatorMaxWidth = "auto";
    result.orSeperatorMargin = "0";
    result.orLineBorderLeft = "1px solid #333";
    result.orLineBorderTop = "0";
    result.orLineWidth = "0";
    result.orLineHeight = "100%";
    result.orLineTextMargin = "20px 0";
    result.signInSocialAlignItems = "center";
    result.signInSocialJustifyContent = "center";
  }

  return result;
};
