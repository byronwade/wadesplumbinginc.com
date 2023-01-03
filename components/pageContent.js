
import Nav from "./nav";
import Footer from "./footer";

function PageContent({children}) {
    return ( 
		<>
			<Nav/>
			<main>
				{children}
			</main>
			<Footer />
		</>
    );
}

export default PageContent;