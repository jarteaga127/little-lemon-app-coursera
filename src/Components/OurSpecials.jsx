import SpecialsMenuCard from "./SpecialsMenuCard";

const OurSpecials = () => {
    return ( 
    <>
    <section className="our-specials">
                <h2>Our Specials</h2>
                <article>
                    <SpecialsMenuCard/>
                    <SpecialsMenuCard/>
                    <SpecialsMenuCard/>
                    <SpecialsMenuCard/>
                </article>
            </section>
    </> 
    );
}
 
export default OurSpecials;