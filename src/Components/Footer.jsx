import React from 'react'

export default function Footer() {
    const time = new Date().getFullYear();
  return (
    <div className='text-center'>
        <hr />
        <h1> &copy; CopyRights Reserved {time}</h1>
        <div className='flex justify-around'>
            
            <div className='mt-5 '>
                <h1>Contact</h1>
                 Email : <a href="mailto:sreeharis0022@gmail.com" class="text-blue-600 underline"> sreeharis0022@gmail.com
  </a> <br /> <br />
  Instagram :<a href="https://www.instagram.com/sreehari7052?igsh=MWsyeGttd2d4djY4dg==" target='_blank' class="text-blue-600 underline">Click me</a>
            </div>
        </div>
    </div>
  )
}
