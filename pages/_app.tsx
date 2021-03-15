import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import MaintenancePage from '../components/Maintenance';

const MyApp = ({ Component, pageProps }: AppProps) => {
    if (process.env.NEXT_PUBLIC_MAINTENANCE === 'true') {
        return <MaintenancePage />;
    }
    return <Component {...pageProps} />;
};

export default MyApp;
