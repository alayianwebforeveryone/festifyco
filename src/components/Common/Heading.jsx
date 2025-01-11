const Heading = ({ title,  }) => {
  return (
    <div className={` pt-24 `}>
      <h1
        className={`  md:py-3 bg-[#9747FF] rounded-3xl    font-extrabold text-[30px] text-white  text-center`}
      >
        {title}
      </h1>
    </div>
  );
};
export default Heading;
