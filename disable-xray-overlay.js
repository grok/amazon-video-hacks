// Generic, independent function to simply find things with CSS classes.
// Then it nukes them.
function removeElementsByClass(className) {
  const elements = document.querySelectorAll(`.${className}`);
  
  elements.forEach(element => {
    element.parentNode.removeChild(element);
  });
}

// Usage.
// All the Xray features in Amazon Video are wrapped in .xrayQuickView -- so deleting it makes the whole thing go away.
removeElementsByClass('xrayQuickView');
