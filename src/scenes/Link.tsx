import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface IProps {
    page: string,
    selectedPage: string,
    setSelectedPage: (value: string)=>void
}

const Link = ({page, selectedPage,setSelectedPage}:IProps) => {
    const lowerCasePage = page.toLowerCase().replace(' ',"")
  return (
    <AnchorLink 
        className= {`${selectedPage === lowerCasePage ? "text-primary-500":""}
        transition duration-500 hover:text-primary-300
        `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link