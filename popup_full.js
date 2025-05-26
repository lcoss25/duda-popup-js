
const programs = {
  safehome: {
    name: "Safehome, Inc.",
    city: "Overland Park, Kansas",
    counties: "Johnson, Miami",
    services: "Domestic Violence",
    website: "http://www.safehome-ks.org/",
    hotline: "888-432-4300 or 913-262-2868"
  },
  friendsofyates: {
    name: "Friends of Yates - Della Gill/Joyce H. Williams Center",
    city: "Kansas City, Kansas",
    counties: "Wyandotte",
    services: "Domestic Violence",
    website: "http://www.friendsofyates.org/",
    hotline: "913-321-0951"
  }
};

function showPopup(id) {
  const data = programs[id];
  if (!data) return;

  const content = `
    <h3>${data.name}</h3>
    <p><strong>City:</strong> ${data.city}</p>
    <p><strong>Counties Served:</strong> ${data.counties}</p>
    <p><strong>Services:</strong> ${data.services}</p>
    <p><strong>Website:</strong> <a href="${data.website}" target="_blank">${data.website}</a></p>
    <p><strong>Crisis Hotline:</strong> ${data.hotline}</p>
  `;
  document.getElementById("popup-text").innerHTML = content;
  document.getElementById("popup").style.display = "flex";
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}
