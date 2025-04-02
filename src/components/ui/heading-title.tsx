"use client"
import React from "react"
import { TextAnimate } from "../magicui/text-animate"

interface IHeadingTitle {
  title: string
  children?: React.ReactNode
}

const HeadingTitle = ({ title, children }: IHeadingTitle) => {
  return (
    <React.Fragment>
      <TextAnimate
        className="subtitle--heading"
        by="character"
        as={"h6"}
        animation="blurInUp"
        duration={1}
      >
        {title}
      </TextAnimate>
      <p className="description mx-auto max-w-[48ch]">{children}</p>
    </React.Fragment>
  )
}

export default HeadingTitle
