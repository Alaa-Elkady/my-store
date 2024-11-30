import ayusmaan from "../images/ayusmaan.png";
import rahul from "../images/rahul.png";
import b1 from "../images/adidas.png";
import b2 from "../images/puma.png";
import b3 from "../images/NIke.png";
import b4 from "../images/rebook.png";
import ad from "../images/AD.png";
import ex1 from "../images/Rectangle 4.png";
import ex2 from "../images/Rectangle 5.png";
import ex3 from "../images/Rectangle 6.png";
import up from "../images/Rectangle 11.png";
export default function NewArrivals({ fourItems }) {
  return (
    <div className="newArrival">
      {/* discount */}
      <div className="discount">
        <img src={ad} className="img" />
      </div>
      {/* new arrival */}
      <h2 className="title">New Arrivals</h2>
      <div className="products">
        {fourItems.map((item) => (
          <div className="home-card">
            <img src={item.imageURL} className="img" />
            <div className="home-card-content">
              <div>{item.name}</div>
              <div className="desc">{item.desc}</div>
              <div> {item.price} EGP</div>
            </div>
          </div>
        ))}
      </div>
      {/* favourits */}
      <div className="favourits">
        <img src={rahul} className="fav" />
        <img src={ayusmaan} className="fav" />
      </div>
      {/*brands section */}
      <div className="brands">
        <div className="brand-title">Top BEST-LOVED BRANDS</div>
        <div className="brand-img">
          <img src={b1} className="brand" />
          <img src={b2} className="brand" />
        </div>
        <div className="brand-img">
          <img src={b3} className="brand" />
          <img src={b4} className="brand" />
        </div>
        <button className="btn">See More</button>
      </div>
      {/* explore */}
      <div className="explore">
        <div className="explore1">
          {" "}
          <img src={ex1} className="img" />
          <div className="explore-title">tap to explore</div>
          <img src={ex2} className="img" />{" "}
        </div>
        <div className="explore1">
          {" "}
          <img src={ex3} className="img" />
        </div>
      </div>
      {/* upcomming shoe */}
      <div className="upcomming">
        <div className="upcomming-title">upcoming new model shoe</div>
        <img src={up} className="img" />
        <div className="upcomming-title">oii weirdo - the boys edition</div>
        <div className="year">2 0 2 4</div>
      </div>
    </div>
  );
}
