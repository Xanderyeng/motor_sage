import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import NavBar from './NavBar'
import { MakeListType } from '@/types/Types';

interface CarBrandsProps {
    brands: MakeListType; 
  }

export default function Header({ brands}: CarBrandsProps) {
  return (
    <>
    <div className='flex flex-row container gap-8'>
        <Logo />
        <SearchBar />
    </div>
    <div className='flex flex-row container '>
       <NavBar brands={brands} />
    </div>
    </>
  )
}
