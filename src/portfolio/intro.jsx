
export default function Intro(){

    return(
    <>
    <div id="intro"></div>
    <div className="con-2 container d-flex" >
    <div className="intro-sec float-start" >
         <h1 className="title">Hello! I am web</h1>
         <h1 className="title">Developer</h1>
         <p className="intro-sec-p"> I am a passionate Web Developer with experience in building and designing dynamic websites, mobile applications, and desktop software. I specialize in modern web technologies like React, JavaScript, HTML, and CSS. Let's bring your ideas to life!</p>
         <a href="./final cv.pdf"><button className='but-3'><span>Learn more!</span></button></a>
         <a href="#footer" ><button className='but-2'><span>Hire me</span></button></a>
    </div>
    
    <div className="con-3" >
        <img src="./cirlcle-bg.png" className="img1 float-sm-end" alt="circle" />
        <img src="./my2.png" className="img2 float-sm-end "alt="img"/>
    </div>
    
    </div>
    
    
    
    </>
    );
}