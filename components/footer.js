//Nav
import Link from "next/link";

export default function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="socialmedia">
					<Link href="https://www.facebook.com/byronwadewebdev">Facebook</Link>
					<Link href="https://twitter.com/ByronWade18">Twitter</Link>
					<Link href="https://dribbble.com/byronwade">Dribbble</Link>
					<Link href="https://github.com/byronwade">Github</Link>
				</div>
				<div className="siteInfo">
					© {new Date().getFullYear()}, built by <Link href="https://www.byronwade.com/">Byron Wade</Link> and developed with <Link href="https://nextjs.org/">Next.js</Link>
				</div>
			</div>
		</footer>
	);
}
