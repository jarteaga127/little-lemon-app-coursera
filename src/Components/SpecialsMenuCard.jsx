import GreekSalad from "../assets/greek-salad.jpg";

const SpecialsMenuCard = () => {
    return ( 
        <div className="specials-menu-card">
        <img src={GreekSalad} alt="a greek salad with olives" className="special-menu-img" />
        <div className="dish-item-and-price">
            <div className="dishname"><strong>Dish 1</strong></div>
            <div className="price">¥1000</div>
        </div>
        <p className="dish-descript">Kyoto ya Nara ni wa, nihon no furui bunka ga nokoteiru. Kyoto, Nara wo otozureru hitobito ga rekishi wo jibun no me de miru koto ga dekiru.</p>
<div className="delivery-price"><strong>Delivery ¥200</strong></div>
        </div>
     );
}
 
export default SpecialsMenuCard;