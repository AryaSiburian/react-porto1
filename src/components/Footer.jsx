const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 justify-between items-center">
      <h1>Portofolio</h1>
      <div className="flex gap-7 font-medium">
        <a href="">Beranda</a>    
        <a href="">Tentang</a>    
        <a href="">Proyek</a>    
      </div>
      <div className="flex item-center gap-3">
        <a href="#">
          <i className="ri-github-fill ri-2xl"></i>
        </a>
        <a href="#">
          <i className="ri-instagram-fill ri-2xl"></i>
        </a>
        <a href="#">
          <i className="ri-linkedin-fill ri-2xl"></i>
        </a>
      </div>      
    </div>
  );
};

export default Footer;
