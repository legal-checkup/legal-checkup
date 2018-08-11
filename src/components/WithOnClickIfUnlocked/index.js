import React from 'react'

export default function WithOnClickIfUnlocked (Wrapped) {
  return ({ children, handleClick, unlocked, ...props }) => {
    return (
      <Wrapped
        {...(unlocked ? { onClick: handleClick, ...props } : { ...props })}
      >
        {children}
      </Wrapped>
    )
  }
}
