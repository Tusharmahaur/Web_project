// Mock job data for dynamic loading
const jobs = [
    { title: "Content Writer (Remote)", description: "Write articles from home. Perfect for students." },
    { title: "Data Entry Specialist", description: "Flexible hours, no experience needed." },
    { title: "Virtual Assistant", description: "Assist teams remotely. Great for freshers." }
];

// Load jobs dynamically
function loadJobs() {
    const jobList = document.getElementById('job-list');
    jobs.forEach(job => {
        const jobDiv = document.createElement('div');
        jobDiv.className = 'job-item';
        jobDiv.innerHTML = `<h3>${job.title}</h3><p>${job.description}</p>`;
        jobList.appendChild(jobDiv);
    });
}

// Scroll to jobs section
function scrollToJobs() {
    document.getElementById('jobs').scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
document.getElementById('application-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate submission (in a real app, send to server)
    document.getElementById('response').innerHTML = `<p>Thank you, ${name}! We'll review your application and get back to you at ${email}.</p>`;

    // Clear form
    this.reset();
});

// Initialize
loadJobs();