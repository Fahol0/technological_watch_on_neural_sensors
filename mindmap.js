const data = {
  name: "Capteurs neuronaux",
  children: [
    {
      name: "Capteurs de surface (non-invasifs)",
      children: [
        {
          name: "Capteurs pour Électroencéphalographie (EEG)",
          children: [
            {
              name: "Principe de fonctionnement",
              details:
                "Mesure l'activité électrique du cerveau via des électrodes placées sur le cuir chevelu. Capture les ondes cérébrales (alpha, bêta, gamma…). Faible résolution spatiale mais bonne résolution temporelle (capte des signaux en temps réel).",
            },
            {
              name: "Position sur la tête",
              image: "path/to/image/position_sur_la_tete.png",
              details:
                "Les électrodes sont placées sur des points spécifiques du cuir chevelu, selon un système standardisé comme le 10-20.",
            },
            {
              name: "Caractéristiques techniques",
              details:
                "Résolution temporelle élevée (~1 ms). Résolution spatiale faible (ne peut pas capter des zones profondes du cerveau). Sensible aux interférences (ex : mouvements des muscles).",
            },
            {
              name: "Applications",
              details:
                "Interfaces cerveau-ordinateur (BCI) 🖥️. Études sur le sommeil 💤. Diagnostic de l'épilepsie ⚡. Neurofeedback (contrôle des ondes cérébrales).",
            },
            {
              name: "Avantages",
              details:
                "Non-invasif et peu coûteux 💰. Temps réel. Facile à utiliser.",
            },
            {
              name: "Inconvénients",
              details:
                "Mauvaise précision spatiale (ne capte que la surface du cerveau). Sensible aux bruits et aux artefacts (mouvements, clignements d'yeux).",
            },
          ],
        },
        { 
          name: "Capteurs pour Magnétoencéphalographie (MEG)",
          children: [
            {
              name: "Principe de fonctionnement",

            }
          ]
        },
        { name: "Spectroscopie proche infrarouge fonctionnelle (fNIRS)" },
        { name: "Électromyographie (EMG)" },
      ],
    },
    {
      name: "Capteurs intracrâniens (semi-invasifs)",
      children: [{ name: "Électrocorticographie (ECoG)" }],
    },
    {
      name: "Capteurs intracorticaux (invasifs)",
      children: [
        { name: "Local Field Potential (LFP)" },
        { name: "Électrodes intracorticales (e.g., Neuralink)" },
      ],
    },
    {
      name: "Capteurs miniaturisés (non-invasifs)",
      children: [
        { name: "Micro-capteurs sans fil (e.g., Neural Dust)" },
        { name: "Simulation lumineuse des neurones (e.g., Optogénique)" },
      ],
    },
  ],
};

const width = window.innerWidth;
const height = 800;

const svg = d3.select("svg")
.attr("width", width)
.attr("height", height)
.attr("viewBox", [-width / 2, -height / 2, width, height])
.style("background", "#fff");

const g = svg.append("g");

const zoom = d3.zoom()
  .scaleExtent([0.5, 5])
  .on("zoom", (event) => {
    g.attr("transform", event.transform);
  });

svg.call(zoom);

const tree = d3.tree().size([2 * Math.PI, Math.min(width, height) / 2]);
const root = d3.hierarchy(data);
tree(root);

const radialPoint = (x, y) => {
  return [(y * Math.cos(x - Math.PI / 2)), (y * Math.sin(x - Math.PI / 2))];
};

g.selectAll(".link")
  .data(root.links())
  .join("path")
  .attr("class", "link")
  .attr("d", (d) => {
      const [sx, sy] = radialPoint(d.source.x, d.source.y);
      const [tx, ty] = radialPoint(d.target.x, d.target.y);
      return `M${sx},${sy}L${tx},${ty}`;
  })
  .attr("stroke", "#ccc");

const nodes = g
  .selectAll(".node")
  .data(root.descendants())
  .join("g")
  .attr("class", "node")
  .attr("transform", (d) => {
      const [x, y] = radialPoint(d.x, d.y);
      return `translate(${x},${y})`;
  });

nodes
  .append("circle")
  .attr("r", (d) => 20 - d.depth * 5)
  .on("mouseover", function () {
      d3.select(this).transition().attr("r", 25);
  })
  .on("mouseout", function () {
      d3.select(this).transition().attr("r", (d) => 20 - d.depth * 5);
  })
  .on("click", (event, d) => {
    const detailsDiv = d3.select("#node-details");
    detailsDiv.html("");
  
    detailsDiv.append("h2").text(d.data.name);
  
    if (d.data.image) {
      detailsDiv
        .append("img")
        .attr("src", d.data.image)
        .attr("alt", d.data.name)
        .style("width", "100%")
        .style("border-radius", "8px")
        .style("margin", "10px 0");
    }
  
    if (d.data.details) {
      detailsDiv
        .append("p")
        .text(d.data.details)
        .style("font-size", "14px")
        .style("color", "#555");
    } else {
      detailsDiv.append("p").text("Pas de détails disponibles.");
    }
  });

nodes
.append("text")
.attr("x", (d) => (d.x < Math.PI ? 25 : -25))
.attr("y", 0)
.attr("dy", "0.31em")
.style("text-anchor", (d) => (d.x < Math.PI ? "start" : "end"))
.text((d) => d.data.name)
.style("font-size", "12px")
.style("font-family", "Arial")
.clone(true)
.lower()
.attr("stroke", "white");