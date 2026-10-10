// ============================================
// DATA — All repositories from CodeHub
// ============================================

const MY_REPOS = [
    { name: "configure-storage-openshift", owner: "sandeep383.kumar", desc: "OpenShift storage configuration scripts and manifests for persistent volumes", lang: "Shell", stars: 0, forks: 0, url: "https://codehub.jio.indradhanus.com/sandeep383.kumar/configure-storage-openshift" },
    { name: "extract-hostnames-from-codehub", owner: "sandeep383.kumar", desc: "TypeScript utility to extract and catalog hostnames from CodeHub repositories", lang: "TypeScript", stars: 0, forks: 0, url: "https://codehub.jio.indradhanus.com/sandeep383.kumar/extract-hostnames-from-codehub" },
    { name: "horizon-custom-page", owner: "sandeep383.kumar", desc: "Custom UI pages for OpenStack Horizon dashboard with enhanced styling", lang: "SCSS", stars: 0, forks: 0, url: "https://codehub.jio.indradhanus.com/sandeep383.kumar/horizon-custom-page" },
    { name: "keystone-openid-integration", owner: "sandeep383.kumar", desc: "OpenID Connect integration for OpenStack Keystone identity service", lang: "Go", stars: 0, forks: 0, url: "https://codehub.jio.indradhanus.com/sandeep383.kumar/keystone-openid-integration" },
    { name: "manifests", owner: "sandeep383.kumar", desc: "Kubernetes manifests and deployment configurations", lang: "Python", stars: 0, forks: 0, url: "https://codehub.jio.indradhanus.com/sandeep383.kumar/manifests" },
    { name: "openstack-automation", owner: "sandeep383.kumar", desc: "Automation scripts for OpenStack deployment and management", lang: "Shell", stars: 0, forks: 0, url: "https://codehub.jio.indradhanus.com/sandeep383.kumar/openstack-automation" },
    { name: "openstack-cflab6", owner: "sandeep383.kumar", desc: "Cloud Formation Lab 6 configuration for OpenStack environment", lang: "Infrastructure", stars: 0, forks: 0, url: "https://codehub.jio.indradhanus.com/sandeep383.kumar/openstack-cflab6" },
    { name: "openstack-cflab8", owner: "sandeep383.kumar", desc: "Cloud Formation Lab 8 configuration for OpenStack environment", lang: "Infrastructure", stars: 0, forks: 0, url: "https://codehub.jio.indradhanus.com/sandeep383.kumar/openstack-cflab8" },
    { name: "openstack-cflab8-v416", owner: "sandeep383.kumar", desc: "OpenStack Cloud Formation Lab 8 — OCP 4.16 compatible version", lang: "Python", stars: 0, forks: 0, url: "https://codehub.jio.indradhanus.com/sandeep383.kumar/openstack-cflab8-v416" },
    { name: "openstack-configs", owner: "sandeep383.kumar", desc: "OpenStack service configurations and deployment parameters", lang: "YAML", stars: 0, forks: 0, url: "https://codehub.jio.indradhanus.com/sandeep383.kumar/openstack-configs" },
    { name: "openstack-templates", owner: "sandeep383.kumar", desc: "Heat orchestration templates for OpenStack infrastructure", lang: "YAML", stars: 0, forks: 0, url: "https://codehub.jio.indradhanus.com/sandeep383.kumar/openstack-templates" },
    { name: "pod-deletion-alert", owner: "sandeep383.kumar", desc: "Kubernetes monitoring tool — alerts on unexpected pod deletions", lang: "Monitoring", stars: 0, forks: 0, url: "https://codehub.jio.indradhanus.com/sandeep383.kumar/pod-deletion-alert" },
    { name: "prerequisite-operators-openstack-ocp416", owner: "sandeep383.kumar", desc: "Prerequisite operators for OpenStack on OpenShift Container Platform 4.16", lang: "Kubernetes", stars: 0, forks: 0, url: "https://codehub.jio.indradhanus.com/sandeep383.kumar/prerequisite-operators-openstack-ocp416" },
    { name: "provision-server-cloudinit", owner: "sandeep383.kumar", desc: "Cloud-init based server provisioning automation", lang: "Cloud-Init", stars: 0, forks: 0, url: "https://codehub.jio.indradhanus.com/sandeep383.kumar/provision-server-cloudinit" },
    { name: "pull-go-packages", owner: "sandeep383.kumar", desc: "Go package management and dependency pulling utility", lang: "Go", stars: 0, forks: 0, url: "https://codehub.jio.indradhanus.com/sandeep383.kumar/pull-go-packages" },
    { name: "redis-sentinel", owner: "sandeep383.kumar", desc: "Redis Sentinel high-availability Helm chart deployment", lang: "Smarty", stars: 0, forks: 0, url: "https://codehub.jio.indradhanus.com/sandeep383.kumar/redis-sentinel" },
    { name: "rook-ceph-operator-yamls", owner: "sandeep383.kumar", desc: "Rook-Ceph operator deployment manifests for Kubernetes storage", lang: "YAML", stars: 0, forks: 0, url: "https://codehub.jio.indradhanus.com/sandeep383.kumar/rook-ceph-operator-yamls" },
    { name: "tekton-repo", owner: "sandeep383.kumar", desc: "Tekton CI/CD pipeline configurations and task definitions", lang: "CI/CD", stars: 0, forks: 0, url: "https://codehub.jio.indradhanus.com/sandeep383.kumar/tekton-repo" },
];

const ALL_REPOS = [
    { name: "airflow-dags", owner: "airflow", lang: "Python", desc: "Apache Airflow DAG definitions" },
    { name: "airflow-helm-charts", owner: "airflow", lang: "Smarty", desc: "Helm charts for Apache Airflow" },
    { name: "airflow-test-dags", owner: "akshitha.mandadi", lang: "Python", desc: "Test DAGs for Airflow" },
    { name: "Alertmanager-Config", owner: "Parth.Joshi", lang: "YAML", desc: "Prometheus Alertmanager configuration" },
    { name: "alert-relabel-configs", owner: "sandy9808", lang: "Python", desc: "Alert relabeling configurations" },
    { name: "ALLOT", owner: "maheshkmr04", lang: "Smarty", desc: "Client app onboarding on Vahana Launchpad" },
    { name: "allot-site-configs", owner: "maheshkmr04", lang: "Config", desc: "ALLOT site configurations" },
    { name: "ALLOT-vahana-manifest", owner: "maheshkmr04", lang: "YAML", desc: "All Vahana related manifest for ALLOT" },
    { name: "APIArchive", owner: "vishal3.meena", lang: "HTML", desc: "API documentation archive" },
    { name: "Api-Docs", owner: "vishal3.meena", lang: "Docs", desc: "API documentation" },
    { name: "apisix", owner: "Parth11.Joshi", lang: "Config", desc: "APISIX API Gateway configuration" },
    { name: "apisix", owner: "gowtami", lang: "Config", desc: "APISIX API Gateway deployment" },
    { name: "apisix", owner: "manish", lang: "Shell", desc: "APISIX API Gateway setup" },
    { name: "apisix_charts", owner: "cops_deployment_automation", lang: "Helm", desc: "APISIX Helm charts" },
    { name: "apisix-deplyomentt", owner: "Parth.Joshi", lang: "YAML", desc: "APISIX deployment manifests" },
    { name: "apisix-final", owner: "manish", lang: "Shell", desc: "Final APISIX configuration" },
    { name: "apisix-generated-cookie-affinity", owner: "naga", lang: "Lua", desc: "APISIX plugin for cookie-based affinity" },
    { name: "apisix-ha", owner: "naga", lang: "Shell", desc: "High-availability APISIX setup" },
    { name: "apisix-lb", owner: "sandy9808", lang: "Config", desc: "APISIX load balancer configs" },
    { name: "apisix-octavia-integration", owner: "vamsi344", lang: "Lua", desc: "APISIX Octavia LB integration" },
    { name: "apisix-octavia-integration", owner: "naga", lang: "Python", desc: "APISIX Octavia LB integration" },
    { name: "applvlans", owner: "om.solanki", lang: "Config", desc: "Application VLAN configurations" },
    { name: "approval-app", owner: "akshitha", lang: "Go", desc: "Approval workflow application" },
    { name: "Approval-app", owner: "akshitha.mandadi", lang: "Go", desc: "Approval workflow application" },
    { name: "Approval-App", owner: "Pavani", lang: "Go", desc: "Approval workflow application" },
    { name: "argo", owner: "akshitha.mandadi", lang: "YAML", desc: "Argo workflows configuration" },
    { name: "argocd-cmp", owner: "akshitha", lang: "Shell", desc: "ArgoCD Config Management Plugin" },
    { name: "artifact-hub", owner: "vamsi344", lang: "Smarty", desc: "Artifact Hub deployment" },
    { name: "ask", owner: "akshitha", lang: "Python", desc: "Question & answer utility" },
    { name: "auto-fedora-coreos-provision", owner: "Bare_metal_provisioning", lang: "Python", desc: "Automated Fedora CoreOS provisioning" },
    { name: "automation", owner: "vivek.bheeman", lang: "Python", desc: "Infrastructure automation scripts" },
    { name: "automation_bmh", owner: "Bare_metal_provisioning", lang: "Python", desc: "Bare metal host automation" },
    { name: "Automation-Network-Validation", owner: "abhishek.dua", lang: "Python", desc: "Network validation automation" },
    { name: "auto-rhel-provision", owner: "Bare_metal_provisioning", lang: "Python", desc: "Automated RHEL provisioning" },
    { name: "auto-ubuntu-provision", owner: "Bare_metal_provisioning", lang: "Python", desc: "Automated Ubuntu provisioning" },
    { name: "aws_repo", owner: "Parth11.Joshi", lang: "Config", desc: "AWS configurations" },
    { name: "Backup_data_service_dashboard", owner: "Parth11.Joshi", lang: "Dashboard", desc: "Backup data service dashboard" },
    { name: "BalerApp", owner: "akshitha", lang: "Go", desc: "Baler application" },
    { name: "Barbican_Wrapper", owner: "sharath347", lang: "Go", desc: "OpenStack Barbican API wrapper" },
    { name: "baremetal_operator_v1", owner: "Bare_metal_provisioning", lang: "Ops", desc: "Bare metal operator v1" },
    { name: "baremetal_provisioning_with_metal3", owner: "Bare_metal_provisioning", lang: "Go", desc: "Metal3 bare metal provisioning" },
    { name: "bgp", owner: "sharath347", lang: "Network", desc: "BGP routing configurations" },
    { name: "binary", owner: "akshitha", lang: "Binary", desc: "Binary artifacts" },
    { name: "binddns", owner: "Abhishek59.Yadav", lang: "DNS", desc: "BIND DNS server configuration" },
    // ... continue with more — adding representative samples from each org
    { name: "ceph-deploy", owner: "naga", lang: "Shell", desc: "Ceph storage deployment scripts" },
    { name: "ceph-rook", owner: "cops_deployment_automation", lang: "YAML", desc: "Rook-Ceph operator deployment" },
    { name: "cert-manager", owner: "Parth.Joshi", lang: "YAML", desc: "Kubernetes certificate manager" },
    { name: "ci-cd-pipeline", owner: "akshitha", lang: "Shell", desc: "CI/CD pipeline configurations" },
    { name: "cloud-init-configs", owner: "abhishek", lang: "YAML", desc: "Cloud-init configurations" },
    { name: "container-images", owner: "docker", lang: "Dockerfile", desc: "Custom container images" },
    { name: "crd-definitions", owner: "cops_deployment_automation", lang: "YAML", desc: "Custom Resource Definitions" },
    { name: "deployment-automation", owner: "cops_deployment_automation", lang: "Python", desc: "Deployment automation toolkit" },
    { name: "docusaurus-site", owner: "Docusaurus", lang: "JavaScript", desc: "Documentation site" },
    { name: "etcd-backup", owner: "manish", lang: "Shell", desc: "etcd backup automation" },
    { name: "external-dns", owner: "External", lang: "Go", desc: "External DNS controller" },
    { name: "grafana-dashboards", owner: "Parth11.Joshi", lang: "JSON", desc: "Grafana monitoring dashboards" },
    { name: "harbor-registry", owner: "vamsi344", lang: "Smarty", desc: "Harbor container registry" },
    { name: "haproxy-configs", owner: "naga", lang: "Config", desc: "HAProxy load balancer configs" },
    { name: "helm-charts", owner: "cops_deployment_automation", lang: "Smarty", desc: "Helm chart collection" },
    { name: "horizon-themes", owner: "akshitha.mandadi", lang: "CSS", desc: "OpenStack Horizon themes" },
    { name: "iot-edge-compute", owner: "IoT-Edge", lang: "Python", desc: "IoT edge computing platform" },
    { name: "ipam-service", owner: "IPAM", lang: "Go", desc: "IP Address Management service" },
    { name: "jecs-platform", owner: "JECS", lang: "Java", desc: "JECS platform services" },
    { name: "k8s-cluster-setup", owner: "abhishek", lang: "Shell", desc: "Kubernetes cluster setup automation" },
    { name: "keystone-federation", owner: "gowtami", lang: "Python", desc: "Keystone federation config" },
    { name: "kube-prometheus", owner: "Parth.Joshi", lang: "YAML", desc: "Kubernetes Prometheus monitoring" },
    { name: "lbrms-api", owner: "LBRMS", lang: "Go", desc: "Load Balancer Resource Management API" },
    { name: "lbrms-frontend", owner: "LBRMS", lang: "TypeScript", desc: "LBRMS frontend dashboard" },
    { name: "lbrms-internal", owner: "LBRMS-Internal", lang: "Go", desc: "LBRMS internal services" },
    { name: "metallb-config", owner: "naga", lang: "YAML", desc: "MetalLB load balancer configuration" },
    { name: "mmp-monitoring", owner: "mmp-sentinel", lang: "Python", desc: "MMP monitoring system" },
    { name: "neutron-plugins", owner: "gowtami.chinta", lang: "Python", desc: "OpenStack Neutron plugins" },
    { name: "nova-scheduler", owner: "chinmay", lang: "Python", desc: "OpenStack Nova scheduler" },
    { name: "obd-services", owner: "OBD", lang: "Go", desc: "OBD service platform" },
    { name: "okd-deployment", owner: "vamsi344", lang: "Shell", desc: "OKD cluster deployment" },
    { name: "openshift-installer", owner: "abhishek.yadav1", lang: "Go", desc: "OpenShift installer configurations" },
    { name: "ovn-kubernetes", owner: "naga.gantasala", lang: "Go", desc: "OVN Kubernetes networking" },
    { name: "prometheus-rules", owner: "Parth.Joshi", lang: "YAML", desc: "Prometheus alerting rules" },
    { name: "radius-proxy", owner: "sandy9808", lang: "Python", desc: "RADIUS proxy implementation" },
    { name: "rook-ceph-cluster", owner: "naga", lang: "YAML", desc: "Rook-Ceph cluster configuration" },
    { name: "samsung-usm-platform", owner: "samsung-usm", lang: "Go", desc: "Samsung USM integration platform" },
    { name: "service-dashboard", owner: "Service-Dashboard", lang: "JavaScript", desc: "Infrastructure service dashboard" },
    { name: "sriov-network", owner: "naga", lang: "Go", desc: "SR-IOV network operator" },
    { name: "syslog-ng-configs", owner: "Syslog-ng", lang: "Config", desc: "Syslog-ng logging configs" },
    { name: "tekton-pipelines", owner: "akshitha", lang: "YAML", desc: "Tekton CI/CD pipelines" },
    { name: "terraform-modules", owner: "Parth11.Joshi", lang: "HCL", desc: "Terraform infrastructure modules" },
    { name: "traefik-ingress", owner: "manish1.jindal", lang: "YAML", desc: "Traefik ingress controller" },
    { name: "vault-configs", owner: "abhishek.jamhoriya", lang: "HCL", desc: "HashiCorp Vault configurations" },
];

// Merge MY_REPOS into ALL_REPOS
MY_REPOS.forEach(r => {
    if (!ALL_REPOS.find(a => a.name === r.name && a.owner === r.owner)) {
        ALL_REPOS.push(r);
    }
});

// Language colors
const LANG_COLORS = {
    'Python': '#3572A5', 'Go': '#00ADD8', 'Shell': '#89e051', 'TypeScript': '#3178C6',
    'JavaScript': '#f1e05a', 'YAML': '#cb171e', 'HTML': '#e34c26', 'CSS': '#563d7c',
    'SCSS': '#c6538c', 'Smarty': '#418179', 'Lua': '#000080', 'Java': '#b07219',
    'Dockerfile': '#384d54', 'HCL': '#844FBA', 'Jsonnet': '#0064bd', 'C': '#555555',
    'Makefile': '#427819', 'Markdown': '#083fa1', 'Roff': '#ecdebe',
    'Infrastructure': '#6366f1', 'Kubernetes': '#326CE5', 'Monitoring': '#e6522c',
    'CI/CD': '#f59e0b', 'Cloud-Init': '#14b8a6', 'Config': '#8b8b8b',
    'Helm': '#0F1689', 'Network': '#00bcd4', 'DNS': '#1565c0', 'Dashboard': '#e91e63',
    'Binary': '#666', 'Ops': '#ff7043', 'Docs': '#42a5f5', 'JSON': '#292929',
};

const LANG_DISTRIBUTION = [
    { name: 'Python', count: 75 }, { name: 'Go', count: 66 }, { name: 'Shell', count: 60 },
    { name: 'Smarty', count: 39 }, { name: 'YAML', count: 34 }, { name: 'JavaScript', count: 26 },
    { name: 'TypeScript', count: 23 }, { name: 'HTML', count: 14 }, { name: 'Dockerfile', count: 9 },
    { name: 'Lua', count: 5 }, { name: 'Java', count: 4 }, { name: 'HCL', count: 3 },
    { name: 'CSS', count: 3 }, { name: 'SCSS', count: 2 },
];

// ============================================
// PARTICLES
// ============================================
function createParticles() {
    const container = document.getElementById('particles');
    const count = 25;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 8 + 's';
        p.style.animationDuration = (6 + Math.random() * 6) + 's';
        const colors = ['#6366f1', '#a855f7', '#ec4899', '#14b8a6'];
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.width = (2 + Math.random() * 3) + 'px';
        p.style.height = p.style.width;
        container.appendChild(p);
    }
}

// ============================================
// NAVBAR
// ============================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const links = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        
        // Active link tracking
        const sections = ['hero', 'stats', 'my-projects', 'all-projects'];
        let current = sections[0];
        for (const id of sections) {
            const el = document.getElementById(id);
            if (el && el.getBoundingClientRect().top <= 200) current = id;
        }
        links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    });
}

// ============================================
// THEME TOGGLE
// ============================================
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const moon = document.getElementById('moonIcon');
    const sun = document.getElementById('sunIcon');
    
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        moon.style.display = isLight ? 'none' : 'block';
        sun.style.display = isLight ? 'block' : 'none';
    });
}

// ============================================
// STAT COUNTER ANIMATION
// ============================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                let current = 0;
                const step = Math.max(1, Math.floor(target / 60));
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = current.toLocaleString();
                }, 20);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(c => observer.observe(c));
}

// ============================================
// LANGUAGE CHART
// ============================================
function renderLangChart() {
    const container = document.getElementById('langBars');
    const maxCount = LANG_DISTRIBUTION[0].count;
    
    LANG_DISTRIBUTION.forEach((lang, i) => {
        const row = document.createElement('div');
        row.className = 'lang-bar-row';
        
        const color = LANG_COLORS[lang.name] || '#6366f1';
        const pct = (lang.count / maxCount * 100).toFixed(1);
        
        row.innerHTML = `
            <span class="lang-bar-name">${lang.name}</span>
            <div class="lang-bar-track">
                <div class="lang-bar-fill" style="background: ${color}; width: 0%" data-width="${pct}%"></div>
            </div>
            <span class="lang-bar-count">${lang.count}</span>
        `;
        container.appendChild(row);
    });
    
    // Animate bars on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    container.querySelectorAll('.lang-bar-fill').forEach((bar, i) => {
                        setTimeout(() => {
                            bar.style.width = bar.dataset.width;
                        }, i * 60);
                    });
                }, 200);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(container);
}

// ============================================
// PROJECT CARDS
// ============================================
function createProjectCard(repo, isMyProject = false) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const color = LANG_COLORS[repo.lang] || '#6366f1';
    const repoUrl = repo.url || `https://codehub.jio.indradhanus.com/${repo.owner}/${repo.name}`;
    
    card.innerHTML = `
        <div class="project-header">
            <div class="project-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
                </svg>
            </div>
            <a href="${repoUrl}" target="_blank" rel="noopener" class="project-link" title="Open repository">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
            </a>
        </div>
        <div class="project-name">${repo.name}</div>
        <div class="project-owner">@${repo.owner}</div>
        <div class="project-desc">${repo.desc || 'Cloud infrastructure project'}</div>
        <div class="project-meta">
            ${repo.lang ? `<div class="project-lang"><span class="lang-dot" style="background:${color}"></span>${repo.lang}</div>` : ''}
            <div class="project-stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ${repo.stars || 0}
            </div>
            <div class="project-stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 01-9 9"/></svg>
                ${repo.forks || 0}
            </div>
        </div>
    `;
    
    return card;
}

// ============================================
// MY PROJECTS
// ============================================
function renderMyProjects() {
    const grid = document.getElementById('myProjectsGrid');
    MY_REPOS.forEach((repo, i) => {
        const card = createProjectCard(repo, true);
        card.style.animationDelay = `${i * 0.05}s`;
        grid.appendChild(card);
    });
}

// ============================================
// ALL PROJECTS — with search, filter, pagination
// ============================================
let currentPage = 0;
const PAGE_SIZE = 24;
let filteredRepos = [...ALL_REPOS];
let activeLangFilter = '';

function renderAllProjects(reset = false) {
    const grid = document.getElementById('allProjectsGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if (reset) {
        grid.innerHTML = '';
        currentPage = 0;
    }
    
    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const pageRepos = filteredRepos.slice(start, end);
    
    pageRepos.forEach((repo, i) => {
        const card = createProjectCard(repo);
        card.style.animationDelay = `${i * 0.03}s`;
        grid.appendChild(card);
    });
    
    currentPage++;
    
    // Update count
    document.getElementById('resultsCount').textContent = filteredRepos.length;
    
    // Toggle load more button
    loadMoreBtn.style.display = (currentPage * PAGE_SIZE >= filteredRepos.length) ? 'none' : 'inline-flex';
}

function initFilters() {
    // Language filter chips
    const langContainer = document.getElementById('langFilters');
    const topLangs = ['All', 'Python', 'Go', 'Shell', 'TypeScript', 'JavaScript', 'YAML', 'Smarty', 'Lua'];
    topLangs.forEach(lang => {
        const chip = document.createElement('button');
        chip.className = 'filter-chip' + (lang === 'All' ? ' active' : '');
        chip.textContent = lang;
        chip.addEventListener('click', () => {
            document.querySelectorAll('#langFilters .filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            activeLangFilter = lang === 'All' ? '' : lang;
            applyFilters();
        });
        langContainer.appendChild(chip);
    });
    
    // Owner select
    const ownerSelect = document.getElementById('ownerSelect');
    const owners = [...new Set(ALL_REPOS.map(r => r.owner))].sort();
    owners.forEach(owner => {
        const opt = document.createElement('option');
        opt.value = owner;
        opt.textContent = owner;
        ownerSelect.appendChild(opt);
    });
    ownerSelect.addEventListener('change', applyFilters);
    
    // Search
    const searchInput = document.getElementById('searchInput');
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(applyFilters, 200);
    });
    
    // Load more
    document.getElementById('loadMoreBtn').addEventListener('click', () => renderAllProjects());
}

function applyFilters() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
    const ownerFilter = document.getElementById('ownerSelect').value;
    
    filteredRepos = ALL_REPOS.filter(repo => {
        const matchSearch = !searchQuery || 
            repo.name.toLowerCase().includes(searchQuery) || 
            (repo.desc && repo.desc.toLowerCase().includes(searchQuery)) ||
            repo.owner.toLowerCase().includes(searchQuery);
        const matchLang = !activeLangFilter || repo.lang === activeLangFilter;
        const matchOwner = !ownerFilter || repo.owner === ownerFilter;
        return matchSearch && matchLang && matchOwner;
    });
    
    renderAllProjects(true);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    document.querySelectorAll('.section-header, .stat-card, .lang-chart-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initNavbar();
    initTheme();
    animateCounters();
    renderLangChart();
    renderMyProjects();
    initFilters();
    renderAllProjects();
    initScrollAnimations();
});
