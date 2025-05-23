import React from "react";
import "./App.css";
import logo from "../src/assets/images/images.jpeg";
import Count from "../src/Count";
function App() {
  return (
    <>
      <div className="p-8 text-[#252525] md:px-[300px] md:py-16">
        <div className=" ">
          <div className=" flex flex-col">
            <div className=" flex items-center justify-center  gap-[9px]">
              <img
                src={logo}
                alt=""
                className="w-12 md:w-20  "
              />
              {/* <img src={injuria} alt="" className="w-[85px] h-[17px]" /> */}
              <h1 className="font-playfair text-[28px] md:text-[48px]">
                Maestro Studio
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Count />
              <h5 className="font-semibold font-nunito text-[18px] md:text-[24px] pt-2 md:pt-4">
                 Bazar günü, 1 İyun
              </h5>
            </div>
          </div>
          <div className=" flex  items-center justify-center ">
            <h1 className="font-playfair text-[36px] md:text-[56px] text-center w-[90%] pt-6 ">
              Sizə daha yaxşı xidmət göstərmək üçün saytımız yenilənir.
            </h1>
          </div>

          <div className="pt-14 flex flex-col items-center justify-center gap-8">
            <h4 className="font-playfair md:font-nunito text-[20px] md:text-[28px]">
              Əlaqə vasitələrimiz:
            </h4>

            <div className=" flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6 md:gap-12 md:gap-y-[40px]">
              <div className=" flex gap-3">
                <div className=" w-6 h-6 md:w-8 md:h-8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill="#252525"
                      d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                    />
                  </svg>
                </div>
                <p className="font-nunito font-semibold text-[12px] md:text-[14px]">
                  Maestro Studio
                </p>
              </div>

              <div className=" flex items-center gap-3">
                <div className=" w-6 h-6 md:w-8 md:h-8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="#252525"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                </div>
                <p className="font-nunito font-semibold text-[12px] md:text-[14px]">
                  @maestrostudio_
                </p>
              </div>

              

                <div className=" flex items-center gap-3">
                  <div className=" w-6 h-6 md:w-8 md:h-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#252525"
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                      />
                    </svg>
                  </div>
                  <p className="font-nunito font-semibold text-[12px] md:text-[14px]">
                    Maestro Studio
                  </p>
                </div>
            

              <div className=" flex items-center gap-3">
                <div className=" w-6 h-6 md:w-8 md:h-8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill="#252525"
                      d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"
                    />
                  </svg>
                </div>
                <p className="font-nunito font-semibold text-[12px] md:text-[14px]">
                +994 50 299 84 90
                </p>
              </div>

              <div className=" flex items-center gap-3">
                <div className=" w-6 h-6 md:w-8 md:h-8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      fill="#252525"
                      d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                    />
                  </svg>
                </div>
                <p className="font-nunito font-semibold text-[12px] md:text-[14px]">
                  Bakı şəhəri, Xətai r-nu, Mərkəzi bulvar 4
                </p>
              </div>

              <div className=" flex items-center gap-3">
                <div className=" w-6 h-6 md:w-8 md:h-8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill="#252525"
                      d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"
                    />
                  </svg>
                </div>
                <p className="font-nunito font-semibold text-[12px] md:text-[14px]">
                  info@maestro.st
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
