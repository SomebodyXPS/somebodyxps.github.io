fetch("data/projects.json")
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById("projects-grid");

    data.projects.forEach(p => {
      const card = document.createElement("a");
      card.href = p.link;
      card.target = "_blank";
      card.className = "project";

      card.innerHTML = `
        <img src="assets/projects/${p.logo}" />
        <h3>${p.name}</h3>
        <p>${p.description}</p>
      `;

      grid.appendChild(card);
    });
  });