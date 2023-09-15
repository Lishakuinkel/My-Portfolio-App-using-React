import { useState } from 'react';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import Home from '../components/Home';
import ContactMe from '../components/ContactMe';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Body = () => {
    const [currentPage, setCurrentPage] = useState('Home')

    const renderComponent = () => {
        if (currentPage === 'Home') {
            return <Home />
        } else if (currentPage === 'About') {
            return <AboutMe />
        } else if (currentPage === 'Portfolio') {
            return <Portfolio />
        } else if (currentPage === 'Contact') {
            return <ContactMe />
        } else {
            return
        }
    }

    const handlePageChange = (page) => setCurrentPage(page)
    return (
        <>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderComponent()}
            <Footer />
        </>
    )
}

export default Body