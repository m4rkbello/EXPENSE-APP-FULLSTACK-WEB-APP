import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex-none w-14 h-14">
        </div>
        <div className="flex-initial w-64 ...">

        </div>
        <div className="flex-initial w-64...">
          <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
