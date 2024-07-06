# Himaloy Trip [Live Preview](https://himaloytrip.web.app/)

[Server Site Repo](https://github.com/SarwarAhmed/himaloy-trip-server)

## Setup client site
### Step 1: Clone the repository
```
git clone https://github.com/SarwarAhmed/himaloy-trip-client.git
```
or
```
gh repo clone SarwarAhmed/himaloy-trip-client
```
### Step 2
```
cd himaloy-trip-client
```

### Step 3
```
touch .env
```

### Step 4: Setup Firebase configuration `.env`
```
VITE_APIKEY=apiKey
VITE_AUTHDOMAIN=authDomain
VITE_PROJECTID=projectId
VITE_STORAGEBUCKET=storageBucket
VITE_MESSAGINGSENDERID=messagingSenderId
VITE_APPID=appId
```
### Step 5
```
npm install
npm run dev
```

## Setup Server site
```
git clone https://github.com/SarwarAhmed/himaloy-trip-server.git
```
or
```
gh repo clone SarwarAhmed/himaloy-trip-server
```

```
cd himaloy-trip-server
```
Setup .env
```
DB_USER=MongoDB_username
DB_PASS=MongoDB_password
```
```
npm install
npm run dev
```


## Website Features

- User-friendly interface: Our website provides a clean and intuitive interface.

- Light/Dark theme.

- Responsive design: The website is designed to be responsive, ensuring that it looks great and functions well on different devices and screen sizes.

- Interactive elements: We have incorporated interactive elements such as forms, buttons, and sliders to enhance user engagement and interactivity.

- Unique Design: Our website stands out with its unique and visually appealing design, setting it apart from competitors.


- Login / Register: We have implemented a secure login and registration system, allowing users to create accounts and access personalized features.
  - Email and Password: Users can securely log in to their accounts using their email and password credentials.
  - Google Login: Users can also log in to their accounts using their Google credentials, providing a convenient and seamless login experience.

# Features
- Signed In user can show a Single spot
- A registered User can Add a new spot
- Authorized user can edit/update and delete spot

This website mainly focused on South Asian Countrires.


## npm package name which I have used:
React, Vite, React-simple-tyepwriter, Lottie React, Swiper, Sweetalert and more
- React: React for building the user interface
- Vite: Vite for the build tool and development server
- React-simple-typewriter:A simple react component for adding a nice typewriter effect to your project.
- Swiper: Swiper is a powerful and flexible JavaScript library for creating responsive and touch-enabled sliders and carousels.
Sweetalert:
- Sweetalert: Sweetalert is a JavaScript library for creating beautiful and customizable alert dialogs.
- And Tailwind CSS, DaisyUI...

### Screenshoots
# Home - Light
![Book Hive](./public/himaloy-trip-home-light.png)
# Home - Dark
![Book Hive](./public/himaloy-trip-home-dark.png)
# My List - Small Device
![Book Hive](./public/My-list-mobile.png)
