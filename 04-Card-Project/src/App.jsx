
import Card from "./component/Card";

const App = () => {

const jobs = [
  {
    brandLogo: "https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571048.jpg",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    name: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$48/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://icon2.cleanpng.com/lnd/20240424/gbw/transparent-meta-logo-logo-design-blue-logo-interlocking-ovals-logo-with-overlapping-ovals-letter-o66298832c312e9.71031057.webp",
    name: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$45/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://pbs.twimg.com/profile_images/1892248257516224513/SzZdRSkx_400x400.png",
    name: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$52/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    name: "Netflix",
    datePosted: "6 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://image.similarpng.com/file/similarpng/very-thumbnail/2020/07/Microsoft-icon-logo-on-transparent-background-PNG.png",
    name: "Microsoft",
    datePosted: "10 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$44/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://yt3.googleusercontent.com/btm1_PK-7VRUr9GY2D0UV_2XfbUZPBjghyptjSO1crsfN86HyTYDWPmUbq7JxC3H0Lxe_s067nA=s900-c-k-c0x00ffffff-no-rj",
    name: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://media.licdn.com/dms/image/v2/D560BAQHilaKdJueUVg/company-logo_200_200/B56ZodIp56HUAM-/0/1761425400480?e=2147483647&v=beta&t=-tNun5V2BRDck_2umtf0ZcPnEoaTicnbr3RnWud4Eag",
    name: "Adobe",
    datePosted: "3 weeks ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
    name: "Salesforce",
    datePosted: "8 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$46/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://yt3.googleusercontent.com/wH4UKFDaD7ibQoRkZR_Ck2JW4WZ264pq4r9yke3YrxByS1V5EYZAJu3CIBbsJ6C8Pwmrw4Xv=s900-c-k-c0x00ffffff-no-rj",
    name: "Oracle",
    datePosted: "10 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$47/hour",
    location: "Bangalore, India"
  }
];


  return (
    <div className="Parent">
        
  {jobs.map(function(a,b){

      return   <div key={b}>
        
        <Card companyname={a.name}  post={a.post} tag1={a.tag1} tag2={a.tag2} pay={a.pay}  brandLogo={a.brandLogo}  location={a.location}  datePosted={a.datePosted} />;</div>
    })}

  

    </div>
  )
}

export default App;
