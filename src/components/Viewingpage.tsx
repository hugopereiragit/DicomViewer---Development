import { useEffect, useRef, useState } from "react"
// import cornerstone from "cornerstone-core"
import { useLocation, Link } from "react-router-dom";
import CornerstoneViewport from "react-cornerstone-viewport"
import cornerstoneTools from "cornerstone-tools"
import cornerstone from "cornerstone-core"

// Descomentar para utilizar ficheiros dicom a funcionar
/*const imageIds = [
  "dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.9.dcm",
  "dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.10.dcm",
  "dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.11.dcm",
]
*/
const imageIds = [
  "dicomweb://identisoft.pt/test-id1/IMG00000",
  "dicomweb://identisoft.pt/test-id1/IMG00002",
];

function Viewingpage() {
  const [activeViewportIndex, setActiveViewportIndex] = useState(0)
  const [imageIdIndex, setImageIdIndex] = useState(0)
  const [activeTool, setActiveTool] = useState("Zoom")
  const viewports = [0, 1]
  const vpRef = useRef()
//  const [imageIds, setImageIds] = useState([])
//  comentar proximas 2 linhas para utilizar as imagens default
 // const location = useLocation();
 // const imageIds = location.state?.imageIds;

//cornerstone.loadImage(imageId).then(


  

  const tools = [
    {
      name: "Wwwc",
      mode: "active",
      modeOptions: { mouseButtonMask: 1 },
    },
    {
      name: "Zoom",
      mode: "active",
      modeOptions: { mouseButtonMask: 2 },
    },
    {
      name: "Pan",
      mode: "active",
      modeOptions: { mouseButtonMask: 4 },
    },
    // Scroll
    { name: "StackScrollMouseWheel", mode: "active" },
    // Touch
    { name: "PanMultiTouch", mode: "active" },
    { name: "ZoomTouchPinch", mode: "active" },
    { name: "StackScrollMultiTouch", mode: "active" },
  ]


  useEffect(() => {
    if (vpRef) {
      const scrollSyn = new cornerstoneTools.Synchronizer(
        "cornerstonetoolsstackscroll",
        cornerstoneTools.stackScrollSynchronizer
      )
      // console.log("scrollSyn :>> ", scrollSyn)

      const wwwcSyn = new cornerstoneTools.Synchronizer(
        "cornerstoneimagerendered",
        cornerstoneTools.wwwcSynchronizer
      )

      const zoomSyn = new cornerstoneTools.Synchronizer(
        "cornerstoneimagerendered",
        cornerstoneTools.panZoomSynchronizer
      )

      const res = document.getElementsByClassName("viewport-element")
      const left = res[0]
      const right = res[1]

      cornerstone.enable(left)
      cornerstone.enable(right)

      scrollSyn.add(left)
      scrollSyn.add(right)

      wwwcSyn.add(left)
      wwwcSyn.add(right)

      zoomSyn.add(left)
      zoomSyn.add(right)
    }
  }, [vpRef])

  return (
    <div className="viewpage">
            <div className="navBar">
      <Link to="/" className={location.pathname === "/" ? "activeNavButton navButton" : "navButton"}>
          Home
        </Link>
        <Link to="/LoadingImages" className={location.pathname === "/LoadingImages" ? "activeNavButton navButton" : "navButton"}>
          Load Dicom Images
        </Link>
        <Link to="/viewpage" className={location.pathname === "/viewpage" ? "activeNavButton navButton" : "navButton"}>
          Viewmodes
        </Link>
        <Link to="/Help" className={location.pathname === "/Help" ? "activeNavButton navButton" : "navButton"}>
          Help
        </Link>
        <Link to="/Contacts" className={location.pathname === "/Contacts" ? "activeNavButton navButton" : "navButton"}>
          Contact Info
        </Link>
      </div>
    <div style={{ display: "flex", flexWrap: "wrap" }} ref={vpRef}>    
      <div className="viewpage">
      {viewports.map((viewportIndex) => (
        <CornerstoneViewport
          key={viewportIndex}
          style={{ minWidth: "45%", height: "256px", flex: "1" }}
          tools={tools}
          imageIds={imageIds}
          imageIdIndex={imageIdIndex}
          className={activeViewportIndex === viewportIndex ? "active" : ""}
          activeTool={activeTool}
          setViewportActive={() => {
            setActiveViewportIndex(viewportIndex)
          }}
        />
      ))}
      </div>
    </div>
    </div>
  )
}

export default Viewingpage
