const treeData = {
    name: 'Trời',
    children: [
      {
        name: "Độ ẩm",
        value: "Nắng",
        children: [{ name: "Có", value: "bình thường" },
        { name: "Không", value: "Cao" }
        ]
      },
      {
        name: "Gió", value:"mưa",
        children: [
          { name: "Có", value: "Mạnh" },
          { name: "Không", value: "Yếu" }
        ]
      },
      { name: "Có", value: "U ám",children: [
        
      ]
      },
      { name: "Ko", value: "U ám",children: [
        
      ]
      },
      { name: "ádas", value: "U ám",children: [
        
      ]
      },
      { name: "Cadadó", value: "U ám",children: [
        
      ]
      },
    ]
  };
  
  
  
  
  // Create a tree layout
  const treeLayout = d3.tree().size([500, 400]);
  
  // Create a root node for the tree
  const root = d3.hierarchy(treeData);
  
  // Assign coordinates to each node
  treeLayout(root);
  
  // Create the SVG container
  const svg = d3.select('#tree-svg')
    .append('svg')
    .attr('width', 1000)
    .attr('height', 1000)
    .append('g')
    .attr('transform', 'translate(50, 50)')
  
  
  
  // Draw links between nodes
  svg.selectAll('.link')
    .data(root.links())
    .enter()
    .append('path')
    .attr('class', 'link')
    .attr('d', d => `M${d.target.y},${d.target.x}C${d.target.y},${(d.target.x + d.source.x) / 2} ${d.source.y},${(d.target.x + d.source.x) / 2} ${d.source.y},${d.source.x}`);
  
  svg.selectAll('.link-label')
    .data(root.links())
    .enter()
    .append('text')
    .attr('class', 'link-label')
    .attr('x', d => (d.source.y + d.target.y) / 2)
    .attr('y', d => (d.source.x + d.target.x) / 2)
    .attr('dy', -5)
    .attr('text-anchor', 'middle')
    .text(d => d.target.data.value);
  // Draw nodes
  const nodes = svg.selectAll('.node')
    .data(root.descendants())
    .enter()
    .append('g')
    .attr('class', 'node')
    .attr('transform', d => `translate(${d.y},${d.x})`);
  
  nodes.append('circle')
    .attr('r', 10);
  
  // Add labels to nodes
  nodes.append('text')
    .attr('dy', '.35em')
    .attr('x', d => d.children ? -13 : 13)
    .style('text-anchor', d => d.children ? 'end' : 'start')
    .text(d => {
      return d.data.name;
    });