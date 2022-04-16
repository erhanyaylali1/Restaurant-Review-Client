import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const HomePage = () => {
	const { t, i18n } = useTranslation();

	return (
		<div>
			<button onClick={() => i18n.changeLanguage("en")}>EN</button>
			<button onClick={() => i18n.changeLanguage("tr")}>TR</button>
			<StyledButton>{t<string>("home_page.button_text")}</StyledButton>
		</div>
	);
};

const StyledButton = styled.button`
	color: white;
	background-color: blue;
`;

export default HomePage;
