const newsData = [
    {
        image: "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2024/12/rbi-governor-sanjay-malhotra-1733746151.webp",
        heading: "RBI Governor Shares Economic Outlook",
        summary: "Sanjay Malhotra discusses the impact of inflation and upcoming monetary policies for a stable economy.",
        highlights: [
            "Focus on inflation control.",
            "Plans for digital currency advancements."
        ]
    },
    {
        image: "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2024/12/brook-bradman-11-1733767803.webp",
        heading: "Historic Cricket Milestone Achieved",
        summary: "Brook Bradman smashes records with an unforgettable performance in the latest test series.",
        highlights: [
            "Unbeaten innings of 300+ runs.",
            "Leads team to a historic victory."
        ]
    }
];

function createNewsCards(newsArray) {
    const newsSection = document.getElementById('news-section');
    
    newsArray.forEach((news, index) => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        if (index === 0) newsCard.classList.add('active'); // Set the first card as active

        const newsImage = document.createElement('img');
        newsImage.src = news.image;
        newsImage.alt = news.heading;

        const newsHeading = document.createElement('h3');
        newsHeading.className = 'news-heading';
        newsHeading.textContent = news.heading;

        const newsSummary = document.createElement('p');
        newsSummary.className = 'news-summary';
        newsSummary.textContent = news.summary;

        const newsHighlights = document.createElement('ul');
        newsHighlights.className = 'news-highlights';

        news.highlights.forEach(point => {
            const li = document.createElement('li');
            li.textContent = point;
            newsHighlights.appendChild(li);
        });

        // Append elements to the card
        newsCard.appendChild(newsImage);
        newsCard.appendChild(newsHeading);
        newsCard.appendChild(newsSummary);
        newsCard.appendChild(newsHighlights);

        // Append card to the section
        newsSection.appendChild(newsCard);
    });
}

function rotateNewsCards() {
    const cards = document.querySelectorAll('.news-card');
    let currentIndex = 0;

    setInterval(() => {
        cards[currentIndex].classList.remove('active'); // Hide current card
        currentIndex = (currentIndex + 1) % cards.length; // Move to the next card
        cards[currentIndex].classList.add('active'); // Show next card
    }, 10000); // 10 seconds interval
}

// Initialize
createNewsCards(newsData);
rotateNewsCards();