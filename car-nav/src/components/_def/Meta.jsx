import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
}

Meta.defaultProps = {
  title: 'Car Depot',
  description: 'We sell cars',
  keywords: 'cars, buy cars, sell cars',
}

function Meta({ title, description, keywords }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </>
  )
}

export default Meta
