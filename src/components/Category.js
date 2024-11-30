export default function Category({ items }) {
  // filter by gender
  const genders = items.map((item) => item.gender);
  const uniqueGenders = Array.from(new Set(genders));
  // filter by brand
  const brands = items.map((item) => item.brand);
  const uniqueBrands = Array.from(new Set(brands));
  // filter by collection
  const collections = items.map((item) => item.category);
  const uniqueCollections =Array.from(new Set(collections));

  return (
    <div className="category">
      <h1 className="title">Category</h1>
      <div className="options">
        <div className="filter">filter </div>
        {/* collections */}
        <div className="collection">Collection</div>
        <ul className="collections">
          {uniqueCollections.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        {/* brands */}
        <div className="brand">Brand</div>
        <ul className="brands">
          {uniqueBrands.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        {/* genders */}
        <div className="gender">Gender</div>
        <ul className="genders">
          {uniqueGenders.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
