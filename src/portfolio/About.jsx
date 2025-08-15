export default function About(){


    return(<>
    
        <div className="about-sec" id="about">
            <h1 className="about-title">About Me</h1>
            <h2 className="about-sub">I Am a Passionate web Developer</h2>
             <p className="about-para">I am a skilled Web Developer with hands-on experience in building responsive, user-friendly websites and applications using modern technologies like React, JavaScript, HTML/CSS, and Java.</p>

            <h2 className="academia">academia </h2>
        <div className="accordian-box" >
            <ul className="accordian">
                <li className="acc-li">
                    <input type="radio" name="accordian" id="fiveth"></input>
                    <label for="fiveth">post graduate (PG)<i class="fa fa-plus-circle"></i></label>
                     <div className="content">
                          <li>Degree : Msc.Computer science</li>
                          <li>college : Sastra deemed to be university</li>
                          <li>university : Sastra university</li>
                          <li>grade :  7.97 CGPA</li>
                          <li>passed out year : 2025</li>
                     </div>
                </li>

                  <li className="acc-li">
                    <input type="radio" name="accordian" id="second"></input>
                    <label for="second">undergraduate (UG)<i class="fa fa-plus-circle"></i></label>
                     <div className="content">
                          <li>Degree : Bsc. Information technology</li>
                          <li>college : Swami dayananda college of arts and science</li>
                          <li>university : bharathidasan university</li>
                          <li>grade :  8.1 CGPA</li>
                          <li>passed out year : 2023</li>
                     </div>
                </li>

                <li className="acc-li">
                    <input type="radio" name="accordian" id="third"></input>
                    <label for="third">HSC<i class="fa fa-plus-circle"></i></label>
                     <div className="content">
                          <li>course : 12th</li>
                          <li>school : Banadurai higher secondary school , kumbakonam.</li>
                          <li>percentage :  61%</li>
                          <li>passed out year : 2020</li>
                     </div>
                </li>

                <li className="acc-li">
                    <input type="radio" name="accordian" id="fourth"></input>
                    <label for="fourth">SSLC<i class="fa fa-plus-circle"></i></label>
                     <div className="content">
                          <li>course : 10th</li>
                          <li>school :  Sri matha matric higher secondary school, kumbakonam.</li>
                          <li>percentage :  65%</li>
                          <li>passed out year : 2018</li>
                     </div>
                </li>
                
              </ul>
            </div>
            



        </div>
    
    
    
    
    
    
    
    </>);
}