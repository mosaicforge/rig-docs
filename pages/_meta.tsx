import { Home, BookText, PocketKnife } from 'lucide-react'

const iconStyle = {
  width: '1rem',
  height: '1rem',
  display: 'inline',
  verticalAlign: 'middle',
}



const meta = {
  "index": {
    "title": <><Home style={iconStyle} /> Get Started</>,
    "type": "page"
  },
  "docs": {
    "title": <><BookText style={iconStyle} /> Docs</>,
    "type": "page"
  },
  // "cookbook": {
  //   "title": "🍳Cookbook & Guides",
  //   "type": "page"
  // },
  "guides": {
    "title": <><PocketKnife style={iconStyle} /> Tutorials & Guides</>,
    "type": "page"
  },
  "apiReference": {
    "title": "API Reference ↗",
    "type": "page",
    "href": "https://docs.rs/rig-core",
    "newWindow": true
  },
  "contact": {
    "title": "Contact ↗",
    "type": "page",
    "href": "https://playgrounds.network",
    "newWindow": true
  }
}

export default meta