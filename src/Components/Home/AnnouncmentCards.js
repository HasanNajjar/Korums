import React, { PureComponent } from 'react'
import AnnouncmentsData from '../../Data/AnnouncmentsData'
import debounce from 'lodash.debounce'
import AnnouncmentsModal from './AnnouncmentsModal'

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

  scrollContainerBy(distance) {
    this.container.scrollBy({ left: distance, behavior: 'smooth' })
  }

  buildItems() {
    return(
    <AnnouncmentsModal/>
    )
  }

  buildControls() {
    const { canScrollLeft, canScrollRight } = this.state
    return (
      <div>
      <div  class="bg-gray-200 text-center">
        <button class="bg-indigo-700  hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded-full"
          type="button "  
          disabled={!canScrollLeft} 
          onClick={() => {
            this.scrollContainerBy(-850)
          }}
        >
        <div> {"  <"} </div> 
        </button>
        &nbsp; &nbsp; 

        <button class="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded-full"
          type="button"
          disabled={!canScrollRight}
          onClick={() => {
            this.scrollContainerBy(850)
          }}   >     > {/* next button */}
        </button>
      </div>
      </div>
    )
  }

  render() {
    const { selected } = this.state;

    return (
      <div>
      <div class="">
        <ul
          className="flex overflow-hidden list-none p-0"
          ref={node => {
            this.container = node
          }}
        >
          {this.buildItems()}
        </ul>
        {this.buildControls()}
        </div>
        </div>
    )
  }
}
