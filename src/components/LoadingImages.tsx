import { useEffect, useRef, useState } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import cornerstone from "cornerstone-core"
import cornerstoneTools from "cornerstone-tools"
import cornerstoneWADOImageLoader from "cornerstone-wado-image-loader"
import './old.css'
import initCornerstone from "../initCornerstone.js"
import Button from "./CustomButtonComponent";

initCornerstone()

function LoadingImages() {
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [imageIds, setImageIds] = useState([])

  let element

 /* const loadAndViewImage = (imageId) => {
    const element = document.getElementById("dicomImage")
    const start = new Date().getTime()
    cornerstone.loadImage(imageId).then(
      function (image) {
        console.log(image)
        const viewport = cornerstone.getDefaultViewportForImage(element, image)
        cornerstone.displayImage(element, image, viewport)
      },
      function (err) {
        alert(err)
      }
    )
  }*/

  useEffect(() => {
    element = document.getElementById("dicomImage");
    cornerstone.enable(element);
  });

  const handleFileChange = (e: any) => {
    const files = Array.from(e.target.files)
    setUploadedFiles(files)
    const imageIds = files.map((file) => {
      return cornerstoneWADOImageLoader.wadouri.fileManager.add(file)
    })
    setImageIds(imageIds)
    const StackScrollMouseWheelTool = cornerstoneTools.StackScrollMouseWheelTool

    const stack = {
      currentImageIdIndex: 0,
      imageIds,
    }; console.log(stack);
    cornerstone.loadImage(imageIds[0]).then((image) => {
      cornerstone.displayImage(element, image)
      cornerstoneTools.addStackStateManager(element, ["stack"])
      cornerstoneTools.addToolState(element, "stack", stack)
    })
    setTimeout(() => {
      imageIds.forEach((imageId) => {
        const thumbnailElement = document.getElementById(imageId)
        cornerstone.enable(thumbnailElement)
        cornerstone.loadImage(imageId).then((image) => {
          cornerstone.displayImage(thumbnailElement, image)
          cornerstoneTools.addStackStateManager(element, ["stack"])
          cornerstoneTools.addToolState(element, "stack", stack)
        })
      })
    }, 1000)
    cornerstoneTools.addTool(StackScrollMouseWheelTool)
    cornerstoneTools.setToolActive("StackScrollMouseWheel", {})
  }

  const setZoomActive = (e) => {
    const ZoomMouseWheelTool = cornerstoneTools.ZoomMouseWheelTool;

    cornerstoneTools.addTool(ZoomMouseWheelTool);
    cornerstoneTools.setToolActive("ZoomMouseWheel", { mouseButtonMask: 1 });
    const PanTool = cornerstoneTools.PanTool;

    cornerstoneTools.addTool(PanTool);
    cornerstoneTools.setToolActive("Pan", { mouseButtonMask: 1 });
  };



  return (
    
    <div className="cornerstone">
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
      <div className="loader">
        <input type="file" onChange={handleFileChange} multiple />
        <button onClick={setZoomActive}>Zoom/Pan</button>
      </div>
      <div className="dicom-wrapper">
        <div className="thumbnail-selector">
          <div className="thumbnail-list" id="thumbnail-list">
            {imageIds.map((imageId) => {
              return (
                <a
                  key={imageId}
                  onContextMenu={() => false}
                  unselectable="on"
                  onMouseDown={() => false}
                  onSelect={() => false}
                >
                  <div
                    id={imageId}
                    className="thumbnail-item"
                    onContextMenu={() => false}
                    unselectable="on"
                    onMouseDown={() => false}
                    onSelect={() => false}
                  />
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <div
        onContextMenu={() => false}
        className="dicom-viewer"
        unselectable="on"
      >
      <div id="dicomImage"></div>
      </div>
      <Link to={{pathname: "/Viewpage", state: {imageIds: imageIds}}}>
      <Button 
        border="none"
        color="blue"
        height="200px"
        onClick={() => console.log(imageIds)}
        radius="50%"
        width="200px"
        children="Continue"
      />
      </Link>
    </div>
  )
}

export default LoadingImages
