import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
import InitiativesDetails from "../../components/InitiativesDetails/InitiativesDetails";
import InitiativesTimeline from "../../components/InitiativesTimeline/InitiativesTimeline";

const InitiativesdetailsPage = () => {
  return (
    <>
      <Header />
       <InitiativesDetails/>
       <InitiativesTimeline/>
      <Footer />
    </>
  );
};

export default InitiativesdetailsPage;
