//Nav
import Link from "next/link";

export default function Nav() {
	return (
		<header className="sticky">
			<div className="nav">
				<div className="container">
					<div className="branding">
						<Link href='https://whatsdns.org'>whatsdns.org</Link>
					</div>
				</div>
			</div>
		</header>
	);
}





