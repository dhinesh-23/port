import FBgraphchart from "./FBgraphchart";
import Graphfooter from "./graphfooter";
import Gnav from "./graphnav";
import Instagraphchart from "./instagraphchart";
import Twittergraphchart from "./twittergraphchart";
import Whatappgraphchart from "./whatappgraphchart";
export default function Graphchart() {
  return (
    <>
    <Gnav/>
    

    <section>
          <h1 className="top-title">comparison of  downloads graph </h1>

    <div className="fb-graphchart">
       <h1>Facebook    <i class="fa fa-facebook-square"></i></h1>
       <p>
      <em>Facebook</em> started in 2004 and quickly became the world’s largest social platform. By 2012, it crossed 1 billion downloads, dominating mobile and web users. Growth stabilized after 2018 as new apps like Instagram and TikTok became more popular. As of 2025, Facebook still has over 5 billion total downloads on Google Play but slower new-user growth.
      </p>
      <FBgraphchart/>
    </div>

    <div className="what-graphchart">
       <h1>WhatsApp     <i class="fa fa-whatsapp"></i></h1>
       <p>
      <em>WhatsApp</em> Launched in 2009, WhatsApp saw rapid adoption for free messaging. By 2015, it reached 1 billion installs, and by 2020, over 5 billion downloads on Android alone. The app continues steady growth due to reliability and end-to-end encryption, especially in India, Brazil, and Europe. </p>
      <Whatappgraphchart/>
    </div>
    
     <div className="insta-graphchart">
       <h1>Instagram     <i class="fa fa-instagram"></i></h1>
       <p>
      <em>Instagram</em> was launched in 2010 as a simple photo-sharing app but rapidly evolved into a global visual content platform. It reached 100 million downloads by 2013, boosted by Meta’s acquisition. With the addition of Stories, IGTV, and Reels, its popularity skyrocketed—crossing 1 billion installs in 2018 and reaching over 4 billion total downloads by 2025. Instagram’s focus on creativity and influencer content keeps it consistently trending among younger audiences. </p>
      <Instagraphchart/>
    </div>

     <div className="twitter-graphchart">
       <h1>Twitter / X    <i class="fa fa-twitter"></i></h1>
       <p>
      <em>Twitter</em> , now rebranded as X, started in 2006 as a microblogging platform and gradually became a major source for real-time news and global trends. By 2015, it had surpassed 500 million downloads and peaked in activity around 2019–2020. However, following the 2022 rebrand, download rates declined by nearly 38% in 2023 and continued to drop in 2025. Despite this, the platform still holds over 1 billion cumulative installs and remains influential in news and communication sectors. </p>
      <Twittergraphchart/>
    </div>
    </section>
    
    <Graphfooter/>
    </>
  )
}
