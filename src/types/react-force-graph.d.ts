declare module 'react-force-graph-2d' {
  import { Component } from 'react';

  interface GraphData {
    nodes: any[];
    links: any[];
  }

  interface ForceGraphProps {
    graphData: GraphData;
    nodeLabel?: string | ((node: any) => string);
    nodeColor?: string | ((node: any) => string);
    nodeRelSize?: number;
    linkWidth?: number;
    linkColor?: string | ((link: any) => string);
    backgroundColor?: string;
    width?: number;
    height?: number;
    onNodeClick?: (node: any) => void;
    nodeCanvasObject?: (node: any, ctx: CanvasRenderingContext2D, globalScale: number) => void;
    ref?: any;
    d3Force?: (forceName: string, forceInstance: any) => void;
  }

  export default class ForceGraph2D extends Component<ForceGraphProps> {}
}