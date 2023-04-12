import React from 'react';
import bg1 from '../../images/bg1.jpg';
import bg2 from '../../images/bg2.jpg';
import bg3 from '../../images/bg3.jpg';
import bg4 from '../../images/bg4.jpg';
import logo from '../../images/logo.png';

const background : any = [bg1, bg2, bg3, bg4];

const backgroundItem : any = background[Math.floor(Math.random() * background.length)];

const AuthTemplate = () => {
  return (
    <section className="w-full h-screen flex" style={{backgroundImage: `url(${backgroundItem})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      
      <div className="w-2/5 p-8 h-fit rounded-xl mt-40 ml-20 backdrop-blur-lg bg-black bg-opacity-20 rounded drop-shadow-lg shadow-2xl">
        <h1 className="text-8xl font-bold text-left text-white">It's time for <span className="text-green-700 font-['Pacifico'] text-8xl">Dinner.</span></h1>
        <p className='text-xl text-left text-white'>Do you want to eat something delicious, special and healthy, we are sincerly for your service welcome your arrival.</p>
      </div>

      <div className="w-2/5 h-screen bg-white rounded drop-shadow-lg ml-auto shadow-2xl pt-20">
        <img src={logo} alt="logo" className="w-2/5 m-auto" />
      <div className="md:mb-0 w-full">
        <form className="flex flex-col items-center pt-12 gap-4 max-w-md p-4 m-auto">
          <h1 className="text-3xl font-bold text-blue-900">Login</h1>
          <label htmlFor="email-input" className="block text-sm font-medium text-white" />
          <input type="email" name="email" id="email-input" placeholder="Your email" className="outline-none border bg-transparent text-xl border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md text-md p-2" />
          <label htmlFor="password-input" />
          <input type="password" name="password" id="password-input" placeholder="Your password" className="border outline-none bg-transparent text-xl border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md text-md p-2" />
          <input type="button" value="Sign In" className="bg-green-700 text-white w-full p-2 rounded-lg cursor-pointer"/>
          <div className="flex justify-between items-center mt-3 w-full">
            <hr className="w-full" />
            <span className="p-2 text-gray-400 mb-1">OR</span>
            <hr className="w-full" />
          </div>
          <button className="h-12 mt-3 w-full rounded-full border border-gray-400"><i className="fa fa-google mr-2"></i>Connect with Google</button>

        </form>
      </div>
      </div>
    </section>
  )
}

export default AuthTemplate;
