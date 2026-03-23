let currentTab = "all";

const tabActive = ["bg-blue-800", "border-blue", "text-white"];
const tabInactive = ["bg-transparent", "text-black"];

const allJobContainer = document.getElementById("all-job-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");

function switchTab(tab) {
  const tabs = ["all", "interview", "rejected"];

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

  if (tab === "all") {
    allJobContainer.classList.remove("hidden");
  } else if (tab === "interview") {
    interviewContainer.classList.remove("hidden");
  } else {
    rejectedContainer.classList.remove("hidden");
  }
}

// jobs update
const totalJobs = document.getElementById("total-jobs");
const totalInterview = document.getElementById("total-interview");
const totalReject = document.getElementById("total-reject");

totalJobs.innerText = allJobContainer.children.length;

switchTab(currentTab);

document
  .getElementById("jobs-container")
  .addEventListener("click", function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const status = card.querySelector(".status");
    const parent = card.parentNode;

    if (clickedElement.classList.contains("interview")) {
      interviewContainer.appendChild(card);
      status.innerText = "Interviewed"
    }
    if (clickedElement.classList.contains("rejected")) {
      rejectedContainer.appendChild(card);
      status.innerText = "Rejected"
    }
    if (clickedElement.classList.contains("delete")) {
      parent.removeChild(card)
    }
  });
