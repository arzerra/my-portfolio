import React from 'react';
import Card1 from '../components/projects/Card1.jsx';
import Card2 from '../components/projects/Card2.jsx';
import Card3 from '../components/projects/Card3.jsx';
import Card4 from '../components/projects/Card4.jsx';
import Card from '../components/projects/Card.jsx';

function Project() {

  return (
    <div id="project" className="py-10 sm:pt-25">
      <div className="container px-5 sm:px-0 md:px-5">
        <div className="dark:text-white pt-5">
          <div className="flex items-center justify-end">
            <div className="flex-grow border-b border-gray-400 dark:border-gray-600 mr-2 sm:mr-5"></div>
            <h1 className="font-bold text-2xl sm:text-4xl ml-5 pr-5">Projects</h1>
          </div>

          <div className='flex flex-col items-center sm:items-center justify-center gap-10 mt-10'>
            <div className='flex flex-col sm:flex-row gap-10'>
              <Card1/>
              <Card2/>
              <Card3/>
            </div>
            <div className='flex flex-col sm:flex-row gap-10'>
              <Card4/>
              <Card/>
              <Card/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
