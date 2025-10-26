const rawCampuses = [
  {
    image: "/institutions/Ruihss.jpeg",
    location: "YES-RUIHSS Parade, Poonch - Jammu & Kashimir",
    url: "https://www.youtube.com/watch?v=BvDkJ22pt7I",
  },
  {
    image: "/institutions/RUIHSS_ALLAPIR.jpg",
    location: "YES RUIHSS ALLAPIR",
    url: "",
  },
  {
    image: "/institutions/RUIHSS STAR CAMPUS.jpg",
    location: "RUIHSS STAR CAMPUS ",
    url: "",
  },
  {
    image: "/institutions/a.jpeg",
    location: "RUIHSS CRESCENT CAMPUS",
    url: "",
  },
  {
    image: "/institutions/b.jpg",
    location: "YASEEN ENGLISH SCHOOL TERWAN",
    url: "",
  },
  {
    image: "/institutions/c.jpg",
    location: "YASEEN ENGLISH SCHOOL MALDIYALAN",
    url: "",
  },
  {
    image: "/institutions/d.jpg",
    location: "DS Educational Institute ",
    url: "",
  },
  {
    image: "/institutions/e.jpg",
    location: "New Yaseen English School ",
    url: "",
  },
  {
    image: "/institutions/F.JPG",
    location: "YASEEN ENGLISH SCHOOL, ",
    url: "",
  },
  {
    image: "/campus10.jpg",
    location: "YES Garden Poonch - Jammu & Kashmir",
    url: "",
  },
  {
    image: "/campus11.jpg",
    location: "YES Harni - Jammu & Kashmir",
  },
  {
    image: "/campus12.jpg",
    location: "YES Serikhawaja - Jammu & Kashmir",
  },
  {
    image: "/institutions/narbalBudgamJ&K.jpg",
    location: "YES Narbal, Budgam - Jammu & kashmir",
  },
  {
    image: "/campus14.jpg",
    location: "YES Traranwali, Poonch - Jammu & Kashmir",
  },
  {
    image: "/campus15.jpg",
    location: "YES Maloora, Srinagar - Jammu & Kashmir",
  },
  {
    image: "/campus16.jpg",
    location: "EC YES Star Poonch - Jammu & Kashmir",
  },
  {
    image: "/campus17.jpg",
    location: "YES CIS Dhundak - Jammu & Kashmir",
  },
  {
    image: "/campus18.jpg",
    location: "YES Chaktroo, Poonch - Jammu & Kashmir",
  },
  //////////////////////////
  // {
  //   image: "/institutions/RUIHSS PARADE CAMPUS",
  //   location: "RAZA UL ULOOM ISLAMIA HSS - POONCH",
  //   url: "",
  // },
  // {
  //   image: "/institutions/PHOTO-2024-09-19-11-42-40.jpg",
  //   location: "YASEEN ENGLISH SCHOOL CHANDAK - CHANDAK",
  //   url: "",
  // },
  // {
  //   image: "/institutions/IMG_0756.jpg",
  //   location: "JAMEEL PABLIC ACADEMY - DARADULLIAN",
  //   url: "",
  // },
  // {
  //   image: "/institutions/Mandi.jpg",
  //   location: "National Public school Rajpura, - Mandi",
  //   url: "",
  // },
  // {
  //   image: "/institutions/DSC_1315.JPG",
  //   location: "YASEEN ISLAMIA ENGLISH MEDIUM SCHOOL - SAWJIAN",
  //   url: "",
  // },
  // {
  //   image: "/institutions/c3540b81-03ed-477c-ac5a-17b18cf809b8.jpeg",
  //   location: "BABA NAZAM UD DIN EDU TRUST, - Chaktroo",
  //   url: "",
  // },
  // {
  //   image: "/institutions/b57b1b3c-0fcf-40db-a2c6-808f2c7ec461.jpeg",
  //   location: "SOLAH IDARATHUL ALOOM SCHOOL - NARBAL",
  //   url: "",
  // },
  // {
  //   image: "/institutions/51c9db78-460a-41c9-b29c-bd132469ef49.jpeg",
  //   location: "DARUL ULOOM JAMIA ZAINUL ISLAM - PAHALGHAM",
  //   url: "",
  // },
  // {
  //   image: "/institutions/PHOTO-2024-10-02-17-48-43.jpg",
  //   location: "YASEEN ENGLISH SCHOOL, - SHAHDARA SHAREIF,",
  //   url: "",
  // },
  // {
  //   image: "/institutions/IMG_2852.JPG",
  //   location: "New Taj Public High School -  Bathindi",
  //   url: "",
  // },
  // {
  //   image: "/institutions/df391255-f00d-41aa-a953-1aeda83f828c.jpeg",
  //   location: "YASEEN COLLEGE OF INTEGRATED STUDIES - SUJUMA",
  //   url: "",
  // },
  // {
  //   image: "/institutions/61a9991f-0c6f-4f2e-b370-be50207a08c3.jpeg",
  //   location: "YESSARWAR SHIKSHAN SANSTHAN SR.SEC. SCHOOL SERWA - Serwa",
  //   url: "",
  // },
  // {
  //   image: "",
  //   location: "YES DESERT BLOOM SCHOOL PHALODI - PHALOODL",
  //   url: "",
  // },
  // {
  //   image: "/institutions/ea42caab-c869-4fe9-a78c-e3fbb7dd8fdc.jpeg",
  //   location: "YES PUBLIC ENGLISH MEDIUM SCHOOL - BALOTRA",
  //   url: "",
  // },
  // { image: "", location: "YES EDU HOME BOYS HOSTEL - SERWA", url: "" },
  // {
  //   image: "/institutions/PHOTO-2024-10-17-17-54-35.jpg",
  //   location: "YES ENGLISH SCHOOL SUJON KA NIVAN - Suja Sharif",
  //   url: "",
  // },
  // {
  //   image: "/institutions/f290de28-ef46-400d-bc6c-a55675703530.jpeg",
  //   location: "YES FAIZ-E-SIDDIQUIA SR.SEC SCHOOL - SUJA SHERIEF",
  //   url: "",
  // },
  // {
  //   image: "/institutions/YESUQ DAWA MONGAM KERALA",
  //   location: "YESUQ dawa - MONGAM",
  //   url: "",
  // },
  // {
  //   image: "/institutions/YESUQ HSS MONGAM.png",
  //   location: "YESUQ HS SCHOOL - MONGAM",
  //   url: "",
  // },
  // {
  //   image: "/institutions/YES UDUPI KARNATAKA",
  //   location: "YES SIR HIND ENGLISH MEDIUM SCHOOL - UDUPI",
  //   url: "",
  // },
  // {
  //   image: "/institutions/YES SOOFI SCHOOL  LEXMESHURE KARNATAKA.jpg",
  //   location: "YES Soofi English school - Laxmeshwar",
  //   url: "",
  // },
  // {
  //   image: "/institutions/21bfa388-0a6f-4eb5-b8d3-81c4b224fffb.jpeg",
  //   location: "MALEBENNURE - MALEBENNUR",
  //   url: "",
  // },
  // {
  //   image: "/institutions/Anantapur, Andhra.jpg",
  //   location: "Yaseen EM High school, - Anantapur",
  //   url: "",
  // },
  // {
  //   image: "/institutions/a91d2ae2-ebf2-471e-8b28-ef6c1db15445.jpeg",
  //   location: "YASEEN COLLEGE OF INTEGRATED STUDIES - TADIPATR",
  //   url: "",
  // },
  // {
  //   image: "/institutions/YES BIFI BIHAR.jpg",
  //   location: "YES HASAN FATIMA ENGLISH SCHOOL - BISFI",
  //   url: "",
  // },
  // {
  //   image: "/institutions/IMG20251015104530.jpg",
  //   location: "YES INDIA PUBLIC SCHOOL - Mathabhanga",
  //   url: "",
  // },
  // {
  //   image: "/institutions/HD",
  //   location: "YES PA INAMDAR ENGLISH MEDIUM SCHOOL - Ahmad Nagar",
  //   url: "",
  // },
  // {
  //   image: "/institutions/YES INDIA PUBLIC SCHOOL CHALISGAON MAHARASHTRA.jpg",
  //   location: "YES INDIA PUBLIC SCHOOL - chalisgaon",
  //   url: "",
  // },
  // {
  //   image: "/institutions/YES RAZA NADED Maharashtra",
  //   location: "Raza English medium school - Khairgaon,",
  //   url: "",
  // },
  // {
  //   image: "/institutions/20241011_124720.jpg",
  //   location: "Yaseen English school Serikhawaja -  Serikhawaja",
  //   url: "",
  // },
  // {
  //   image: "/institutions/IMG_0540.jpg",
  //   location: "YAseen English school Surankote - surankote",
  //   url: "",
  // },
  // {
  //   image: "/institutions/assembly ",
  //   location: "Yaseen English School  Dhundak -  Dhundak",
  //   url: "",
  // },
  // {
  //   image: "/institutions/IMG_1464.jpg",
  //   location: "YES MODEL INSTITUTE OF EDUCATION -  Drogian",
  //   url: "",
  // },
  // {
  //   image: "/institutions/53eceda7-5600-4b8d-b2f6-03aec240bd7f.jpeg",
  //   location: "YCIS SANGIOTE - SANGIOTE",
  //   url: "",
  // },
];

export const campuses = rawCampuses.map((campus, index) => ({
  id: index + 1, // auto increment IDs starting from 1
  ...campus, // keep all other properties
}));

//  {
//     title: "RAZA UL ULOOM ISLAMIA HSS",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },
//   {
//     title: "YES RUIHSS ALLAPIR",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },
//   {
//     title: "RUIHSS STAR CAMPUS ",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },

//       {
//     title: "RUIHSS CRESCENT CAMPUS",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },

//          {
//     title: "YASEEN ENGLISH SCHOOL TERWAN",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },

//              {
//     title: "YASEEN ENGLISH SCHOOL MALDIYALAN",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },

//              {
//     title: "YASEEN ENGLISH SCHOOL CHANDAK",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },

//               {
//     title: "JAMEEL PABLIC ACADEMY",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },
//                 {
//     title: "National Public school Rajpura",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },
//                 {
//     title: "YASEEN ENGLISH SCHOOL",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },

//                 {
//     title: "YASEEN ISLAMIA ENGLISH MEDIUM SCHOOL",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },

//  	                {
//     title: "BABA NAZAM UD DIN EDU TRUST",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },

//  	                {
//     title: "Yaseen English School ",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },

//  	                {
//     title: "SOLAH IDARATHUL ALOOM SCHOOL",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },
//  	                {
//     title: "DARUL ULOOM JAMIA ZAINUL ISLAM",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },

//    	 	                {
//     title: "DS Educational Institute",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },

//    	 	                {
//     title: "New Yaseen English School",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },
//    	 	                {
//     title: "YASEEN ENGLISH SCHOOL",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },
//      	 	                {
//     title: "New Taj Public High School",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },
// 	     	 	                {
//     title: "YASEEN COLLEGE OF INTEGRATED STUDIES",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },

//     	     	 	                {
//     title: "Yaseen English School",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },

//         	     	 	                {
//     title: "Yaseen English School",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },
//             	     	 	                {
//     title: "YESSARWAR SHIKSHAN SANSTHAN SR.SEC",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },

//               	     	 	                {
//     title: "SCHOOL SERWA",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },
//                   	     	 	                {
//     title: "YES DESERT BLOOM SCHOOL PHALODI",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },
//                    	     	 	                {
//     title: "YES PUBLIC ENGLISH MEDIUM SCHOOL",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },
//                        	     	 	                {
//     title: "YES EDU HOME BOYS HOSTEL",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },

//                            	     	 	                {
//     title: "YES EDU HOME BOYS HOSTEL",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },
//                                	     	 	                {
//     title: "YES ENGLISH SCHOOL SUJON KA NIVAN",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },
//                                 	     	 	                {
//     title: "YES FAIZ-E-SIDDIQUIA SR.SEC SCHOOL",
//     image: "/institutions/Ruihss_campus.jpeg",
//   },
