import { Link } from 'react-router-dom'

export default function Project(){




    return(
    <>
    <div className="project-sec" id="project">
            <h1 className="project-title">projects</h1>
             
       <div className="project-detail">
        <div className="project-conent">
             <div className="project-box">
                 <img src="./project1.jpeg" alt="project1" className="project-img"/>
                   <div className="details">
                         <h1 className="details-t1">description <i class="fa fa-info-circle"> :</i></h1>
                         <p className="details-p"> IndianSport – Sports E-commerce Website A responsive e-commerce website designed for showcasing and selling sports products. Features include a best-selling product carousel, brand highlight section, product discounts, and an organized footer with quick navigation links. Built with a bold red-black theme for an energetic sports feel and optimized for user engagement.</p>
                         <a href="./project1/index.html"><button class="button10 type1"></button></a>
                   </div>
            </div>
                 <h1 className="project-t1">sports accessories website</h1>
        </div>

           <div className="project-conent">
             <div className="project-box">
                 <img src="./project3.png" alt="project3" className="project-img"/>
                   <div className="details">
                         <h1 className="details-t1">description <i class="fa fa-info-circle"> :</i></h1>
                         <p className="details-p">We Tech Zone – Online IT Training Platform . A professional training website offering a variety of IT and automation courses, including AWS, Python, Selenium, DevOps, Shell Scripting, and Linux. Features include a clean, modern design, “Why Choose Us” section highlighting benefits, detailed course catalog, and company overview. Designed for easy navigation and to promote online sessions, free demos, and guaranteed placement support for learners.</p>
                        <a href="./project3/index.html"><button class="button10 type1"></button></a>
                   </div>
            </div>
                 <h1 className="project-t1">We Tech Zone – Online IT Training Platform website</h1>
        </div>


         <div className="project-conent">
             <div className="project-box">
                 <img src="./project2.png" alt="project2" className="project-img"/>
                   <div className="details">
                         <h1 className="details-t1">description <i class="fa fa-info-circle"> :</i></h1>
                         <p className="details-p"> DNA Brand Dress & Accessories – Online Clothing Store A stylish and responsive e-commerce website for showcasing and selling trendy shirts and T-shirts. Features include a product catalog with detailed descriptions, an add-to-cart system, promotional sale banners, and a clean navigation layout. Designed with a soft, minimal color palette for a modern retail experience and optimized for both browsing and purchasing.</p>
                        <Link to="/project2">
                              <button class="button10 type1"></button>
                        </Link>
                   </div>
            </div>
                 <h1 className="project-t1">DNA Brand Dress & Accessories website</h1>
        </div>
        
          <div className="project-conent">
             <div className="project-box">
                 <img src="./project2.png" alt="project4" className="project-img"/>
                   <div className="details">
                         <h1 className="details-t1">description <i class="fa fa-info-circle"> :</i></h1>
                         <p className="details-p"> DNA Brand Dress & Accessories – Online Clothing Store A stylish and responsive e-commerce website for showcasing and selling trendy shirts and T-shirts. Features include a product catalog with detailed descriptions, an add-to-cart system, promotional sale banners, and a clean navigation layout. Designed with a soft, minimal color palette for a modern retail experience and optimized for both browsing and purchasing.</p>
                         <button class="button10 type1"></button>
                   </div>
            </div>
                 <h1 className="project-t1">DNA Brand Dress & Accessories website</h1>
        </div>

        <div className="project-conent">
             <div className="project-box">
                 <img src="./project3.png" alt="project5" className="project-img"/>
                   <div className="details">
                         <h1 className="details-t1">description <i class="fa fa-info-circle"> :</i></h1>
                         <p className="details-p"> DNA Brand Dress & Accessories – Online Clothing Store A stylish and responsive e-commerce website for showcasing and selling trendy shirts and T-shirts. Features include a product catalog with detailed descriptions, an add-to-cart system, promotional sale banners, and a clean navigation layout. Designed with a soft, minimal color palette for a modern retail experience and optimized for both browsing and purchasing.</p>
                         <button class="button10 type1"></button>
                   </div>
            </div>
                 <h1 className="project-t1">DNA Brand Dress & Accessories website</h1>
        </div>
         
       </div>
    
    
    
    
    </div>
    
    
    
    
    
    
    </>
    );
}