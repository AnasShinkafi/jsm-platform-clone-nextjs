import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className=' to-white-800 flex-between body-text w-full gap-y-10 border-t border-blue-400 px-20 py-12 max-md:flex-col'>
      <p className="">Copyright &copy; 2023 JS Mastery Pro | All Right Reserved</p>
      <div className=" flex gap-x-9">
        <Link href={"/"}>Terms & Conditions</Link>
        <Link href={"/"}>Privacy & Policy </Link>
      </div>
    </footer>
  )
}

export default Footer