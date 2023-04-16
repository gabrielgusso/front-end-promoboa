import React, { createRef } from "react"
import styled from "styled-components"

class OutsideClickHandler extends React.Component {
  wrapperRef = createRef()

  static defaultProps = {
    onOutsideClick: () => {},
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside)
  }

  handleClickOutside = (event) => {
    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target)
    ) {
      this.props.onOutsideClick()
    }
  }

  render() {
    const { children } = this.props

    return <Container ref={this.wrapperRef}>{children}</Container>
  }
}

export default OutsideClickHandler

const Container = styled.div`
  height: 100%;
`
