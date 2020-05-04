import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import Bubbles from './Bubbles';
import ColorList from './ColorList';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await axiosWithAuth().get('/colors');
        setColorList(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchColors();
  }, [refresh]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList
        refresh={() => setRefresh(!refresh)}
        colors={colorList}
        updateColors={setColorList}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
