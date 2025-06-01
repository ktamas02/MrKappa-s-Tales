export default function NavBar() {
  return (
    <>
      <div className="navbar_container">
        <div className="navbar_menu">
          <a href="#blog_home" className="navbar_item">
            <span>Blog</span>
          </a>
          <a href="#blog_shop" className="navbar_item">
            <span>Shop</span>
          </a>
          <a href="#blog_contact" className="navbar_item">
            <span>Contact</span>
          </a>
        </div>
      </div>
    </>
  );
}
