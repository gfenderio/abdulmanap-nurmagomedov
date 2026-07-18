"use client"

import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  alertMessage: string;
}

export function ClientAlertButton({ alertMessage, children, ...props }: Props) {
  return (
    <button onClick={() => alert(alertMessage)} {...props}>
      {children}
    </button>
  );
}
