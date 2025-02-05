const data = {
  name: "Capteurs neuronaux",
  details:
    "Les capteurs neuronaux sont des dispositifs qui mesurent l'activité électrique du cerveau ou des nerfs. Ils sont utilisés en neurosciences, en médecine et dans les interfaces cerveau-ordinateur. Il existe plusieurs types de capteurs, allant des capteurs de surface non-invasifs aux capteurs intracorticaux invasifs.",
  children: [
    {
      name: "Capteurs de surface (non-invasifs)",
      details:
        "Les capteurs de surface sont placés à l'extérieur du crâne et mesurent l'activité électrique du cerveau à travers le cuir chevelu. Ils sont utilisés pour des applications comme les interfaces cerveau-ordinateur, les études sur le sommeil et le diagnostic de l'épilepsie.",
      children: [
        {
          name: "Capteurs pour Électroencéphalographie (EEG)",
          details:
            "Pour comprendre les détails de ce type de capteurs, cliquez sur les noeuds enfants",
          children: [
            {
              name: "Principe de fonctionnement",
              details:
                "Mesure l'activité électrique du cerveau via des électrodes placées sur le cuir chevelu. Capture les ondes cérébrales (alpha, bêta, gamma…). Faible résolution spatiale mais bonne résolution temporelle.",
            },
            {
              name: "Position sur la tête",
              image: "./images/eeg.png",
              details:
                "Emplacement des électrodes EEG sur la tête.",
            },
            {
              name: "Caractéristiques techniques",
              details:
                "Résolution temporelle rapide (~1 ms). Résolution spatiale faible (ne peut pas capter des zones profondes du cerveau). Sensible aux interférences (ex : mouvements des muscles).",
            },
            {
              name: "Applications",
              details:
                "Interfaces cerveau-ordinateur (BCI). Études sur le sommeil. Diagnostic de l'épilepsie. Neurofeedback (contrôle des ondes cérébrales).",
            },
            {
              name: "Avantages",
              details:
                "Non-invasif et peu coûteux. Très rapide (peut capter des variations en millisecondes). Facile à utiliser.",
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
          detail:
            "Pour comprendre les détails de ce type de capteurs, cliquez sur les noeuds enfants",
          children: [
            {
              name: "Principe de fonctionnement",
              details:
                "Mesure les champs magnétiques produits par l'activité électrique des neurones. Très précis, mais nécessite une salle blindée contre les interférences électromagnétiques."
            },
            {
              name: "Position sur la tête",
              image: "./images/meg.png",
              details:
                "Emplacement des capteurs MEG sur la tête."
            },
            {
              name: "Caractéristiques techniques",
              details:
                "Résolution temporelle rapide (~1 ms). Résolution spatiale élevée (plus précis que l'EEG). Nécessite un environnement sans interférences magnétiques."
            },
            {
              name: "Applications",
              details:
                "Étude des réseaux neuronaux. Détection des maladies neurodégénératives (Alzheimer, Parkinson). Localisation précise des foyers épileptiques."
            },
            {
              name: "Avantages",
              details:
                "Très grande précision spatiale (meilleure que l’EEG). Très rapide (peut capter des variations en millisecondes)."
            },
            {
              name: "Inconvénients",
              details:
                "Très coûteux. Nécessite un laboratoire spécialisé."
            }
          ]
        },
        { 
          name: "Spectroscopie proche infrarouge fonctionnelle (fNIRS)",
          detail:
            "Pour comprendre les détails de ce type de capteurs, cliquez sur les noeuds enfants",
          children: [
            {
              name: "Principe de fonctionnement",
              details:
                "Mesure les changements de flux sanguin dans le cerveau en envoyant de la lumière infrarouge. Similaire à l’IRMf (IRM fonctionnelle) mais portable et moins coûteux."
            },
            {
              name: "Position sur la tête",
              image: "./images/fnirs.png",
              details:
                "Emplacement des capteurs fNIRS sur la tête."
            },
            {
              name: "Caractéristiques techniques",
              details:
                "Résolution temporelle modérée (~1 seconde). Résolution spatiale meilleure que l'EEG mais moins bonne que le MEG. Portatif et utilisable en conditions réelles (ex : casques EEG-fNIRS)."
            },
            {
              name: "Applications",
              details:
                "Neurosciences cognitives (étude des émotions, du stress…). Détection précoce des maladies cérébrales. Suivi de l’attention et de la concentration."
            },
            {
              name: "Avantages",
              details:
                "Portable et léger. Moins cher que l’IRMf."
            },
            {
              name: "Inconvénients",
              details:
                "Résolution temporelle lente. Ne mesure que la surface du cerveau."
            }
          ]
        },
        { 
          name: "Électromyographie (EMG)",
          details:
            "Pour comprendre les détails de ce type de capteurs, cliquez sur les noeuds enfants",
          children: [
            {
              name: "Principe de fonctionnement",
              details:
                "Capte l’activité électrique des muscles, souvent utilisé en complément des capteurs neuronaux. Permet de suivre l’activité des nerfs moteurs."
            },
            {
              name: "Position sur le corps",
              image: "./images/emg.png",
              details:
                "Emplacement des électrodes EMG sur le corps."
            },
            {
              name: "Caractéristiques techniques",
              details:
                "Résolution temporelle rapide (~1 ms). Mesure la contraction musculaire avec une grande précision."
            },
            {
              name: "Applications",
              details:
                "Prothèses bioniques. Étude des troubles musculaires (myopathies, SLA…). Contrôle des interfaces cerveau-muscle."
            },
            {
              name: "Avantages",
              details:
                "Très précis pour l’étude des muscles. Utile pour les prothèses neuronales."
            },
            {
              name: "Inconvénients",
              details:
                "Peut être parasité par les mouvements involontaires."
            }
          ]
         },
      ],
    },
    {
      name: "Capteurs intracrâniens (semi-invasifs)",
      details:
        "Les capteurs intracrâniens sont placés à l'intérieur du crâne, mais à l'extérieur du cerveau. Ils sont utilisés pour des applications cliniques et de recherche nécessitant une meilleure résolution spatiale que les capteurs de surface.",
      children: [
        { 
          name: "Électrocorticographie (ECoG)",
          details:
            "Pour comprendre les détails de ce type de capteurs, cliquez sur les noeuds enfants",
          children: [
            {
              name: "Principe de fonctionnement",
              details:
                "Électrodes placées directement sur la surface du cerveau (cortex) sous la dure-mère. Mesure l’activité électrique en captant les potentiels de champs locaux (LFP), mais avec une meilleure résolution que l’EEG.",
                children: [
                  {
                    name: "Dure-mère",
                    details:
                      "Membrane fibreuse qui entoure le cerveau. Protège le cerveau des infections et des chocs."
                  }
                ]
            },
            {
              name: "Position sur le cerveau",
              image: "./images/ecog.png",
              details:
                "Emplacement des électrodes ECoG sur le cortex cérébral."
            },
            {
              name: "Caractéristiques techniques",
              details:
                "Résolution spatiale plus précise que l'EEG (capte l’activité des zones spécifiques). Résolution temporelle élevée, presque en temps réel. Moins susceptible aux artefacts que l’EEG."
            },
            {
              name: "Applications",
              details:
                "Suivi des crises épileptiques (localisation des foyers d’épilepsie). Cartographie cérébrale (avant une chirurgie pour identifier les zones critiques). BCI (interfaces cerveau-ordinateur), en particulier pour des applications motrices."
            },
            {
              name: "Avantages",
              details:
                "Haute précision (spatiale et temporelle). Moins susceptible aux interférences par rapport à l’EEG. Utilisation dans des cas cliniques comme la chirurgie de l’épilepsie."
            },
            {
              name: "Inconvénients",
              details:
                "Nécessite une chirurgie invasive (implantation sur la surface du cerveau). Risques de complications chirurgicales. Durée limitée dans le temps (l’implantation n’est pas permanente, en raison des risques d'inflammation)."
            }
          ]
        }
      ],
    },
    {
      name: "Capteurs intracorticaux (invasifs)",
      details:
        "Les capteurs intracorticaux sont implantés directement dans le cerveau pour mesurer l'activité électrique des neurones. Ils sont utilisés pour des applications de recherche et cliniques nécessitant une très haute résolution spatiale et temporelle.",
      children: [
        {
          name: "Local Field Potential (LFP)",
          details:
            "Pour comprendre les détails de ce type de capteurs, cliquez sur les noeuds enfants",
          children: [
            {
              name: "Principe de fonctionnement",
              details:
                "Enregistre les signaux électriques à partir de groupes de neurones dans une zone cérébrale ciblée. Les signaux mesurés sont un mélange de l’activité neuronale locale (potentiels de champs locaux) et des courants de champ extracellulaire."
            },
            {
              name: "Position sur le cerveau",
              image: "./images/lfp.png",
              details:
                "Emplacement des électrodes LFP dans le cerveau."
            },
            {
              name: "Caractéristiques techniques",
              details:
                "Haute précision spatiale (enregistrent l'activité d'un groupe de neurones très spécifique). Plage de fréquences large (peut capter des oscillations lentes jusqu’à des fréquences rapides). Très réactif (réponse rapide aux changements neuronaux)."
            },
            {
              name: "Applications",
              details:
                "Études neurophysiologiques : analyser les comportements neuronaux dans les zones du cortex. BCI avancées, notamment pour le contrôle direct des prothèses (ex : prothèses bioniques, interface cerveau-robot). Utilisé pour étudier des troubles du mouvement (comme dans le cas de la maladie de Parkinson)."
            },
            {
              name: "Avantages",
              details:
                "Très précis (peut capter des signaux neuronaux profonds). Utile pour les prothèses neuronales et la rééducation neuromusculaire. Excellente résolution spatiale et temporelle."
            },
            {
              name: "Inconvénients",
              details:
                "Chirurgie invasive pour implanter les électrodes. Risque de réaction inflammatoire du cerveau. Durée limitée (l’implantation n’est pas permanente)."
            }
          ]
        },
        { 
          name: "Électrodes intracorticales (e.g., Neuralink)",
          details:
            "Pour comprendre les détails de ce type de capteurs, cliquez sur les noeuds enfants",
          children: [
            {
              name: "Principe de fonctionnement",
              details:
                "Utilise des fils ultrafins (micro-électrodes) insérés dans le cortex cérébral. Ces électrodes détectent l’activité électrique des neurones et envoient les informations vers un dispositif externe (implants sans fil ou puces sous la peau). L’objectif est de créer une interface cerveau-ordinateur pour communiquer ou contrôler des dispositifs externes via la pensée."
            },
            {
              name: "Position sur le cerveau",
              image: "./images/neuralink.png",
              details:
                "Emplacement des électrodes intracorticales de Neuralink dans le cortex cérébral. (avec évolution, avec cables visibles en 2020 et sans cables en 2021)"
            },
            {
              name: "Caractéristiques techniques",
              details:
                "Micro-électrodes ultrafines (réduisent les risques de rejet ou d’inflammation). Transmission sans fil des données vers un boîtier externe. Grande précision et résolutions élevées. Capacité d’interagir avec des dispositifs externes (ex : prothèses bioniques)."
            },
            {
              name: "Applications",
              details:
                "Prothèses neuronales (contrôler des membres artificiels par la pensée). Communication pour personnes paralysées (interface cerveau-ordinateur). Neurostimulation (traiter les troubles neurologiques comme Parkinson ou dépression). Amélioration cognitive et sensorielle."
            },
            {
              name: "Avantages",
              details:
                "Interface cerveau-ordinateur avancée. Permet des applications de prothèses très précises. Robot chirurgical minimisant l'invasivité."
            },
            {
              name: "Inconvénients",
              details:
                "Chirurgie invasive pour l’implantation des électrodes. Risques à long terme (inflammation, rejet, complication). Technologie expérimentale (en développement)."
            }
          ]
        },
      ],
    },
    {
      name: "Capteurs miniaturisés (non-invasifs)",
      details:
        "Les capteurs miniaturisés sont des dispositifs sans fil et non invasifs qui peuvent être injectés dans le cerveau pour mesurer l'activité neuronale. Ils sont utilisés pour des applications de neurostimulation, de surveillance des pathologies neurologiques et d'interfaces cerveau-ordinateur.",
      children: [
        { 
          name: "Micro-capteurs sans fil (e.g., Neural Dust)",
          details:
            "Pour comprendre les détails de ce type de capteurs, cliquez sur les noeuds enfants",
          children: [
            {
              name: "Principe de fonctionnement",
              details:
                "Microscopiques capteurs sans fil implantés dans le tissu cérébral, utilisant des ondes ultrasons pour se transmettre des données vers des récepteurs externes. Ces capteurs sont suffisamment petits pour être injectés par aiguille et peuvent être utilisés pour mesurer l'activité neuronale de manière très discrète et non-invasive après implantation."
            },
            {
              name: "Position sur le cerveau",
              image: "./images/dust.png",
              details:
                "Emplacement des micro-capteurs Neural Dust dans le cerveau."
            },
            {
              name: "Caractéristiques techniques",
              details:
                "Microscopiques : les capteurs sont de l’ordre du micromètre, suffisamment petits pour être injectés dans le cerveau. Sans fil : utilisent des ondes ultrasonores pour transmettre des données, éliminant ainsi le besoin de câblage. Biocompatibles : conçus pour minimiser l'inflammation et l'irritation du tissu cérébral."
            },
            {
              name: "Applications",
              details:
                "Mesure de l'activité neuronale à long terme, pour des applications de neurostimulation ou d'analyse cérébrale. Interface cerveau-ordinateur pour des utilisateurs ayant des prothèses neuronales. Surveillance des pathologies neurologiques : enregistrement des signaux neuronaux pour des études sur l’épilepsie, Parkinson, etc."
            },
            {
              name: "Avantages",
              details:
                "Sans fil et discrets, adaptés à des usages à long terme. Minimisation de l'invasivité, car l'implantation nécessite seulement des techniques d'injection peu invasives. Possibilité de capturer des signaux neuronaux à long terme, même dans des environnements naturels."
            },
            {
              name: "Inconvénients",
              details:
                "Limité en termes de résolution par rapport à des capteurs intracorticaux comme Neuralink. Dépendance aux ultrasons, ce qui peut rendre la précision et la transmission de données plus compliquées à certaines échelles."
            }
          ],
        },
        { 
          name: "Simulation lumineuse des neurones (e.g., Optogénique)",
          details:
            "Pour comprendre les détails de ce type de capteurs, cliquez sur les noeuds enfants",
          children: [
            {
              name: "Principe de fonctionnement",
              details:
                "La stimulation optogénétique consiste à utiliser de la lumière pour activer ou inhiber des neurones spécifiquement modifiés à l’aide de protéines photosensibles. Cette technique est surtout utilisée pour des expériences de recherche, mais elle n’est pas directement un capteur, car elle permet de contrôler l’activité neuronale plutôt que de la mesurer. Les neurones modifiés répondent à la lumière d’une manière qui permet de stimuler ou inhiber leur activité, ce qui permet un contrôle précis et ciblé des circuits neuronaux."
            },
            {
              name: "Position sur le cerveau",
              image: "./images/optogenique.png",
              details:
                "Emplacement des fibres optiques pour la stimulation optogénétique."
            },
            {
              name: "Caractéristiques techniques",
              details:
                "Fibres optiques miniaturisées qui délivrent de la lumière pour activer/inhiber des neurones spécifiques. Protéines photosensibles modifiées génétiquement et introduites dans les neurones pour les rendre sensibles à certaines longueurs d’onde lumineuses. L’utilisation de la lumière pour contrôler l’activité neuronale permet une précision extrême dans l’activation de zones très spécifiques du cerveau."
            },
            {
              name: "Applications",
              details:
                "Recherche sur le cerveau : utilisé dans des expériences pour comprendre la dynamique cérébrale et les circuits neuronaux. Contrôle du comportement neuronal : pour étudier des comportements spécifiques ou des pathologies comme l’épilepsie, la dépression, etc. Interfaces cerveau-ordinateur avancées où des circuits spécifiques sont contrôlés à l’aide de la lumière."
            },
            {
              name: "Avantages",
              details:
                "Précision incroyable dans la stimulation de zones neuronales très spécifiques. Permet d’étudier des réactions cérébrales en temps réel et dans des environnements contrôlés. Non-invasive une fois les neurones modifiés (pas de câblage, pas de contact direct avec les neurones)."
            },
            {
              name: "Inconvénients",
              details:
                "Nécessite une modification génétique des neurones pour introduire les protéines photosensibles. La chirurgie et les implants nécessaires peuvent rendre la technique complexe à mettre en œuvre en dehors des milieux de recherche. Ce n’est pas un capteur mais un outil de stimulation, donc il n’enregistre pas les signaux neuronaux mais les manipule."
            }
          ]
        },
      ],
    },
  ],
};

function updateNodeTextVisibility(zoomLevel, targetNode = null, depth = 0) {
  d3.selectAll('.node text')
    .style('opacity', function (d) {
      if (targetNode && d === targetNode) {
        return 1;
      }
      if (zoomLevel === 1 && d.depth <= 1) {
        return 1;
      } else if (zoomLevel === 3) {
        if (d.depth === depth || depth === 3 && d.depth === 2 || d.depth === depth + 1) {
          return 1;
        }
      }
      return 0;
    });
}

const getNodeColor = (depth) => {
  const maxDepth = 4;
  const intensity = 255 - (depth / maxDepth) * 200;
  return `rgb(${intensity}, ${intensity}, 255)`;
};

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select("svg")
.attr("width", width)
.attr("height", 0.75 * height)
.attr("viewBox", [-width / 2, -height / 2, width, height]);

const g = svg.append("g");

const zoom = d3.zoom()
  .scaleExtent([1, 5])
  .on("zoom", (event) => {
    g.attr("transform", event.transform);
  });

svg.call(zoom).on("wheel.zoom", null);
svg.on("dblclick.zoom", null);

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

let selectedNode = null;

nodes
  .append("circle")
  .attr("r", (d) => 20 - d.depth * 4)
  .attr("fill", (d) => getNodeColor(d.depth))
  .attr("stroke", "#555")
  .attr("stroke-width", 2)
  .on("mouseover", function () {
      d3.select(this).transition().duration(5).attr("r", 25);
  })
  .on("mouseout", function () {
      d3.select(this).transition().duration(5).attr("r", (d) => 20 - d.depth * 4);
  })
  .on("click", (event, d) => {
    const clickedCircle = d3.select(event.currentTarget);

    if (selectedNode === d) {
        clickedCircle.attr("fill", getNodeColor(d.depth));
        selectedNode = null;
    } else {
        if (selectedNode) {
            d3.selectAll(".node circle").each(function (nodeData) {
                if (nodeData === selectedNode) {
                    d3.select(this).attr("fill", getNodeColor(nodeData.depth));
                }
            });
        }
        clickedCircle.attr("fill", "green");
        selectedNode = d;
    }

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
        .style("color", "#e0f7fa");
    } else {
      detailsDiv.append("p").text("Pas de détails disponibles.");
    }
  });

nodes
.append("text")
.attr("x", (d) => {
  if ((d.x * 180) / Math.PI === 180) {
    return 0;
  } else if (d.depth === 4) {
    return 10;
  }
  return d.x < Math.PI ? 25 : -25;
})
.attr("y", (d) => ((d.x * 180) / Math.PI === 180 ? -20 : 0))
.attr("dy", "0.31em")
.style("text-anchor", (d) =>
  (d.x * 180) / Math.PI === 180 ? "middle" : d.x < Math.PI ? "start" : "end"
)
.attr("transform", (d) => {
  const angle = (d.x * 180) / Math.PI - 90;
  if ((d.x * 180) / Math.PI === 180 || d.depth === 0 || d.depth === 4) {
    return null;
  }
  return `rotate(${angle > 90 ? angle - 180 : angle})`;
})
.text((d) => d.data.name)
.style("font-size", "12px")
.style("font-family", "Arial")
.style("opacity", 0)
.style("pointer-events", "none")
.clone(true)
.lower();

let isZoomed = false;
let depth = 0;

d3.selectAll('.node')
  .on('click', function (event, d) {
    if (isZoomed && d === targetNode) {
      const resetTransform = d3.zoomIdentity.translate(0, 0).scale(1);
      svg.transition().duration(750).call(zoom.transform, resetTransform);
      isZoomed = false;
      updateNodeTextVisibility(1);
      targetNode = null;
    } else {
      const [x, y] = radialPoint(d.x, d.y);
      const transform = d3.zoomIdentity
        .translate((2 * (- x)), (3 * (- y)))
        .scale(3);
      svg.transition().duration(750).call(zoom.transform, transform);
      isZoomed = true;
      targetNode = d;
      depth = d.depth;
      updateNodeTextVisibility(3, d, depth);
    }    
  }); 

updateNodeTextVisibility(1);