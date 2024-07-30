const Footer = () => {
  return (
    <footer className="-mx-4 mt-10 -mb-2 px-20 py-10 bg-rose-600">
      <div className="flex justify-between gap-20 flex-wrap">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl mb-2 text-rose-200">Community</h1>
          <a href="">Articles</a>
          <a href="">Author Interviews</a>
          <a href="">Newsletter</a>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl mb-2 text-rose-200">Company</h1>
          <a href="">Author Services</a>
          <a href="">About / Contact</a>
          <a href="">Accessibility Statement</a>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl mb-2 text-rose-200">Follow</h1>
          <a href="">Facebook</a>
          <a href="">Twitter</a>
          <a href="">Instagram</a>
        </div>
      </div>
      <hr  className="my-10 border-rose-400"/>
      <div className="flex justify-between gap-10 flex-wrap">
        <p className="font-semi-bold text-sm text-rose-200">© 2024 Advertical Media LLC. All Rights Reserved.</p>
        <p className="font-semi-bold text-sm text-rose-200">Terms - Privacy</p>
      </div>
    </footer>
  );
};

export default Footer;
