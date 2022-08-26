"use strict"
//GET PRODUCTS
module.exports.handler = async (event) => {
  //GET ALL PRODUCTS FROM DATABASE

  const products = [
    {
      id: 1,
      title: "The (R)evolution Bitcoin T-Shirt",
      description:
        'The (R)evolution Bitcoin T-Shirt is a great shirt for the Bitcoin enthusiast. It features a custom printed logo and the word "Bitcoin" in white. The shirt is 100% cotton and features a soft, stretchy feel. The shirt is available in a variety of colors.',
      image:
        "https://res.cloudinary.com/teepublic/image/private/s--sRt0LjCk--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1573060740/production/designs/6619082_0.jpg",
      amount: "200",
      rating: "4.0",
    },
    {
      id: 2,
      title: "Bitcoin Logo Blue T-Shirt",
      description:
        'The Bitcoin Logo T-Shirt is a great shirt for the Bitcoin enthusiast. It features a custom printed logo and the word "Bitcoin" in white. The shirt is 100% cotton and features a soft, stretchy feel. The shirt is available in a variety of colors.',
      image:
        "https://m.media-amazon.com/images/I/B1EryObaEWS._CLa%7C2140%2C2000%7C61ioKGDoaWL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png",
      amount: "300",
      rating: "4.0",
    },
    {
      id: 3,
      title: "Bitcoin 2 the Moon T-Shirt",
      description: "Bitcoin 2 the Moon T-Shirt",
      image:
        "https://ae01.alicdn.com/kf/H0e9eb0bdce0b428c8e46ae9e506ec0a5f.jpg_220x220.webp_480x480Q90.webp",
      amount: "400",
      rating: "4.0",
    },
    {
      id: 4,
      title: "Plan B(itcoin) T-Shirt",
      description: "Plan B, with B standing for Bitcoin",
      image:
        "https://ae01.alicdn.com/kf/H875875c812eb476b8b00dce81540dc867.jpg_220x220.webp_480x480Q90.webp",
      amount: "350",
      rating: "4.0",
    },
    {
      id: 5,
      title: "Bitcoin Trillionaire T-Shirt",
      description: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kOaPdxZFNYvS9liEdpHFj-xMwHkWTjnISi1JK5aSqZ5aGs19MLLu--ABX155d6luXt4&usqp=CAU",
      amount: "400",
      rating: "4.0",
    },
  ]
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "ok - Segundo Espina Mairal",
      code: 200,
      data: {
        products: products,
      },
    }),
  }
}
