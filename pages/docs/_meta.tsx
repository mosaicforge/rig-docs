import { Blocks, BookText, CircleHelp, DraftingCompass, Landmark, Puzzle, Rocket, Unplug } from "lucide-react";

const iconStyle = {
  width: '1rem',
  display: 'inline'
}

const meta = {
  "index": "Overview",
  "0_quickstart": {title: <><Rocket style={iconStyle} /> &nbsp; Quickstart</>},
  "1_why_rig": {title: <><CircleHelp style={iconStyle} /> &nbsp; Why Rig</>},
  "2_architecture": {title: <><Landmark style={iconStyle} /> &nbsp; Architecture</>},
  "3_concepts": {title: <><Puzzle style={iconStyle} /> &nbsp; Concepts</>},
  "4_integrations": {title: <><Unplug style={iconStyle} /> &nbsp; Integrations</>},
  "5_extensions": {title: <><Blocks style={iconStyle} /> &nbsp; Extensions</>}
}

export default meta;
