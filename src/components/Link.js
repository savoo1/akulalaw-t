const Link = ({ variant, children, className }) => {
  const baseStyles = className;

  // Define styles for the variants
  const variantStyles = {
    primary: "text-[1rem] font-hind text-[#FF9C00] hover:text-[#343434] transition-all duration-200",
    secondary:
      "text-[#000] bg-[#fff] border-[#fff] relative overflow-hidden inline-block px-[35px] py-[11px] text-[16px] leading-[24px] border-[2px] border-[solid] font-primary font-black tracking-[0.06em] uppercase whitespace-nowrap overflow-ellipsis text-center Typography.Smp align-middle select-none [transition:250ms_all_ease-in-out]   hover:text-[#000] hover:bg-black hover:border-[#fff] hover:text-[#fff] ",
  };
  // overflow-hidden inline-block px-[35px] py-[11px] text-[16px] leading-[24px] border-[2px] border-[solid] font-primary font-black tracking-[0.06em] uppercase whitespace-nowrap overflow-ellipsis text-center Typography.Smp align-middle select-none [transition:250ms_all_ease-in-out]   hover:text-[#000] hover:bg-[rgba(0,_0,_0,_0.05)] hover:border-[rgba(0,_0,_0,_0.05)]
  // Select styles based on the `variant` prop
  const buttonStyles = `${baseStyles} ${variantStyles[variant] || variantStyles.primary}`;

  return (
    <a href="/" className={buttonStyles}>
      {children}
    </a>
  );
};

export default Link;
