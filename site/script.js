// OFI Services team members
const attendeesData = [
    {
        id: 1,
        name: "Laurens Dols",
        jobTitle: "CEO",
        phone: "+31611199893",
        email: "l.dols@ofiservices.com",
        linkedinUrl: "https://www.linkedin.com/in/laurens-dols-1618b425/",
        profilePhoto: "assets/images/profiles/Laurens-Dolls.png"
    },
    {
        id: 2,
        name: "Joep Obdam",
        jobTitle: "CFO",
        phone: "+31621925179",
        email: "j.obdam@ofiservices.com",
        linkedinUrl: "https://www.linkedin.com/in/joep-obdam-21766114/",
        profilePhoto: "assets/images/profiles/Joep-Obdam.png"
    },
    {
        id: 3,
        name: "Sari Bijkerk",
        jobTitle: "Head of Engagement & Innovation",
        phone: "+31654606405",
        email: "s.bijkerk@ofiservices.com",
        linkedinUrl: "https://www.linkedin.com/in/sbijkerk/",
        profilePhoto: "assets/images/profiles/Sari- Bijkerk.jpeg"
    },
    {
        id: 4,
        name: "Katherine Darakova",
        jobTitle: "Head of Value",
        phone: "+31683587368",
        email: "k.darakova@ofiservices.com",
        linkedinUrl: "https://www.linkedin.com/in/katherine-darakova-131a3066/",
        profilePhoto: "assets/images/profiles/Katharina-Darakova.jpeg"
    },
    {
        id: 5,
        name: "Jeroen Rook",
        jobTitle: "Head of Delivery",
        phone: "+31612954847",
        email: "j.rook@ofiservices.com",
        linkedinUrl: "https://www.linkedin.com/in/jeroenrook/",
        profilePhoto: "assets/images/profiles/Jeroen-Rook.jpeg"
    },
    {
        id: 6,
        name: "Bijay Nandi",
        jobTitle: "Managing Director India",
        phone: "+917008439364",
        email: "b.nandi@ofiservices.com",
        linkedinUrl: "https://www.linkedin.com/in/bijay-krishna-nandi-289856b3/",
        profilePhoto: "assets/images/profiles/Bijay-Nandi.jpeg"
    },
    {
        id: 7,
        name: "Karen Garavito",
        jobTitle: "Managing Director LATAM",
        phone: "+573105874368",
        email: "k.garavito@ofiservices.com",
        linkedinUrl: "https://www.linkedin.com/in/karengaravito/",
        profilePhoto: "assets/images/profiles/Karen-Garavito.jpeg"
    },
    {
        id: 8,
        name: "Gabriella Galic",
        jobTitle: "Managing Director DACH",
        phone: "+491622098184",
        email: "g.galic@ofiservices.com",
        linkedinUrl: "https://www.linkedin.com/in/gabrielagalic/",
        profilePhoto: "assets/images/profiles/Gabriella-Galic.jpeg"
    },
    {
        id: 9,
        name: "Tjen van 't Hof",
        jobTitle: "Sales Manager",
        phone: "+31636470099",
        email: "t.vanthof@ofiservices.com",
        linkedinUrl: "https://www.linkedin.com/in/tjen-van-t-hof-4b323a182/",
        profilePhoto: "assets/images/profiles/Tjen-van't-Hof.jpeg",
        meetingUrl: "https://outlook.office.com/bookwithme/user/534d1b22668c4d898d0bae7967893f4d@ofiservices.com?anonymous&ismsaljsauthenabled&ep=pcard"
    },
    {
        id: 10,
        name: "Katharina Gees",
        jobTitle: "Engagement Lead",
        phone: "+27788047770",
        email: "k.gees@ofiservices.com",
        linkedinUrl: "https://www.linkedin.com/in/katharina-gees-093141151/",
        profilePhoto: "assets/images/profiles/Katharina-Gees.jpeg"
    },
    {
        id: 11,
        name: "Daniel Archut",
        jobTitle: "Engagement Lead",
        phone: "+31620465093",
        email: "d.archut@ofiservices.com",
        linkedinUrl: "https://www.linkedin.com/in/da316/",
        profilePhoto: "assets/images/profiles/Daniel-Archut.jpeg"
    },
    {
        id: 12,
        name: "Luisa Fernanda Yepes",
        jobTitle: "Engagement Lead",
        phone: "+573178071274",
        email: "l.yepes@ofiservices.com",
        linkedinUrl: "https://www.linkedin.com/in/lu20/",
        profilePhoto: "assets/images/profiles/Luisa-Fernanda-Yepes.jpeg"
    },
        {
        id: 14,
        name: "Leonard Hagn",
        jobTitle: "Engagement Lead",
        phone: "Contact via email",
        email: "l.hagn@ofiservices.com",
        profilePhoto: "assets/images/profiles/Leonard-Hagn.png"
    },
    {
        id: 13,
        name: "Atulya Deep",
        jobTitle: "Consultant",
        phone: "+919816622382",
        email: "a.deep@ofiservices.com",
        linkedinUrl: "https://www.linkedin.com/in/atulya-deep-30497b217/",
        profilePhoto: "assets/images/profiles/Atulya-Deep.jpeg"
    },

    {
        id: 15,
        name: "Chiara Caprini",
        jobTitle: "Consultant",
        phone: "+31650170931",
        email: "c.caprini@ofiservices.com",
        linkedinUrl: "https://www.linkedin.com/in/chiara-caprini-118730194/",
        profilePhoto: "assets/images/profiles/Chiara-Caprini.jpeg"
    },
    {
        id: 16,
        name: "Omar Amin",
        jobTitle: "Consultant",
        phone: "+31634117043",
        email: "o.amin@ofiservices.com",
        linkedinUrl: "https://www.linkedin.com/in/omar-el-amin-b18438163/",
        profilePhoto: "assets/images/profiles/Omar-Amin.jpeg"
    }
];

// Function to create an attendee card
function createAttendeeCard(attendee) {
    const card = document.createElement('div');
    card.className = 'attendee-card';
    
    const meetingButton = attendee.meetingUrl 
        ? `<a href="${attendee.meetingUrl}" target="_blank" class="request-meeting-btn">
             <svg class="contact-icon" style="display: inline; margin-right: 8px; width: 16px; height: 16px;" fill="currentColor" viewBox="0 0 20 20">
                 <path d="M8 12h4l-2 3z"/><path d="M2 4v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4a2 2 0 00-2 2zm2 0h12v8H4V4z"/>
             </svg>
             Plan a Meeting
           </a>`
        : '';

    card.innerHTML = `
        <img src="${attendee.profilePhoto}" alt="${attendee.name}" class="profile-photo" 
             onerror="this.src='https://via.placeholder.com/200x200/cca23f/070707?text=${attendee.name.split(' ').map(n => n[0]).join('')}'">
        <h3 class="attendee-name">${attendee.name}</h3>
        <p class="attendee-job-title">${attendee.jobTitle}</p>
        
        <div class="contact-info">
            <div class="contact-item">
                <svg class="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a href="tel:${attendee.phone}" class="contact-link">${attendee.phone}</a>
            </div>
            
            <div class="contact-item">
                <svg class="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:${attendee.email}" class="contact-link">${attendee.email}</a>
            </div>
            
            ${attendee.linkedinUrl ? `
            <div class="contact-item">
                <svg class="contact-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <a href="${attendee.linkedinUrl}" target="_blank" class="contact-link">LinkedIn</a>
            </div>
            ` : ''}
        </div>
        
        ${meetingButton}
    `;
    
    return card;
}

// Function to render all attendees
function renderAttendees() {
    const attendeesGrid = document.getElementById('attendees-grid');
    const loadingMessage = document.createElement('div');
    loadingMessage.className = 'loading';
    loadingMessage.textContent = 'Loading team members...';
    attendeesGrid.appendChild(loadingMessage);

    // Simulate loading delay (remove this in production)
    setTimeout(() => {
        attendeesGrid.removeChild(loadingMessage);
        
        attendeesData.forEach(attendee => {
            const card = createAttendeeCard(attendee);
            attendeesGrid.appendChild(card);
        });
    }, 800);
}

// Function to handle logo visibility
function handleLogo() {
    const logo = document.getElementById('ofi-logo');
    const companyName = document.querySelector('.company-name');
    
    // Show logo initially
    logo.classList.remove('hidden');
    
    // Check if logo loads successfully
    logo.onload = function() {
        logo.classList.remove('hidden');
        console.log('Logo loaded successfully');
    };
    
    // If logo fails to load, keep it hidden
    logo.onerror = function() {
        logo.classList.add('hidden');
        console.log('Logo failed to load. Using company name only.');
    };
}

// Function to handle splash screen
function handleSplashScreen() {
    const splashScreen = document.getElementById('splash-screen');
    
    // Start fade out after 2 seconds
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
        
        // Remove splash screen completely after fade animation (0.19s)
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 190); // 0.19 seconds = 190ms
    }, 2000); // Start fade at 2 seconds
}

// Function to handle header scroll fade effect
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    let ticking = false;

    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / scrollHeight;
        
        // Fade out header as user scrolls down
        // Start fading after 10% scroll and fully fade by 30%
        let opacity = 1;
        if (scrollPercent > 0.1) {
            opacity = Math.max(0, 1 - (scrollPercent - 0.1) * 5);
        }
        
        header.style.opacity = opacity;
        lastScrollTop = scrollTop;
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick, { passive: true });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    handleSplashScreen();
    handleLogo();
    renderAttendees();
    handleHeaderScroll();
});

// Function to add a new attendee (for future use)
function addAttendee(attendeeData) {
    attendeesData.push(attendeeData);
    const attendeesGrid = document.getElementById('attendees-grid');
    const card = createAttendeeCard(attendeeData);
    attendeesGrid.appendChild(card);
}

// Function to update attendee data (for future use)
function updateAttendee(id, updatedData) {
    const index = attendeesData.findIndex(attendee => attendee.id === id);
    if (index !== -1) {
        attendeesData[index] = { ...attendeesData[index], ...updatedData };
        // Re-render the grid
        const attendeesGrid = document.getElementById('attendees-grid');
        attendeesGrid.innerHTML = '';
        renderAttendees();
    }
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        attendeesData,
        addAttendee,
        updateAttendee,
        createAttendeeCard
    };
}