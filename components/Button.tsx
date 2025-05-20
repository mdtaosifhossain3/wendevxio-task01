import Image from "next/image";

const Button = ({
  label = "Contact Us",

  className = "",
}) => {
  return (
    <button
      type="button"
      className={`group relative flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-500 ${className} hover:bg-gray-500 `}
    >
      <div className="group-hover:opacity-0 transition-all duration-300 bg-gradient-blue rounded-full p-2 flex items-center justify-center">
        <Image
          alt="contact_us_edit_button"
          src={"/contact_us_edit_button.png"}
          width={33}
          height={33}
        />
      </div>
      <p className="gradient-text text-xl font-semibold transition-all duration-500 group-hover:text-white group-hover:translate-x-[-50px] pr-2">
        {label}
      </p>
      <div className="absolute right-6 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 border border-white rounded-full p-2 ">
        <Image
          alt="contact_us_edit_button"
          src={"/contact_us_edit_button.png"}
          width={33}
          height={33}
        />
      </div>
    </button>
  );
};

export default Button;
