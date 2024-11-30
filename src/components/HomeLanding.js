import "bootstrap/dist/css/bootstrap.min.css";
import img  from "../images/7xm3.png";
export default function HomeLanding() {
    return (
        <div className="HomePage">
        <div className="text">
          <div className="top">NEW COLLECTION FOR SNEAKERS</div>
          <h1 className="head">Sneakers And Athletic Shoes</h1>
          <div className="para">
            Lorem ipsum dolor sit amet consectetur. Felis elit tellus et convallis
            commodo massa est nam mattis. Quisque leo aliquam dui neque semper
            arcu elit vel malesuada. Non ac met
          </div>
          <button className="btn">Shop Now</button>
        </div>
        <div className="img d-none d-xl-block d-lg-block ">
          <div className="recBorder"></div>
          <div className="REC"><div className="text">PUMA</div></div>
          
          <div className="img2">
            <img src={img} />
          </div>
        </div>
      </div>
    )
}
