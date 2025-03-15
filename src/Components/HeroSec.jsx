import HeroImage from "../assets/restauranfood.jpg"

const HeroSection = () => {
    return ( 
        <>
        <section className="hero-sec">
            <img src={HeroImage} alt="" className="hero-image"/>
                <article>
                    <h1>Little Lemon</h1>
                    <h2>Tokyo</h2>
                    <p>Kyoto ya Nara ni wa, nihon no furui bunka ga nokoteiru. Kyoto, Nara wo otozureru hitobito ga rekishi wo jibun no me de miru koto ga dekiru. Shikashi, mae motte rekishi wo shitte ireba, Kyoto ya Nara wo otozureru kachi ga motto fueru to omou.</p>
                <button className="main-btn">Book a table now</button>
                </article>
                
            </section>
        </>
     );
}
 
export default HeroSection;