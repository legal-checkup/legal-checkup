import React from 'react'

export default function WithOnClickIfUnlocked (Wrapped) {
  return ({
    children,
    handleClick,
    navigateToQuestion,
    unlocked,
    ...props
  }) => {
    return (
      <Wrapped
        {...props}
        {...(unlocked ? { onClick: handleClick(navigateToQuestion) } : {})}
      >
        {children}
      </Wrapped>
    )
  }
}
