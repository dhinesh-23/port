import Globalpie from "./globalpie";
import Graphfooter from "./graphfooter";
import Gnav from "./graphnav";
import Newdownloadspie from "./Newdownloadspie";
import Percentagepie from "./percentagepie";
import Popularitypie from "./popularitypie";
import Posttypepie from "./posttypepie";
import Screentimepie from "./screentimepie";

export default function Piechart() {
  return (
    <>
    <Gnav/>
     <section>
          <h1 className="top-title">basic comparison of app using piechart </h1>
          <div className="download-pie">
            <h1>new downloads piechart</h1>
            <p>The chart shows the number of new downloads for popular social media apps between 2024 and 2025. Instagram leads with 768 million new downloads, followed by WhatsApp (650M), Facebook (571M), and Twitter (X) with 440 million. This highlights the growing popularity of visual and messaging platforms during this period.</p>
              <Newdownloadspie/>
          </div>

          <div className="Percentage-pie">
            <h1>Mobile vs Desktop Users (Percentage)</h1>
            <p>This pie chart shows the proportion of mobile versus desktop users for popular social media apps. WhatsApp has the highest mobile usage at 99%, while Facebook has the lowest at 75%, reflecting how different platforms cater to mobile-first audiences.</p>
            <Percentagepie/>
          </div>

          <div className="global-pie">
            <h1>Global Regional User Share (2024–2025)</h1>
            <p>This chart highlights the global distribution of social media users. Asia leads with 45% of total users, showing its dominant role in global app engagement. Europe and the Americas follow, while Africa’s share is steadily growing with increased mobile internet access.</p>
            <Globalpie/>
          </div>
          
           <div className="global-pie">
            <h1>Post Type Engagement</h1>
            <p>This chart shows how users engage with different types of posts. Reels and videos dominate at 55%, followed by images (30%), stories (10%), and text or threads (5%), highlighting the preference for visual content.</p>
            <Posttypepie/>
          </div>
          
          <div className="global-pie">
            <h1>Average Daily Screen Time Share</h1>
            <p>This chart illustrates how users divide their daily screen time across apps. Instagram leads with 35%, followed by WhatsApp (30%), Facebook (25%), and X (10%), showing users’ preference for visually engaging and messaging platforms.</p>
            <Screentimepie/>
          </div>

          <div className="global-pie">
            <h1>App Popularity by Communication Type</h1>
            <p>This chart highlights which apps users prefer for different types of communication. WhatsApp leads for chatting (40%), Instagram is popular for photos and reels (30%), Facebook for community sharing (20%), and X for news and updates (10%).</p>
            <Popularitypie/>
          </div>
    </section>
    <Graphfooter/>
    </>
  );
}
