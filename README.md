# TechTots International School Website

A modern, responsive website for TechTots International School – Ghana's premier early childhood institution blending Cambridge Curriculum and Reggio Emilia principles with AI-powered learning.

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/techtots-website.git
   cd techtots-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   # Sanity.io Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-03-19

   # MongoDB Configuration
   MONGODB_URI=your-mongodb-uri

   # Google Analytics
   NEXT_PUBLIC_GA_ID=your-ga-id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Technology Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **CMS**: Sanity.io
- **Hosting**: Vercel
- **Analytics**: Google Analytics 4

## 📂 Project Structure

```
techtots-website/
├── public/           # Static assets
│   ├── app/         # Next.js app directory
│   ├── components/  # Reusable components
│   ├── styles/      # Global styles
│   └── utils/       # Helper functions
├── sanity/          # Sanity.io configuration
└── package.json     # Dependencies
```

## 🎨 Design Specifications

- **Typography**:
  - Headings: 'Poppins' (Semi-bold)
  - Body: 'Open Sans' (Regular)
- **Colors**:
  - Primary: Navy Blue (`#000080`)
  - Secondary: Sky Blue (`#87CEEB`)
  - Accent: Beige (`#F5F5DC`)
  - Background: White (`#FFFFFF`)
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For project inquiries:
- Email: dev@techtots.edu.gh
- Website: [TechTots Website](https://techtots.edu.gh)
