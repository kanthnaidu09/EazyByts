const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description for Project 1.",
      image: "project1.jpg",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description for Project 2.",
      image: "project2.jpg",
    },
  ];
  
  const projectContainer = document.querySelector(".projects-section .container");
  
  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectDiv.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    projectContainer.appendChild(projectDiv);
  });

  
