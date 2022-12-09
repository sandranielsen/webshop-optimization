import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";


export default function Footer() {
  return (
    <div id="section-padding" className="footer-container flex flex-col">
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between text-white">
        {/* Language input */}
        <div className="w-full md:w-6/12 mb-8">
          <StaticImage
            src="../images/magomade-logo-footer.png"
            alt="MagoMade Logo"
            width={800}
            quality={100}
            className="m-auto w-80 md:m-0"
          />

          <form className="w-fit text-sm border border-white px-4 rounded-full mx-auto mt-4 md:mt-8 md:mx-0">
            <select
              id="lang"
              name="language"
              className="bg-transparent font-light px-4"
            >
              <option value="eng" className="bg-transparent text-white">
                English
              </option>
              <option value="da" className="bg-transparent text-white">
                Danish
              </option>
            </select>
          </form>
        </div>

        {/* Support  */}
        <div className="w-fit md:w-3/12 flex flex-col gap-4 mb-8 md:mb-0">
          <h5 className="text-xl mb-4 text-center md:text-left">Support</h5>
          <Link
            className="text-sm text-center md:text-left"
            to="/terms-and-conditions"
          >
            Terms & Conditions
          </Link>
          <Link className="text-sm text-center md:text-left" to="/contact">
            Contact
          </Link>
        </div>

        {/* Socials */}
        <div className="w-fit md:w-3/12 flex flex-col gap-4">
          <h5 className="text-xl mb-4 text-center md:text-left">Socials</h5>
          <div className="flex flex-row gap-4">
            <a
              className="rounded-full border border-white h-12 w-12 flex text-white hover:text-[#F4BBF8] hover:bg-white hover:scale-125 transition duration-150 ease-in-out"
              href="https://www.instagram.com/mago.made/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 100 100"
                className="m-auto"
              >
                <g
                  id="Icon_ionic-logo-instagram"
                  data-name="Icon ionic-logo-instagram"
                  transform="translate(-4.5 -4.5)"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M75.333,12.833A20.895,20.895,0,0,1,96.167,33.667V75.333A20.895,20.895,0,0,1,75.333,96.167H33.667A20.895,20.895,0,0,1,12.833,75.333V33.667A20.895,20.895,0,0,1,33.667,12.833H75.333m0-8.333H33.667A29.252,29.252,0,0,0,4.5,33.667V75.333A29.252,29.252,0,0,0,33.667,104.5H75.333A29.252,29.252,0,0,0,104.5,75.333V33.667A29.252,29.252,0,0,0,75.333,4.5Z"
                    transform="translate(0 0)"
                    fill="currentColor"
                  />
                  <path
                    id="Path_11"
                    data-name="Path 11"
                    d="M29.875,21.5a6.25,6.25,0,1,1,6.25-6.25A6.235,6.235,0,0,1,29.875,21.5Z"
                    transform="translate(51.708 12.167)"
                    fill="currentColor"
                  />
                  <path
                    id="Path_12"
                    data-name="Path 12"
                    d="M36.25,19.583A16.667,16.667,0,1,1,19.583,36.25,16.682,16.682,0,0,1,36.25,19.583m0-8.333a25,25,0,1,0,25,25,25.006,25.006,0,0,0-25-25Z"
                    transform="translate(18.25 18.25)"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </a>
            <a
              className="rounded-full border border-white h-12 w-12 flex text-white hover:text-[#F4BBF8] hover:bg-white hover:scale-125 transition duration-150 ease-in-out"
              href="https://www.pinterest.dk/MagoMade/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 100 100.045"
                className="m-auto"
              >
                <path
                  id="Icon_ionic-logo-pinterest"
                  data-name="Icon ionic-logo-pinterest"
                  d="M52.261,2.25A50.015,50.015,0,0,0,32.19,98.075,44.292,44.292,0,0,1,33.06,86.6c.96-4.063,6.43-27.261,6.43-27.261a19.093,19.093,0,0,1-1.608-7.9c0-7.412,4.287-12.949,9.645-12.949,4.555,0,6.743,3.416,6.743,7.5,0,4.577-2.925,11.409-4.421,17.749-1.25,5.314,2.657,9.623,7.9,9.623,9.466,0,15.852-12.168,15.852-26.591,0-10.962-7.39-19.156-20.808-19.156-15.16,0-24.626,11.319-24.626,23.956a14.416,14.416,0,0,0,3.3,9.8c.915,1.094,1.049,1.541.714,2.791-.246.915-.781,3.126-1.027,4.019a1.718,1.718,0,0,1-2.5,1.25c-6.988-2.858-10.248-10.493-10.248-19.111,0-14.2,11.989-31.235,35.745-31.235,19.089,0,31.659,13.82,31.659,28.645C85.818,67.354,74.9,82,58.825,82c-5.4,0-10.471-2.925-12.213-6.229,0,0-2.9,11.52-3.528,13.753a41.569,41.569,0,0,1-5.023,10.717A50.02,50.02,0,1,0,52.261,2.25Z"
                  transform="translate(-2.25 -2.25)"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              className="rounded-full border border-white h-12 w-12 flex text-white hover:text-[#F4BBF8] hover:bg-white hover:scale-125 transition duration-150 ease-in-out"
              href="https://www.tiktok.com/@mago.made"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 86.877 100"
                className="m-auto"
              >
                <path
                  id="Icon_simple-tiktok"
                  data-name="Icon simple-tiktok"
                  d="M48,.083C53.455,0,58.872.042,64.288,0c.333,6.375,2.625,12.875,7.292,17.375,4.667,4.625,11.25,6.75,17.666,7.458V41.624a44.6,44.6,0,0,1-17.5-4.042A51.479,51.479,0,0,1,65,33.708c-.042,12.167.042,24.333-.083,36.458a31.825,31.825,0,0,1-5.625,16.416A31.042,31.042,0,0,1,34.664,99.957a30.382,30.382,0,0,1-17-4.292A31.42,31.42,0,0,1,2.456,71.874c-.083-2.083-.125-4.167-.042-6.208A31.367,31.367,0,0,1,38.789,37.833c.083,6.167-.167,12.333-.167,18.5a14.3,14.3,0,0,0-18.25,8.833c-.875,2.125-.625,4.458-.583,6.708,1,6.833,7.583,12.583,14.583,11.958a14,14,0,0,0,11.542-6.708,9.614,9.614,0,0,0,1.708-4.417c.417-7.458.25-14.875.292-22.333.042-16.791-.042-33.541.083-50.291Z"
                  transform="translate(-2.369)"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Payment list */}
      <div className="flex flex-row gap-4 border-t border-white w-full justify-center mt-8 pt-8 md:mt-12 md:pt-12  text-white">
        <svg
          id="Payment_Icons"
          data-name="Payment Icons"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38 38"
          width="40"
          height="40"
        >
          <title>applepay-outline</title>
          <path
            fill="currentColor"
            d="M33,8a4,4,0,0,1,4,4V26a4,4,0,0,1-4,4H5a4,4,0,0,1-4-4V12A4,4,0,0,1,5,8H33m0-1H5a5,5,0,0,0-5,5V26a5,5,0,0,0,5,5H33a5,5,0,0,0,5-5V12a5,5,0,0,0-5-5Z"
          />
          <path
            fill="currentColor"
            d="M11.66,15.47a1.39,1.39,0,0,1-1.14.54,1.64,1.64,0,0,1,.41-1.18,1.69,1.69,0,0,1,1.13-.58,1.72,1.72,0,0,1-.4,1.22m.39.63c-.63,0-1.16.36-1.46.36s-.76-.34-1.26-.33a1.85,1.85,0,0,0-1.58.95,4,4,0,0,0,.48,3.85c.32.47.71,1,1.21,1s.67-.31,1.25-.31.75.31,1.26.3.85-.47,1.17-.94a4,4,0,0,0,.53-1.08,1.7,1.7,0,0,1-1-1.55,1.74,1.74,0,0,1,.82-1.45,1.78,1.78,0,0,0-1.4-.76m3.63-1.31v7h1.1V19.42h1.51a2.23,2.23,0,0,0,2.35-2.32,2.2,2.2,0,0,0-2.31-2.31Zm1.1.92H18a1.32,1.32,0,0,1,1.49,1.4,1.32,1.32,0,0,1-1.5,1.4H16.78Zm5.86,6.18a1.79,1.79,0,0,0,1.61-.9h0v.84h1v-3.5c0-1-.81-1.68-2.07-1.68a1.84,1.84,0,0,0-2,1.58h1a1,1,0,0,1,1-.72c.67,0,1,.31,1,.89v.39l-1.37.08c-1.27.08-2,.6-2,1.5A1.55,1.55,0,0,0,22.64,21.89Zm.3-.84c-.59,0-1-.28-1-.71s.36-.7,1-.74l1.22-.08v.4A1.19,1.19,0,0,1,22.94,21.05Zm3.7,2.7c1.07,0,1.57-.41,2-1.64l1.92-5.39H29.46l-1.29,4.16h0l-1.29-4.16H25.71l1.86,5.13-.1.31a.88.88,0,0,1-.92.74l-.32,0v.84A2.63,2.63,0,0,0,26.64,23.75Z"
          />
        </svg>

        <svg
          id="Payment_Icons"
          data-name="Payment Icons"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38 38"
          width="40"
          height="40"
        >
          <title>mastercard-outline</title>
          <path
            fill="currentColor"
            d="M33,8a4,4,0,0,1,4,4V26a4,4,0,0,1-4,4H5a4,4,0,0,1-4-4V12A4,4,0,0,1,5,8H33m0-1H5a5,5,0,0,0-5,5V26a5,5,0,0,0,5,5H33a5,5,0,0,0,5-5V12a5,5,0,0,0-5-5Z"
          />
          <path
            fill="currentColor"
            d="M18.11,15.08a4.75,4.75,0,1,0,0,7.84,5.93,5.93,0,0,1,0-7.84Z"
          />
          <circle fill="currentColor" cx="22.56" cy="19" r="4.75" />
        </svg>

        <svg
          id="Payment_Icons"
          data-name="Payment Icons"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38 38"
          width="40"
          height="40"
        >
          <title>visa-outline</title>
          <path
            fill="currentColor"
            d="M33,8a4,4,0,0,1,4,4V26a4,4,0,0,1-4,4H5a4,4,0,0,1-4-4V12A4,4,0,0,1,5,8H33m0-1H5a5,5,0,0,0-5,5V26a5,5,0,0,0,5,5H33a5,5,0,0,0,5-5V12a5,5,0,0,0-5-5Z"
          />
          <path
            fill="currentColor"
            d="M15.76,15.56l-2.87,6.89H11L9.61,17a.75.75,0,0,0-.42-.61,7.69,7.69,0,0,0-1.74-.59l0-.2h3a.84.84,0,0,1,.82.71l.74,4,1.84-4.69Zm7.33,4.64c0-1.81-2.5-1.91-2.48-2.73,0-.24.24-.51.75-.57a3.32,3.32,0,0,1,1.75.3l.31-1.46a4.93,4.93,0,0,0-1.66-.3c-1.75,0-3,.93-3,2.28,0,1,.88,1.54,1.55,1.87s.92.56.92.86c0,.46-.55.66-1.06.67a3.66,3.66,0,0,1-1.82-.43L18,22.2a5.41,5.41,0,0,0,2,.36c1.86,0,3.07-.92,3.08-2.36m4.62,2.25h1.63l-1.42-6.89H26.41a.82.82,0,0,0-.76.51L23,22.45h1.86l.36-1h2.27Zm-2-2.44.94-2.58L27.2,20Zm-7.44-4.45-1.46,6.89H15.06l1.46-6.89Z"
          />
        </svg>
      </div>
    </div>
  );
}
