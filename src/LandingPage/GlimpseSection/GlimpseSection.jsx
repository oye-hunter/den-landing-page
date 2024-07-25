import React from 'react';
import "../LandingPage.css";
import "./GlimpseSection.css";
import Badge from '@mui/material/Badge';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const GlimpseSection = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#f4f5fa",
            },
        },
    });

    const data = [
        {
            title: "Event 1",
            image: require("../../Assets/glimpse1.jpg"),
        },
        {
            title: "Event 2",
            image: require("../../Assets/glimpse1.jpg"),
        },
        {
            title: "Event 3",
            image: require("../../Assets/glimpse1.jpg"),
        },
        {
            title: "Event 4",
            image: require("../../Assets/glimpse1.jpg"),
        },
        {
            title: "Event 5",
            image: require("../../Assets/glimpse1.jpg"),
        },
        {
            title: "Event 6",
            image: require("../../Assets/glimpse1.jpg"),
        },
        {
            title: "Event 7",
            image: require("../../Assets/glimpse1.jpg"),
        },
        {
            title: "Event 8",
            image: require("../../Assets/glimpse1.jpg"),
        },
    ];

    return (
        <>
            <div className="lp-glimpse-section">
                <div className="lp-glimpse-section-text">
                    <h3>A Glimpse to Unforgettable Moments</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
                </div>
                <div className="lp-glimpse-section-buttons">
                    <ThemeProvider theme={theme}>
                        <Badge
                            badgeContent={8}
                            color="primary"
                            sx={{ '& .MuiBadge-badge': { color: 'rgb(68, 195, 208)' } }}
                        >
                            <div className="button active"><p>All</p></div>
                        </Badge>
                    </ThemeProvider>
                    <div className="button"><p>Icon of The Year</p></div>
                    <div className="button"><p>Tech Women of The Year</p></div>
                    <div className="button"><p>Best Content Creator</p></div>
                    <div className="button"><p>Lifetime Achievement</p></div>
                </div>
                <div className="lp-glimpse-section-images">
                    {data.map((item, index) => (
                        <div key={index} className="lp-glimpse-section-image">
                            <img src={item.image} alt={item.title} />
                            <div className="image-text"><p>{item.title}</p></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default GlimpseSection;
