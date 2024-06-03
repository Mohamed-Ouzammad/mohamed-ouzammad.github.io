import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";
import HomePageImage from "./HomePage.png";
import styleDeskImage from "./style-desktop.png";
import styleMobImage from "./style-mobile.png";
import VTF1Image from "./videTonf-1.png";
import VTF2Image from "./videTonf-2.png";
import VTF3Image from "./videTonf-3.png";
import VTF4Image from "./videTonf-4.png";
import VTF5Image from "./videTonf-5.png";
import maison2 from "./maison2.png";
import nMaison4 from "./n-maison-4.png";
import nMaison2 from "./n-maison-2.png";
import nMaison3 from "./n-maison-3.png";
import home from "./home.png";
import mangaCard from "./manga-card.png";
import mangaCarousel from "./manga-carousel.png";
import mangaPage from "./manga-page.png";

// const experience = {
// 	title: "Experience",
// 	subtitle: "Work, Internship and Volunteership",
// 	description:
// 		"I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
// 	header_image_path: "experience.svg",
// 	sections: [
// 		{
// 			title: "Work",
// 			experiences: [
// 				{
// 					title: "Associate AI Engineer",
// 					company: "Legato Health Technology",
// 					company_url: "https://legatohealthtech.com/",
// 					logo_path: "legato_logo.png",
// 					duration: "June 2020 - PRESENT",
// 					location: "Hyderabad, Telangana",
// 					description: "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
// 					color: "#0879bf"
// 				},
// 				{
// 					title: "Android and ML Developer",
// 					company: "Muffito Incorporation",
// 					company_url: "https://www.linkedin.com/company/muffito-inc/about/",
// 					logo_path: "muffito_logo.png",
// 					duration: "May 2018 - Oct 2018",
// 					location: "Pune, Maharashtra",
// 					description:
// 						"I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
// 					color: "#9b1578"
// 				},
// 				{
// 					title: "Android Developer",
// 					company: "FreeCopy Pvt. Ltd.",
// 					company_url: "https://www.linkedin.com/company/freecopy/about/",
// 					logo_path: "freecopy_logo.png",
// 					duration: "Nov 2017 - Dec 2017",
// 					location: "Ahmedabad, Gujarat",
// 					description:
// 						"FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
// 					color: "#fc1f20"
// 				}
// 			]
// 		},
// 		{
// 			title: "Internships",
// 			experiences: [
// 				{
// 					title: "Data Science Research Intern",
// 					company: "Delhivery Pvt. Ltd.",
// 					company_url: "https://www.delhivery.com/",
// 					logo_path: "delhivery_logo.png",
// 					duration: "May 2019 - Sept 2019",
// 					location: "Gurgaon, Haryana",
// 					description:
// 						"I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
// 					color: "#ee3c26"
// 				},
// 				{
// 					title: "Data Science Intern",
// 					company: "Intel Indexer LLC",
// 					company_url:
// 						"https://opencorporates.com/companies/us_dc/EXTUID_4170286",
// 					logo_path: "intel_logo.jpg",
// 					duration: "Nov 2018 - Dec 2018",
// 					location: "Work From Home",
// 					description:
// 						"This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
// 					color: "#0071C5"
// 				}
// 			]
// 		},
// 		{
// 			title: "Volunteerships",
// 			experiences: [
// 				{
// 					title: "Google Explore ML Facilitator",
// 					company: "Google",
// 					company_url: "https://about.google/",
// 					logo_path: "google_logo.png",
// 					duration: "June 2019 - April 2020",
// 					location: "Hyderabad, Telangana",
// 					description:
// 						"Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
// 					color: "#4285F4"
// 				},
// 				{
// 					title: "Microsoft Student Partner",
// 					company: "Microsoft",
// 					company_url: "https://www.microsoft.com/",
// 					logo_path: "microsoft_logo.png",
// 					duration: "Aug 2019 - May 2020",
// 					location: "Hyderabad, Telangana",
// 					description:
// 						"Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
// 					color: "#D83B01"
// 				},
// 				{
// 					title: "Mozilla Campus Captain",
// 					company: "Mozilla",
// 					company_url: "https://www.mozilla.org/",
// 					logo_path: "mozilla_logo.png",
// 					duration: "Oct 2019 - May 2020",
// 					location: "Kurnool, Andhra Pradesh",
// 					description:
// 						"My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
// 					color: "#000000"
// 				},
// 				{
// 					title: "Developer Students Club Member",
// 					company: "DSC IIITDM Kurnool",
// 					company_url:
// 						"https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
// 					logo_path: "dsc_logo.png",
// 					duration: "Jan 2018 - May 2020",
// 					location: "Kurnool, Andhra Pradesh",
// 					description:
// 						"We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
// 					color: "#0C9D58"
// 				},
// 				{
// 					title: "Developer Program Member",
// 					company: "Github",
// 					company_url: "https://github.com/",
// 					logo_path: "github_logo.png",
// 					duration: "July 2019 - PRESENT",
// 					location: "Work From Home",
// 					description:
// 						"I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating peoper documentation for project.",
// 					color: "#181717"
// 				}
// 			]
// 		}
// 	]
// };

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                {/* <img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
									alt=""
								/> */}
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
        <div>
          <div style={{ marginLeft: "50px" }}>
            <h3>Stage 2ème Année</h3>
            <h5>Devatopia</h5>
            <p>
              Dans le cadre de ma formation en BTS SIO ( Services Informatiques
              aux Organisations) spécialité Solutions logicielles et Application
              Métiers, j’ai effectué un stage au sein de l'entreprise Devatopia
              du 20 novembre 2023 au 22 décembre 2023. Durant cette période,
              j'ai été chargé de développer les maquettes via Figma et de mettre
              en ligne les landings pages de l'application flutter de
              l'entreprise Devatopia. J'ai crée les figmas et développé ce site
              en React JS.
            </p>
            <p>
              Développement d'une interface en React d'une application Flutter,
              Installation et configuration d'un design system Tailwind,
              Utilisation des medias queries, Organisation en méthodologie agile
              Scrum
            </p>
            <img
              src={HomePageImage}
              alt="Home Page"
              style={{ maxWidth: "60%" }}
            />
            <img src={styleDeskImage} alt="DESK" style={{ maxWidth: "60%" }} />
            <img src={styleMobImage} alt="Mobile" style={{ maxWidth: "60%" }} />
            <img src={VTF1Image} alt="VTF1" style={{ maxWidth: "60%" }} />
            <img src={VTF2Image} alt="VTF2" style={{ maxWidth: "60%" }} />
            <img src={VTF3Image} alt="VTF3" style={{ maxWidth: "60%" }} />
            <img src={VTF4Image} alt="VTF4" style={{ maxWidth: "60%" }} />
            <img src={VTF5Image} alt="VTF5" style={{ maxWidth: "60%" }} />
          </div>
          <div style={{ marginLeft: "50px" }}>
            <h3>Stage 1ère Année</h3>
            <h5>Golden Web</h5>
            <p>
              Dans le cadre de ma formation en BTS SIO (Services Informatiques
              aux Organisations) spécialité Solutions logicielles et Application
              Métiers, j’ai effectué un stage au sein de l'entreprise Golden Web
              du 29 mai 2023 au 07 juillet 2023. La mission qui me fut confiée
              durant ce stage était de concevoir, développer et mettre en ligne
              le site web en React JS. J’ai pu être source de proposition en
              recommandant Tailwind sur le projet, cette technique m’obtenir un
              design system stable et efficace rapidement. Le site est avant
              tout mobile, mais tailwind m’a permis d’obtenir un site web
              responsif et j’ai pu au besoin ajuster avec des médias queries.
              Via React Router j’ai également pu concevoir une page produit,
              permettant à l'utilisateur d'avoir plus d'informations sur le
              produit sélectionné dans la page d'accueil. voici quelques
              screenshots du site web dont le thème est les mangas Japonais :
            </p>
            <p>
              Développement d'une interface en React d'une application Flutter,
              Installation et configuration d'un design system Tailwind,
              Utilisation des medias queries, Organisation en méthodologie agile
              Scrum
            </p>
            <img src={maison2} alt="maison2" style={{ maxWidth: "60%" }} />
            <img src={nMaison4} alt="nMaison4" style={{ maxWidth: "60%" }} />
            <img src={nMaison2} alt="nMaison2" style={{ maxWidth: "60%" }} />
            <img src={nMaison3} alt="nMaison3" style={{ maxWidth: "60%" }} />
            <img src={home} alt="home" style={{ maxWidth: "60%" }} />
            <img src={mangaCard} alt="mangaCard" style={{ maxWidth: "60%" }} />
            <img
              src={mangaCarousel}
              alt="mangaCarousel"
              style={{ maxWidth: "60%" }}
            />
            <img src={mangaPage} alt="mangaPage" style={{ maxWidth: "60%" }} />
          </div>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
