import styles from './DicomViewer.less';
import CornerstoneViewport from 'react-cornerstone-viewport';
import React, { useEffect } from 'react';
import cornerstone from 'cornerstone-core';

function DicomViewer(props: any) {
  const { imageIds } = props;

  useEffect(() => {
    console.log('imageIds :>> ', imageIds);
    setTimeout(() => {
      _loadImage(imageIds);
    }, 1000);
  }, [imageIds]);

  function _loadImage(imageIds: any) {
    // if (!imageIds) return;
    const element = document.getElementsByClassName('test')[0];
    console.log('element: ', element, imageIds);
    cornerstone.enable(element as any);
    cornerstone.loadAndCacheImage(imageIds).then(function (image) {
      cornerstone.displayImage(element as any, image);
    });
  }

  return (
    <div className={styles.DicomViewer}>
      <div className="test" style={{ width: 500 }}></div>
    </div>
  );
}

export default DicomViewer;
