import {  fireEvent, getByTestId, render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import React from "react"
import Header from "./Header";



test('should return Image with a src attribute', () => {
  let {getByAltText} = render(<Header/>)
  let Logoimage = getByAltText("logo")
  expect(Logoimage).toHaveAttribute("src")
});

test('should return 2 buttons that fire when clicked', () => {
  let changeState={
    dispatch:jest.fn()
  }
  let {getByTestId} = render(<Header {...changeState}/>)

  let RightButton = getByTestId("rightbutton")
  let LeftButton = getByTestId("leftbutton")

  fireEvent.click(RightButton)
  fireEvent.click(LeftButton)
  expect(changeState.dispatch).toHaveBeenCalledTimes(2)


});