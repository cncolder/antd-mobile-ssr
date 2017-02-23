import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import srOnlyStyle from 'react-fontawesome/lib/screen-reader-styles'

const fSizes = [ '', '', '', 'lg', '2x', '3x', '4x', '5x' ]
const aSizes = [ 'xxs', 'xs', 'sm', 'md', 'lg' ]
const typeRedefine = {
  check: {
    type: 'check',
    size: 'lg',
    fixedWidth: true
  },
  'check-circle': {
    type: 'check-circle',
    size: 'lg',
    fixedWidth: true
  },
  'check-circle-o': {
    type: 'check-circle-o',
    size: 'lg',
    fixedWidth: true
  },
  cross: {
    type: 'times',
    size: 'lg',
    fixedWidth: true
  },
  'cross-circle': {
    type: 'times-circle',
    size: 'lg',
    fixedWidth: true
  },
  'cross-circle-o': {
    type: 'times-circle-o',
    size: 'lg',
    fixedWidth: true
  },
  up: {
    type: 'angle-up',
    size: 'lg',
    fixedWidth: true
  },
  down: {
    type: 'angle-down',
    size: 'lg',
    fixedWidth: true
  },
  left: {
    type: 'angle-left',
    size: 'lg',
    fixedWidth: true
  },
  right: {
    type: 'angle-right',
    size: 'lg',
    fixedWidth: true
  },
  ellipsis: {
    type: 'ellipsis-h',
    size: 'lg',
    fixedWidth: true
  },
  'koubei-o': {
    type: 'github',
    size: 'lg',
    fixedWidth: true
  },
  koubei: {
    type: 'github-alt',
    size: 'lg',
    fixedWidth: true
  },
  loading: {
    type: 'spinner',
    size: 'lg',
    fixedWidth: true,
    pulse: true
  }
}

class Icon extends FontAwesome {
  render () {
    let {
      border,
      cssModule,
      className,
      fixedWidth,
      flip,
      inverse,
      type,
      pulse,
      rotate,
      size,
      spin,
      stack,
      tag = 'span',
      ariaLabel,
      ...props
    } = this.props

    size = fSizes[aSizes.indexOf(size)]

    const redefine = typeRedefine[type]
    if (redefine) {
      type = redefine.type
      if (redefine.size) size = redefine.size
      if (redefine.fixedWidth) fixedWidth = true
      if (redefine.pulse) pulse = true
    }

    let classNames = []

    if (cssModule) {
      classNames.push(cssModule['fa'])
      classNames.push(cssModule['fa-' + type])
      size && classNames.push(cssModule['fa-' + size])
      spin && classNames.push(cssModule['fa-spin'])
      pulse && classNames.push(cssModule['fa-pulse'])
      border && classNames.push(cssModule['fa-border'])
      fixedWidth && classNames.push(cssModule['fa-fw'])
      inverse && classNames.push(cssModule['fa-inverse'])
      flip && classNames.push(cssModule['fa-flip-' + flip])
      rotate && classNames.push(cssModule['fa-rotate-' + rotate])
      stack && classNames.push(cssModule['fa-stack-' + stack])
    } else {
      classNames.push('fa')
      classNames.push('fa-' + type)
      size && classNames.push('fa-' + size)
      spin && classNames.push('fa-spin')
      pulse && classNames.push('fa-pulse')
      border && classNames.push('fa-border')
      fixedWidth && classNames.push('fa-fw')
      inverse && classNames.push('fa-inverse')
      flip && classNames.push('fa-flip-' + flip)
      rotate && classNames.push('fa-rotate-' + rotate)
      stack && classNames.push('fa-stack-' + stack)
    }

    className && classNames.push(className)

    return React.createElement(
      tag, { ...props, 'aria-hidden': true, className: classNames.join(' ') },
      ariaLabel ? React.createElement('span', { style: srOnlyStyle }, ariaLabel) : null
    )
  }
}

Icon.displayName = 'Icon'
Icon.propTypes.type = PropTypes.string.isRequired
Icon.propTypes.size = PropTypes.oneOf(aSizes)
delete Icon.propTypes.name

export default Icon
