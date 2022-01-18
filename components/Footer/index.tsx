const index = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center px-5 py-10 text-footer bg-slate-50 gap-2">
      {/* Phone & Email */}
      <div className="flex gap-5">
        <a href="tel:+959+768047177 ">+959 768 047 177</a>
        <a href="mailto:nwaung@venuslab.co">nwaung@venuslab.co</a>
      </div>
      {/* Address */}
      <div className="text-center">
        No.204, 8th Floor, Tower A, The Leaf Residence, Dama Thukha Kyaung Lane,
        Hlaing Township, Yangon.
      </div>
      {/* Copyright */}
      <div>© 2019 VenusLab</div>
    </footer>
  );
};

export default index;
