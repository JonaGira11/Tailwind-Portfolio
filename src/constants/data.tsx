import yelpcamp from "../public/project-1-img (2).png"

type Portfoliotype = 
    {
        title: string,
        subheading: string,
        image: string
    }


export const Portfolio: Portfoliotype[] = [
    {
        title: "yelpcamp",
        subheading: "A Full-stack web applicaton made using Node.js for the back-end and MongoDB Atlas as a cloud datbase. Yelpcamp allows users to create, review and delete campgorunds. You have to start by creating an account to utilise.",
        image: "hello"
    },
    {
        title: "Todo App",
        subheading: "It can be difficult to remember everything we need to do. This is where this Todo App comes in handy. A functioning crud application that allows users to stores tasks on MongoDD that are instanly dispalyed on the page with ejs.",
        image: "dashf"
    },
]
