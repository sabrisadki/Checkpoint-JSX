
//Product object for product selection
const product = {
    name: "Camera",
    price: 100.99,
    description: "Caméscope 4K Caméra Vidéo 60FPS 64MP Autofocus Vlog Caméra WiFi",
    image: "data:image/jpeg;base64,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"
  };
  
  export default product;