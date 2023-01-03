//import React, { useState } from 'react';
import Link from "next/link";
import PageContent from "../components/pageContent";
import DarkMode from '../components/darkMode'


export default function Home() {
	return (
		<PageContent>
			<section className="hero">
				<div className="container">
					<h1>Website Under Construction</h1>
					<p>whatsdns.org is coming soon. If you would like to contribute to this website please contact me at <Link href="#">bw@wadesinc.io</Link>.</p>
					<p>This project will be opensource and on my <Link href="https://github.com/byronwade">github</Link></p>
					<p>Presented By <Link href="https://www.byronwade.com/">Wade&apos;s Website Development</Link> a <Link href="https://www.byronwade.com/">Wade&apos;s Inc.</Link> company.</p>
					<p>Change the color: <DarkMode /></p>
				</div>
			</section>
		</PageContent>
	);
}
