import React from 'react'
import "./sidebar.css"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Sidebar() {
  const location = useLocation();
  return (
  <>
    <div className='wrapper'>
        <div className='wrapper-inside'>
            <div className='part-1'>
                <div className=' sidebar-common'>
                    <img 
                    src='/images/Vector.svg'
                    className='vector'
                    alt='as'
                    />
                    <p className='logo-text'>NFTify</p>
                </div>
                {/* second  */}
                <Link to="/"  className={ ` ${location.pathname === "/" ? 'active' :''}    sidebar-common link-button`}>
                    <img 
                    src='/images/ic_baseline-token.svg'
                    className='vector-2'
                    alt='as'
                    />
                    <p className='logo-text-2'>Token Address</p>
                </Link>
                {/* third  */}
                <Link to="/pair" className={ ` ${location.pathname === "/pair" ? 'active' :''}    sidebar-common link-button`}>
                    <img 
                    src='/images/fluent_pair-24-filled.svg'
                    className='vector-2'
                    alt='as'
                    />
                    <p className='logo-text-2'>Pair Address</p>
                </Link>
            </div>
            <div className='part2'>
                <div className='logo-group'>
                   <img
                   src='/images/facebook .svg'
                   className='bottom-logo'
                     alt='as'
                     />
                      <img
                   src='/images/linkedin.svg'
                   className='bottom-logo'
                     alt='as'
                     />
                      <img
                   src='/images/twitter.svg'
                   className='bottom-logo'
                     alt='as'
                     />
                </div>
            </div>
        </div>
    </div>
  </>
  )
}

export default Sidebar