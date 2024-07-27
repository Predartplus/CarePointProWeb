import React, { useCallback, useState } from 'react'
import { ReactTags } from 'react-tag-autocomplete'
import LogoIcon from '../images/carepointpro/main__logo.png';
import BrandOne from '../images/brand/brand-01.svg';

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
]

const suggestions = countries.map((name, index) => ({ value: index, label: name }))

export { countries, suggestions }

const LandingPage = () => {
  const [selected, setSelected] = useState([])
  const onAdd = useCallback(
    (newTag) => {
      setSelected([...selected, newTag])
    },
    [selected]
  )

  const onDelete = useCallback(
    (tagIndex) => {
      setSelected(selected.filter((_, i) => i !== tagIndex))
    },
    [selected]
  )
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
              <h1 className="text-white text-4xl">Book an in-Network near you</h1>
            </div>
          </div>
        </div>
    </div>
    <div className="flex py-10">
      <div className="container">
        <div className="max-w-screen-xl mx-auto">
          <h2  className="text-[#4785c8] text-center text-2xl">Top-searched specialties</h2>
          <p className="text-center">Get care from doctors across +100 specialties</p>
          <div className="flex justify-between w-full mt-5">
            <div className="flex flex-col justify-center items-center">
              <img className="h-20" src={BrandOne} alt="" />
              <h3 className="mt-2">Primary Care</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="h-20" src={BrandOne} alt="" />
              <h3 className="mt-2">Dentist</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="h-20" src={BrandOne} alt="" />
              <h3 className="mt-2">OB-GYN</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="h-20" src={BrandOne} alt="" />
              <h3 className="mt-2">Dermatologists</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="h-20" src={BrandOne} alt="" />
              <h3 className="mt-2">Psychiatrists</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img className="h-20" src={BrandOne} alt="" />
              <h3 className="mt-2">Eye Doctors</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex py-10 bg-[#deeeff]">
      <div className="container">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-black text-center text-4xl">What is CarePoint Pro ?</h2>
          <div className="flex justify-between w-full mt-5">
            <div className="flex flex-col justify-center items-center px-4 text-center">
              <h3 className="text-black text-xl">Find and compare top local doctors</h3>
              <p>Read verified reviews from patients like you and see real-time availability for in-person and video
visits.</p>
            </div>
            <div className="flex flex-col justify-center items-center px-4 text-center">
              <h3 className="text-black text-xl">Check coverage and estimated costs</h3>
              <p>Enter your insurance to find in-network doctors
              who accept your plan or compare doctors’ out-ofpocket costs.</p>
            </div>
            <div className="flex flex-col justify-center items-center  px-4 text-center">
              <h3 className="text-black text-xl">Get care anytime, anywhere</h3>
              <p>Book appointments online and see the same great doctors from home with a video visit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center h-screen mx-auto bg-[url('(https://picsum.photos/1920/1920/?random')]">
      <div className="container">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-black text-4xl">Patient Resources</h2>
          <p className="mt-3 mb-10">Access your personal health records, view lab results, and communicate with your healthcare providers</p>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Login
          </span>
          </button>
        </div>
      </div>
    </div>
    </>
 );
};

export default LandingPage;