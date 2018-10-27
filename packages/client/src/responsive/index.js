import React from 'react'
import Responsive from 'react-responsive'

const Desktop = props => <Responsive {...props} minWidth={1280} />
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={1279} />
const Mobile = props => <Responsive {...props} minWidth={320} maxWidth={767} />
const Default = props => <Responsive {...props} maxWidth={319} />

export { Desktop, Tablet, Mobile, Default }
