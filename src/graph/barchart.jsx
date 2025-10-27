import React from 'react'
import Gnav from './graphnav'
import Avgbarchart from './avgbarchart'
import Yearlyrevenuebarchart from './yearlyrevenuebarchart'
import ScreenTimebarchart from './ScreenTimebarchart'
import ActivityTypebarchart from './ActivityTypebarchart'
import Dailymessagebarchart from './dailymessagebarchart'
import Advertisingbarchart from './Advertisingbarchart'
import Graphfooter from './graphfooter'

export default function Barchart() {
  return (
    <>
    <Gnav/>
    <section>
        <h1 className="top-title">basic comparison of app using barchart </h1>

             <div className="download-pie">
                <h1>Average Daily Screen Time</h1>
                <p>This vertical bar chart shows the average time users spend daily on each app. Instagram tops the list with 48 minutes, followed by WhatsApp (38 mins), Facebook (33 mins), and X (29 mins), highlighting Instagram’s strong user engagement.</p>
                <ScreenTimebarchart/>
              </div>

               <div className="download-pie">
                <h1>Daily Message / Post Count per User</h1>
                <p>This chart shows the average number of messages or posts each user makes daily. WhatsApp leads with 65 messages per day, followed by X (15), Instagram (12), and Facebook (8), highlighting WhatsApp’s dominance in daily user engagement.</p>
                <Dailymessagebarchart/>
              </div>

               <div className="download-pie">
                <h1>Advertising Reach (Potential Audience)</h1>
                <p>This chart highlights the potential advertising audience across major platforms. Facebook leads with 2.2 billion users, followed by Instagram (1.7B), WhatsApp (1.3B), and X (0.6B), showing Facebook and Instagram’s strong dominance in global ad reach.</p>
                <Advertisingbarchart/>
              </div>
              
             <div className="download-pie">
                <h1>Yearly Revenue Comparison</h1>
                <p>This vertical bar chart compares the estimated 2024 revenue of major social media platforms. Facebook leads with $134 billion, followed by Instagram ($61 billion), WhatsApp ($14 billion), and X ($3.4 billion), reflecting Facebook’s strong advertising dominance.</p>
                <Yearlyrevenuebarchart/>
              </div>

             <div className="download-pie">
                <h1>User Activity Type</h1>
                <p>This grouped bar chart shows how users engage differently across platforms. WhatsApp dominates chatting (60%), Instagram excels in photo/video sharing (50%), X leads in news reading (40%), while Facebook maintains balanced usage across all activities.</p>
                <ActivityTypebarchart/>
              </div>

              <div className="download-pie">
                <h1>Engagement Rate Comparison</h1>
                <p>This vertical bar chart compares the average engagement rate per 100 users across platforms. Instagram leads with 5.8%, followed by Facebook (3.2%), WhatsApp (2.9%), and X (2.1%), showing that Instagram drives the highest user interaction.</p>
                <Avgbarchart/>
              </div>
             
     </section>
     <Graphfooter/>
    
    </>
  )
}
