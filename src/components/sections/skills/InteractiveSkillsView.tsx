import { FC, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { SkillNode, SkillLink } from '../../../types/skills';

interface InteractiveSkillsViewProps {
  nodes: SkillNode[];
  links: SkillLink[];
  className?: string;
  onNodeClick?: (nodeId: string) => void;
}

interface SimulationNode extends d3.SimulationNodeDatum {
  id: string;
  group: string;
  x?: number;
  y?: number;
}

interface SimulationLink extends d3.SimulationLinkDatum<SimulationNode> {
  source: string | SimulationNode;
  target: string | SimulationNode;
  type: string;
  value: number;
}

const getNodeSize = (projects: number, implementations: number) => {
  // Réduire considérablement la taille des nœuds
  return Math.sqrt(projects * implementations) * 0.6 + 3;
};

const InteractiveSkillsView: FC<InteractiveSkillsViewProps> = ({
  nodes,
  links,
  className,
  onNodeClick
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    const container = svgRef.current.parentElement;
    if (!container) return;

    const width = container.clientWidth;
    const height = Math.min(window.innerHeight * 0.7, width * 0.6);

    const svg = d3.select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .attr("preserveAspectRatio", "xMidYMid meet");

    // Validation des liens
    const validLinks = links.filter((link: SkillLink) => {
      const sourceExists = nodes.some(n => n.id === link.source);
      const targetExists = nodes.some(n => n.id === link.target);
      return sourceExists && targetExists;
    });

    // Create the simulation
    const simulation = d3.forceSimulation(nodes as SimulationNode[])
      .force("link", d3.forceLink(validLinks).id((d: any) => d.id).distance(80))
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("x", d3.forceX().strength(0.1))
      .force("y", d3.forceY().strength(0.1));

    // Add arrow markers
    svg.append("defs").selectAll("marker")
      .data(['dependency', 'integration', 'complementary', 'core'])
      .join("marker")
      .attr("id", d => `arrow-${d}`)
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 15)
      .attr("refY", 0)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      .attr("fill", d => {
        switch (d) {
          case 'dependency': return "#fbbf24";
          case 'integration': return "#22c55e";
          case 'complementary': return "#818cf8";
          case 'core': return "#f43f5e";
          default: return "#374151";
        }
      })
      .attr("d", "M0,-5L10,0L0,5");

    // Create the links
    const link = svg.append("g")
      .selectAll("line")
      .data(validLinks)
      .join("line")
      .attr("stroke", (d: SimulationLink) => {
        switch (d.type) {
          case "dependency": return "#fbbf24";
          case "integration": return "#22c55e";
          case "complementary": return "#818cf8";
          case "core": return "#f43f5e";
          default: return "#374151";
        }
      })
      .attr("stroke-width", (d: SimulationLink) => d.value)
      .attr("stroke-opacity", 0.6)
      .attr("marker-end", (d: SimulationLink) => `url(#arrow-${d.type})`);

    // Create node groups
    const node = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .call(d3.drag<any, SimulationNode>()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended))
      .on("click", (event, d: SimulationNode) => {
        if (onNodeClick) {
          event.stopPropagation();
          onNodeClick(d.id);
        }
      });

    // Add background circles
    node.append("circle")
      .attr("r", (d: SkillNode) => getNodeSize(d.metrics.projects, d.metrics.implementations) + 2)
      .attr("fill", "rgba(0, 0, 0, 0.3)")
      .attr("stroke", "none");

    // Add main circles
    node.append("circle")
      .attr("r", (d: SkillNode) => getNodeSize(d.metrics.projects, d.metrics.implementations))
      .attr("fill", (d: SkillNode) => {
        switch (d.group) {
          case "Frontend": return "#3b82f6";
          case "Backend": return "#10b981";
          case "AI": return "#8b5cf6";
          default: return "#6b7280";
        }
      })
      .attr("stroke", "#fff")
      .attr("stroke-width", 1)
      .attr("stroke-opacity", 0.8)
      .attr("cursor", "pointer");

    // Add labels
    node.append("text")
      .text((d: SkillNode) => d.id)
      .attr("x", (d: SkillNode) => getNodeSize(d.metrics.projects, d.metrics.implementations) + 3)
      .attr("y", 4)
      .attr("fill", "white")
      .style("font-size", "10px")
      .style("font-weight", "500")
      .style("text-shadow", "1px 1px 2px rgba(0,0,0,0.8)")
      .style("pointer-events", "none");

    // Add tooltips
    node.append("title")
      .text((d: SkillNode) => {
        const metrics = d.metrics;
        return [
          `${d.id} (${d.group}/${d.subGroup})`,
          `Projets: ${metrics.projects}`,
          `Implémentations: ${metrics.implementations}`,
          `Complexité: ${'⭐'.repeat(metrics.complexity)}`,
          `Types: ${metrics.usageTypes.join(', ')}`
        ].join('\n');
      });

    // Update positions
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    // Add zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 4])
      .on("zoom", (event) => {
        svg.selectAll("g").attr("transform", event.transform);
      });

    svg.call(zoom);

    // Drag functions
    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, [nodes, links, onNodeClick]);

  return (
    <div className={className}>
      <svg
        ref={svgRef}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent'
        }}
      />
    </div>
  );
};

export default InteractiveSkillsView;