
# NOTE : This app was firstly done with React now i am shifting the app from React to Next js also with new name "Velai" 


# skillLink

skillLink is a community-driven platform designed to empower freelancers by fostering a collaborative environment where they can discuss, share knowledge, offer peer support, and find job opportunities. With dedicated forums, collaboration tools, and job posting features, skillLink provides an all-in-one solution for freelancers looking to grow their network, improve skills, and access valuable resources.

## Features

- **Discussion Forums**: Engage with other freelancers on various topics, share insights, and learn from industry peers.
- **Job Posting and Searching**: Post freelance job opportunities or search for roles that match your skills.
- **Resource Library**: Access curated articles, guides, and tools tailored for freelance professionals.
- **Profile and Portfolio Management**: Showcase your skills and past projects to attract potential clients and collaborators.
- **Notifications and Messaging**: Receive job alerts, stay updated on new posts, and communicate directly with other members.

## Tech Stack

- Frontend: React, Tailwind CSS
- Backend: Node.js, Express
- Database: postgres
- Authentication: OAuth
- Hosting: Vercel 

## Installation


#### Prerequisites

- Node.js and npm installed on your machine
- MongoDB database set up (local or cloud-based, e.g., MongoDB Atlas)

#### Steps

1. **Clone the repository:**

   ```bash 
   git clone https://github.com/sahaniindrajit/skillLink
   cd skillLink
   ```

2. **Install dependencies for frontend and backend:**

   ```bash 
   npm install
   cd ../backend
   npm install
   ```

3. **Configure environment variables**:

   - Create a `.env` file in the `backend` folder and add:
     ```bash 
     PORT=3000
     JWT_PASSWORD=your_password
     UPLOADTHING_TOKEN=Your_uploadthing_api_token
     DATABASE_URL=Your_postgres_db_link
     ```

4. **Run the application**:

   - In the `frontend` folder:

     ```bash  
     npm run dev
     ```

   - In the `backend` folder:

     ```bash 
     npm run dev
     ```

5. **Access the app**:

   - Open your browser and go to `http://localhost:5173`.

## Usage

1. **Sign Up / Log In**: Authenticate via Google or GitHub.
2. **Explore the Community**: Join discussion forums, start or respond to threads, and connect with other freelancers.
3. **Post Jobs**: Create job posts or search for freelance work.
4. **Collaborate**: Use the collaboration tools to work with other members, share files, and discuss project details.
5. **Customize Your Profile**: Add skills and portfolio items to enhance your profile.



## Contribution Guidelines

We welcome contributions to enhance PDF Talk. To contribute, please follow the guidelines below:

1. **Fork the Repository:** Fork the project repository to your own GitHub account.
2. **Create a Branch:** Create a new branch for your feature or bug fix:

```bash
git checkout -b feature/new-feature
```

3. **Make Changes:** Implement your feature or fix the issue.
4. **Test Your Changes:** Ensure that all the changes you made are working as expected and do not break any functionality.
5. **Commit Your Changes:** Commit your changes with a descriptive commit message:

```bash
git commit -m "Added new feature: feature description"
```

6. **Push the Changes:** Push your branch to GitHub:

```bash
git push origin feature/new-feature
```

7. **Create a Pull Request:** Submit a pull request to the main repository, describing the changes you made. The project maintainers will review your pull request and merge it if everything is in order.
