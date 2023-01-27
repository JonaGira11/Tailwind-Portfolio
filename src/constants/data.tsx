

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




type paraType = {
    id:number,
    para:string,
}

export const aboutPara:paraType[] = [
    {
        id: 1,
        para: "Hi, I'm Jonathan. A self taught Full Stack Developer. I have a passion for creating responsive websites and webapps. My programming language is Javascript. A powerfull tool at my disposal which allows my creativity to come alive. Have a look in the Projects section where I get to show off my skills.",
        
    },
    {
        id: 2,
        para: "I am currently exploring react libraries and building new things with them. I'll be continously updating my projects section as I create cool projects. When I'm not coding I am going to the gym, watching anime, movies and consuming as much football as possible!",
    },
    {
        id:3,
        para: " I am open to Job opportunities where I can grow, contribute and continue to learn."
    }

]