# Unity Outreach - Charity Organization Website

A modern, responsive website for Unity Outreach, a non-profit organization dedicated to empowering communities through education, healthcare, and sustainable development.

## 🌟 Features

### 🎨 Modern Design
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Smart Color Schemes**: Beautiful gradients and modern color palettes
- **Glassmorphism Effects**: Contemporary design elements with backdrop blur

### 📱 Multi-Page Navigation
- **React Router**: Seamless navigation between pages
- **Sticky Navigation**: Professional navigation bar with smooth scrolling
- **Mobile-Friendly**: Responsive navigation with hamburger menu

### 💰 Comprehensive Donation System
- **Multiple Payment Options**: Prompt payment and bank transfer
- **Form Validation**: Real-time validation with error messages
- **Email Confirmation**: Automatic confirmation emails
- **Payment Status Tracking**: Real-time payment processing status
- **Donation History**: Track previous donations
- **Recurring Donations**: Set up automatic monthly contributions

### 📊 Program Management
- **6 Active Programs**: Education, Healthcare, Community Development, Emergency Relief, Youth Empowerment, Environmental Conservation
- **Impact Statistics**: Real-time metrics and success rates
- **Program Details**: Comprehensive information about each initiative

### 👥 Founder Profiles
- **4 Founder Profiles**: Detailed information about leadership team
- **Achievement Tracking**: Key accomplishments and expertise areas
- **Organization Story**: History and mission development

### 🎯 Mission & Vision
- **Clear Mission Statement**: Detailed organizational goals
- **Core Values**: 6 fundamental principles that guide the organization
- **Strategic Goals**: Measurable objectives with progress tracking
- **Impact Metrics**: Comprehensive statistics and achievements

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing for multi-page experience
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **Vite**: Fast build tool and development server
- **Git**: Version control and collaboration

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/unity-outreach.git
   cd unity-outreach
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Building for Production

```bash
npm run build
```

## 📁 Project Structure

```
unity-outreach/
├── public/
│   ├── image/           # Project images
│   └── vite.svg
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Donation.jsx
│   │   ├── Founders.jsx
│   │   ├── Hero.jsx
│   │   ├── MissionVision.jsx
│   │   ├── Navigation.jsx
│   │   └── Programs.jsx
│   ├── styles/          # CSS files
│   │   ├── About.css
│   │   ├── Donation.css
│   │   ├── Founders.css
│   │   ├── Hero.css
│   │   ├── MissionVision.css
│   │   ├── Navigation.css
│   │   └── Programs.css
│   ├── App.jsx          # Main application component
│   ├── App.css          # Global styles
│   └── main.jsx         # Application entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design Features

### Color Palette
- **Primary**: Deep navy (#22223b)
- **Secondary**: Muted gray (#4a4e69)
- **Accent**: Soft purple (#9a8c98)
- **Highlight**: Cream (#f2e9e4)
- **Button**: Warm beige (#c9ada7)

### Typography
- **Headings**: Montserrat (Bold, 700)
- **Body Text**: Segoe UI (Regular, 400)
- **Responsive**: Scales appropriately across devices

### Animations
- **Hover Effects**: Smooth transitions on interactive elements
- **Loading States**: Professional loading animations
- **Scroll Effects**: Subtle animations on scroll

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Customization

### Adding New Programs
1. Edit `src/Programs.jsx`
2. Add new program object to the `programs` array
3. Include required fields: id, title, icon, description, impact, features, status

### Updating Founder Information
1. Edit `src/Founders.jsx`
2. Modify the `founders` array with new information
3. Include: name, role, bio, achievements, expertise, quote

### Changing Colors
1. Edit `src/App.css`
2. Update CSS custom properties in `:root`
3. Colors will automatically apply throughout the application

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Unity Outreach team for the vision and mission
- React community for excellent documentation
- Vite team for the fast build tool
- All contributors and supporters

## 📞 Contact

For questions or support, please contact:
- **Email**: info@unityoutreach.org
- **Website**: www.unityoutreach.org

---

**Made with ❤️ for Unity Outreach**
