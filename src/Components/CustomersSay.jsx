import ReviewCard from "./ReviewCard";

const CustomersSay = () => {
    return ( 
        <>
        <section className="reviews">
                <h2>What our customers say</h2>
                <article>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                </article>
            </section>
        </>
     );
}
 
export default CustomersSay;