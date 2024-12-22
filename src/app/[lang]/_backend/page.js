import TechStack from "@/components/techStack";
import { generateMetaData } from "@/utils/metaData";
import ContactCard from "@/components/contactCard";
import CollabQuote from "@/components/collabQuote";

export async function generateMetadata() {
    return generateMetaData('/backend');
  }
  

const page = () => {

    const logos = [

        { src: "/logos/python.svg", alt: "Python", width: 60, height: 60, url: 'https://www.python.org'},
        { src: "/logos/postgresql.svg", alt: "CPostgreSQL", width: 60, height: 60, url: 'https://www.postgresql.org'},
        { src: "/logos/mongodb.svg", alt: "MongoDB", width: 190, height: 60, url: 'https://www.mongodb.com'},
        { src: "/logos/docker.svg", alt: "Docker", width: 175, height: 100, url: 'https://www.docker.com'},
        { src: "/logos/yolo.svg", alt: "You Only Look Once", width: 100, height: 50, url: 'https://pjreddie.com/darknet/yolo/'},
      ];

      const references = [
        {
          quote:
            "Suloke was tasked by Arbonaut with a challenging full-stack development: an application integrating satellite and crowdsourced wildfire data, with mobile and web portals. Suloke's skilled experts undertook the task with vigour, skilfully and independently delivering a comprehensive app. I am highly impressed with the outcome and happily recommend Suloke for demanding development tasks!",
          author: "Tuomo Kauranne",
          level: "CEO",
          useLogo: true,
          logoSrc: "/logos/arbonaut.png",
        },
      ];

    return (

        <div className="flex flex-col bg-suloke-yellow w-full gap-y-14 px-5 pt-32 pb-14 items-center">
            <div className="md:w-4/5 lg:w-1/2 gap-y-14 md:gap-y-20 lg:gap-y-24">
                <div className="flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-5 lg:mb-8"> {/* Intro */}
                    <h1 className="text-center pb-6 lg:mb-8">
                        BACKEND DEVELOPMENT
                    </h1>
                    <p className="px-2">
                        Our team has experience in delivering complex and demanding backend solutions for a variety of customers. We have created complete pipelines for eCommerce and large big data gathering and analysis operations; creating RESTful API´s and integrating Computer Vision(YOLO) into data analysis.
                    </p>
                    <p className="px-2">
                        We provide you fast implementation of reliable and lasting backend-solutions, organizing and enhancing your business.
                    </p>
                </div>     
                <div className="flex flex-row w-full items-center justify-center"> {/* Reference */}
                    <div className="flex flex-col gap-y-10 pt-14 md:pt-20  md:w-2/3 lg:w-2/3"> 
                        <CollabQuote references={references}/>
                    </div>
                </div>
                <div className="pt-14 md:pt-20 lg:pt-20 pb-14 md:pb-20 lg:pb-20">
                     <TechStack logos={logos}/>
                </div>
                <div className="flex flex-col gap-y-10 pb-10"> {/* Contact */}
                    <ContactCard color={'bg-suloke-yellowlight'}/>
                </div>
            </div>
        </div>
    )
}

export default page;