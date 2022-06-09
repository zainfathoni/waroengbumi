import * as React from 'react'

export const EllipsisVertical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" role="img" fill="currentColor" {...props}>
    <path
      className="fa-primary"
      d="M64 472c-30.93 0-56-25.1-56-56s25.07-56 56-56 56 25.1 56 56-25.07 56-56 56zm0-320c-30.93 0-56-25.1-56-56 0-30.93 25.07-56 56-56s56 25.07 56 56c0 30.9-25.07 56-56 56z"
    />
    <path
      d="M64 200c30.93 0 56 25.1 56 56s-25.07 56-56 56-56-25.1-56-56 25.07-56 56-56z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
)
