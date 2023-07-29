import React,{useContext} from 'react'
import { Box, Typography } from '@mui/material'

import { Bodypart } from './index'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const HorizontalScrollBar = ({ data , bodyPart , SetBodyPart }) => {


  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
      {data.map((item) => (
        <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m = "0 40px"
        >
          <Bodypart item={item} bodyPart={bodyPart} SetBodyPart={SetBodyPart}/>
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar