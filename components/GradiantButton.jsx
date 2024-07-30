const GradiantButton = ({name,onClick}) => {
    return (
        <button 
        onClick={onClick}
        className="group w-[120px] relative overflow-hidden rounded-full bg-[#3F3F3E] px-8 py-2 text-[#FFD000] transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-[#3F3F3E] hover:to-[#5B5B5B] hover:ring-2 hover:ring-[#3F3F3E] hover:ring-offset-2">
        <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-[#e3e4e5] opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>
        <span className="relative flex items-center justify-center">{name}</span>
      </button>
    )
}

export default GradiantButton;