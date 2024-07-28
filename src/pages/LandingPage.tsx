import React, { useCallback, useState } from 'react';
import { ReactTags } from 'react-tag-autocomplete';
import LogoIcon from '../images/carepointpro/main__logo.png';
import iconHealthcare from '../images/carepointpro/landingpage/icon-healthcare.svg';
import iconDentist from '../images/carepointpro/landingpage/icon-dentist.svg';
import iconObGyn from '../images/carepointpro/landingpage/icon-gyn.svg';
import iconDerm from '../images/carepointpro/landingpage/icon-derm.svg';
import iconPysc from '../images/carepointpro/landingpage/icon-psyc.svg';
import iconEye from '../images/carepointpro/landingpage/icon-eye.svg';
import mydoctorImage from '../images/carepointpro/landingpage/mydoctor-app.png';
import doctorapp from '../images/carepointpro/landingpage/doctor-app.jpeg';
import Carousel from 'better-react-carousel';

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua & Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia & Herzegovina',
  'Botswana',
  'Brazil',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Cote D Ivoire',
  'Croatia',
  'Cruise Ship',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Polynesia',
  'French West Indies',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kuwait',
  'Kyrgyz Republic',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Pierre & Miquelon',
  'Samoa',
  'San Marino',
  'Satellite',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'South Africa',
  'South Korea',
  'Spain',
  'Sri Lanka',
  'St Kitts & Nevis',
  'St Lucia',
  'St Vincent',
  'St. Lucia',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  "Timor L'Este",
  'Togo',
  'Tonga',
  'Trinidad & Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks & Caicos',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States of America',
  'Uruguay',
  'Uzbekistan',
  'Venezuela',
  'Vietnam',
  'Virgin Islands (US)',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

const suggestions = countries.map((name, index) => ({
  value: index,
  label: name,
}));

export { countries, suggestions };

const LandingPage = () => {
  const [selected, setSelected] = useState([]);
  const onAdd = useCallback(
    (newTag) => {
      setSelected([...selected, newTag]);
    },
    [selected],
  );

  const onDelete = useCallback(
    (tagIndex) => {
      setSelected(selected.filter((_, i) => i !== tagIndex));
    },
    [selected],
  );

  return (
    <>
      <div className="flex flex-col p-4 bg-[#4885c8]">
        <div className="container">
          <div className="max-w-screen-xl mx-auto p-4">
            <div className="flex p-4 cpp__heroAutocomplete">
              {/* <ReactTags
                labelText="Select countries"
                selected={selected}
                suggestions={suggestions}
                onAdd={onAdd}
                onDelete={onDelete}
                noOptionsText="No matching countries"
              /> */}
            </div>
            <div className="d-flex">
              <h1 className="text-white text-4xl">
                Book an in-Network near you
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-20">
        <div className="container">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-black text-center text-4xl mb-2">
              Top-searched specialties
            </h2>
            <p className="text-black text-center">
              Get care from doctors across +100 specialties
            </p>
            <div className="flex justify-between w-full mt-10">
              <div className="flex flex-col justify-center items-center">
                <img className="h-20" src={iconHealthcare} alt="" />
                <h3 className="mt-2">Primary Care</h3>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="h-20" src={iconDentist} alt="" />
                <h3 className="mt-2">Dentist</h3>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="h-20" src={iconObGyn} alt="" />
                <h3 className="mt-2">OB-GYN</h3>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="h-20" src={iconDerm} alt="" />
                <h3 className="mt-2">Dermatologists</h3>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="h-20" src={iconPysc} alt="" />
                <h3 className="mt-2">Psychiatrists</h3>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="h-20" src={iconEye} alt="" />
                <h3 className="mt-2">Eye Doctors</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-20 bg-[#deeeff]">
        <div className="container">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-black text-center text-4xl">
              What is CarePoint Pro ?
            </h2>
            <div className="flex justify-between w-full mt-10">
              <div className="flex flex-col justify-center items-center px-4 text-center">
                <h3 className="text-black text-xl">
                  Find and compare top local doctors
                </h3>
                <p>
                  Read verified reviews from patients like you and see real-time
                  availability for in-person and video visits.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center px-4 text-center">
                <h3 className="text-black text-xl">
                  Check coverage and estimated costs
                </h3>
                <p>
                  Enter your insurance to find in-network doctors who accept
                  your plan or compare doctors’ out-ofpocket costs.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center  px-4 text-center">
                <h3 className="text-black text-xl">
                  Get care anytime, anywhere
                </h3>
                <p>
                  Book appointments online and see the same great doctors from
                  home with a video visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center h-screen mx-auto bg-no-repeat bg-cover bg-center p-20"
        style={{ backgroundImage: `url(${doctorapp})` }}
      >
        <div className="container">
          <div className="max-w-screen-xl flex flex-col items-start mx-auto p-4">
            <h2 className="text-white text-4xl">Patient Resources</h2>
            <p className="text-white mt-3 mb-10 w-3/6">
              Access your personal health records, view lab results, and
              communicate with your healthcare providers
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex items-center justify-center py-20">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-black text-center text-4xl">
            Our Patient Love Us
          </h2>
          <p className="text-black mt-3 mb-10 text-center">
            Based on 7334 Recommendations | Rated 5 Out of 5
          </p>
          <Carousel cols={3} rows={1} gap={10} loop>
            {Array.from({ length: 10 }, (_, i) => (
              <Carousel.Item key={i}>
                <div className="relative flex w-full max-w-[26rem] flex-col bg-transparent border-none bg-slate-200 rounded-lg shadow-none px-4 py-2 text-gray-700">
                  <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                      alt="Tania Andrew"
                      className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
                    />
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                          Tania Andrew
                        </h5>
                        <div className="flex items-center gap-0 5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-yellow-700"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-yellow-700"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-yellow-700"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-yellow-700"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-yellow-700"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                        Frontend Lead @ Google
                      </p>
                    </div>
                  </div>
                  <div className="p-0 mb-6">
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                      "I found solution to all my design needs from Creative
                      Tim. I use them as a freelancer in my hobby projects for
                      fun! And its really affordable, very humble guys !!!"
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="flex py-10 bg-[#ededed]">
        <div className="container">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="grid grid-flow-col gap-3 items-center">
              <div className="col-span-6">
                <h2 className="text-black text-4xl mb-5">
                  Download the MYDOCTOR App
                </h2>
                <p className="text-black">
                  Access video consultation with India s top doctors on the
                  MYDOCTOR app. Connect with doctors online, available 24/7,
                  from the comfort of your home.
                </p>
                <div className="items-center justify-start space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse mt-10">
                  <a
                    href="#"
                    className="w-full sm:w-auto border bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-grey rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      className="me-3 w-7 h-7"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="apple"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                      ></path>
                    </svg>
                    <div className="text-left rtl:text-right">
                      <div className="mb-1 text-xs">Download on the</div>
                      <div className="-mt-1 font-sans text-sm font-semibold">
                        Mac App Store
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="w-full border sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-grey rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      className="me-3 w-7 h-7"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google-play"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                      ></path>
                    </svg>
                    <div className="text-left rtl:text-right">
                      <div className="mb-1 text-xs">Get in on</div>
                      <div className="-mt-1 font-sans text-sm font-semibold">
                        Google Play
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-span-6">
                <img src={mydoctorImage} alt="Download the MYDOCTOR App" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
