const site_url = import.meta.env.VITE_URL;
const main = `${site_url}/images/original`;
const thumbnail = `${site_url}/images/thumbnail`;

const picsUrl = {
  main: `${main}/pics`,
  thumb: `${thumbnail}/pics`,
};

const logosUrl = {
  main: `${main}/logos`,
  thumb: `${thumbnail}/logos`,
};

const webUrl = {
  main: `${main}/web`,
  thumb: `${thumbnail}/web`,
};

const videosUrl = {
  main: `${site_url}/videos/original`,
  thumb: `${site_url}/videos/thumbnail`,
};

const dimensions = {
  companyImages1: {
    width: 1024,
    height: 576,
  },
  companyImages2: {
    width: 960,
    height: 1280,
  },
  companyImages3: {
    width: 780,
    height: 1040,
  },
  outliers: {
    width: 720,
    height: 1280,
  },
};

export const companyImages1 = [
  {
    id: 35,
    src: `${picsUrl.main}/35.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/35.jpg`,
    alt: "thirtyfive",
    description: "Chriscomik engineers fabricating a stage on SW-10",
    width: dimensions.companyImages1.width,
    height: dimensions.companyImages1.height,
  },
  {
    id: 36,
    src: `${picsUrl.main}/36.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/35.jpg`,
    alt: "thirtysix",
    description: "Chriscomik engineers fixing a crane on SW-10",
    width: dimensions.companyImages1.width,
    height: dimensions.companyImages1.height,
  },
  {
    id: 41,
    src: `${picsUrl.main}/41.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/35.jpg`,
    alt: "fortyone",
    description: "Our engineers fabricating and welding of pipeline on SW-10",
    width: dimensions.companyImages1.width,
    height: dimensions.companyImages1.height,
  },
  {
    id: 42,
    src: `${picsUrl.main}/42.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/35.jpg`,
    alt: "fortytwo",
    description: "Chriscomik engineers fixing a diving LARS on NVKOMODO",
    width: dimensions.companyImages1.width,
    height: dimensions.companyImages1.height,
  },
  {
    id: 43,
    src: `${picsUrl.main}/43.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/35.jpg`,
    alt: "fortythree",
    description: "Our engineers fixing a diving LARS on NVKOMODO",
    width: dimensions.companyImages1.width,
    height: dimensions.companyImages1.height,
  },
  {
    id: 431,
    src: `${picsUrl.main}/43-1.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/35.jpg`,
    alt: "fortythreeone",
    description: "",
    width: dimensions.companyImages1.width,
    height: dimensions.companyImages1.height,
  },
  {
    id: 432,
    src: `${picsUrl.main}/43-2.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/35.jpg`,
    alt: "fortythreetwo",
    description: "",
    width: dimensions.companyImages1.width,
    height: dimensions.companyImages1.height,
  },
  {
    id: 2,
    src: `${picsUrl.main}/2.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/35.jpg`,
    alt: "two",
    description: "A diving equipment for SW-10",
    width: dimensions.companyImages1.width,
    height: dimensions.companyImages1.height,
  },
  {
    id: 24,
    src: `${picsUrl.main}/24.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/35.jpg`,
    alt: "twentyfour",
    description: "Our engineers changing a hall plate",
    width: dimensions.companyImages1.width,
    height: dimensions.companyImages1.height,
  },
  {
    id: 29,
    src: `${picsUrl.main}/29.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/35.jpg`,
    alt: "twentynine",
    description: "Our engineers welding on SW-10",
    width: dimensions.companyImages1.width,
    height: dimensions.companyImages1.height,
  },
  {
    id: 31,
    src: `${picsUrl.main}/31.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/35.jpg`,
    alt: "thirtyone",
    description: "Our engineers welding on SW-10",
    width: dimensions.companyImages1.width,
    height: dimensions.companyImages1.height,
  },
];

export const companyImages2 = [
  {
    id: 3,
    src: `${picsUrl.main}/3.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/3.jpg`,
    alt: "three",
    description:
      "Chriscomik engineers fabricating a blower foundation at workshop for SW-10",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 4,
    src: `${picsUrl.main}/4.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/4.jpg`,
    alt: "four",
    description:
      "Chriscomik engineers fabricating and welding at PSC Tema shipyard",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 5,
    src: `${picsUrl.main}/5.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/5.jpg`,
    alt: "five",
    description: "Our engineers fabricating and welding at Tema Port",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 6,
    src: `${picsUrl.main}/6.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/6.jpg`,
    alt: "six",
    description: "Our engineers fabricating and welding at PSC Tema shipyard",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 7,
    src: `${picsUrl.main}/7.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/7.jpg`,
    alt: "seven",
    description: "Working on propeller shaft at PSC Tema shipyard",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 8,
    src: `${picsUrl.main}/8.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/8.jpg`,
    alt: "eight",
    description: "Heavy duty cutting machine at Chriscomik workshop",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 9,
    src: `${picsUrl.main}/9.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/9.jpg`,
    alt: "nine",
    description: "Fabricating and inserting a new plate at Tema Port",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 10,
    src: `${picsUrl.main}/10.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/10.jpg`,
    alt: "ten",
    description: "Fabricating and welding",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 11,
    src: `${picsUrl.main}/11.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/11.jpg`,
    alt: "eleven",
    description: "A roller machine machine at Chriscomik workshop",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 12,
    src: `${picsUrl.main}/12.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/12.jpg`,
    alt: "twelve",
    description: "Heavy duty cutting machine at Chriscomik workshop",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 14,
    src: `${picsUrl.main}/14.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/14.jpg`,
    alt: "fourteen",
    description: "A fabricated blower machine at workshop",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 13,
    src: `${picsUrl.main}/13.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/13.jpg`,
    alt: "thirteen",
    description: "Welding and fabricating blower foundation at workshop",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 15,
    src: `${picsUrl.main}/15.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/15.jpg`,
    alt: "fifteen",
    description: "Welding and fabricating blower foundation at workshop",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 151,
    src: `${picsUrl.main}/15-1.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/15-1.jpg`,
    alt: "fifteen",
    description: "",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 152,
    src: `${picsUrl.main}/15-2.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/15-2.jpg`,
    alt: "fifteen",
    description: "",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 153,
    src: `${picsUrl.main}/15-3.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/15-3.jpg`,
    alt: "fifteen",
    description: "",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 17,
    src: `${picsUrl.main}/17.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/17.jpg`,
    alt: "seventeen",
    description: "Chriscomik CEO and captain of MV Elena",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 22,
    src: `${picsUrl.main}/22.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/22.jpg`,
    alt: "twentytwo",
    description: "MV Elena after welding and fabrication at Tema Port",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 26,
    src: `${picsUrl.main}/26.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/26.jpg`,
    alt: "twentysix",
    description: "Working on the propeller shaft at PSC Tema Shipyard",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 27,
    src: `${picsUrl.main}/27.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/27.jpg`,
    alt: "twentyseven",
    description: "Sand blasting and painting at PSC Tema Shipyard",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 28,
    src: `${picsUrl.main}/28.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/28.jpg`,
    alt: "twentyeight",
    description: "Welding and fabrication on NVKOMODO",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 30,
    src: `${picsUrl.main}/30.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/30.jpg`,
    alt: "thirty",
    description: "Sand blasting at PSC Tema Shipyard",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 32,
    src: `${picsUrl.main}/32.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/32.jpg`,
    alt: "thirtytwo",
    description: "Some pressure pipes",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 37,
    src: `${picsUrl.main}/37.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/37.jpg`,
    alt: "thirtyseven",
    description: "Our engineers fabricating a staircase SW-10",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 40,
    src: `${picsUrl.main}/40.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/40.jpg`,
    alt: "forty",
    description: "Welding and fabrication at Tema Port",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 39,
    src: `${picsUrl.main}/39.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/39.jpg`,
    alt: "thirtynine",
    description: "Steel plate insertion",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
  {
    id: 33,
    src: `${picsUrl.main}/33.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/33.jpg`,
    alt: "thirtythree",
    description: "Chriscomik engineers welding and fabrication at the workshop",
    width: dimensions.companyImages2.width,
    height: dimensions.companyImages2.height,
  },
];

export const companyImages3 = [
  {
    id: 7,
    src: `${picsUrl.main}/IMG-20230404-WA0007.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/IMG-20230404-WA0007.jpg`,
    alt: "image7",
    description: "",
    width: dimensions.companyImages3.width,
    height: dimensions.companyImages3.height,
  },
  {
    id: 8,
    src: `${picsUrl.main}/IMG-20230404-WA0008.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/IMG-20230404-WA0008.jpg`,
    alt: "image8",
    description: "",
    width: dimensions.companyImages3.width,
    height: dimensions.companyImages3.height,
  },
  {
    id: 10,
    src: `${picsUrl.main}/IMG-20230404-WA0010.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/IMG-20230404-WA0010.jpg`,
    alt: "image10",
    description: "",
    width: dimensions.companyImages3.width,
    height: dimensions.companyImages3.height,
  },
  {
    id: 11,
    src: `${picsUrl.main}/IMG-20230404-WA0011.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/IMG-20230404-WA0011.jpg`,
    alt: "image11",
    description: "",
    width: dimensions.companyImages3.width,
    height: dimensions.companyImages3.height,
  },
  {
    id: 12,
    src: `${picsUrl.main}/IMG-20230404-WA0012.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/IMG-20230404-WA0012.jpg`,
    alt: "image12",
    description: "",
    width: dimensions.companyImages3.width,
    height: dimensions.companyImages3.height,
  },
  {
    id: 13,
    src: `${picsUrl.main}/IMG-20230404-WA0013.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/IMG-20230404-WA0013.jpg`,
    alt: "image13",
    description: "",
    width: dimensions.companyImages3.width,
    height: dimensions.companyImages3.height,
  },
  {
    id: 14,
    src: `${picsUrl.main}/IMG-20230404-WA0014.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/IMG-20230404-WA0014.jpg`,
    alt: "image14",
    description: "",
    width: dimensions.companyImages3.width,
    height: dimensions.companyImages3.height,
  },
  {
    id: 15,
    src: `${picsUrl.main}/IMG-20230404-WA0015.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/IMG-20230404-WA0015.jpg`,
    alt: "image15",
    description: "",
    width: dimensions.companyImages3.width,
    height: dimensions.companyImages3.height,
  },
  {
    id: 16,
    src: `${picsUrl.main}/IMG-20230404-WA0016.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/IMG-20230404-WA0016.jpg`,
    alt: "image16",
    description: "",
    width: dimensions.companyImages3.width,
    height: dimensions.companyImages3.height,
  },
  {
    id: 17,
    src: `${picsUrl.main}/IMG-20230404-WA0017.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/IMG-20230404-WA0017.jpg`,
    alt: "image17",
    description: "",
    width: dimensions.companyImages3.width,
    height: dimensions.companyImages3.height,
  },
  {
    id: 18,
    src: `${picsUrl.main}/IMG-20230404-WA0018.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/IMG-20230404-WA0018.jpg`,
    alt: "image18",
    description: "",
    width: dimensions.companyImages3.width,
    height: dimensions.companyImages3.height,
  },
  {
    id: 19,
    src: `${picsUrl.main}/IMG-20230404-WA0019.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/IMG-20230404-WA0019.jpg`,
    alt: "image19",
    description: "",
    width: dimensions.companyImages3.width,
    height: dimensions.companyImages3.height,
  },
  {
    id: 20,
    src: `${picsUrl.main}/IMG-20230404-WA0020.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/IMG-20230404-WA0020.jpg`,
    alt: "image20",
    description: "",
    width: dimensions.companyImages3.width,
    height: dimensions.companyImages3.height,
  },
  {
    id: 21,
    src: `${picsUrl.main}/IMG-20230404-WA0021.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/IMG-20230404-WA0021.jpg`,
    alt: "image21",
    description: "",
    width: dimensions.companyImages3.width,
    height: dimensions.companyImages3.height,
  },
  {
    id: 22,
    src: `${picsUrl.main}/IMG-20230404-WA0022.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/IMG-20230404-WA0022.jpg`,
    alt: "image22",
    description: "",
    width: dimensions.companyImages3.width,
    height: dimensions.companyImages3.height,
  },
  {
    id: 2,
    src: `${picsUrl.main}/IMG-20230402-WA0002.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/IMG-20230402-WA0002.jpg`,
    alt: "image2",
    description: "",
    width: dimensions.companyImages3.width,
    height: dimensions.companyImages3.height,
  },
];

export const outliers = [
  {
    id: 5,
    src: `${picsUrl.main}/IMG-20230404-WA0005.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/IMG-20230404-WA0005.jpg`,
    alt: "image5",
    description: "",
    width: dimensions.outliers.width,
    height: dimensions.outliers.height,
  },
  {
    id: 6,
    src: `${picsUrl.main}/IMG-20230404-WA0006.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/IMG-20230404-WA0006.jpg`,
    alt: "image6",
    description: "",
    width: dimensions.outliers.width,
    height: dimensions.outliers.height,
  },
  {
    id: 9,
    src: `${picsUrl.main}/IMG-20230404-WA0009.jpg`,
    thumbSrc: `${picsUrl.thumbnail}/IMG-20230404-WA0009.jpg`,
    alt: "image9",
    description: "",
    width: dimensions.outliers.width,
    height: dimensions.outliers.height,
  },
];

export const logoImages = [
  { id: 1, src: `${logosUrl.main}/ubi.png`, alt: "ubi" },
  { id: 2, src: `${logosUrl.main}/bost.jpg`, alt: "bost" },
  { id: 3, src: `${logosUrl.main}/supermaritime.jpg`, alt: "supermaritime" },
  { id: 4, src: `${logosUrl.main}/temaport.jpeg`, alt: "temaport" },
  { id: 5, src: `${logosUrl.main}/tor.png`, alt: "tor" },
  { id: 6, src: `${logosUrl.main}/vra.webp`, alt: "vra" },
];

export const webImages = [
  { id: 1, src: `${webUrl.main}/pipeline ocean.jpg`, alt: "pipeline" },
  { id: 2, src: `${webUrl.main}/man woman on deck.jpg`, alt: "deck" },
  {
    id: 3,
    src: `${webUrl.main}/smiling man heavy machines.jpg`,
    alt: "heavy_machines",
  },
  {
    id: 4,
    src: `${webUrl.main}/two men reflector port.jpg`,
    alt: "reflector_port",
  },
];

export const pageImages = [
  { id: 1, src: `${webUrl.main}/about-us.jpeg`, alt: "about_us" },
  { id: 2, src: `${webUrl.main}/about-us2.png`, alt: "about_us2" },
  { id: 3, src: `${webUrl.main}/contact1.jpeg`, alt: "contact1" },
  { id: 4, src: `${webUrl.main}/contact2.jpeg`, alt: "contact2" },
  { id: 5, src: `${webUrl.main}/contact3.webp`, alt: "contact3" },
  { id: 6, src: `${webUrl.main}/gallery.jpeg`, alt: "gallery" },
  { id: 7, src: `${webUrl.main}/faq.webp`, alt: "faq" },
];

export const videos = [
  {
    id: 1,
    src: `${videosUrl.main}/VID-20230222-WA0011.mp4`,
    alt: "video11",
    description: "",
  },
  {
    id: 2,
    src: `${videosUrl.main}/VID-20230222-WA0012.mp4`,
    alt: "video12",
    description: "",
  },
  {
    id: 3,
    src: `${videosUrl.main}/VID-20230222-WA0013.mp4`,
    alt: "video13",
    description: "",
  },
  {
    id: 4,
    src: `${videosUrl.main}/VID-20230404-WA0023.mp4`,
    alt: "video23",
    description: "",
  },
  {
    id: 5,
    src: `${videosUrl.main}/VID-20230404-WA0024.mp4`,
    alt: "video24",
    description: "",
  },
  {
    id: 6,
    src: `${videosUrl.main}/VID-20230404-WA0025.mp4`,
    alt: "video25",
    description: "",
  },
];

export const companyLogo = `${logosUrl.main}/chriscomik_1.png`;
export const activeLink = "text-sky-400";
export const navigation = [
  { id: 1, name: "About", path: "/about" },
  { id: 2, name: "Contact", path: "/contact" },
  //  { id: 3, name: "Teams", path: "/team" },
  { id: 4, name: "Gallery", path: "/gallery" },
  { id: 5, name: "FAQ", path: "/faqs" },
];

export const renderHeaderTitle = (data) => {
  return data.pathname.split("/").filter((i) => i);
};

export const social = [
  {
    name: "Facebook",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
        <path
          fillRule="evenodd"
          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export const aboutStats = [
  { id: 1, label: "Founded", value: "2008" },
  { id: 2, label: "Employees", value: "10" },
  { id: 3, label: "Clients", value: "10+" },
  { id: 4, label: "Projects", value: "50+" },
];

export const companyStats = [
  {
    id: 1,
    label: "Customer Satisfaction",
    value: "100%",
    css: "flex flex-col",
  },
  {
    id: 2,
    label: "Service Delivery",
    value: "24/7",
    css: "mt-10 flex flex-col sm:mt-0",
  },
  {
    id: 3,
    label: aboutStats[2].label,
    value: aboutStats[2].value,
    css: "mt-10 flex flex-col sm:mt-0",
  },
];

export const offices = [
  {
    id: 1,
    city: "Community 1",
    address: ["Near Padmore School", "Tema, Ghana"],
    map: "https://maps.google.com/maps?q=5.645816706985819,%20-0.0038191720420320935&t=&z=19&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: 2,
    city: "Community 9",
    address: ["Off The General Hospital Road Bypass V1", "Tema, Ghana"],
    map: "https://maps.google.com/maps?q=5.67409467224398,%20-0.023816802686822524&t=&z=17&ie=UTF8&iwloc=&output=embed"
  },
];

export const faqs = [
  {
    question: "What is Chriscomikeng?",
    answer:
      "Chriscomikeng is an engineering company which provides a complete range of services related to mechanical, marine & electrical engineering services. We are committed to delivering high-quality and reliable solutions through a single point of contact, which reduces administrative costs and saves valuable time.",
  },
  //  { question: "What does Chriscomikeng stand for",  answer: "W-I-P", },
  {
    question: "What is Chriscomikeng’s mission / purpose statement?",
    answer:
      "Our aim is to work with our clients to enhance the supply chain strength through cooperation, communication, innovation and teamwork.",
  },
  {
    question: "What is Chriscomikeng's vision as a company?",
    answer:
      "Our vision is to become the most respectful and trustworthy firm in the delivery of professional services including sales and technical support services by adapting appropriate state of art technology.",
  },
  {
    question: "What industries does Chriscomikeng operate in?",
    answer:
      "Chriscomikeng leads in delivering solutions across Shipping, Marine, Oil & Gas.",
  },
  {
    question: "Is Chriscomikeng a Ghanaian Company?",
    answer:
      "Chriscomikeng is a wholly owned Ghanaian company with a footprint across Africa, incorporated in Accra, Ghana and headquartered in Tema.",
  },
  {
    question: "How many countries does Chriscomikeng operate in",
    answer:
      "Due to our best in class service delivery, our services have been engaged across Africa in countries like Nigeria etc.",
  },
  {
    question: "What does Chriscomikeng do?",
    answer:
      "CHRISCOMIK COMPANY LTD specializes in providing Mechanical & Marine Engineering, Welding/Fabrication, Steel Rust Control And Protection, Procurement, Shipping Agency services and supplying Electricals/Instruments, Renting Of Heavy Duty Equipment And Earth Moving Machines.",
  },
  {
    question: "How do I contact Chriscomikeng",
    answer:
      "You can find contact details for Chriscomikeng on our Contacts page.",
  },
];

export const teams = [
  {
    id: 1,
    name: "Lindsay Walton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    id: 2,
    name: "Lindsay Walton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    id: 3,
    name: "Lindsay Walton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    id: 4,
    name: "Lindsay Walton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    id: 5,
    name: "Lindsay Walton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    id: 6,
    name: "Lindsay Walton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

const people = [
  {
    name: "Lindsay Walton",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
  },
  // More people...
];

export const activityItems = [
  {
    id: 1,
    person: people[0],
    project: "Workcation",
    commit: "2d89f0c8",
    environment: "production",
    time: "1h",
  },
];

export const contactPhone = [
  { id: 1, value: "+233 554-158101", link: "tel:+233554158101", css: "" },
  { id: 2, value: "+233 249-688556", link: "tel:+233249688556", css: "py-1" },
  { id: 3, value: "+233 242-934334", link: "tel:+233242934334", css: "py-1" },
];

export const contactEmail = [
  {
    id: 1,
    value: "chriscomiceng@gmail.com",
    link: "mailto:chriscomiceng@gmail.com",
    css: "",
  },
  {
    id: 2,
    value: "michaelchriscomik@gmail.com",
    link: "mailto:michaelchriscomik@gmail.com",
    css: "py-1",
  },
];

export const contactLinkedIn = [{ id: 1, value: "linkedIn", href: "linkedIn" }];

export const subsidiaries = [
  {
    id: 1,
    name: "Sasmarin Company Limited",
    info: [
      "Aluminum and Agon welding",
      "Plates and Stainless materials supplies",
      "Electrical engineering",
    ],
  },
  {
    id: 2,
    name: "Davmas Company Limited",
    info: ["Tank cleaning", "Sandblasting", "Diving support systems"],
  },
];

export const default_image =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply";
