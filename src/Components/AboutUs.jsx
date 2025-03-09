import RestaurantImg from "../assets/restaurant.jpg";
import TwoChefs from "../assets/mario-and-adrian-c.jpg";

const AboutUs = () => {
    return ( 
        <>
        <section className="about-us">
                <article>
                <h1>Little Lemon</h1>
                <h2>Tokyo</h2>
                <p>Kyoto ya Nara ni wa, nihon no furui bunka ga nokoteiru. Kyoto, Nara wo otozureru hitobito ga rekishi wo jibun no me de miru koto ga dekiru. Shikashi, mae motte rekishi wo shitte ireba, Kyoto ya Nara wo otozureru kachi ga motto fueru to omou.</p>    
                <button className="main-btn">Read more about our story here</button>
                </article>
                <div className="img-contain-about">
                <div className="two-imgs">
                 <img src={RestaurantImg} alt="" className="image-1" />
                 <img src={TwoChefs} alt="" className="image-2" />   
                </div>
                </div>
            </section>
        </>
     );
}
 
export default AboutUs;