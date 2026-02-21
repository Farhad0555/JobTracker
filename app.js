const jobsData = [
    { id: 1, company: "React Native Developer", role: "Mobile First Corp", loc: "Remote", type: "Full-time", sal: "$130,000 - $175,000", status: "all", desc: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide." },
    { id: 2, company: "Web Designer & Developer", role: "WebFlow Agency", loc: "Los Angeles", type: "Contract", sal: "$90k", status: "all", desc: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends." },
    { id: 3, company: "Data Visualization Specialist", role: "DataViz Solutions", loc: "San Francisco", type: "Full-time", sal: "$150k", status: "all", desc: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking." },
    { id: 4, company: "Backend Developer", role: "CloudFirst Inc", loc: "Hybrid", type: "Full-time", sal: "$135k", status: "all", desc: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure." },
    { id: 5, company: "UI/UX Engineer", role: "Innovation Labs", loc: "Austin", type: "Full-time", sal: "$140k", status: "all", desc: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required." },
    { id: 6, company: "Spotify", role: "Backend Engineer", loc: "New York", type: "Remote", sal: "$130k", status: "all", desc: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities." },
    { id: 7, company: "Amazon", role: "Cloud Architect", loc: "Seattle", type: "Full-time", sal: "$160k", status: "all", desc: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included." },
    { id: 8, company: "Meta", role: "TechCorp Industries", loc: "Menlo Park", type: "Full-time", sal: "$145k", status: "all", desc: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects." }
];

let currentTab = 'all';

function renderJobs() {
    const container = document.getElementById('jobs-container');
    const emptyState = document.getElementById('empty-state');
    
 
    const filteredJobs = currentTab === 'all' 
        ? jobsData 
        : jobsData.filter(job => job.status === currentTab);

    container.innerHTML = '';
    
    if (filteredJobs.length === 0) {
        container.classList.add('hidden');
        emptyState.classList.remove('hidden');
    } else {
        container.classList.remove('hidden');
        emptyState.classList.add('hidden');
        
        filteredJobs.forEach(job => {
            container.innerHTML += `
                <div class="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition-shadow relative">
                    <button onclick="deleteJob(${job.id})" class="absolute top-3 right-3 text-gray-300 hover:text-red-500">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                    <h4 class="font-bold text-lg">${job.role}</h4>
                    <p class="text-blue-600 text-sm font-medium mb-3">${job.company}</p>
                    <div class="flex flex-wrap gap-2 mb-4 text-xs">
                        <span class="bg-gray-100 px-2 py-1 rounded">${job.loc}</span>
                        <span class="bg-gray-100 px-2 py-1 rounded">${job.type}</span>
                        <span class="bg-green-100 text-green-700 px-2 py-1 rounded font-bold">${job.sal}</span>
                    </div>
                    <p class="text-gray-500 text-sm mb-5 line-clamp-2">${job.desc}</p>
                    <div class="grid grid-cols-2 gap-2">
                        <button onclick="updateStatus(${job.id}, 'interview')" class="${job.status === 'interview' ? 'bg-orange-500 text-white' : 'border border-orange-500 text-orange-500'} py-2 rounded text-xs font-bold hover:bg-orange-50 transition">Interview</button>
                        <button onclick="updateStatus(${job.id}, 'rejected')" class="${job.status === 'rejected' ? 'bg-red-500 text-white' : 'border border-red-500 text-red-500'} py-2 rounded text-xs font-bold hover:bg-red-50 transition">Rejected</button>
                    </div>
                </div>
            `;
        });
    }
    updateDashboard();
}

function updateStatus(id, newStatus) {
    const job = jobsData.find(j => j.id === id);
    // Toggle logic: if clicking the same status, revert to 'all'
    job.status = job.status === newStatus ? 'all' : newStatus;
    renderJobs();
}

function deleteJob(id) {
    const index = jobsData.findIndex(j => j.id === id);
    jobsData.splice(index, 1);
    renderJobs();
}

function updateDashboard() {
    const interviewCount = jobsData.filter(j => j.status === 'interview').length;
    const rejectedCount = jobsData.filter(j => j.status === 'rejected').length;
    const currentViewCount = currentTab === 'all' ? jobsData.length : jobsData.filter(j => j.status === currentTab).length;

    document.getElementById('total-stat').innerText = jobsData.length;
    document.getElementById('interview-stat').innerText = interviewCount;
    document.getElementById('rejected-stat').innerText = rejectedCount;
    document.getElementById('current-count').innerText = currentViewCount;
}

function switchTab(tab) {
    currentTab = tab;
    ['all', 'interview', 'rejected'].forEach(t => {
        const el = document.getElementById(`tab-${t}`);
        el.classList.remove('border-b-2', 'border-blue-600', 'text-blue-600');
        el.classList.add('text-gray-500');
    });
    document.getElementById(`tab-${tab}`).classList.add('border-b-2', 'border-blue-600', 'text-blue-600');
    renderJobs();
}

// Initial Load
renderJobs();