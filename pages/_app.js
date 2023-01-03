import { useLayoutEffect } from 'react';
import {ThemeProvider, BaseStyles} from '@primer/react'
import {themeGet} from '@primer/react'
import styled from 'styled-components'
import '../styles/globals.scss'
import { DefaultSeo, BrandJsonLd, WebPageJsonLd } from 'next-seo';

// import your default seo configuration
import SEO from '../next-seo.config';

//to suppress all the warings from useLayoutEffect
if (typeof window === "undefined") useLayoutEffect = () => {};

const Background = styled.div`
  background-color: ${themeGet('colors.canvas.default')};
  height: 100vh;
  width:100%;
`

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider colorMode="auto" preventSSRMismatch>
        	<DefaultSeo {...SEO} />
			<BrandJsonLd
				slogan="What does the fox say?"
				id="https://www.purpule-fox.io/#corporation"
				logo="https://www.example.com/photos/logo.jpg"
				aggregateRating={{
					ratingValue: '5',
					ratingCount: '18',
				}}
			/>
			<WebPageJsonLd
				description="What does the fox say?"
				id="https://www.purpule-fox.io/#corporation"
				lastReviewed="2021-05-26T05:59:02.085Z"
				reviewedBy={{
					type: 'Person',
					name: 'Garmeeh',
				}}
			/>
			<BaseStyles>
				<Background>
					<Component {...pageProps} />
				</Background>
			</BaseStyles>
		</ThemeProvider>
	);
}
