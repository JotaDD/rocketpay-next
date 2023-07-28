type ColorType = {
  [card: string]: string[]
}

const colors: ColorType = {
  "visa": [
    "#436D99",
    "#2D57F2"
  ],
  "mastercard": [
    "#DF6F29",
    "#C69347"
  ],
  "amex": [
    "#0077A6",
    "#9E9E9E"
  ],
  "default": [
    "black",
    "gray",
  ]
};

export default colors;