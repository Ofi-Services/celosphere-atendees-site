// Ofi Services team members
const attendeesData = [
    {
        id: 1,
        name: "Laurens Dols",
        jobTitle: "CEO",
        phone: "+31611199893",
        email: "l.dols@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/667eea/white?text=LD"
    },
    {
        id: 2,
        name: "Katherine Darakova",
        jobTitle: "Customer Value Director",
        phone: "+31683587368",
        email: "k.darakova@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/764ba2/white?text=KD"
    },
    {
        id: 3,
        name: "Sari Bijkerk",
        jobTitle: "Delivery Director",
        phone: "+31654606405",
        email: "s.bijkerk@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/667eea/white?text=SB"
    },
    {
        id: 4,
        name: "Daniel Archut",
        jobTitle: "Engagement Lead",
        phone: "+31620465093",
        email: "d.archut@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/764ba2/white?text=DA"
    },
    {
        id: 5,
        name: "Katharina Gees",
        jobTitle: "Engagement Lead",
        phone: "+27788047770",
        email: "k.gees@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/667eea/white?text=KG"
    },
    {
        id: 6,
        name: "Atulya Deep",
        jobTitle: "Consultant",
        phone: "+919816622382",
        email: "a.deep@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/764ba2/white?text=AD"
    },
    {
        id: 7,
        name: "Gabriella Galic",
        jobTitle: "Managing Director",
        phone: "+491622098184",
        email: "g.galic@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/667eea/white?text=GG"
    },
    {
        id: 8,
        name: "Bijay Nandi",
        jobTitle: "Managing Director",
        phone: "+917008439364",
        email: "b.nandi@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/764ba2/white?text=BN"
    },
    {
        id: 9,
        name: "Tjen van 't Hof",
        jobTitle: "Head of Sales",
        phone: "+31636470099",
        email: "t.vanthof@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/667eea/white?text=TH"
    },
    {
        id: 10,
        name: "Jeroen Rook",
        jobTitle: "Head of Delivery",
        phone: "+31612954847",
        email: "j.rook@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/764ba2/white?text=JR"
    },
    {
        id: 11,
        name: "Karen Garavito",
        jobTitle: "Head of Delivery LATAM",
        phone: "+573105874368",
        email: "k.garavito@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/667eea/white?text=KG"
    },
    {
        id: 12,
        name: "Joep Obdam",
        jobTitle: "CFO",
        phone: "+31621925179",
        email: "j.obdam@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/764ba2/white?text=JO"
    },
    {
        id: 13,
        name: "Luisa Fernanda Yepes",
        jobTitle: "Consultant",
        phone: "+573178071274",
        email: "l.yepes@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/667eea/white?text=LY"
    },
    {
        id: 14,
        name: "Chiara Caprini",
        jobTitle: "Consultant",
        phone: "+31650170931",
        email: "c.caprini@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/764ba2/white?text=CC"
    },
    {
        id: 15,
        name: "Omar Amin",
        jobTitle: "Consultant",
        phone: "+31634117043",
        email: "o.amin@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/667eea/white?text=OA"
    },
    {
        id: 16,
        name: "Leonard Hagn",
        jobTitle: "Consultant",
        phone: "Contact via email",
        email: "l.hagn@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/764ba2/white?text=LH"
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
             Request Meeting
           </a>`
        : '';

    card.innerHTML = `
        <img src="${attendee.profilePhoto}" alt="${attendee.name}" class="profile-photo" 
             onerror="this.src='https://via.placeholder.com/200x200/cccccc/white?text=${attendee.name.split(' ').map(n => n[0]).join('')}'">
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
    
    // Hide logo initially and show company name
    logo.classList.add('hidden');
    
    // Check if logo loads successfully
    logo.onload = function() {
        logo.classList.remove('hidden');
    };
    
    // If logo fails to load, keep it hidden
    logo.onerror = function() {
        logo.classList.add('hidden');
        console.log('Logo not found. Using company name only.');
    };
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    handleLogo();
    renderAttendees();
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