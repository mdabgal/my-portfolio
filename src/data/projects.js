export const projects = [

{
  id: "ai-food-restaurant",
  title: "AI Food Restaurant",
  desc: "A full-stack AI-powered restaurant platform with secure authentication, admin dashboard, and Gemini AI integration.",
  img: "/images/project10.jpg",
  live: "https://ai-food-restaurant-frontend.vercel.app",
  github: "https://github.com/mdabgal/ai-food-restaurant-frontend",
  server: "https://github.com/mdabgal/ai-food-restaurant-backend",
  tech: [
    "Next.js",
    "React.js",
    "Tailwind CSS",
    "TanStack Query",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Google OAuth",
    "Gemini AI"
  ],
  details:
    "A production-ready AI-powered restaurant web application where users can explore food items, search, filter, sort, and view detailed information. The platform features secure JWT authentication with HTTP-only cookies, Google login, role-based access control for users and admins, an admin dashboard for managing food items and analytics, and AI-powered food description and recommendation using the Gemini AI API. Built with Next.js, Express.js, MongoDB, and a responsive modern UI.",


    challenges: [
  "Implemented secure JWT authentication using HTTP-only cookies.",
  "Integrated Google OAuth authentication with protected routes.",
  "Connected Gemini AI API for AI-powered food recommendations and descriptions.",
  "Designed role-based dashboards for Admin and Users.",
  "Optimized MongoDB queries for searching, filtering, and pagination."
],

futurePlans: [
  "Integrate online payment gateway (SSLCommerz/Stripe).",
  "Add real-time order tracking and delivery status.",
  "Implement multilingual support.",
  "Build Progressive Web App (PWA) support.",
  "Add AI-powered personalized food recommendations based on user preferences."
]
},

{
  id: "nexthire",
  title: "NextHire",
  desc: "A full-stack AI-ready job portal with role-based authentication, job management, applications, and a modern responsive UI.",
  img: "/images/project12.jpg",
  live: "https://nexthire-client.vercel.app",
   github: "https://github.com/mdabgal/nexthire-client",
  server: "https://github.com/mdabgal/nexthire-server",
  tech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "Express.js",
    "Better Auth",
    "JWT",
    "React Hook Form",
    "Shadcn/UI",
    "Lucide React"
  ],
  details:
    "NextHire is a modern full-stack job portal that connects job seekers with employers through a clean and responsive platform. The application features secure authentication with Better Auth and JWT, role-based access control for Job Seekers, Employers, and Admins, and a professional dashboard experience. Employers can post, update, and manage job listings, while job seekers can search, filter, view detailed job information, and apply for opportunities. Additional features include contact form integration with MongoDB, application management, responsive design, dark/light mode, reusable components, protected routes, pagination, search and filtering, Google authentication, demo login support, and a scalable architecture built with Next.js, TypeScript, Express.js, and MongoDB.",

    challenges: [
  "Implemented secure role-based authentication using Better Auth and JWT.",
  "Built separate dashboards for Job Seekers, Employers, and Admins.",
  "Developed job application management with protected routes.",
  "Implemented advanced search, filtering, and pagination.",
  "Maintained reusable components while supporting dark and light themes."
],

futurePlans: [
  "Add AI-powered resume analysis and job recommendations.",
  "Integrate real-time messaging between employers and job seekers.",
  "Implement company verification system.",
  "Add interview scheduling functionality.",
  "Integrate email and push notifications."
]
},



 {
  id: "pet-adoption",
  title: "Pet Adoption Platform",
  desc: "A full-stack pet adoption platform with authentication and pet management.",
  img: "/images/project7.jpg",
  live: "https://b13-as9-pet-adoption-client.vercel.app",
  github: "https://github.com/mdabgal/b13-as9-adoption-client",
  server: "https://github.com/mdabgal/b13-as9-adoption-server",
  tech: [
   "Next.js",
    "Tailwind CSS",
    
    "Node.js",
    "Express.js",
    "MongoDB"
  ],
  details:
    "A full-stack pet adoption platform where users can browse pets, submit adoption requests, manage pet listings, and interact with a secure backend API. Built with React, Firebase Authentication, Express.js, and MongoDB.",


    challenges: [
  "Implemented secure better auth authentication.",
  "Developed complete CRUD operations for pet management.",
  "Managed adoption request workflow efficiently.",
  "Integrated Express.js backend with MongoDB database.",
  "Designed responsive layouts for all devices."
],

futurePlans: [
  "Integrate online donation system.",
  "Add pet vaccination and medical history tracking.",
  "Implement real-time chat between adopters and pet owners.",
  "Send email notifications for adoption status updates.",
  "Add location-based pet search using Google Maps."
]
},


{
  id: "fable-ebook",
  title: "Fable Ebook Platform",
  desc: "A full-stack ebook platform for browsing and managing digital books.",
  img: "/images/project8.jpg",
  live: "https://fable-ebook-client.vercel.app/",
  github: "https://github.com/mdabgal/fable-ebook-client",
  tech: [
    "Next.js",
    "Tailwind CSS",
    "Express.js",
    "MongoDB"
  ],
  details:
    "Fable Ebook is a full-stack ebook platform where users can browse books, view book details, and manage ebook data through a REST API. The frontend is built with Next.js and Tailwind CSS, while the backend uses Express.js and MongoDB.",

    challenges: [
  "Designed a clean and responsive ebook browsing interface.",
  "Integrated REST API with Express.js and MongoDB.",
  "Implemented dynamic routing for book details.",
  "Optimized application performance for faster page loading.",
  "Maintained reusable UI components across the application."
],

futurePlans: [
  "Add online ebook reading mode.",
  "Implement bookmark and reading progress tracking.",
  "Introduce premium subscription plans.",
  "Integrate user reviews and ratings.",
  "Add AI-powered book recommendations."
]
},


  {
    id: "auth-app",
    title: "Authentication App",
    desc: "Login & signup system with secure authentication.",
    img: "/images/project2.jpg",
    live: "https://as-b13-online-learning.vercel.app",
    github: "https://github.com/mdabgal/as-b13-online-learning",
    tech: ["Next.js", "MongoDB"],
    details:
      "This project includes a full authentication system with login, signup, JWT-based security, and protected routes. It is connected with MongoDB database.",

      challenges: [
  "Implemented secure user authentication with JWT.",
  "Protected private routes from unauthorized access.",
  "Managed user sessions and authentication state efficiently.",
  "Connected the application with MongoDB for storing user data.",
  "Handled form validation and authentication errors gracefully."
],

futurePlans: [
  "Add Google and GitHub OAuth login.",
  "Implement forgot password and email verification.",
  "Introduce role-based authentication.",
  "Add two-factor authentication (2FA).",
  "Improve security with refresh tokens."
]
  },


  {
  id: "electrohub",
  title: "ElectroHub",
  desc: "A modern responsive electronics e-commerce frontend built with React, Vite, and Tailwind CSS.",
  img: "/images/project11.jpg",
  live: "https://electrohub-delta.vercel.app", 
  github: "https://github.com/mdabgal/electrohub",
  tech: [
    "React.js",
    "Vite",
    "JavaScript",
    "Tailwind CSS",
    "React Router",
    "Framer Motion",
    "React Icons"
  ],
  details:
    "ElectroHub is a modern and fully responsive electronics e-commerce frontend that provides a clean and engaging shopping experience. The application includes a professional homepage with a hero banner, featured categories, flash sales, new arrivals, best sellers, customer testimonials, FAQ, newsletter subscription, and a fully responsive contact page with an embedded Google Map. Users can browse products, search and filter items by category, and view detailed product information through dynamic routing. The project also features dark/light mode, reusable React components, smooth animations with Framer Motion, a custom 404 Not Found page, a global loading screen, and a mobile-first responsive design built with React, Vite, Tailwind CSS, and React Router.",


    challenges: [
  "Designed a fully responsive e-commerce interface for all devices.",
  "Built reusable React components to improve maintainability.",
  "Implemented dynamic product search and category filtering.",
  "Integrated smooth animations using Framer Motion.",
  "Maintained clean routing and optimized application performance."
],

futurePlans: [
  "Integrate shopping cart and checkout functionality.",
  "Connect with a backend API and database.",
  "Add user authentication and order history.",
  "Implement online payment gateway integration.",
  "Develop an admin dashboard for product management."
]

},

{
  id: "react-product-app",
  title: "React Product App",
  desc: "A responsive product management application with a clean and modern user interface.",
  img: "/images/project9.jpg",
  live: "https://react-product-app-kappa.vercel.app/",
  github: "https://github.com/mdabgal/react-product-app",
  tech: [
    "React",
    "JavaScript",
    "Tailwind CSS"
  ],
  details:
    "React Product App is a responsive web application built with React. It allows users to browse and manage products through a clean, user-friendly interface. The project focuses on reusable components, responsive design, and smooth user experience.",

    challenges: [
  "Designed reusable product card components.",
  "Implemented responsive layouts for different screen sizes.",
  "Managed component state efficiently using React.",
  "Created a clean and user-friendly product interface.",
  "Optimized rendering for better user experience."
],

futurePlans: [
  "Add product search and category filtering.",
  "Integrate backend API with MongoDB.",
  "Implement user authentication.",
  "Add shopping cart functionality.",
  "Include product reviews and ratings."
]
},



  {
    id: "dashboard-ui",
    title: "Dashboard UI",
    desc: "Responsive admin dashboard with clean UI design.",
    img: "/images/project3.jpg",
    live: "https://deluxe-nasturtium-863882.netlify.app",
    github: "https://github.com/mdabgal/A6-Digitool-Project",
    tech: ["React", "Tailwind CSS"],
    details:
      "This is a responsive admin dashboard UI built with React and Tailwind CSS. It includes charts layout, sidebar navigation, and modern UI components.",


      challenges: [
  "Designed a responsive admin dashboard layout.",
  "Created reusable sidebar and navigation components.",
  "Maintained a clean and consistent UI using Tailwind CSS.",
  "Organized dashboard sections for better usability.",
  "Ensured responsiveness across desktop, tablet, and mobile devices."
],

futurePlans: [
  "Integrate real-time analytics charts.",
  "Connect dashboard with backend APIs.",
  "Implement authentication and role management.",
  "Add dark and light mode support.",
  "Include notification and activity tracking features."
]
  },
  {
    id: "clean-design",
    title: "Friends to keep close in your life",
    desc: "Responsive  with clean design.",
    img: "/images/project4.jpg",
    live: "https://friend-tracker-next-plum.vercel.app",
    github: "https://github.com/mdabgal/friend-tracker-next",
    tech: ["React", "Tailwind CSS"],
    details:
      "This is a responsive admin dashboard UI built with React and Tailwind CSS. It includes charts layout, sidebar navigation, and modern UI components.",
challenges: [
  "Implemented dynamic routing for individual friend profiles.",
  "Designed a clean and responsive user interface.",
  "Managed application state efficiently using React.",
  "Displayed user information dynamically from API/data source.",
  "Maintained reusable components for better scalability."
],

futurePlans: [
  "Add user authentication and personal friend lists.",
  "Implement friend request and messaging features.",
  "Allow users to upload profile photos.",
  "Add search and advanced filtering options.",
  "Integrate a backend database for permanent data storage."
]

  },
  {
    id: "github-Tracker",
    title: "gitHub issues Tracker",
    desc: "login with  issues tracker",
    img: "/images/project5.jpg",
    live: "https://mdabgal.github.io/B13-A5-Github-Issue-Trracker-My-Assaiment/",
    github: " https://github.com/mdabgal/B13-A5-Github-Issue-Trracker-My-Assaiment",
    tech: ["javaScript", "api"],
    details:
      "This is a responsive with javscript and api.It includes charts layout, sidebar navigation,login pages etc",

      challenges: [
  "Integrated GitHub API to fetch repository issues.",
  "Handled asynchronous API requests and loading states.",
  "Implemented issue filtering and search functionality.",
  "Managed API errors gracefully for better user experience.",
  "Built a responsive interface using JavaScript and CSS."
],

futurePlans: [
  "Add GitHub OAuth login.",
  "Support multiple repositories.",
  "Implement issue creation and editing.",
  "Add pagination for large repositories.",
  "Display issue statistics with charts."
]
  },
  {
    id: "layouts-frameworks",
    title: "responsive design,",
    desc: "responsive design, layouts& frameworks",
    img: "/images/project6.jpg",
    live: "https://mdabgal.github.io/B13-A02-TechWave/",
    github: "https://github.com/mdabgal/B13-A02-TechWave",
    tech: ["html", "css"],
    details:
      "This is a responsive with html and css includes charts layout, navbar etc",
      challenges: [
  "Built a fully responsive layout using HTML and CSS.",
  "Designed a clean and modern landing page.",
  "Created reusable sections with proper semantic HTML.",
  "Ensured compatibility across different screen sizes.",
  "Maintained consistent spacing and typography."
],

futurePlans: [
  "Convert the project into a React application.",
  "Add animations for better user experience.",
  "Implement dark and light mode.",
  "Optimize performance and accessibility.",
  "Connect the frontend with a backend service."
]
  }
];

