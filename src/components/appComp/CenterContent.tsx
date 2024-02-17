const data = [
  {
    id: 1,
    text: "Chat GPT",
    version: "v2.1",
    license: "MIT",
    contributors: [
      "https://w0.peakpx.com/wallpaper/216/742/HD-wallpaper-roronoa-zoro-one-piece-art-resolution-anime-and-background-zoro-smile.jpg",
      "https://dk2dv4ezy246u.cloudfront.net/widgets/sL9QzDF3b2c_large.jpg",
      "https://i.pinimg.com/736x/47/c4/5c/47c45c58bc10e41d6408fe91b791cfb8.jpg",
    ],
    rating: 4,
  },
  {
    id: 2,
    text: "Chat GPT",
    version: "v2.1",
    license: "MIT",
    contributors: [
      "https://w0.peakpx.com/wallpaper/216/742/HD-wallpaper-roronoa-zoro-one-piece-art-resolution-anime-and-background-zoro-smile.jpg",
      "https://w0.peakpx.com/wallpaper/759/390/HD-wallpaper-itachi-uchiha-kakashi-madara-mangekyo-sharingan-minato-sharingan.jpg",
      "https://i.pinimg.com/736x/47/c4/5c/47c45c58bc10e41d6408fe91b791cfb8.jpg",
    ],
    rating: 4,
  },
  {
    id: 3,
    text: "Chat GPT",
    version: "v2.1",
    license: "MIT",
    contributors: [
      "https://static.wikia.nocookie.net/p__/images/f/fa/Shanks_protective_face.png/revision/latest?cb=20230325191231&path-prefix=protagonist",
      "https://dk2dv4ezy246u.cloudfront.net/widgets/sL9QzDF3b2c_large.jpg",
      "https://i.pinimg.com/736x/47/c4/5c/47c45c58bc10e41d6408fe91b791cfb8.jpg",
    ],
    rating: 3,
  },
  {
    id: 4,
    text: "Chat GPT",
    version: "v2.1",
    license: "MIT",
    contributors: [
      "https://w0.peakpx.com/wallpaper/216/742/HD-wallpaper-roronoa-zoro-one-piece-art-resolution-anime-and-background-zoro-smile.jpg",
      "https://dk2dv4ezy246u.cloudfront.net/widgets/sL9QzDF3b2c_large.jpg",
      "https://i.pinimg.com/736x/47/c4/5c/47c45c58bc10e41d6408fe91b791cfb8.jpg",
    ],
    rating: 2,
  },
  {
    id: 5,
    text: "Chat GPT",
    version: "v2.1",
    license: "MIT",
    contributors: [
      "https://w0.peakpx.com/wallpaper/216/742/HD-wallpaper-roronoa-zoro-one-piece-art-resolution-anime-and-background-zoro-smile.jpg",
      "https://dk2dv4ezy246u.cloudfront.net/widgets/sL9QzDF3b2c_large.jpg",
      "https://i.pinimg.com/736x/47/c4/5c/47c45c58bc10e41d6408fe91b791cfb8.jpg",
    ],
    rating: 4,
  },
];

const CenterContent = () => {
  return (
    <div className="bg-primary-700 h-full rounded-xl text-white p-1">
      <div className="h-40 bg-primary-900 rounded-xl p-6">
        <p className="font-semibold text-2xl">AI Models</p>
        <div className="mt-6 flex gap-5">
          {[...Array(3)].map((_, index) => (
            <button
              key={index}
              className="bg-dark w-20 h-8 text-[13px] rounded-full text-white font-normal flex items-center justify-center gap-1"
            >
              Model {index + 1}
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.862525 0.320693C0.97347 0.209749 1.14708 0.199663 1.26942 0.290436L1.30447 0.320693L4.00016 3.01625L6.69586 0.320693C6.8068 0.209749 6.98041 0.199663 7.10275 0.290436L7.1378 0.320693C7.24874 0.431638 7.25883 0.605248 7.16806 0.727586L7.1378 0.762635L4.22113 3.6793C4.11019 3.79025 3.93658 3.80033 3.81424 3.70956L3.77919 3.6793L0.862525 0.762635C0.740486 0.640596 0.740486 0.442732 0.862525 0.320693Z"
                  fill="white"
                />
              </svg>
            </button>
          ))}
        </div>

        <div className="flex font-normal text-xs text-white/60 mt-5">
          <p className="min-w-40">Model</p>
          <p className="min-w-20 text-center">Versions</p>
          <p className="min-w-20 text-center">License</p>
          <p className="min-w-20 text-center">Contributors</p>
          <p className="min-w-28 text-center">Rating</p>
        </div>
      </div>
      <div className="flex flex-col p-6">
        {data.map((item) => (
          <div className="flex h-16 " key={item.id}>
            <div className={`flex gap-2 min-w-40 w-40`}>
              <div className="w-6 h-6 bg-white rounded-full" />
              <p className="text-white text-sm font-medium">{item.text}</p>
            </div>

            <p className="min-w-20 text-white/60 text-sm font-normal text-center">
              {item.version}
            </p>
            <p className="min-w-20 text-white/60 text-sm font-normal text-center">
              {item.license}
            </p>

            <div className="min-w-20 w-20 flex justify-center">
              {item.contributors.map((contributor, index) => (
                <img
                  key={index}
                  src={contributor}
                  alt="contributor"
                  className={`w-6 h-6 bg-white p-[2px] rounded-full object-contain ${
                    index > 0 ? "-ml-2" : ""
                  }`}
                />
              ))}
            </div>

            <div className="min-w-28 w-28 flex justify-center gap-[2px]">
              {[...Array(item.rating)].map((_, index) => (
                <svg
                  key={index}
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-secondary-400"
                >
                  <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" />
                </svg>
              ))}

              {[...Array(5 - item.rating)].map((_, index) => (
                <svg
                  key={index}
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-dark w-5 h-5"
                >
                  <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CenterContent;
