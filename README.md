step-1: open find-parking folder in vs-code
step-2: open one new terminal
step-3: in new terminal write following
        cd client
        npm run dev
        open given link in browser new tab
step-4: open another new terminal
step-5: in new terminal write following
        cd server
        npm run server
        open given link in browser new tab


# server/.env

MONGODB_URI=mongodb+srv://<your-username>:<your-password>@cluster0.2cugobf.mongodb.net

CLERK_PUBLISHABLE_KEY=<use-your-key>
CLERK_SECRET_KEY=<use-your-webhook-key>
CLERK_WEBHOOK_SECRET=<use-your>

CLOUDINARY_CLOUD_NAME=<use-your>
CLOUDINARY_API_KEY=<use-your>
CLOUDINARY_API_SECRET=<use-your>


# client/.env
VITE_CLERK_PUBLISHABLE_KEY=<use-your-key>