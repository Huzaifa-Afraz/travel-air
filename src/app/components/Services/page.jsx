import React from "react";

const services = [
  {
    id: 1,
    title: "Ticket Managing",
    img: "/tickiting.png",
  },
  {
    id: 2,
    title: "AirLine Reservation",
    img: "/3213.png",
  },
  {
    id: 3,
    title: "Hotel Booking",
    img: "/HB.webp",
  },
  {
    id: 4,
    title: " Rental Cars",
    img: "/RC1.jfif",
  },
  {
    id: 5,
    title: "Visa assistance",
    img: "/VS.jfif",
  },
  {
    id: 6,
    title: "Travel Insurance",
    img: "/TI.jfif",
  },
  {
    id: 7,
    title: "Delivery at Door step",
    img: "/DDS1.avif",
  },
  {
    id: 8,
    title: "24 Hour Servives",
    img: "/2hs.jpg",
  },
];

const page = () => {
  return (
    <>
      <div className="mt-24 md:mx-16 mx-4" id="Services">
        <h3 className="text-center md:text-2xl text-xl font-semibold">OUR SERVICES</h3>
        <div className="flex flex-wrap md:justify-between justify-center mt-10 md:gap-8 gap-4 cursor-pointer">
          {services.map((item) =>(
            <div
              key={item.id}
              className=" lg:w-[280px] w-40 flex gap-4 lg:h-[300px] h-60 bg-white shadow-lg xl:mt-0 mt-6 hover:scale-105 rounded-lg overflow-hidden"
            >
              <div>
                <img  src={item.img} alt={item.title}  className="lg:h-60 h-40 lg:w-80 w-40 bg-cover overflow-hidden"/>
                <p className="font-bold text-xl text-black font-serif mt-4 p-0 text-center">
                  {item.title}
                </p>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
