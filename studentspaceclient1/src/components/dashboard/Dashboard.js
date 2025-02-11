import React from 'react'
import PropTypes from 'prop-types'
import communityLogo from '../../images/dashboardicons/communityLogo.png';
import libraryLogo from '../../images/dashboardicons/libraryLogo.png';
import teamsLogo from '../../images/dashboardicons/teamsLogo.png';
import eventsLogo from '../../images/dashboardicons/eventsLogo.png';

function Dashboard(props) {
    return (
        <section className="text-gray-700 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Welcome to Student Space</h1>
        <div className="h-1 w-40 bg-gray-900 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-3" src={communityLogo} alt="content" />
          <h3 className="text-lg text-gray-900 font-medium title-font mb-1">Community</h3>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-3" src={libraryLogo} alt="content" />

          <h3 className="text-lg text-gray-900 font-medium title-font mb-1">Library</h3>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-3" src={teamsLogo} alt="content" />

          <h3 className="text-lg text-gray-900 font-medium title-font mb-1">Teams</h3>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-3" src={eventsLogo} alt="content" />

          <h3 className="text-lg text-gray-900 font-medium title-font mb-1">Events</h3>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      </div>
    </div>
</section>
    )
}

Dashboard.propTypes = {

}

export default Dashboard

