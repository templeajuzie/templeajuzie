import Footer from '../Components/Footer';
import HomeComp from '../Components/HomeComp';
import CompProjects from '../Components/CompProjects';
import CompAboutme from '../Components/CompAboutme';
import CompServices from '../Components/CompServices';
import CompLetswork from '../Components/CompLetswork';
import Letswork from './Letswork';
import Navbar from '../Components/Navbar';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HOME | Temple Ajuzie </title>
        <link rel="canonical" href="https://www.templeajuzie.com" />
        <meta
          name="keywords"
          content="MongoDB, Express.js, React.js, Node.js, full-stack development, JavaScript, web development, web development frameworks, NoSQL databases, server-side programming, client-side programming
, Advertising,
SEO, Marketing
, Copywriting
, Web Design Services
, Web Development Services
, Hosting ,
programming, software development, software engineering, algorithms, data structures, computer science, computer engineering, software architecture, software design, software testing, software deployment, version control, agile development, Scrum, DevOps, continuous integration, continuous deployment
, Website Management
, Business Services
, Web Design
, Website Hosting
, SEO Optimization
, Website Design
, Website Management
, Digital Marketing, Customer Relationship Management System
, Search Engine Optimisation, Website Design, Search Engine Optimisation, Logo Design, Copywriting, Hosting"
        />
        <meta
          name="desccription"
          content="Temple is a MERN Stack software engineer, specialize in developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js. With expertise in both server-side and client-side programming, I am capable of creating robust and scalable web solutions that meet the needs of businesses and organizations. Whether it's building RESTful APIs, integrating third-party services, or optimizing website performance, I am dedicated to delivering high-quality code that adheres to best practices and industry standards. Contact me today to learn more about how I can help bring your web development project to life."
        />
      </Helmet>
      <Navbar />
      <HomeComp />
      <CompProjects />
      <CompAboutme />
      <CompServices />
      <CompLetswork />
      <Footer />
    </>
  );
};

export default Home;
