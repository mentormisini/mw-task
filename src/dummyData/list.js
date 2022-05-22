export const imgicon ={
    img1: {url: process.env.PUBLIC_URL +'icons/icon1.png'},
    img2: {url: process.env.PUBLIC_URL +'icons/icon2.png'},
    img3: {url: process.env.PUBLIC_URL +'icons/icon3.png'},
    img4: {url: process.env.PUBLIC_URL +'icons/icon4.png'},
    img5: {url: process.env.PUBLIC_URL +'icons/icon5.png'},
    img6: {url: process.env.PUBLIC_URL +'icons/icon6.png'}
}
const Details=[
    {
        background:"card1",
        iconimage:imgicon.img1.url,
        title:"Web Design",
        description:"Here has to be short description of this course.",
        btnstyle: "btn bcard1"
    },
    {
        background:"card2",
        iconimage:imgicon.img2.url,
        title:"Photography and Video",
        description:"Here has to be short description, some benefits.",
        btnstyle: "btn bcard2"
    },
    {
        background:"card3",
        iconimage:imgicon.img3.url,
        title:"Management",
        description:"Some description about management and why it's important.",
        btnstyle: "btn bcard3"
    },
    {
        background:"card4",
        iconimage:imgicon.img4.url,
        title:"Business Analytic",
        description:"Here has to be short description of this course.",
        btnstyle: "btn bcard4"
    },
    {
        background:"card3",
        iconimage:imgicon.img5.url,
        title:"Video Creating",
        description:"Here has to be short description, some benefits",
        btnstyle: "btn bcard5"

    },
    {
        background:"card1",
        iconimage:imgicon.img6.url,
        title:"Filming and Operating",
        description:"Here has to be short description of this course.",
        btnstyle: "btn bcard6"
    },
]

export default Details;
