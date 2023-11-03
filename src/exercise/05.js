// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle
function Box({backgroundColor, size, ...otherProps}) {
  return (
    <div
      className={`box box--${size}`}
      style={{fontStyle: 'italic', backgroundColor}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box backgroundColor="lightblue" size="small">
        small lightblue box
      </Box>
      <Box backgroundColor="pink" size="medium">
        medium pink box
      </Box>
      <Box backgroundColor="orange" size="large">
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
