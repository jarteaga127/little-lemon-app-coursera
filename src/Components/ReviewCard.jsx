import UserAvatar from "../assets/user-avatar-example.jpg";
import { IoIosStar } from "react-icons/io"

const ReviewCard = () => {
    return ( 
        <div className="review-card">
          <div className="review-rating">
          <span><IoIosStar /></span>
          <span><IoIosStar /></span>
          <span><IoIosStar /></span>
          <span><IoIosStar /></span>
          <span><IoIosStar /></span> 
          </div>
          <div className="review-user">
            <div className="user-avatar">
              <img src={UserAvatar} alt="a guy with a baseball cap" />
            </div>
            <div className="review-username"><strong>Tommy Gunn</strong></div>
          </div>
            <div className="review-descript">Kyoto ya Nara ni wa, nihon no furui bunka ga nokoteiru. Kyoto, Nara wo otozureru hitobito ga rekishi wo jibun no me de miru koto ga dekiru. </div>
        </div>
     );
}
 
export default ReviewCard;