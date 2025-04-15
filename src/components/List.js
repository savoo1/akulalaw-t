const List = ({ variant, children, className }) => {
  const baseStyles = className;

  // Define styles for the variants
  const variantStyles = {
    primary: "flex items-center py-[.1em]",
    secondary:
      "text-[#000] bg-[#fff] border-[#fff] relative overflow-hidden inline-block px-[35px] py-[11px] text-[16px] leading-[24px] border-[2px] border-[solid] font-primary font-black tracking-[0.06em] uppercase whitespace-nowrap overflow-ellipsis text-center Typography.Smp align-middle select-none [transition:250ms_all_ease-in-out]   hover:text-[#000] hover:bg-black hover:border-[#fff] hover:text-[#fff] ",
  };
  // overflow-hidden inline-block px-[35px] py-[11px] text-[16px] leading-[24px] border-[2px] border-[solid] font-primary font-black tracking-[0.06em] uppercase whitespace-nowrap overflow-ellipsis text-center Typography.Smp align-middle select-none [transition:250ms_all_ease-in-out]   hover:text-[#000] hover:bg-[rgba(0,_0,_0,_0.05)] hover:border-[rgba(0,_0,_0,_0.05)]
  // Select styles based on the `variant` prop
  const buttonStyles = `${baseStyles} ${variantStyles[variant] || variantStyles.primary}`;

  return (
    <ul>
      <li className={buttonStyles}>
        <div className="w-[0.5em] h-[0.5em] rounded-[50%] bg-[#FF9C00] mr-[1em]"></div> <p className="text-[1rem] font-hind text-[#343434] font-bold">{children}</p>
      </li>
    </ul>
  );
};

export default List;
