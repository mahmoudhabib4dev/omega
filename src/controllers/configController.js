const { success } = require("zod");

const landingPageConfig = {
    theme: {
        pageBgColor: '#F8FAFC',
        primaryColor: '#0052CC',
        secondaryColor: '#1E293B',
        fontFamily: 'Inter, sans-serif',
    },
    header: {
        logo: {
            text: 'OmegaLearn',
            imageUrl: 'https://assets.omegalearn.com/logo.svg',
            redirectUrl: '/',
        },
        navigation: [
            { id: 'nav-1', label: 'Browse Courses', url: '/courses' },
            { id: 'nav-2', label: 'Pricing', url: '/pricing' },
            { id: 'nav-3', label: 'About Us', url: '/about' },
        ],
        languages: [
            { code: 'en', label: 'EN', isDefault: true },
            { code: 'ar', label: 'AR', isDefault: false },
        ],
        authButtons: {
            login: { label: 'Log In', url: '/login', visible: true },
            signup: { label: 'Sign Up', url: '/signup', visible: true },
        },
    },
};

/**
 * @desc    Get Landing Page Configuration & Theme Data
 * @route   GET /api/v1/page-config/landing
 * @access  Public
 */


const getLandingConfig = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: landingPageConfig,
  });
};

// MUST be exported inside an object:
module.exports = {
  getLandingConfig,
};