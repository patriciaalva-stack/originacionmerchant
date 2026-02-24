import axios, { AxiosInstance } from 'axios';

/**
 * Cliente de Figma API para interactuar con archivos de Figma/FigJam
 */
export class FigmaAPI {
  private client: AxiosInstance;
  private fileKey: string;

  constructor(accessToken: string, fileKey: string) {
    this.fileKey = fileKey;
    this.client = axios.create({
      baseURL: 'https://api.figma.com/v1',
      headers: {
        'X-Figma-Token': accessToken,
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Obtiene información del archivo de Figma
   */
  async getFile() {
    try {
      const response = await this.client.get(`/files/${this.fileKey}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener archivo de Figma:', error);
      throw error;
    }
  }

  /**
   * Obtiene los nodos de una página específica
   */
  async getNodes(nodeIds: string[]) {
    try {
      const response = await this.client.get(`/files/${this.fileKey}/nodes`, {
        params: {
          ids: nodeIds.join(','),
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener nodos:', error);
      throw error;
    }
  }

  /**
   * Crea un comentario en el archivo
   */
  async createComment(message: string, clientMeta: { x: number; y: number }) {
    try {
      const response = await this.client.post(`/files/${this.fileKey}/comments`, {
        message,
        client_meta: clientMeta,
      });
      return response.data;
    } catch (error) {
      console.error('Error al crear comentario:', error);
      throw error;
    }
  }

  /**
   * Obtiene las versiones del archivo
   */
  async getVersions() {
    try {
      const response = await this.client.get(`/files/${this.fileKey}/versions`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener versiones:', error);
      throw error;
    }
  }

  /**
   * Exporta un nodo como imagen
   */
  async exportNode(nodeId: string, format: 'png' | 'jpg' | 'svg' | 'pdf' = 'png', scale: number = 1) {
    try {
      const response = await this.client.get(`/images/${this.fileKey}`, {
        params: {
          ids: nodeId,
          format,
          scale,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error al exportar nodo:', error);
      throw error;
    }
  }
}

/**
 * Tipos de nodos en FigJam para flowcharts
 */
export interface FlowchartNode {
  id?: string;
  name: string;
  type: 'RECTANGLE' | 'ELLIPSE' | 'TEXT' | 'CONNECTOR';
  x: number;
  y: number;
  width: number;
  height: number;
  text?: string;
  fills?: Array<{ type: string; color: { r: number; g: number; b: number; a: number } }>;
  strokes?: Array<{ type: string; color: { r: number; g: number; b: number; a: number } }>;
}

/**
 * Utilidad para crear estructuras de flowchart
 */
export class FlowchartBuilder {
  private nodes: FlowchartNode[] = [];
  private currentX = 100;
  private currentY = 100;
  private spacing = 150;

  /**
   * Añade un nodo de inicio
   */
  addStartNode(text: string): FlowchartNode {
    const node: FlowchartNode = {
      name: 'Start',
      type: 'ELLIPSE',
      x: this.currentX,
      y: this.currentY,
      width: 120,
      height: 60,
      text,
      fills: [{ type: 'SOLID', color: { r: 0.2, g: 0.8, b: 0.4, a: 1 } }],
    };
    this.nodes.push(node);
    this.currentY += this.spacing;
    return node;
  }

  /**
   * Añade un nodo de proceso
   */
  addProcessNode(text: string): FlowchartNode {
    const node: FlowchartNode = {
      name: 'Process',
      type: 'RECTANGLE',
      x: this.currentX,
      y: this.currentY,
      width: 150,
      height: 80,
      text,
      fills: [{ type: 'SOLID', color: { r: 0.2, g: 0.4, b: 0.9, a: 1 } }],
    };
    this.nodes.push(node);
    this.currentY += this.spacing;
    return node;
  }

  /**
   * Añade un nodo de decisión
   */
  addDecisionNode(text: string): FlowchartNode {
    const node: FlowchartNode = {
      name: 'Decision',
      type: 'RECTANGLE',
      x: this.currentX,
      y: this.currentY,
      width: 120,
      height: 120,
      text,
      fills: [{ type: 'SOLID', color: { r: 0.9, g: 0.7, b: 0.2, a: 1 } }],
    };
    this.nodes.push(node);
    this.currentY += this.spacing;
    return node;
  }

  /**
   * Añade un nodo de fin
   */
  addEndNode(text: string): FlowchartNode {
    const node: FlowchartNode = {
      name: 'End',
      type: 'ELLIPSE',
      x: this.currentX,
      y: this.currentY,
      width: 120,
      height: 60,
      text,
      fills: [{ type: 'SOLID', color: { r: 0.9, g: 0.2, b: 0.2, a: 1 } }],
    };
    this.nodes.push(node);
    this.currentY += this.spacing;
    return node;
  }

  /**
   * Obtiene todos los nodos creados
   */
  getNodes(): FlowchartNode[] {
    return this.nodes;
  }

  /**
   * Reinicia el builder
   */
  reset(): void {
    this.nodes = [];
    this.currentX = 100;
    this.currentY = 100;
  }
}

export default FigmaAPI;
