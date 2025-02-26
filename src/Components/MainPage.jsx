import SpecialsMenuCard from "./SpecialsMenuCard";
import HeroImage from "../assets/restauranfood.jpg"

const MainPage = () => {
    return ( 
        <>
        <main>
            <section className="hero-sec">
                <article>
                    <h1>Little Lemon</h1>
                    <h2>Tokyo</h2>
                    <p>Kyoto ya Nara ni wa, nihon no furui bunka ga nokoteiru. Kyoto, Nara wo otozureru hitobito ga rekishi wo jibun no me de miru koto ga dekiru. Shikashi, mae motte rekishi wo shitte ireba, Kyoto ya Nara wo otozureru kachi ga motto fueru to omou.</p>
                <button className="main-btn">Book a table now</button>
                </article>
                <img src={HeroImage} alt="" className="hero-image"/>
            </section>
            <section className="our-specials">
                <h2>Our Specials</h2>
                <article>
                    <SpecialsMenuCard/>
                    <SpecialsMenuCard/>
                    <SpecialsMenuCard/>
                    <SpecialsMenuCard/>
                </article>
            </section>
            <section className="reviews">
                <h2>What our customers say</h2>
                <article></article>
            </section>
            <section className="about-us">
                <article>
                <h1>Little Lemon</h1>
                <h2>Tokyo</h2>
                <p>Kyoto ya Nara ni wa, nihon no furui bunka ga nokoteiru. Kyoto, Nara wo otozureru hitobito ga rekishi wo jibun no me de miru koto ga dekiru. Shikashi, mae motte rekishi wo shitte ireba, Kyoto ya Nara wo otozureru kachi ga motto fueru to omou.</p>    
                <button className="main-btn">Read more about our story here</button>
                </article>
                <div className="two-imgs">
                    
                </div>
            </section>
        </main>
        </>
     );
}
 
export default MainPage;