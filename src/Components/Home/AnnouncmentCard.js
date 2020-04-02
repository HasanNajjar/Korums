import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import AnnouncmentsData from '../../Data/AnnouncmentsData'
import './AnnouncmentCard.css';

const list = AnnouncmentsData

const MenuItem = ({text, selected}) => {
  return <div >{text}</div>;
};


export const Menu = (list) =>
  list.map(announcment =>{
    const {id, Title, Body, Comments} = announcment
    return( <div> 
    <div class="Cards bg-gray-100 p-3 pb-3 overflow-y-auto overflow-x-hidden ">
    <div class="bg-gray-200 max-w-sm rounded overflow-hidden shadow-xl mx-5 ">
    <div class="px-4 py-2 h-40 min-w-full overflow-hidden ">
    <div class="font-semibold text-lg mb-2 ">
    <MenuItem text={Title} key={id}/>
    </div>
    <span class="text-gray-700 text-base">
    <MenuItem text={Body} />
    </span>
    </div>
    <div class="px-5 py-2 bg-gray-400 flex">
    <span class="inline-block  px-1 py-1 text-sm font-semibold  mr-15 "> 24/02/20
    </span>
    <span class="inline-block  px-1 py-1 text-sm font-semibold">
    <MenuItem text={Comments} />
    </span>
    <span class="inline-block  px-1 py-1 text-sm font-semibold mr-9">
    Comments </span>
    <span class="inline-block  px-1 py-1 text-sm font-semibold mr-3">
    Share </span>
    </div>
    </div>
    </div>
    </div>

  )});



  const Arrow = ({ text, className }) => {
    return (
      <div   className={className}>
      {text}
      </div>
    )
  }

  
  const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
  const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
  
  
  export default class AnnouncmentCard extends Component {
    constructor(props) {
      super(props);

      this.menuItems = Menu(list.slice(0,6));
    }
  
    state = {
      selected: "",
      
    };
  
    render() {
      const { selected } = this.state;
      // Create menu from items
      const menu = this.menuItems;
  
      return (
        <div className="App bg-gray-100">
          <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
          />
        </div>
      );
    }
  }