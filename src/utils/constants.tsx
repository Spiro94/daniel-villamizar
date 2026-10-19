interface AppConstants {
    githubUrl: string;
    linkedInUrl?: string;
    email?: string;
    whatsappNumber: string;
    credlyUrl: string;
    cvUrl: string;
}

export const APP_CONSTANTS: AppConstants = {
    githubUrl: 'https://github.com/Spiro94',
    linkedInUrl: 'https://www.linkedin.com/in/danielvillamizar94/',
    email: 'danieljosevillamizar@gmail.com',
    whatsappNumber: '573184440119',
    credlyUrl: 'https://www.credly.com/badges/07c08f2a-ce0d-4392-bf0b-da6e9246d14d',
    cvUrl: '/daniel-villamizar-cv.pdf',
}

export const whatsappUrl = (text: string) =>
    `https://wa.me/${APP_CONSTANTS.whatsappNumber}?text=${encodeURIComponent(text)}`
