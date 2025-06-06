import React from 'react'

type ButtonProps = {
  text: string
  variant?: 'primary' | 'secondary' | 'outline' | 'outlineFilled'
  onClick?: () => void
  className?: string
}

const baseStyles =
  'px-6 py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer'

const variantStyles = {
  primary: 'bg-[#AEE2FF] hover:bg-[#7CC1FF] text-[#4A3F3F]',
  secondary: 'bg-[#333333] hover:bg-[#4D4D4D] text-white',
  outline: 'bg-transparent border border-black text-black hover:bg-gray-100  !rounded-full',
  outlineFilled: 'bg-black text-white border border-black hover:bg-[#1a1a1a] !rounded-full'
}

export const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'primary',
  onClick,
  className = '',
}) => {
  const combinedClassName = `${variantStyles[variant]} ${baseStyles} ${className}`.trim()

  return (
    <button onClick={onClick} className={combinedClassName} type="button">
      {text}
    </button>
  )
}
