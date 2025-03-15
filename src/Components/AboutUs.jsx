import RestaurantImg from "../assets/restaurant.jpg";

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
                 <img src={RestaurantImg} alt="Inside of restaurant" />
                </div>
            </section>
        </>
     );
}
 
export default AboutUs;