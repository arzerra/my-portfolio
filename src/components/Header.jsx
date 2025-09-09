import DarkMode from './Toggle.jsx'


function Header() {

  return (
    <>
      <div className='bg-white dark:bg-gray-800'>
        <div className='container dark:text-white flex justify-between items-center py-5'>
            <h1 className='text-2xl'>Clark</h1>
            
            <div>
                <ul className='flex gap-5 items-center text-xl'>
                    <li><a href="">About</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Certification & Awards</a></li>
                    <DarkMode/>
                </ul>
            </div>
            
        </div>
            
            
      </div>
    </>
  )
}

export default Header
