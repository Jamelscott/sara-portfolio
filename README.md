# Sara's Portfolio Website

A modern, accessible single-page portfolio website built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Perfect Accessibility**: WCAG 2.1 AA compliant with screen reader support
- **Modern Design**: Clean, responsive design with smooth animations
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Contact Form**: Integrated with EmailJS for direct email communication
- **Smooth Navigation**: Scroll-based navigation between sections
- **Mobile-First**: Fully responsive design for all devices

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Email**: EmailJS
- **Build Tool**: Vite
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sara-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up EmailJS:
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Update the EmailJS configuration in `src/sections/Contact.tsx`:
     ```typescript
     await emailjs.send(
       'YOUR_SERVICE_ID',    // Replace with your service ID
       'YOUR_TEMPLATE_ID',   // Replace with your template ID
       {
         from_name: data.name,
         from_email: data.email,
         message: data.message,
         to_email: 'itsjamelscott@gmail.com',
       },
       'YOUR_PUBLIC_KEY'     // Replace with your public key
     );
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/sections/Hero.tsx` - Your name and introduction
- `src/sections/About.tsx` - Your skills and background
- `src/sections/Projects.tsx` - Your project portfolio
- `src/sections/Contact.tsx` - Your contact information
- `src/components/Footer.tsx` - Social media links

### Styling
- Colors can be customized in `tailwind.config.js`
- Custom CSS classes are in `src/index.css`
- Component-specific styles use Tailwind utility classes

### Content
- Replace project images in the `Projects.tsx` component
- Update social media links in the `Footer.tsx` component
- Modify the skills and technologies in `About.tsx`

## 🔧 Build & Deploy

1. Build for production:
   ```bash
   npm run build
   ```

2. Preview the build:
   ```bash
   npm run preview
   ```

3. Deploy to your preferred hosting platform:
   - **Vercel**: Connect your GitHub repository
   - **Netlify**: Drag and drop the `dist` folder
   - **GitHub Pages**: Use GitHub Actions for automated deployment

## ♿ Accessibility Features

- Semantic HTML5 elements
- Proper heading hierarchy (h1 → h2 → h3)
- Skip links for keyboard navigation
- ARIA labels and roles
- Focus management and visible focus indicators
- High contrast ratios (4.5:1 or higher)
- Screen reader compatible
- Keyboard navigation support

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Contact

- Email: itsjamelscott@gmail.com
- Portfolio: [Your Portfolio URL]
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]
