let currentTab = "all";

const tabActive = ["bg-blue-800", "border-blue", "text-white"];
const tabInactive = ["bg-transparent", "text-black"];

const allJobContainer = document.getElementById("all-job-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const emptyDashboard = document.getElementById("empty-page");

function switchTab(tab) {
  const tabs = ["all", "interview", "rejected"];
  currentTab = tab;

  for (const t of tabs) {
    const tabName = document.getElementById("btn-" + t);

    if (t === tab) {
      tabName.classList.remove(...tabInactive);
      tabName.classList.add(...tabActive);
    } else {
      tabName.classList.remove(...tabActive);
      tabName.classList.add(...tabInactive);
    }
  }

  const pages = [allJobContainer, interviewContainer, rejectedContainer];
  for (const section of pages) {
    section.classList.add("hidden");
  }

  emptyDashboard.classList.add("hidden");

  if (tab === "all") {
    allJobContainer.classList.remove("hidden");
    if (allJobContainer.children.length < 1) {
      emptyDashboard.classList.remove("hidden");
    }
  } else if (tab === "interview") {
    interviewContainer.classList.remove("hidden");
    if (interviewContainer.children.length < 1) {
      emptyDashboard.classList.remove("hidden");
    }
  } else {
    rejectedContainer.classList.remove("hidden");
    if (rejectedContainer.children.length < 1) {
      emptyDashboard.classList.remove("hidden");
    }
  }
  updateJobs();
}

// jobs update
const totalJobs = document.getElementById("total-jobs");
const totalInterview = document.getElementById("total-interview");
const totalReject = document.getElementById("total-reject");
const availableMessage = document.getElementById("available-msg");

switchTab(currentTab);

document
  .getElementById("jobs-container")
  .addEventListener("click", function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const msg = card.querySelector(".msg");
    const parent = card.parentNode;

    if (clickedElement.classList.contains("interview")) {
      msg.innerText = "Interviewed";
      interviewContainer.appendChild(card);
      updateJobs();
    }
    if (clickedElement.classList.contains("rejected")) {
      msg.innerText = "Rejected";
      rejectedContainer.appendChild(card);
      updateJobs();
    }
    if (clickedElement.classList.contains("delete")) {
      parent.removeChild(card);
      updateJobs();
    }
  });

function updateJobs() {
  const counts = {
    all: allJobContainer.children.length,
    interview: interviewContainer.children.length,
    rejected: rejectedContainer.children.length,
  };

  totalJobs.innerText = counts.all;
  totalInterview.innerText = counts.interview;
  totalReject.innerText = counts.rejected;

  availableMessage.innerText = counts[currentTab];

  if(counts[currentTab] < 1){
    emptyDashboard.classList.remove("hidden");
  }
}

updateJobs();
