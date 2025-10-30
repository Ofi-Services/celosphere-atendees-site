// Sample attendee data - replace this with your actual data
const attendeesData = [
    {
        id: 1,
        name: "John Smith",
        jobTitle: "Senior Project Manager",
        phone: "+1 (555) 123-4567",
        email: "john.smith@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/667eea/white?text=JS",
        meetingUrl: "https://calendly.com/johnsmith" // Optional - only include if meeting button needed
    },
    {
        id: 2,
        name: "Sarah Johnson",
        jobTitle: "Business Development Director",
        phone: "+1 (555) 234-5678",
        email: "sarah.johnson@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/764ba2/white?text=SJ",
        meetingUrl: "https://calendly.com/sarahjohnson"
    },
    {
        id: 3,
        name: "Michael Davis",
        jobTitle: "Technical Consultant",
        phone: "+1 (555) 345-6789",
        email: "michael.davis@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/667eea/white?text=MD"
        // No meetingUrl - button won't appear
    },
    {
        id: 4,
        name: "Emily Rodriguez",
        jobTitle: "Marketing Specialist",
        phone: "+1 (555) 456-7890",
        email: "emily.rodriguez@ofiservices.com",
        profilePhoto: "https://via.placeholder.com/200x200/764ba2/white?text=ER",
        meetingUrl: "https://calendly.com/emilyrodriguez"
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