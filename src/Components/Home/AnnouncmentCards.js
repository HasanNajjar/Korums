import React, { PureComponent } from 'react'
import debounce from 'lodash.debounce'
import AnnouncmentsData from '../../Data/AnnouncmentsData'

const Data = AnnouncmentsData


export default class AnnouncmentCards extends PureComponent {
 
  constructor() {
    super()
    this.state = {
      items: Data,
      hasOverflow: false,
      canScrollLeft: false,
      canScrollRight: false
    }
/* 
    this.handleClickAddItem = this.handleClickAddItem.bind(this)
    this.handleClickRemoveItem = this.handleClickRemoveItem.bind(this)
 */
    this.checkForOverflow = this.checkForOverflow.bind(this)
    this.checkForScrollPosition = this.checkForScrollPosition.bind(this)

    this.debounceCheckForOverflow = debounce(this.checkForOverflow, 1000)
    this.debounceCheckForScrollPosition = debounce(
      this.checkForScrollPosition,
      200
    )

    this.container = null
  }

  componentDidMount() {
    this.checkForOverflow()
    this.checkForScrollPosition()

    this.container.addEventListener(
      'scroll',
      this.debounceCheckForScrollPosition
    )
  }

  componentWillUnmount() {
    this.container.removeEventListener(
      'scroll',
      this.debounceCheckForScrollPosition
    )
    this.debounceCheckForOverflow.cancel()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length) {
      this.checkForOverflow()
      this.checkForScrollPosition()
    }
  }

  checkForScrollPosition() {
    const { scrollLeft, scrollWidth, clientWidth } = this.container

    this.setState({
      canScrollLeft: scrollLeft > 0,
      canScrollRight: scrollLeft !== scrollWidth - clientWidth
    })
  }

  checkForOverflow() {
    const { scrollWidth, clientWidth } = this.container
    const hasOverflow = scrollWidth > clientWidth

    this.setState({ hasOverflow })
  }
/* 
  handleClickAddItem() {
    this.setState(state => {
      return {
        items: [...state.items, state.items.length]
      }
    })
  }

  handleClickRemoveItem() {
    this.setState(state => {
      return {
        items: state.items.slice(0, -1)
      }
    })
  } */

  scrollContainerBy(distance) {
    this.container.scrollBy({ left: distance, behavior: 'smooth' })
  }

  buildItems() {
    return this.state.items.map(item => {
      return (
        <div class="scrollable"> 
    <div class="Cards bg-gray-100 p-3 pb-3">
    <div class="bg-gray-200 max-w-sm rounded overflow-hidden shadow-xl mx-5">
    <div class="px-4 py-2 h-40 min-w-full overflow-hidden">
    <div class="font-semibold text-lg mb-2 ">
          {item.Title}
          </div>
          <span class="text-gray-700 text-base">
          {item.Body}
          </span>
          </div>
          <div class="px-5 py-2 bg-gray-400 flex">
          <span class="inline-block  px-1 py-1 text-sm font-semibold  mr-15 "> 24/02/20
          </span>
          <span class="inline-block  px-1 py-1 text-sm font-semibold">
          {item.Comments}
          </span>
          <span class="inline-block  px-1 py-1 text-sm font-semibold mr-9">
          Comments </span>
          <span class="inline-block  px-1 py-1 text-sm font-semibold mr-3">
          Share </span>
          </div>
          </div>
          </div>
          </div>
      )
    })
  }

  buildControls() {
    const { canScrollLeft, canScrollRight } = this.state
    return (
      <div  class="text-center">
        <button class="bg-green-400  hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full"
          type="button"
          disabled={!canScrollLeft} 
          onClick={() => {
            this.scrollContainerBy(-850)
          }}
        >
        <div> {"  <"} </div> 
        </button>
        &nbsp; &nbsp; 
{/*       <button type="button" onClick={this.handleClickAddItem}>
          Add Item
        </button>

        <button type="button" onClick={this.handleClickRemoveItem}>
          Remove Item
        </button>*/}

        <button class="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full"
          type="button"
          disabled={!canScrollRight}
          onClick={() => {
            this.scrollContainerBy(850)
          }}   >     > {/* next button */}
        </button>
      </div>
    )
  }

  render() {
    const { selected, wheel } = this.state;

    return (
      <div>
      <div class="">
        <ul
          className="flex overflow-hidden list-none p-0"
          ref={node => {
            this.container = node
          }}
        >
          {this.buildItems().slice(0,10)}
        </ul>
        {this.buildControls()}
        </div>
        </div>
    )
  }
}
