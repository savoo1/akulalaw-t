const Button = ({ variant, children, className }) => {
  const baseStyles = className;

  // Define styles for the variants
  const variantStyles = {
    primary:
      "text-[#ffffff] bg-[#000] border-[#000] relative overflow-hidden inline-block px-[35px] py-[11px] text-[16px] leading-[24px] border-[2px] border-[solid] font-primary font-black tracking-[0.06em] uppercase whitespace-nowrap overflow-ellipsis text-center Typography.Smp align-middle select-none [transition:250ms_all_ease-in-out]   hover:text-[#000] hover:bg-[rgba(0,_0,_0,_0.05)] hover:border-[rgba(0,_0,_0,_0.05)] ",
    secondary:
      "text-[#000] bg-[#fff] border-[#fff] relative overflow-hidden inline-block px-[35px] py-[11px] text-[16px] leading-[24px] border-[2px] border-[solid] font-primary font-black tracking-[0.06em] uppercase whitespace-nowrap overflow-ellipsis text-center Typography.Smp align-middle select-none [transition:250ms_all_ease-in-out]   hover:text-[#000] hover:bg-black hover:border-[#fff] hover:text-[#fff] ",
  };

  // Select styles based on the `variant` prop
  const buttonStyles = `${baseStyles} ${variantStyles[variant] || variantStyles.primary}`;

  return <button className={buttonStyles}>{children}</button>;
};

export default Button;
