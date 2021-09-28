import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://https://github.com/keymon2/software" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Webproject</span>
        <a href="https://hongik.ac.kr" target="_blank" rel="noopener noreferrer">Hongik Univ.</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
