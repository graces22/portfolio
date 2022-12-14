import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import Projects from "../lib/data";
import Projectheader from "../Components/projectheader";
import Image from "next/image";
import Tqrhero from "../public/images/One.png";
import Tqrstats1 from "../public/images/tqr-stats1.png";
import Tqrscreens from "../public/images/tqr-screens.png";
import Tqrusers from "../public/images/tqr-users.png";
import Tqrprinciples from "../public/images/tqr-principles.png";
import Tqrresearch2 from "../public/images/tqr-research2.png";
import Tqrideation from "../public/images/tqr-ideation.png";
import Tqrflow1 from "../public/images/tqr-flow1.png";
import Tqrflow2 from "../public/images/tqr-flow2.png";
import Tqrwireframe1 from "../public/images/tqr-wireframe1.png";
import Tqrwireframe2 from "../public/images/tqr-wireframe2.png";
import Tqrwireframe3 from "../public/images/tqr-wireframe3.png";
import Tqrwireframe4 from "../public/images/tqr-wireframe4.png";
import Tqrsolution from "../public/images/tqr-solution.png";
import Tqrdesktoponboard from "../public/images/tqr-desktopgif1.gif";
import Tqrdesktopcreate from "../public/images/tqr-desktopgif2.gif";
import Tqrhome from "../public/images/home-scroll.gif";
import Tqrdesktop1 from "../public/images/tqr-desktop1.gif";
import Tqrmobileonboard from "../public/images/tqr-mobilegif1.gif";
import Tqrmobilecreate from "../public/images/tqr-mobilegif2.gif";
import Tqrmobile1 from "../public/images/tqr-mobile1.gif";
import Tqrdesignsystem from "../public/images/tqr-designsystem.png";

export default function tapqr() {
    const data = Projects.tapqr;
    const { title, description, overview, brief, heroimage } = Projects.tapqr;

  return (
    <div>
      <Head>
        <title>Grace Song | TapQR</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicongs.svg" />
      </Head>

      <Navbar />
     <Projectheader data={Projects.tapqr}>
     </Projectheader>
     <div className="flex justify-between text-center mx-0 md:mx-3 lg:mx-5 mt-5 md:mt-10">
       <div className="flex flex-col md:mx-3 mx-5 mt-0">
         <div className="mb-20">
          <Image src={Tqrhero} alt="solution" layout="responsive" objectFit="cover" priority="true"/>
         </div>
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2 md:w-5/6 lg:w-4/6">
           01 / THE PROBLEM
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           Embedding external links through social posts is essential to users today, however the current ways of doing so are limiting, and existing Web2 companies tend to create an unethical, long-term??rent extraction form of lock-in.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           <span><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer underline">Instagram</a></span> is a widespread example where the platform is bereft of clickable links, resulting in the growth of companies that strive to provide solutions such as <span><a href="https://www.bitly.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer underline">Bitly</a></span> and <span><a href="https://www.linktree.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer underline">Linktree</a></span> to name a few. Although these companies have been successful in providing their respective services, a fundamental problem remains: In the context of Instagram, a social??post is simply not able to directly open a link to an external website. <br/><br/> With existing Web2 companies that provide QR code services, users face a deeper problem concerning central authority, in which it comes with inevitable consequences and risks. To illustrate this form of user lock-in, imagine an influencer using a QR code service on a monthly fee, with social media content that contains these QR codes, accumulating traffic even a year later. Within this context, the user would be reluctant to cancel this service, and the continual operation of their QR codes would be entirely dependent on agreeing with any changes made by said service provider.
         </p1>
       </div>
      </div>
      <div className="w-full px-0 md:px-3 lg:px-5 py-10 lg:py-16 my-10 lg:my-20 bg-lime-50">
        <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2  mx-5 md:mx-3 md:w-5/6 lg:w-4/6">
          THE DESIGN CHALLENGE
        </p1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-left my-2 md:my-5 mx-5 md:mx-3 md:w-5/6 lg:w-4/6 text-black">How might we build a product for influencer marketing that grants user authority, while encouraging a new practice of easily tapping, stamping and tracking QR codes that are embedded in their long-lived social media posts?</h1>
      </div>
      <div className="flex justify-between text-center mx-0 md:mx-3 lg:mx-5 mt-10 lg:mt-20">
       <div className="flex flex-col md:mx-3 mx-5 mt-10 md:mt-20">
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-10 mb-2 md:w-5/6 lg:w-4/6">
           02 / THE SOLUTION
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           TapQR provides users a new way to embed unique QR codes in social media posts???built on the Solana blockchain???ensuring layers of control, ownership and authority.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           As of early 2022, clickable QR codes are likely to become a new behavior that unlocks tremendous value. A solution that works around this occurrence was critical and ideal, as posts have??the potential to hold a very long life in a??digital space, where??some of the??oldest posts are still valuable today.??With this in mind,??TapQR provides users an efficient way to instantly stamp their posts with trackable and editable QR codes.<br/><br/>Additionally, building a??platform on the <span><a href="https://www.solana.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer underline">Solana</a></span> blockchain solves the central authority problem, especially important for users who see value in the long-term use of QR codes. Users will be able to own their QR codes, with opportunities to grow traffic and potentially even sell for a greater value.
         </p1>
         <div className="mt-5 mb-20">
          <Image src={Tqrsolution} alt="solution" layout="responsive" objectFit="cover" priority="true"/>
         </div>
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2 md:w-5/6 lg:w-4/6">
           03 / RESEARCH
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           We began with preliminary research around influencer marketing to evaluate current demand and trends for validation and ideation.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           As the project was assigned with a set idea and solution to some already known problems within influencer marketing today, minimal time was spent gathering relevant insights that would validate the idea from a product design point of view. These findings promptly revealed great potential of the product entering the market in which the influencer marketing industry was vastly growing with proven statistics.
         </p1>
         <div className="my-5">
          <Image src={Tqrstats1} alt="stats-one" layout="responsive" objectFit="cover" priority="true"/>
         </div>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           There was great potential for the product to gain traction knowing that consumers are in favour of influencer-generated content, along with Shopify presenting steady growth with 1.75 million merchants today. This was relevant from a business perspective, as TapQR was being developed to live in conjunction with Shopify merchants, as a new way for collaborating with potential creators. Ultimately, we were able to determine that our target audience would be nano to micro influencers that usually engage with smaller businesses being first-time entrepreneurs, in which influencer marketing is highly essential.
         </p1>
         <p1 className="text-base text-left text-zinc-400">Source: <a href="https://grin.co/blog/influencer-marketing-statistics/" target="_blank" rel="noopener noreferrer" className="cursor-pointer underline text-base hover:text-black">Grin</a><span>, </span><a href="https://www.edesk.com/blog/shopify-statistics/" target="_blank" rel="noopener noreferrer" className="cursor-pointer underline text-base hover:text-black">eDesk</a></p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left mt-40 mb-5 md:w-5/6 lg:w-4/6">
           Moving forward, we conducted research that will drive ideation from a design approach, in terms of how the product may take form and function in the hands of our users.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           As we were building a product for social media users, it was critical to run a competitive analysis on top ranking content creation apps in the App Store, allowing us to envision a product that was new in functionality yet still familiar in usability. While there are no competitors that directly serve the same intricate purpose as TapQR, we were able to see the general landscape of where the product would live in accordance with content creation and QR code generation. <span><a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer underline">Canva</a></span>, <span><a href="https://www.unfold.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer underline">Unfold</a></span> and <span><a href="https://www.picsart.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer underline">Picsart</a></span> to name a few are popularly used in content creation, with a prominent feature being the photo editor that focuses on quick and creative customization.<br/><br/>Additionally, we also looked at various QR code generators and decided to further analyse <span><a href="https://www.qr-code-generator.com/" target="_blank" rel="noopener noreferrer" className="cursor-pointer underline">QR Code Generator powered by Bitly</a></span> as there was an ease in performing the main tasks in simple creation and managing QR codes within a dashboard view. Rather than focusing on specific features in this competitive analysis, we wanted to gain insight on successful visual structures and main task flows to inform our design decisions.
         </p1>
         <div>
          <Image src={Tqrscreens} alt="competitors" layout="responsive" objectFit="cover" priority="true"/>
         </div>
         
         <p1 className="font-normal text-3xl lg:text-4xl text-left mt-40 mb-5 md:w-5/6 lg:w-4/6">
           Knowing the foundations of blockchain technology and how a??world of dApps emerged was a critical area of research in designing for Web3.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           As a sole designer on the team and being completely new to blockchain,??crypto and Web3, learning more about this growing ecosystem was essential even before diving into ideation for design. Through relative research and experiencing Solana first-hand, it was truly fascinating in discovering??what the technology holds for??futures of the Internet.<br/><br/>During what felt like going down a rabbit hole, an amazing article was able to interrupt??and enlighten a hefty??thought process. In addition, analyzing current dApps was crucial, as we wanted to identify what users may deem complicated, and what was working well in terms of an overall experience. At a higher level, some key takeaways and principles in designing for Web3 are:
         </p1>
         <div className="my-5">
          <Image src={Tqrprinciples} alt="principles" layout="responsive" objectFit="cover" priority="true"/>
         </div>

         <div className="my-5">
          <Image src={Tqrresearch2} alt="research-two" layout="responsive" objectFit="cover" priority="true"/>
         </div>
         <p1 className="font-normal text-3xl lg:text-4xl text-left mt-40 mb-5 md:w-5/6 lg:w-4/6">
           Taking what we have learned, we dived into another critical area of user research to empathize with our target users.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           While we were working with a potential idea of stamping posts with QR codes, the research goal was to learn more about their current experience, pain points and expectations for TapQR in order to build a product that truly met their needs. By working with an internal brand being Rockwell Razors, interviewing 3 influencers that the brand was collaborating with allowed us to collect insights on key areas related to influencer marketing as well as topics concerning TapQR:
         </p1>
         <div className="my-5">
          <Image src={Tqrusers} alt="user-research" layout="responsive" objectFit="cover" priority="true"/>
         </div>
         <p1 className="font-normal text-lg lg:text-xl text-left mt-10 mb-5 md:w-5/6 lg:w-4/6">
           Upon research, refining the product goals through determining HMWs allowed us to ideate on how to deliver an experience that will best serve our users:
         </p1>
         <div className="flex flex-row mt-5 mb-40 ">
         <div className="pr-4 lg:pr-6">
           <div className="h-full border-l-[10px] lg:border-l-[12px] border-lime-100 border-solid"></div>
         </div>
         <p1 className="font-normal text-xl lg:text-2xl text-left text-zinc-400 md:w-5/6 lg:w-4/6">
           How might we design a product that is familiar enough to engage??social media users in valuing the concept??of stamping their content with unique QR codes?<br/><br/>How might we build an experience that is easy to adopt and??informative enough, yet not??overly complex that might bore??or potentially scare users who are new to concepts of blockchain technology?<br/><br/>How might we improve the overall??experience for long-term users, while creating a sense of motivation, inspiration??and belonging?
         </p1>
         </div>
             
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2 md:w-5/6 lg:w-4/6">
           04 / IDEATION
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           With greater insight, we began narrowing our focus to??determine??features that would deliver a clear value and purpose.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           Along with designing the process of stamping a post with QR codes, we also wanted to focus on the overall experience of what the product would provide. This encompasses an aspect of community in which users can freely view details of top performing TapQR along with their respective creators, as well as having access to collaborate with brands.<br/><br/>Reflecting on research, I sketched out potential flows of how users can easily complete the main task, and determined that following a familiar pattern used in social media content generators would be most approachable. This allows users to experience a simple flow with a powerful outcome, in which the process can be seen as adding a commonly used ???sticker??? overlaid on a post, while simply entering a destination URL.
         </p1>
         <div className="mb-20">
          <Image src={Tqrideation} alt="ideation" layout="responsive" objectFit="cover" priority="true"/>
         </div>
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2 md:w-5/6 lg:w-4/6">
           05 / USER FLOWS
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           User flows are??defined for key tasks, from easily getting started to initially generating TapQR.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           A very important step would be the first??onboarding??experience, especially for new users that would require an extra mile??in creating a digital Phantom wallet on an external platform. We hypothesized that this would be a probable scenario and therefore focused on??creating a very simple onboarding process internally, in which users would simply sign up with their full name and mobile verification. Other personal details and methods of authentication would be an optional step once they have??successfully onboarded.
         </p1>
         <div className="my-5">
          <Image src={Tqrflow1} alt="flow-one" layout="responsive" objectFit="cover" priority="true"/>
         </div>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           While the onboarding flow focuses??on??simplicity and ease to get as many users on and going, the flow??for??creating,??editing and downloading a TapQR relies??on??familiarity, in which we aimed to??minimize the learning??curve in using this product. A step-by-step process that follows the commonalities of photo editors as well as QR code generators helped visualize key screens and an??overall intuitive??experience.<br/><br/>A significant area to overcome would be the process of confirming transactions through their Phantom wallet. To minimize friction, it is left as a last task for completion, and has been treated in a familiar method of payment seen in ecommerce today, in which it is informative enough yet not overwhelming.
         </p1>
         <div className="mt-5 mb-20">
          <Image src={Tqrflow2} alt="flow-two" layout="responsive" objectFit="cover" priority="true"/>
         </div>
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2 md:w-5/6 lg:w-4/6">
           06 / WIREFRAMES
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           Upon iterating and refining user flows, wireframes were put together to deliver a clear visualization of how users will navigate key screens.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           Review and feedback was noted along the way, in which it helped further refine the final outcome through several iterations. In all cases, we were looking to simplify every step in allowing the user to get instant gratification through creating TapQR as early in the process. This convinced us to strip down the onboarding flow even further, in which all that is required would be connecting to a Phantom wallet, and all else will follow as optional elements of a user profile.
         </p1>
         <div className="my-5">
          <Image src={Tqrwireframe1} alt="wireframe-one" layout="responsive" objectFit="cover" priority="true"/>
         </div>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           The process of creating TapQR is as simple as uploading assets, defining a destination URL, customizing the style and confirming the transaction as prompted through Phantom. To ensure that every step is cohesive, it was determined that supporting copy would be necessary in each modal to fully and effectively guide users all the way through.
         </p1>
         <div className="my-5">
          <Image src={Tqrwireframe2} alt="wireframe-two" layout="responsive" objectFit="cover" priority="true"/>
         </div>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           Additional screens consisted of edit modals, detail pages as well as user profiles, in which a public and private view is not differentiated, even more so a unified view other than the edit functionality and actions permitted. As it was determined that brands would only be able to provide brand links through what could potentially be a Shopify plugin, a separate onboarding flow within TapQR was not considered, and was rather treated as a front-end view through a brand profile.
         </p1>
         <div className="my-5">
          <Image src={Tqrwireframe3} alt="wireframe-three" layout="responsive" objectFit="cover" priority="true"/>
         </div>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           With a goal to impose a general practice of embedding QR codes, designing a mobile app for TapQR was inevitable as it provides a seamless and convenient experience for social media users. One challenge was that desktop was suitable for bulk creations yet is not as commonly seen within mobile. Finding a way to intuitively support this same functionality within mobile was a critical aspect in providing an ideal and consistent experience throughout.
         </p1>
         <div>
          <Image src={Tqrwireframe4} alt="wireframe-four" layout="responsive" objectFit="cover" priority="true"/>
         </div>
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2 md:w-5/6 lg:w-4/6">
           07 / FINAL OUTCOME
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           TapQR for desktop, on the dark side.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           TapQR introduces an innovative approach to influencer marketing, making it easier than ever to embed social media posts with QR codes that can direct an audience to critical links, all within a single tap. Presenting the benefits of Web3, TapQR built on the Solana blockchain incorporates fine layers of control, ownership and authority, along with opportunities to gain incentives from brand links with seamless transactions. While a landing page is able to inform and engage new and existing users, getting started is made to be as effortless as connecting to a Phantom wallet.
         </p1>
         <div className="my-5 px-12 py-7 md:px-32 md:py-14 lg:px-56 lg:py-20 bg-[#f4f4f4]">
          <Image src={Tqrhome} alt="desktop-screens1" layout="responsive" objectFit="cover" priority="true"/>
         </div>
         <div className="my-5 px-12 py-7 md:px-32 md:py-14 lg:px-56 lg:py-20 bg-[#f4f4f4]">
          <Image src={Tqrdesktoponboard} alt="desktop-onboard" layout="responsive" objectFit="cover" priority="true"/>
         </div>
        
         <div className="my-5 px-12 py-7 md:px-32 md:py-14 lg:px-56 lg:py-20 bg-[#f4f4f4]">
          <Image src={Tqrdesktopcreate} alt="desktop-create" layout="responsive" objectFit="cover" priority="true"/>
         </div>
         <div className="mt-5 mb-40">
          <Image src={Tqrdesktop1} alt="desktop-screens1" layout="responsive" objectFit="cover" priority="true"/>
         </div>
         
         <div className="md:flex flex-col md:flex-row justify-start items-start items-center md:space-y-0 space-y-5 my-20">
           <div className="w-full md:w-1/2 relative shrink-0 mb-5 md:mb-0 px-20 lg:px-40">
            <Image src={Tqrmobileonboard} alt="mobile-onboard" layout="responsive" objectFit="cover" priority="true"/>
           </div>
           <div className="flex flex-col justify-between lg:mr-20">
             <p1 className="font-normal text-3xl lg:text-4xl text-left my-5">
               TapQR creation at your fingertips with the mobile app.
             </p1> 
             <p1 className="font-normal text-lg lg:text-xl text-left my-5">
               Consistent with desktop, the onboarding is a simple flow along with splash screens presenting the benefits and guidance for next steps. The option to skip wallet connection is also intended to be a lenient way for new users to explore the app, even before continuing as a user.
             </p1>
           </div>
         </div>
         <div className="flex flex-col-reverse md:flex-row justify-start items-start items-center md:space-y-0 space-y-5 my-20">
           <div className="flex flex-col justify-between lg:ml-20 mt-5 md:mt-0">
             <p1 className="font-normal text-3xl lg:text-4xl text-left my-5">
               Seamless TapQR creation???informative and coherent, every step of the way.
             </p1> 
             <p1 className="font-normal text-lg lg:text-xl text-left my-5">
               The process of creating TapQR resembles common photo editors, implying that it will be quick, fun and intuitive. Supporting text along the way is an element that ensures the user is always aware and confident of the action being done, especially because a TapQR is immutable in some ways once the transaction is confirmed.
             </p1>
           </div>
             <div className="w-full md:w-1/2 relative shrink-0 px-20 lg:px-40">
               <Image src={Tqrmobilecreate} alt="mobile-create" layout="responsive" objectFit="cover" priority="true"/>
             </div>
         </div>
         <div className="my-5">
          <Image src={Tqrmobile1} alt="mobile-cover" layout="responsive" objectFit="cover" priority="true"/>
         </div>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           As much as we are aware of the common benefits of a dark mode, opting for this was merely a natural decision in which it is especially favoured in the world of Web3. In hopes of resonating with other Solana dApps and Phantom itself, it was a fitting design element that would be a significant form of expression in building trust with our audience.<br/><br/>In developing a design system, a vibrant green was chosen as a primary brand colour as it is associated with energy and excitement, which we invariably wanted to portray. With a focus on maintaining high contrast for accessibility, a clean and simple typeface of Inter was used across the platform with appropriate hierarchy and combinations for every use case. In addition to simplicity, we wanted to ensure a welcoming and trustworthy atmosphere in many ways, for instance through the tone of voice in copy, rounded components, use of colour and friendly iconography.
         </p1>
         <div className="mt-5 mb-40">
          <Image src={Tqrdesignsystem} alt="design-system" layout="responsive" objectFit="cover" priority="true"/>
         </div>
         <p1 className="font-['Maison_Neue'] text-sm lg:text-base text-left mt-20 mb-2 md:w-5/6 lg:w-4/6">
           08 / REFLECTION
         </p1>
         <p1 className="font-normal text-3xl lg:text-4xl text-left my-5 md:w-5/6 lg:w-4/6">
           Knowing that Web3 is picking up momentum with each passing day, it was an incredible opportunity to learn as much as design for a project with a potential place in this community.
         </p1>
         <p1 className="font-normal text-lg lg:text-xl text-left my-5 md:w-5/6 lg:w-4/6">
           Although this project was born with a speculative approach, as QR codes are not yet clickable within major social platforms, it was truly eye-opening to see a visual proof of concept come to life within unknown boundaries. It was definitely challenging to narrow down on core features within our timeframe with many features that were considered including marketplace to buy and sell TapQR, messaging system and more.<br/><br/>On a side note, unfortunately the project was paused and did not get fully developed due to unforeseen reasons within our permitting environment, however an MVP with core functionality was completed on our developers??? end. Given this, we were able to conclude the project for the time being, holding great potential for further development.<br/><br/>Being able to take part in the shift from Web2 to Web3 is exciting in itself, and tuning in on this transition from a design perspective has not failed to intrigue. With well-designed user-experiences at the forefront, it is truly motivating to stay in the loop on this fundamental change, with incredible design challenges yet to come.
         </p1>

       </div>
      </div>
     <Footer />
    </div>
  );
}